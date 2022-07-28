import React from "react";

import { Grid, Text, Box, Flex, Spacer } from "@chakra-ui/react";
import { RiUserReceivedFill } from "react-icons/ri";

import DashboardWidgetItem from "./DashboardWidgetItem";

const DashboardWidgets = (props) => {
	return (
		<Grid
			gap={2}
			templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
			marginTop={2}
		>
			<DashboardWidgetItem
				accentColor={"teal"}
				title={"Tickets Taken"}
				amount={props.progress}
				icon={<RiUserReceivedFill />}
			/>
			<DashboardWidgetItem
				accentColor={"orange.500"}
				title={"Tickets Open"}
				amount={props.open}
				icon={<RiUserReceivedFill />}
			/>
			<DashboardWidgetItem
				accentColor={"green.500"}
				title={"Total Tickets"}
				amount={props.total}
				icon={<RiUserReceivedFill />}
			/>
			<DashboardWidgetItem
				accentColor={"red.500"}
				title={"Tickets Closed"}
				amount={props.closed}
				icon={<RiUserReceivedFill />}
			/>
		</Grid>
	);
};

export default DashboardWidgets;
