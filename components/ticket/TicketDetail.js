import React, { useState } from "react";
import { MdSubject, MdDateRange, MdLocationPin } from "react-icons/md";
import {
	Flex,
	Text,
	Divider,
	Skeleton,
	SkeletonText,
	Badge,
	Box,
} from "@chakra-ui/react";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "../../contexts/auth-context";

import moment from "moment";

import TicketCommentList from "./TicketCommentList";
import CommentForm from "./CommentForm";
import CommentSkeleton from "../UI/skeletons/CommentSkeleton";
import TicketDescription from "./TicketDescription";
import ClosedTicketSolution from "./ClosedTicketSolution";

const fetcher = async (url) => {
	const response = await axios.get(url);
	return response.data;
};

const TicketDetail = (props) => {
	const { user } = useAuth();
	const { data } = useSWR(
		`/api/tickets/${props.ticket?.ticket_id}/comments`,
		fetcher
	);

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
				h={"fit-content"}
				bg={"whiteAlpha.900"}
				backdropFilter={"auto"}
				backdropBlur={"md"}
				rounded={"xl"}
				shadow={"lg"}
				direction={"column"}
				p={4}
			>
				<Flex w={"full"} justifyContent={"space-between"}>
					<Flex flexDir={"column"}>
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
								{props.ticket ? (
									<Text
										fontSize={"md"}
										className={"text-lime-500"}
										fontWeight={"semibold"}
									>
										{props.ticket.CaseSubject.subject}
									</Text>
								) : (
									<Skeleton height={5} width={"xs"} />
								)}
							</Flex>
						</Flex>
						<Flex textColor={"GrayText"}>
							<Flex alignItems={"center"}>
								<MdDateRange />
								{props.ticket ? (
									<Text marginLeft={2} fontSize={"xs"}>
										issued {moment(props.ticket.created_date).fromNow()}.
									</Text>
								) : (
									<Skeleton ml={2} height={3} width={32} />
								)}
							</Flex>
							<Flex ml={4} alignItems={"center"}>
								<MdLocationPin />
								{props.ticket ? (
									<Text marginLeft={2} fontSize={"xs"}>
										Event Location: {props.ticket.location}
									</Text>
								) : (
									<Skeleton ml={2} height={3} width={32} />
								)}
							</Flex>
						</Flex>
					</Flex>
					
					{props.ticket ? (
					<Flex flexDir="column" alignItems={"end"}>
						<Badge
							colorScheme={
								props.ticket.status === "OPEN"
									? "yellow"
									: props.ticket.status === "PROGRESS"
									? "green"
									: "gray"
							}
							w={"fit-content"}
						>
							{props.ticket.status}
						</Badge>
						{props.ticket.pic && (
							<Text fontSize={"xs"}>PIC: {props.ticket.pic.name}</Text>
						)}
					</Flex>
					) : (
						<Skeleton height={5} width={20} />
					)}

				</Flex>
				<Divider my={4} />

				{props.ticket?.status === "CLOSED" && (
					<ClosedTicketSolution
						solution={props.ticket.solution}
						pic={props.ticket.pic.name}
						closed_date={props.ticket.closed_date}
					/>
				)}

				<Text
					fontSize={"md"}
					fontWeight={"semibold"}
					className={"text-lime-500"}
				>
					Description
				</Text>
				{props.ticket ? (
					<Text fontSize={"initial"} mb={"6"}>
						{props.ticket.description}
					</Text>
				) : (
					<SkeletonText mt={2} noOfLines={4} mb={"6"} spacing={3} />
				)}

				<TicketCommentList
					comments={data?.comments}
					status={props.ticket?.status}
				/>

				{user?.id === props.ticket?.pic_id ||
				user?.id === props.ticket?.created_by
					? props.ticket.status === "PROGRESS" && (
							<CommentForm ticketId={props.ticket.ticket_id} data={data} />
					  )
					: null}
			</Flex>
			<TicketDescription ticket={props.ticket} />
		</Flex>
	);
};

export default TicketDetail;
