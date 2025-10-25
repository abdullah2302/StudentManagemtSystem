import api from "./api";

// 🔹 Get admin by email (for signup validation)
export const getAdminByEmail = async (email) => {
  try {
    const response = await api.get(`/admins/email/${email}`);
    return response.data;
  } catch (err) {
    if (err.response && err.response.status === 300) return null; // email not found
    throw err;
  }
};

// 🔹 Create new admin
export const createAdmin = async (adminData) => {
  const response = await api.post("/admins/register", adminData);
  return response.data;
};

// 🔹 Login admin
export const loginAdmin = async (email, password) => {
  const response = await api.post("/admins/login", { email, password });
  return response.data;
};
