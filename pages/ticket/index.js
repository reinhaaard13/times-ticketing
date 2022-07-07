import React from "react";

import { Text } from "@chakra-ui/react";

import Header from "../../components/UI/Header";
import SideBarLayout from "../../components/UI/SideBarLayout";
import TicketList from "../../components/ticket/TicketList";
import axios from "axios";

const TicketsPage = (props) => {
	return (
		<SideBarLayout>
			{/* <Header /> */}
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
				<TicketList {...props} />
			</div>
		</SideBarLayout>
	);
};

export async function getServerSideProps() {
	const response = await axios.get("http://localhost:3000/api/tickets");
	const tickets = response.data;

	return {
		props: {
			tickets
		},
	};
}

export default TicketsPage;
