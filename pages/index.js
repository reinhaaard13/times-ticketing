import React, { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import NProgress from "nprogress";
import { useAuth } from "../contexts/auth-context";

import { Container, Box, Heading, Flex } from "@chakra-ui/react";

import ErrorFallback from "../components/UI/ErrorFallback";
import TicketList from "../components/ticket/TicketList";
import SideBarLayout from "../components/UI/SideBarLayout";
import DashboardWidgets from "../components/dashboard/DashboardWidgets";

const DashboardPage = (props) => {
	const [page, setPage] = useState(1);
	const { token } = useAuth()

	const { data } = useSWR(["/api/tickets", page], async (url) => {
		NProgress.start();
		const res = await axios.get(`${url}?page=${page}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		NProgress.done();
		return res.data;
	});

	const fetchNextPage = async () => {
		setPage((prevPage) => prevPage + 1);
	};

	const fetchPreviousPage = async () => {
		setPage((prevPage) => prevPage - 1);
	};

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
				<DashboardWidgets stats={data.stats} />
				<Heading
					size={"md"}
					marginTop={4}
					marginBottom={4}
					className="text-lime-500"
					fontWeight={"semibold"}
				>
					Ticket List
				</Heading>
				<TicketList
					data={data}
					next={fetchNextPage}
					previous={fetchPreviousPage}
				/>
			</Box>
		</SideBarLayout>
	);
};

export default DashboardPage;
