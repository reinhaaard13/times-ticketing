import React from "react";
import moment from "moment";
import Link from "next/link";

import { Flex, Text, Divider } from "@chakra-ui/react";

const NotificationItem = ({ notification, onClick }) => {
	let notification_msg;
	if (notification.type === "TICKET_COMMENT") {
		notification_msg = (
			<Text>
				<Text as="span" fontWeight={"semibold"}>
					{notification.actor}
				</Text>{" "}
				commented on ticket {notification.payload.ticket_id}:{' "'}
				{notification.payload.comment_body.slice(0, 30)}...{'"'}
			</Text>
		);
	} else if (notification.type === "TICKET_PROGRESS") {
		notification_msg = (
			<Text>
				<Text as="span" fontWeight={"semibold"}>
					{notification.actor}
				</Text>{" "}
				take your ticket with ID: {notification.payload.ticket_id}
			</Text>
		);
	} else if (notification.type === "TICKET_CLOSED") {
		notification_msg = (
			<Text>
				<Text as="span" fontWeight={"semibold"}>
					{notification.actor}
				</Text>{" "}
				closed a ticket with ID: {notification.payload.ticket_id}
			</Text>
		);
	} else if (notification.type === "TICKET_CREATE") {
		notification_msg = (
			<Text>
				<Text as="span" fontWeight={"semibold"}>
					{notification.actor}
				</Text>{" "}
				created a ticket with ID: {notification.payload.ticket_id} about{" "}
				{notification.payload.subject} at {notification.payload.event_location}
			</Text>
		);
	}

	return (
		<>
			<Link href={`/ticket/${notification.payload.ticket_id}`}>
				<Flex
					bg={notification.status === "UNREAD" ? "blackAlpha.100" : "transparent"}
					p={4}
					borderLeft={notification.status === "UNREAD" ? "4px" : null}
					borderColor={"limegreen"}
					justifyContent={"space-between"}
					gap={4}
          cursor={"pointer"}
          onClick={onClick}
          _hover={{backgroundColor: "blackAlpha.200"}}
				>
					{notification_msg}
					<Text fontSize={"xs"} whiteSpace={"nowrap"} color={"gray.600"}>
						{moment(notification.created_at).fromNow()}
					</Text>
				</Flex>
			</Link>
			<Divider />
		</>
	);
};

export default NotificationItem;
