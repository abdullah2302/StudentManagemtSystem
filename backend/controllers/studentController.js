import Student from "../models/Student.js";

///get students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error("❌ Error fetching students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// add new students
export const addStudent = async (req, res) => {
  try {
    const { name, rollNumber, course, department, contact } = req.body;
    const existing = await Student.findOne({ rollNumber });
    if (existing) {
      return res.status(400).json({ message: "Student already exists with this roll number" });
    }

    const student = new Student({ name, rollNumber, course, department, contact });
    await student.save();

    res.status(201).json(student);
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//update students
export const updateStudent = async (req, res) => {
  try {
    const { rollNumber } = req.params;
    const updates = req.body;

    const student = await Student.findOneAndUpdate({ rollNumber }, updates, {
      new: true,
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({
      success: true,
      message: "✅ Student updated successfully",
      student,
    });
  } catch (error) {
    console.error("❌ Error updating student:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//delete students
export const deleteStudent = async (req, res) => {
  try {
    const { rollNumber } = req.params;

    const student = await Student.findOneAndDelete({ rollNumber }); // ✅ correct field

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ message: "Server error while deleting student" });
  }
};