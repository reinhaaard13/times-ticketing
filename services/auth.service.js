import axios from "axios";

const login = async (user, password) => {
  return await axios.post("/api/users/login", {
		user,
		password,
	});
};

const refreshToken = async (token) => {
  return await axios.post("/api/users/refreshToken", {
    refreshToken: token,
  });
}

const AuthService = {
	login,
  refreshToken
};

export default AuthService;
