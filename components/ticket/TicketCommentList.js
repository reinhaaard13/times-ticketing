import React from "react";

import { Flex, Text } from "@chakra-ui/react";

import TicketCommentItem from "./TicketCommentItem";

const TicketCommentList = (props) => {
	return (
		<Flex direction={"column"}>
			<Text fontSize={"md"} mb={6} fontWeight={"semibold"} className={"text-lime-500"}>
				Comments
			</Text>

			<TicketCommentItem />
			<TicketCommentItem />
			<TicketCommentItem />
		</Flex>
	);
};

export default TicketCommentList;
