import React, { useState } from "react";
import Link from "next/link";
import moment from "moment";
import { FiPlus } from "react-icons/fi";
import { MdRemoveRedEye } from "react-icons/md";
import { BiUserCheck } from "react-icons/bi";
import Image from "next/image";
import NProgress from "nprogress";
import axios from "axios";
import { useAuth } from "../../contexts/auth-context";
import useSWR from "swr";

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
	Divider,
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
	const { token, privileges } = useAuth();
	const [page, setPage] = useState(1);

	// for ticket description modal
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedTicket, setSelectedTicket] = useState(null);

	const { data } = useSWR(`/api/tickets?page=${page}`, (url) => {
		NProgress.start();
		return axios
			.get(url, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				NProgress.done();
			});
	});

	const fetchNextPage = async () => {
		NProgress.start();
		const response = await axios.get(`${tickets.next}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		console.log(response.data);
		setTickets(response.data);
		NProgress.done();
	};

	const fetchPreviousPage = async () => {
		NProgress.start();
		const response = await axios.get(`${tickets.previous}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		setTickets(response.data);
		NProgress.done();
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
				shadow={"lg"}
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
							{privileges.includes("TICKET_ACTION") && <Th>Action</Th>}
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
								<Tr
									key={ticket.ticket_id}
									_hover={{ backgroundColor: "#efefef" }}
								>
									<Td>{(tickets.page - 1) * tickets.limit + (idx + 1)}</Td>
									<Td>
										<Link href={`/ticket/${ticket.ticket_id}`}>
											<a className="underline">{ticket.ticket_id}</a>
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
											// http://localhost:5000/uploads/attachments/77567600-09e1-11ed-b5ad-a5925e956a1c.png
											<Image
												// src={`${'https://rei-aws.s3.ap-southeast-1.amazonaws.com/times/'}${ticket.attachment}`}
												src={`${process.env.NEXT_PUBLIC_STORAGE_URI}/${ticket.attachment}`}
												alt={"attachment"}
												width={60}
												height={60}
												objectFit="cover"
												onClick={openLightbox}
												className="cursor-pointer"
											/>
										)}
									</Td>
									{privileges.includes("TICKET_ACTION") && (
										<Td>
											{ticket.status === "OPEN" && (
												<Button
													size="sm"
													colorScheme="green"
													onClick={() => {
														onOpen();
														setSelectedTicket(ticket);
													}}
													leftIcon={<BiUserCheck />}
												>
													Answer
												</Button>
											)}
											{ticket.status === "PROGRESS" && (
												<Link href={`/ticket/${ticket.ticket_id}`}>
													<Button
														size="sm"
														colorScheme="blue"
														leftIcon={<MdRemoveRedEye />}
													>
														View
													</Button>
												</Link>
											)}
										</Td>
									)}
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
								<Divider orientation="vertical" display={"inline"} mx={2} />
								<Text display={"inline"} fontWeight={"normal"}>
									Page {tickets.page}
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
