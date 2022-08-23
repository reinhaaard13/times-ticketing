import React from "react";
import Head from "next/head";

import { Text } from "@chakra-ui/react";

import TicketContextProvider from "../../contexts/ticket-context";
import SideBarLayout from "../../components/UI/SideBarLayout";
import TicketList from "../../components/ticket/TicketList";

const TicketsPage = (props) => {
	return (
		<>
			<Head>
				<title>All Tickets</title>
			</Head>
			<SideBarLayout>
				<div className="container px-1">
					<Text
						mt={5}
						mb={4}
						className="text-lime-500"
						fontSize={"2xl"}
						fontWeight={"semibold"}
					>
						Tickets
					</Text>
					<TicketContextProvider>
						<TicketList />
					</TicketContextProvider>
				</div>
			</SideBarLayout>
		</>
	);
};

export default TicketsPage;
