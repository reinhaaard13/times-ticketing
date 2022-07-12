import React from "react";
import moment from 'moment';

import { Flex, Text, List, ListItem, ListIcon, Button } from "@chakra-ui/react";

import {
	MdWarning,
	MdAssignment,
	MdLibraryBooks,
	MdPerson,
	MdLocationPin,
	MdOutlineAccessTimeFilled,
	MdDescription,
	MdSubtitles,
	MdEmail,
	MdSubject,
	MdLocalPhone,
} from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";

import Badge from '../UI/Badge'

const TicketDescription = (props) => {
	return (
		<Flex
			w={['full','full',"sm"]}
			h={"fit-content"}
			bg={"whiteAlpha.900"}
			backdropFilter={"auto"}
			backdropBlur={"md"}
			rounded={"xl"}
			shadow={"lg"}
			direction={"column"}
			p={4}
		>
			<Text
				fontSize={"md"}
				mb={4}
				fontWeight={"semibold"}
				className={"text-lime-500"}
			>
				Ticket Details
			</Text>
			<List spacing={2} fontSize={"sm"} mb={4}>
				<ListItem>
					<ListIcon as={MdWarning} color={"teal"} />
					Severity: <Badge severity={props.ticket.CaseSubject.severity} />
				</ListItem>
				<ListItem>
					<ListIcon as={FaTicketAlt} color={"teal"} />
					Ticket: <span className="font-medium">{props.ticket.ticket_id}</span>
				</ListItem>
				<ListItem>
					<ListIcon as={MdLibraryBooks} color={"teal"} />
					Product: <span className="font-medium">{props.ticket.Product.product_name}</span>
				</ListItem>
				<ListItem>
					<ListIcon as={MdSubtitles} color={"teal"} />
					Sub Product:{" "}
					<span className="font-medium">{props.ticket.Subproduct.subproduct_name}</span>
				</ListItem>
				<ListItem>
					<ListIcon as={MdPerson} color={"teal"} />
					Name: <span className="font-medium">{props.ticket.cust_name}</span>
				</ListItem>
				<ListItem>
					<ListIcon as={MdLocalPhone} color={"teal"} />
					Phone: <span className="font-medium">{props.ticket.cust_no}</span>
				</ListItem>
				<ListItem>
					<ListIcon as={MdEmail} color={"teal"} />
					Email: <span className="font-medium">{props.ticket.cust_email}</span>
				</ListItem>
				<ListItem>
					<ListIcon as={MdLocationPin} color={"teal"} />
					Event Location:{" "}
					<span className="font-medium">{props.ticket.location}</span>
				</ListItem>
				<ListItem>
					<ListIcon as={MdOutlineAccessTimeFilled} color={"teal"} />
					Created at: <span className="font-medium">{moment(props.ticket.created_date).format("YYYY-MM-DD HH:mm:ss")}</span>
				</ListItem>
				<ListItem>
					<ListIcon as={MdSubject} color={"teal"} />
					Subject: <span className="font-medium">Settlement Failed</span>
				</ListItem>
			</List>
			<Button
				colorScheme={"red"}
				size={"sm"}
				w={"fit-content"}
				alignSelf={"end"}
			>
				Close Ticket
			</Button>
		</Flex>
	);
};

export default TicketDescription;
