import Router from "next/router";
import "../styles/globals.css";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

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
}

const theme = extendTheme({ colors, fonts });

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
