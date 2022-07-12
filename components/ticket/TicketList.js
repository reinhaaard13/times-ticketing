import React, { useState } from "react";
import Link from "next/link";
import moment from "moment";
import { FiPlus } from "react-icons/fi";
import Image from "next/image";
import NProgress from "nprogress";
import axios from "axios";

import {
	TableContainer,
	Table,
	Thead,
	Tr,
	Tbody,
	Td,
	Th,
	Button,
	IconButton,
	Badge,
	Text,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import FsLightBox from "fslightbox-react";

import SeverityBadge from "../../components/UI/Badge";
import ConfirmTicketModal from "./ConfirmTicketModal";

import { SUBJECT_SEVERITY } from "../../constants/severity";

const TicketList = (props) => {
	const [lightbox, setLightbox] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const [tickets, setTickets] = useState(props.tickets);

	// for ticket description modal
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedTicket, setSelectedTicket] = useState(null);

	const fetchNextPage = async () => {
		NProgress.start()
		const response = await axios.get(`http://localhost:3000${tickets.next}`);
		setTickets(response.data);
		NProgress.done();
	};

	const fetchPreviousPage = async () => {
		NProgress.start()
		const response = await axios.get(
			`http://localhost:3000${tickets.previous}`
		);
		setTickets(response.data);
		NProgress.done()
	};

	const openLightbox = (index) => {
		setLightbox((prevState) => !prevState);
		setSelectedImage(index.target["data-loaded-src"]);
	};

	const confirmHandler = () => {
		setTickets((prevState) => {
			const newTickets = prevState.tickets.map((ticket) => {
				if (ticket.ticket_id === selectedTicket.ticket_id) {
					ticket.status = "PROGRESS";
				}
				return ticket;
			});
			return { ...prevState, tickets: newTickets };
		});
	};

	return (
		<React.Fragment>
			<FsLightBox toggler={lightbox} sources={[selectedImage]} />
			<ConfirmTicketModal
				isOpen={isOpen}
				onClose={onClose}
				onConfirm={confirmHandler}
				ticket={selectedTicket}
			/>
			<TableContainer
				whiteSpace={"pre-wrap"}
				shadow={'lg'}
				className="border border-slate-500/20 rounded-xl w-full"
			>
				<Table
					bg={"whiteAlpha.900"}
					backdropFilter={"auto"}
					backdropBlur={"md"}
					variant="simple"
					size="sm"
				>
					<Thead className="bg-slate-500/20">
						<Tr>
							<Th width="1">No.</Th>
							<Th width={"1"}>Ticket</Th>
							<Th>Product</Th>
							<Th width={1}>Status</Th>
							<Th>Event Location</Th>
							<Th>Subject</Th>
							<Th width={"28"}>Created at</Th>
							<Th>Severity</Th>
							<Th>SLA</Th>
							<Th width={1}>Attachment</Th>
							<Th>Action</Th>
						</Tr>
					</Thead>
					<Tbody>
						{tickets.tickets.map((ticket, idx) => {
							const deadline = moment(ticket.created_date).add(
								SUBJECT_SEVERITY.find(
									(subject) => subject.label === ticket.CaseSubject.severity
								).handle_in,
								"days"
							);

							const sla = deadline.diff(moment(), "d");

							return (
								<Tr key={ticket.ticket_id}>
									<Td>{idx + 1}</Td>
									<Td>
										<Link
											href={`/ticket/${ticket.ticket_id}`}
										>
											<a>{ticket.ticket_id}</a>
										</Link>
									</Td>
									<Td>{ticket.Product.product_name}</Td>
									<Td>
										<Badge
											colorScheme={
												ticket.status === "OPEN" ? "yellow" : "green"
											}
										>
											{ticket.status}
										</Badge>
									</Td>
									<Td>{ticket.location}</Td>
									<Td>{ticket.CaseSubject.subject}</Td>
									<Td>
										{moment(ticket.created_date).format("YYYY-MM-DD HH:mm:ss")}
									</Td>
									<Td>
										<SeverityBadge severity={ticket.CaseSubject.severity} />
									</Td>
									<Td>
										{ticket.status !== "CLOSED" && (
											<Badge
												color={
													sla > 1
														? "green.800"
														: sla >= 0
														? "yellow.800"
														: "black"
												}
												bgColor={
													sla > 1
														? "green.200"
														: sla >= 0
														? "yellow.200"
														: "blackAlpha.200"
												} // variant={'solid'}
											>
												{sla > 1
													? `Due in ${sla} days`
													: sla >= 0
													? `Due today`
													: `Overdue for ${sla} days`}
											</Badge>
										)}
									</Td>
									<Td>
										{ticket.attachment && (
											<Image
												src={`/${ticket.attachment
													.split("public\\")[1]
													.replace("\\", "/")}`}
												alt={"attachment"}
												width={60}
												height={60}
												objectFit="cover"
												onClick={openLightbox}
												className="cursor-pointer"
											/>
										)}
									</Td>
									<Td>
										<Button
											size="sm"
											colorScheme="green"
											onClick={() => {
												onOpen();
												setSelectedTicket(ticket);
											}}
										>
											<FiPlus />
										</Button>
									</Td>
								</Tr>
							);
						})}
						<Tr>
							<Td colSpan={11} textAlign={"start"}>
								<IconButton
									icon={<FiChevronLeft />}
									variant={"outline"}
									size={"sm"}
									ml={4}
									disabled={!tickets.previous}
									onClick={fetchPreviousPage}
								/>
								<IconButton
									icon={<FiChevronRight />}
									variant={"outline"}
									size={"sm"}
									ml={1}
									disabled={!tickets.next}
									onClick={fetchNextPage}
								/>
								<Text display={"inline"} fontWeight={"medium"}>
									Showing {tickets.total} of {tickets.count}
								</Text>
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</React.Fragment>
	);
};

export default TicketList;
