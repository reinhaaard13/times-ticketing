import React, { useState, useRef } from "react";
import axios from "axios";
import useSWR from "swr";
import NProgress from "nprogress";
import { useAuth } from "../contexts/auth-context";

import { Container, Box, Heading, Flex } from "@chakra-ui/react";

import TicketContextProvider from "../contexts/ticket-context";
import TicketList from "../components/ticket/TicketList";
import SideBarLayout from "../components/UI/SideBarLayout";
import DashboardWidgets from "../components/dashboard/DashboardWidgets";

const DashboardPage = (props) => {
	const containerRef = useRef(null);

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
				<TicketContextProvider>
					<DashboardWidgets />
					<Flex
						marginTop={4}
						marginBottom={4}
						alignItems={"center"}
						justifyContent={"space-between"}
					>
						<Heading
							size={"md"}
							className="text-lime-500"
							fontWeight={"semibold"}
						>
							Ticket List
						</Heading>
					</Flex>
					<TicketList />
				</TicketContextProvider>
			</Box>
		</SideBarLayout>
	);
};

export default DashboardPage;
