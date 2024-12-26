import User from "../models/userModel.js";
import axios from "axios";
import Reg from "../models/UserDetails.js";

// Generate OTP
const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

// Send OTP to Mobile
const sendOtpMobileNumber = async (mobile_number, otp) => {
  try {
    const response = await axios.post(
      "https://www.fast2sms.com/dev/bulkV2",
      {
        variables_values: otp,
        route: "otp",
        numbers: mobile_number,
      },
      {
        headers: {
          authorization: process.env.OTP_SENDER_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error sending OTP:", error.response?.data || error.message);
    throw new Error("Failed to send OTP");
  }
};

// Login or Register and Send OTP
export const loginOrRegister = async (req, res) => {
  const { phone } = req.body;

  try {
    let user = await User.findOne({ phone });

    if (!user) {
      user = new User({ phone });
      await user.save();
    }

    const otp = generateOTP();
    const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000); // OTP valid for 5 minutes

    user.otp = otp;
    user.otpExpiresAt = otpExpiresAt;
    await user.save();

    await sendOtpMobileNumber(phone, otp);

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const verifyOtp = async (req, res) => {
  const { phone, otp } = req.body;

  try {
    const user = await User.findOne({ phone });

    if (!user) return res.status(400).json({ message: "User not found" });

    if (!user.isRegistered) {
      if (user.otp !== otp || new Date() > user.otpExpiresAt) {
        return res.status(400).json({ message: "Invalid or expired OTP" });
      }

      user.otp = undefined;
      user.otpExpiresAt = undefined;
      user.isRegistered = true;
      await user.save();

      return res
        .status(200)
        .json({
          message: "OTP verified, proceed to register",
          isRegistered: false,
        });
    } else {
      return res
        .status(200)
        .json({
          message: "User already registered, proceed to home",
          isRegistered: true,
        });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

  export const register = async (req, res) => {
  const { firstName, lastName, email, phone, pincode } = req.body;
  console.log(firstName, lastName, email, phone, pincode);

  if (!firstName || !lastName || !email || !phone || !pincode) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newUser = new Reg({ firstName, lastName,email,phone,pincode });
    const RegUser = newUser.save();
    res.status(201).json({ message: "User registered successfully",RegUser, redirect: "/home" });

  } catch (error) {
    res.status(500).json({ message: "Error saving user", error });
  }
};
