import React from "react";

import { Text } from "@chakra-ui/react";

import TicketDetail from "../../../components/ticket/TicketDetail";
import SideBarLayout from "../../../components/UI/SideBarLayout";
import Header from "../../../components/UI/Header";
import axios from "axios";

const TicketDetailPage = (props) => {
	return (
		<SideBarLayout>
			<div className="flex flex-col container px-2 mt-4">
        <TicketDetail ticket={props.ticket} />
			</div>
		</SideBarLayout>
	);
};

export async function getServerSideProps(context) {
	const { tid } = context.query;

	const response = await axios.get(`http://localhost:3000/api/tickets/${tid}`);
	const { ticket } = response.data;

	return {
		props: {
			ticket
		},
	};
}


export default TicketDetailPage;
