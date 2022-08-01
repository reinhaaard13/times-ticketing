import React from "react";
import axios from "axios";

import { Container, Box, Heading, Flex } from "@chakra-ui/react";

import ErrorFallback from "../components/UI/ErrorFallback";
import TicketList from "../components/ticket/TicketList";
import SideBarLayout from "../components/UI/SideBarLayout";
import DashboardWidgets from "../components/dashboard/DashboardWidgets";

const DashboardPage = (props) => {
	return (
		<SideBarLayout>
			<Box className="container" p={2}>
				<Heading
					size={"lg"}
					className="text-lime-500"
					fontWeight={"semibold"}
					letterSpacing={"tight"}
				>
					Dashboard
				</Heading>
				<DashboardWidgets />
				<Heading
					size={"md"}
					marginTop={4}
					marginBottom={4}
					className="text-lime-500"
					fontWeight={"semibold"}
				>
					Ticket List
				</Heading>
				<TicketList {...props} />
			</Box>
		</SideBarLayout>
	);
};

export default DashboardPage;
