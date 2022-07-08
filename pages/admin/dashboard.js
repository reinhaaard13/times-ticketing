import React from "react";
import axios from "axios";

import { Container, Box, Heading } from "@chakra-ui/react";

import TicketList from "../../components/ticket/TicketList";
import SideBarLayout from "../../components/UI/SideBarLayout";
import DashboardWidgets from "../../components/dashboard/DashboardWidgets";

const DashboardPage = (props) => {
	return (
		<SideBarLayout>
			{/* <Header /> */}
			<Box className="container" p={2}>
				<Heading
					size={"lg"}
					className="text-lime-500"
					fontWeight={"semibold"}
					letterSpacing={'tight'}
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

export async function getServerSideProps() {
	const response = await axios.get("http://localhost:3000/api/tickets");
	const tickets = response.data;

	return {
		props: {
			tickets,
		},
	};
}

export default DashboardPage;
