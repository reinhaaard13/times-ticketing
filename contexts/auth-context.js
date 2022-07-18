import React, {
	createContext,
	useContext,
	useState,
	useCallback,
	useEffect,
} from "react";

const AuthContext = createContext({
	isLoggedIn: false,
	user: null,
	token: null,
	role: null,
	login: () => {},
	logout: () => {},
});

const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const [role, setRole] = useState(null);
	const [privileges, setPrivileges] = useState([]);
	const [tokenExpiration, setTokenExpiration] = useState(null);

	const login = useCallback((user, token, role, privileges, expiration) => {
		setUser(user);
		setToken(token);
		setRole(role);
		setPrivileges(privileges);

		const tokenExp =
			expiration || new Date(new Date().getTime() + 1000 * 60 * 60);
		setTokenExpiration(tokenExp);

		localStorage.setItem(
			"userData",
			JSON.stringify({
				user,
				token,
				role,
				privileges,
				expiration: tokenExp.toISOString(),
			})
		);
	}, []);

	const logout = useCallback(() => {

		setUser(null);
		setToken(null);
		setRole(null);
		setPrivileges([]);
		setTokenExpiration(null);

		localStorage.removeItem("userData");
	}, []);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("userData"));

		if (storedData?.token && new Date(storedData.expiration) > new Date()) {
			login(
				storedData.user,
				storedData.token,
				storedData.role,
				storedData.privileges,
				new Date(storedData.expiration)
			);
		}
	}, [login]);

	return (
		<AuthContext.Provider
			value={{ user, login, logout, role, privileges, token, isLoggedIn: !!token }}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthContextProvider, useAuth };
