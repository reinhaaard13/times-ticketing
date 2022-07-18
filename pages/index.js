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
			{props.tickets ? (
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
			) : (
				<Box className="container" p={2}>
					<ErrorFallback error={props.error} />
				</Box>
			)}
		</SideBarLayout>
	);
};

export async function getServerSideProps() {
	let tickets, err;
	try {
		const response = await axios.get("http://localhost:3000/api/tickets", {
			headers: {
				Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlJlaW5oYXJkIEtldmluIiwiZW1haWwiOiJyZWluaGFyZGtldmluLnJrQGdtYWlsLmNvbSJ9.EU26Z3dltXlwHxjJWi1IGfMilwLwURwtG23qdGc5-u0`,
			},
		});
		tickets = response.data;
	} catch (error) {
		err = { ...error.response.data, status: error.response.status };
		// console.log(err);
		tickets = null;
	}
	// console.log(err);

	return {
		props: {
			tickets,
			error: err ? err : null,
		},
	};
}

export default DashboardPage;
