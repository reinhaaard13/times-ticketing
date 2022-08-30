import React, {
	createContext,
	useContext,
	useState,
	useCallback,
	useEffect,
} from "react";

import axios from "axios";
import AuthService from "../services/auth.service";

const AuthContext = createContext({
	isLoggedIn: false,
	user: null,
	token: null,
	refreshToken: null,
	role: null,
	login: () => {},
	logout: () => {},
});

const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const [refreshToken, setRefreshToken] = useState(null);
	const [role, setRole] = useState(null);
	const [privileges, setPrivileges] = useState([]);
	// const [tokenExpiration, setTokenExpiration] = useState(null);

	const login = useCallback(
		(user, token, refreshToken, role, privileges, expiration) => {
			setUser(user);
			setToken(token);
			setRefreshToken(refreshToken);
			setRole(role);
			setPrivileges(privileges);

			// const tokenExp =
			// 	expiration || new Date(new Date().getTime() + 1000 * 60 * 60);
			// setTokenExpiration(tokenExp);

			localStorage.setItem(
				"userData",
				JSON.stringify({
					user,
					role,
					privileges,
					// expiration: tokenExp.toISOString(),
				})
			);
			localStorage.setItem("token", token);
			localStorage.setItem("refreshToken", refreshToken);
		},
		[]
	);

	const logout = useCallback(() => {
		setUser(null);
		setToken(null);
		setRefreshToken(null);
		setRole(null);
		setPrivileges([]);
		// setTokenExpiration(null);

		localStorage.removeItem("userData");
		localStorage.removeItem("token");
		localStorage.removeItem("refreshToken");
	}, []);

	useEffect(() => {
		const storedUserData = JSON.parse(localStorage.getItem("userData"));
		const token = localStorage.getItem("token");
		const refreshToken = localStorage.getItem("refreshToken");

		if (storedUserData && token && refreshToken) {
			login(
				storedUserData.user,
				token,
				refreshToken,
				storedUserData.role,
				storedUserData.privileges
			);
		}
		// if (storedData?.token && new Date(storedData.expiration) > new Date()) {
		// 	login(
		// 		storedData.user,
		// 		storedData.token,
		// 		storedData.refreshToken,
		// 		storedData.role,
		// 		storedData.privileges,
		// 		new Date(storedData.expiration)
		// 	);
		// }
	}, [login]);

	useEffect(() => {
		const interceptor = axios.interceptors.response.use(
			(response) => response,
			async (error) => {
				const originalRequest = error.config;

				// Avoid infinite loop
				if (error.response.status === 401 && error.config.url === "/api/users/refreshToken") {
					logout();
					return Promise.reject(error);
				}

				if (error.response.status === 401) {
					const response = await AuthService.refreshToken(refreshToken);
					if (response.status === 200) {
						localStorage.setItem("token", response.data.token);
						setToken(response.data.token);

						originalRequest.headers["Authorization"] = `Bearer ${response.data.token}`;
						return axios(originalRequest);
					}
				}

				return Promise.reject(error);
			}
		);
		// console.log(axios.interceptors);

		return () => {
			axios.interceptors.response.eject(interceptor);
		};
	}, [refreshToken, logout]);

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				logout,
				role,
				privileges,
				token,
				refreshToken,
				isLoggedIn: !!token,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthContextProvider, useAuth };
