import React, { useCallback, useEffect, useState } from "react";

const useAuth = (props) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const [role, setRole] = useState(null);
	const [tokenExpiration, setTokenExpiration] = useState(null);

	const login = useCallback((user, token, role, expiration) => {
		setUser(user);
		setToken(token);
		setRole(role);

		const tokenExp =
			expiration || new Date(new Date().getTime() + 1000 * 60 * 60);
		setTokenExpiration(tokenExp);

		localStorage.setItem(
			"userData",
			JSON.stringify({
				user,
				token,
				role,
				expiration: tokenExp.toISOString(),
			})
		);
	}, []);

	const logout = useCallback(() => {
		setUser(null);
		setToken(null);
		setRole(null);
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
				new Date(storedData.expiration)
			);
		}
	}, [login]);

	return { user, token, role, login, logout };
};

export default useAuth;
