import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../contexts/auth-context";

const PUBLIC_PATH = ["/auth"];
const ADMIN_PATH = ["/admin", "/subject", "/product"];

const RouteGuard = (props) => {
	const router = useRouter();
	const { isLoggedIn, user, token, role } = useAuth();
	const [authorized, setAuthorized] = useState(false);
	const [lastPath, setLastPath] = useState("");
	// console.log(router);

	useEffect(() => {
		if (!isLoggedIn && !PUBLIC_PATH.includes(router.pathname)) {
			setAuthorized(false)
			setLastPath(router.asPath);
			router.push("/auth");
		} else {
      setAuthorized(true)
    }

		if (isLoggedIn && PUBLIC_PATH.includes(router.pathname)) {
			router.push(lastPath ? lastPath : "/");
			// router.push("/");
		}
	}, [isLoggedIn, lastPath, router]);

	return authorized && props.children;
};

export default RouteGuard;
