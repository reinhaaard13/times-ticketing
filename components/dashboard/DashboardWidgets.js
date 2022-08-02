import React from "react";

import { Grid } from "@chakra-ui/react";
import { RiUserReceivedFill } from "react-icons/ri";

import DashboardWidgetItem from "./DashboardWidgetItem";

const DashboardWidgets = ({stats}) => {

	return (
		<Grid
			gap={2}
			templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
			marginTop={2}
		>
			<DashboardWidgetItem
				accentColor={"teal"}
				title={"Tickets In Progress"}
				amount={stats.progress}
				icon={<RiUserReceivedFill />}
			/>
			<DashboardWidgetItem
				accentColor={"orange.500"}
				title={"Tickets Open"}
				amount={stats.open}
				icon={<RiUserReceivedFill />}
			/>
			<DashboardWidgetItem
				accentColor={"green.500"}
				title={"Total Tickets"}
				amount={stats.total}
				icon={<RiUserReceivedFill />}
			/>
			<DashboardWidgetItem
				accentColor={"red.500"}
				title={"Tickets Closed"}
				amount={stats.closed}
				icon={<RiUserReceivedFill />}
			/>
		</Grid>
	);
};

export default DashboardWidgets;
