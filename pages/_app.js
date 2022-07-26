import Router from "next/router";
import "../styles/globals.css";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Axios from "axios";

import RouteGuard from "../components/routeguard/RouteGuard";

// import useAuth from "../hooks/auth-hook";
import { AuthContextProvider } from "../contexts/auth-context";
import { useRouter } from "next/router";
import { useEffect } from "react";

Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const colors = {
	severity: {
		low: "#2F855A",
		medium: "#D69E2E",
		high: "red.600",
		critical: "#000000",
	},
};

const fonts = {
	body: "Inter, system-ui, sans-serif",
	heading: "Inter, system-ui, sans-serif",
};

const theme = extendTheme({ colors, fonts });

function MyApp({ Component, pageProps }) {
	return (
		<AuthContextProvider>
			<ChakraProvider resetCSS theme={theme}>
				<RouteGuard>
					<Component {...pageProps} />
				</RouteGuard>
			</ChakraProvider>
		</AuthContextProvider>
	);
}

export default MyApp;
