import express from "express";
import {
  getAdminByEmail,
  registerAdmin,
  loginAdmin,
} from "../controllers/adminController.js";

const router = express.Router();

router.get("/email/:email", getAdminByEmail);
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

export default router;