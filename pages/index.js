import React, { useState, useRef } from "react";
import axios from "axios";
import useSWR from "swr";
import NProgress from "nprogress";
import { useAuth } from "../contexts/auth-context";

import { Container, Box, Heading, Flex } from "@chakra-ui/react";

import TicketList from "../components/ticket/TicketList2";
import SideBarLayout from "../components/UI/SideBarLayout";
import DashboardWidgets from "../components/dashboard/DashboardWidgets";
import TicketFilter from "../components/ticket/TicketFilter";

const DashboardPage = (props) => {
	const [page, setPage] = useState(1);
	const containerRef = useRef(null);
	const { token } = useAuth();

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
				<DashboardWidgets stats={data?.stats} />
				<Flex marginTop={4} marginBottom={4} alignItems={'center'} justifyContent={'space-between'}>
					<Heading
						size={"md"}
						className="text-lime-500"
						fontWeight={"semibold"}
					>
						Ticket List
					</Heading>
					<TicketFilter ref={containerRef} />
				</Flex>
				<Box ref={containerRef}></Box>
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
