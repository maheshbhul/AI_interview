import genToken from "../config/token.js";
import User from "../models/userModel.js";

export const googleAuth = async (req, res) => {

  try {

    const { name, email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {

      user = await User.create({
        name,
        email
      });

    }

    const token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(200).json({
      success: true,
      message: "Google authentication successful",
      user
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: `Google Auth Error: ${error.message}`
    });

  }

};

export const logOut = async (req, res) => {

  try {

    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "strict",
      secure: false
    });

    return res.status(200).json({
      success: true,
      message: "Logout successful"
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: `Logout Error: ${error.message}`
    });

  }

};