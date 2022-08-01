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
				<TicketList />
			</div>
		</SideBarLayout>
	);
};

export default TicketsPage;
