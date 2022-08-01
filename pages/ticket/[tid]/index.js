import React from "react";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/router";

import TicketDetail from "../../../components/ticket/TicketDetail";
import SideBarLayout from "../../../components/UI/SideBarLayout";

const fetcher = async (url) => {
	const response = await axios.get(url);
	return response.data;
}

const TicketDetailPage = (props) => {
	const { query } = useRouter();

	const { data } = useSWR(
		`/api/tickets/${query.tid}`,
		fetcher
	)
	return (
		<SideBarLayout>
			<div className="flex flex-col container px-2 mt-4">
				<TicketDetail ticket={data?.ticket} />
			</div>
		</SideBarLayout>
	);
};

export default TicketDetailPage;
