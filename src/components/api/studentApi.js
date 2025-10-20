import api from"./api";
// ===== STUDENT API FUNCTIONS =====

export const getStudents = async () => {
    const response = await api.get("/students");
    return response.data;
  };
  
  export const addStudent = async (studentData) => {
    const response = await api.post("/students", studentData);
    return response.data;
  };
  export const updateStudent=async(id, studentData) =>
    {const response=await api.put(`/students/${id}`,studentData);
  return response.data;
};
  export const deleteStudent = async (id) => {
    const response = await api.delete(`/students/${id}`);
    return response.data;
  };
  