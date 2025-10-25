import express from "express";
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/", addStudent);
router.put("/:rollNumber", updateStudent);
router.delete("/:rollNumber", deleteStudent);

export default router;