import React from "react";

import { Box, Heading } from "@chakra-ui/react";

import SideBarLayout from "../../components/UI/SideBarLayout";
import DashboardWidgets from "../../components/dashboard/DashboardWidgets";

const DashboardPage = (props) => {
	return (
		<SideBarLayout>
			{/* <Header /> */}
			<Box className="container" p={2}>
				<Heading size={"lg"} className="text-lime-500" fontWeight={"semibold"}>
					Dashboard
				</Heading>
				<DashboardWidgets />
			</Box>
		</SideBarLayout>
	);
};

export default DashboardPage;
