import api from "./api";

// ===== STUDENT API FUNCTIONS =====

// ✅ Get all students
export const getStudents = async () => {
  const response = await api.get("/students");
  return response.data;
};

// ✅ Add new student
export const addStudent = async (studentData) => {
  const response = await api.post("/students", studentData);
  return response.data;
};

// ✅ Update student by rollNumber
export const updateStudent = async (rollNumber, studentData) => {
  const response = await api.put(`/students/${rollNumber}`, studentData);
  return response.data;
};

// ✅ Delete student by rollNumber
export const deleteStudent = async (rollNumber) => {
  const response = await api.delete(`/students/${rollNumber}`);
  return response.data;
};