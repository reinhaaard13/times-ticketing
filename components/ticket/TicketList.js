import React, { useState } from "react";
import Link from "next/link";
import moment from "moment";
import { MdRemoveRedEye } from "react-icons/md";
import { BiUserCheck } from "react-icons/bi";
import Image from "next/image";

import { useAuth } from "../../contexts/auth-context";
import { useSWRConfig } from "swr";

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
	Skeleton,
	ButtonGroup,
	useToast,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import FsLightBox from "fslightbox-react";

import SeverityBadge from "../../components/UI/Badge";
import ConfirmTicketModal from "./ConfirmTicketModal";

const TicketList = ({ data, next, previous }) => {
	const [lightbox, setLightbox] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const { user, privileges } = useAuth();

	// for ticket description modal
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedTicket, setSelectedTicket] = useState(null);

	const toast = useToast();

	const openLightbox = (index) => {
		setLightbox((prevState) => !prevState);
		setSelectedImage(index.target["data-loaded-src"]);
	};

	const confirmHandler = () => {
		toast({
			title: "You have taken this ticket",
			description: `The ticket with ID ${selectedTicket.ticket_id} has been taken by you`,
			position: "top",
			status: "success",
			isClosable: true,
			variant: "left-accent",
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
				page={data?.page}
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
							<Th>Event Location</Th>
							<Th>Subject</Th>
							<Th width={"28"}>Created at</Th>
							<Th width={1}>Status</Th>
							<Th>Severity</Th>
							<Th>SLA</Th>
							<Th width={1}>Attachment</Th>
							{privileges.includes("TICKET_ACTION") && <Th>Action</Th>}
						</Tr>
					</Thead>
					<Tbody>
						{!data && (
							<>
								<Tr>
									<Td colSpan={11} textAlign={"center"} p={4}>
										<Skeleton height={5} />
									</Td>
								</Tr>
								<Tr>
									<Td colSpan={11} textAlign={"center"} p={4}>
										<Skeleton height={5} />
									</Td>
								</Tr>
								<Tr>
									<Td colSpan={11} textAlign={"center"} p={4}>
										<Skeleton height={5} />
									</Td>
								</Tr>
							</>
						)}
						{data?.tickets.length === 0 && (
							<Tr>
								<Td colSpan={11} textAlign={"center"} p={4}>
									No ticket(s) found
								</Td>
							</Tr>
						)}
						{data?.tickets.map((ticket, idx) => {
							return (
								<Tr
									key={ticket.ticket_id}
									_hover={{ backgroundColor: "#efefef" }}
								>
									<Td>{(data.page - 1) * data.limit + (idx + 1)}</Td>
									<Td>
										<Link href={`/ticket/${ticket.ticket_id}`}>
											<a className="underline">{ticket.ticket_id}</a>
										</Link>
									</Td>
									<Td>{ticket.Product.product_name}</Td>
									<Td>{ticket.location}</Td>
									<Td>{ticket.CaseSubject.subject}</Td>
									<Td>
										{moment(ticket.created_date).format("YYYY-MM-DD HH:mm:ss")}
									</Td>
									<Td>
										<SeverityBadge severity={ticket.CaseSubject.severity} />
									</Td>
									<Td>
										<Badge
											colorScheme={
												ticket.status === "OPEN"
													? "yellow"
													: ticket.status === "PROGRESS"
													? "green"
													: "gray"
											}
										>
											{ticket.status}
										</Badge>
									</Td>
									<Td>
										{ticket.status !== "CLOSED" ? (
											<Badge
												color={
													ticket.sla > 1
														? "green.800"
														: ticket.sla >= 0
														? "yellow.800"
														: "black"
												}
												bgColor={
													ticket.sla > 1
														? "green.200"
														: ticket.sla >= 0
														? "yellow.200"
														: "blackAlpha.200"
												} // variant={'solid'}
											>
												{ticket.sla >= 1
													? `Due in ${ticket.sla} days`
													: ticket.sla >= 0
													? `Due today`
													: `Overdue for ${ticket.sla} days`}
											</Badge>
										) : (
											<Badge>Closed</Badge>
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
											<ButtonGroup
												isAttached
												display={"flex"}
												justifyContent={"center"}
												alignItems={"center"}
											>
												<Link href={`/ticket/${ticket.ticket_id}`}>
													<Button
														size="sm"
														colorScheme="blue"
														leftIcon={<MdRemoveRedEye />}
														w={"full"}
													>
														View
													</Button>
												</Link>
												{ticket.status === "OPEN" &&
													privileges.includes("TICKET_ACTION") &&
													ticket.created_by !== user.id && (
														<Button
															size="sm"
															colorScheme="green"
															onClick={() => {
																onOpen();
																setSelectedTicket(ticket);
															}}
															leftIcon={<BiUserCheck />}
															w={"full"}
														>
															Take
														</Button>
													)}
											</ButtonGroup>
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
									disabled={!data?.previous}
									onClick={previous}
								/>
								<IconButton
									icon={<FiChevronRight />}
									variant={"outline"}
									size={"sm"}
									ml={1}
									disabled={!data?.next}
									onClick={next}
								/>
								<Text display={"inline"} fontWeight={"medium"}>
									Showing {data?.total} of {data?.stats.total}
								</Text>
								<Divider orientation="vertical" display={"inline"} mx={2} />
								<Text display={"inline"} fontWeight={"normal"}>
									Page {data?.page}
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
