import useSWR from "swr";

import axios from "axios";
import { useEffect } from "react";
import Router from "next/router";

const useUser = ({ redirectTo = "", redirectIfFound = false }) => {
	const { data, error } = useSWR("/api/users", (url) =>
		axios.get(url).then((res) => res.data)
	);

	useEffect(() => {
		if (!redirectTo) {
			return;
		}

		if (
			(redirectTo && !redirectIfFound && !data?.isLoggedIn) ||
			(redirectIfFound && data?.isLoggedIn)
		) {
      Router.push(redirectTo);
		}
	}, [data, redirectTo, redirectIfFound]);

	return {
		user: data,
		error,
		isLoading: !data && !error,
	};
};

export default useUser;
