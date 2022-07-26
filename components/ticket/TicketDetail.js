import React, { useState } from "react";
import { MdSubject, MdDateRange, MdLocationPin } from "react-icons/md";
import { Flex, Heading, Text, Divider } from "@chakra-ui/react";
import useSWR from "swr";
import axios from "axios";

import moment from "moment";

import TicketCommentList from "./TicketCommentList";
import CommentForm from "./CommentForm";
import CommentSkeleton from "../UI/skeletons/CommentSkeleton";
import TicketDescription from "./TicketDescription";

const fetcher = async (url) => {
	const response = await axios.get(url);
	return response.data;
}

const TicketDetail = (props) => {
	const { data } = useSWR(`/api/tickets/${props.ticket.ticket_id}/comments`, fetcher);
	
	return (
		<Flex
			w={"full"}
			direction={["column-reverse", "column-reverse", "row"]}
			gap={3}
			alignSelf={"center"}
			justifyContent={"center"}
			maxW={"full"}
		>
			<Flex
				w={"full"}
				maxW={"container.md"}
				bg={"whiteAlpha.900"}
				backdropFilter={"auto"}
				backdropBlur={"md"}
				rounded={"xl"}
				shadow={"lg"}
				direction={"column"}
				p={4}
			>
				<Flex alignItems={"center"} gap={2}>
					<MdSubject />
					<Flex direction={"column"}>
						<Text
							letterSpacing={"wide"}
							textTransform={"uppercase"}
							textColor={"blackAlpha.500"}
							fontSize={"sm"}
						>
							Subject
						</Text>
						<Text
							fontSize={"md"}
							className={"text-lime-500"}
							fontWeight={"semibold"}
						>
							{props.ticket.CaseSubject.subject}
						</Text>
					</Flex>
				</Flex>
				<Flex textColor={"GrayText"}>
					<Flex>
						<MdDateRange />
						<Text marginLeft={2} fontSize={"xs"}>
							issued {moment(props.ticket.created_date).fromNow()}.
						</Text>
					</Flex>
					<Flex ml={4}>
						<MdLocationPin />
						<Text marginLeft={2} fontSize={"xs"}>
							Event Location: {props.ticket.location}
						</Text>
					</Flex>
				</Flex>
				<Divider my={4} />
				<Text
					fontSize={"md"}
					fontWeight={"semibold"}
					className={"text-lime-500"}
				>
					Description
				</Text>
				<Text fontSize={"initial"} mb={"6"}>
					{props.ticket.description}
				</Text>
				
				<TicketCommentList comments={data?.comments} />
				
				<CommentForm ticketId={props.ticket.ticket_id} data={data} />
			</Flex>
			<TicketDescription ticket={props.ticket} />
		</Flex>
	);
};

export default TicketDetail;
