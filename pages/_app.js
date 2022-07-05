import "../styles/globals.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
	severity: {
		low: "#2F855A",
		medium: "#D69E2E",
		high: "red.600",
		critical: "#000000",
	},
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
