import React from "react";

import { Flex, Avatar, Text } from "@chakra-ui/react";

const TicketCommentItem = (props) => {
	return (
		<Flex gap={4} mb={6}>
			<Avatar bg={"red.500"} name={"Reinhard Kevin"} />
			<Flex direction={"column"}>
				<Flex alignItems={"baseline"} gap={2}>
					<Text fontSize={"md"} fontWeight={"semibold"}>
						Reinhard Kevin
					</Text>
					<Text fontSize={"sm"} textColor={"GrayText"}>
						2 hours ago
					</Text>
				</Flex>
				<Text fontSize={"sm"}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
					pariatur ducimus distinctio natus totam? Aperiam sapiente sit hic odit
					minima.
				</Text>
			</Flex>
		</Flex>
	);
};

export default TicketCommentItem;
