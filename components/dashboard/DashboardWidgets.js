import React from "react";
import NProgress from "nprogress";
import axios from "axios";

import useSWR from "swr";
import { Grid } from "@chakra-ui/react";
import { RiUserReceivedFill } from "react-icons/ri";

import { useAuth } from "../../contexts/auth-context";
import { useTicket } from "../../contexts/ticket-context";
import DashboardWidgetItem from "./DashboardWidgetItem";

const DashboardWidgets = () => {
	const { page, sortBy, sortOrder, filter } = useTicket();
	const { token } = useAuth();

	const { data } = useSWR(
		["/api/tickets", page, sortBy, sortOrder, filter],
		async (url) => {
			NProgress.start();
			const res = await axios.get(`${url}`, {
				params: {
					page: page,
					sortBy: sortBy,
					sortOrder: sortOrder,
					filter: filter,
				},
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			NProgress.done();
			return res.data;
		}
	);

	return (
		<Grid
			gap={2}
			templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
			marginTop={2}
		>
			<DashboardWidgetItem
				accentColor={"teal"}
				title={"Tickets In Progress"}
				amount={data?.stats?.progress}
				icon={<RiUserReceivedFill />}
			/>
			<DashboardWidgetItem
				accentColor={"orange.500"}
				title={"Tickets Open"}
				amount={data?.stats?.open}
				icon={<RiUserReceivedFill />}
			/>
			<DashboardWidgetItem
				accentColor={"green.500"}
				title={"Total Tickets"}
				amount={data?.stats?.total}
				icon={<RiUserReceivedFill />}
			/>
			<DashboardWidgetItem
				accentColor={"red.500"}
				title={"Tickets Closed"}
				amount={data?.stats?.closed}
				icon={<RiUserReceivedFill />}
			/>
		</Grid>
	);
};

export default DashboardWidgets;
