import Admin from "../models/Admin.js";

//get adming uisng email
export const getAdminByEmail = async (req, res) => {
  try {
    const admin = await Admin.findOne({ email: req.params.email });
    if (!admin)
      return res.status(404).json({ message: "Admin not found" });
    res.json(admin);
  } catch (error) {
    console.error("Error fetching admin by email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//sigunp or registration for new admin
export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if already exists
    const adminCount = await Admin.countDocuments();
    if (adminCount >= 1) {
      return res
        .status(403)
        .json({ message: "Only one admin is allowed to register." });
    }

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin)
      return res.status(400).json({ message: "Email already registered" });

    // admin creation
    const newAdmin = new Admin({ name, email, password });
    await newAdmin.save();

    res.status(201).json({
      success: true,
      message: "Admin registered successfully",
      admin: newAdmin,
    });
  } catch (error) {
    console.error("Error registering admin:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//login admin
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email, password });
    if (!admin)
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });

    res.json({
      success: true,
      message: "Login successful",
      admin,
    });
  } catch (error) {
    console.error("Error logging in admin:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};