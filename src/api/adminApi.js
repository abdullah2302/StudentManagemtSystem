import api from"./api";
// ===== admin API FUNCTIONS =====

export const getAdminByEmail = async (email) => {
    const response = await api.get(`/admins?email=${email}`);
    return response.data;
  };
  
  export const createAdmin = async (adminData) => {
    const response = await api.post("/admins", adminData);
    return response.data;
  };
  
  export const loginAdmin = async (email, password) => {
    const response = await api.get(`/admins?email=${email}&password=${password}`);
    return response.data;
  };