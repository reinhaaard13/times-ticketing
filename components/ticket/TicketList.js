import React, { useEffect, useState } from "react";
import Link from "next/link";
import moment from "moment";
import NProgress from "nprogress";
import { MdRemoveRedEye, MdDelete } from "react-icons/md";
import { BiUserCheck } from "react-icons/bi";
import Image from "next/image";
import axios from "axios";

import { useTicket } from "../../contexts/ticket-context";
import { useAuth } from "../../contexts/auth-context";
import useSWR, { useSWRConfig } from "swr";

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
	Flex,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TiArrowUnsorted, TiArrowSortedUp } from "react-icons/ti";

import FsLightBox from "fslightbox-react";

import SeverityBadge from "../../components/UI/Badge";
import ConfirmTicketModal from "./ConfirmTicketModal";
import DeleteTicketModal from "./DeleteTicketModal";
import ColumnFilter from "./ColumnFilter";
import SortableHeader from "./TableHeader";

const TicketList = ({ next, previous }) => {
	const { user, privileges, token } = useAuth();
	const {
		page,
		sortBy,
		sortOrder,
		filter,
		fetchNextPage,
		fetchPreviousPage,
		changeSort,
		addFilter,
	} = useTicket();
	// const { mutate } = useSWRConfig();
	const [filterParam, setFilterParam] = useState([]);

	const { data, mutate } = useSWR(
		["/api/tickets", page, sortBy, sortOrder, filter],
		async (url, page, sortBy, sortOrder, filter) => {
			NProgress.start();
			const res = await axios.get(`${url}`, {
				params: {
					page: page,
					sortBy: sortBy,
					sortOrder: sortOrder,
					filter: filter,
				},
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			NProgress.done();
			return res.data;
		}
	);

	// for ticket description modal
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		isOpen: isOpenDelete,
		onOpen: onOpenDelete,
		onClose: onCloseDelete,
	} = useDisclosure();
	const [selectedTicket, setSelectedTicket] = useState(null);

	const toast = useToast();

	const confirmHandler = async () => {
		toast({
			title: "You have taken this ticket",
			description: `The ticket with ID ${selectedTicket.ticket_id} has been taken by you`,
			position: "top",
			status: "success",
			isClosable: true,
			variant: "left-accent",
		});
		mutate();
	};

	const deleteHandler = async () => {
		toast({
			title: "You have deleted the ticket",
			description: `The ticket with ID ${selectedTicket.ticket_id} has been deleted by you`,
			position: "top",
			status: "error",
			isClosable: true,
			variant: "left-accent",
		});
		mutate();
	};

	useEffect(() => {
		axios.get("/api/tickets/filters").then((res) => setFilterParam(res.data));
	}, []);

	const changeFilterHandler = (event) => {
		addFilter(event.target.name, event.target.value);
	};

	return (
		<React.Fragment>
			<ConfirmTicketModal
				isOpen={isOpen}
				onClose={onClose}
				onConfirm={confirmHandler}
				ticket={selectedTicket}
			/>
			<DeleteTicketModal
				isOpen={isOpenDelete}
				onClose={onCloseDelete}
				onDelete={deleteHandler}
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
						<Tr height={"10"}>
							<Th width="1">No.</Th>
							<Th width={"1"}>Ticket</Th>
							<SortableHeader
								sortBy={sortBy}
								sortOrder={sortOrder}
								onSort={changeSort}
								column={"product"}
							>
								Product
							</SortableHeader>
							<SortableHeader
								sortBy={sortBy}
								sortOrder={sortOrder}
								onSort={changeSort}
								column={"subject"}
							>
								Subject
							</SortableHeader>
							<SortableHeader
								sortBy={sortBy}
								sortOrder={sortOrder}
								onSort={changeSort}
								column={"created_date"}
								width={"32"}
							>
								Created At
							</SortableHeader>
							<SortableHeader
								sortBy={sortBy}
								sortOrder={sortOrder}
								onSort={changeSort}
								column={"severity"}
							>
								Severity
							</SortableHeader>
							<SortableHeader
								sortBy={sortBy}
								sortOrder={sortOrder}
								onSort={changeSort}
								column={"pic"}
							>
								PIC
							</SortableHeader>
							<SortableHeader
								sortBy={sortBy}
								sortOrder={sortOrder}
								onSort={changeSort}
								column={"created_by"}
							>
								Author
							</SortableHeader>
							<SortableHeader
								width={1}
								sortBy={sortBy}
								sortOrder={sortOrder}
								onSort={changeSort}
								column={"status"}
							>
								Status
							</SortableHeader>
							<SortableHeader
								sortBy={sortBy}
								sortOrder={sortOrder}
								onSort={changeSort}
								column={"sla"}
							>
								SLA
							</SortableHeader>
							<Th>Action</Th>
						</Tr>
						<Tr>
							<Th></Th>
							<Th></Th>
							<ColumnFilter
								options={filterParam.products}
								onChange={changeFilterHandler}
								name={"product"}
							/>
							<ColumnFilter
								options={filterParam.casesubjects}
								onChange={changeFilterHandler}
								name={"subject"}
							/>
							<Th></Th>
							<ColumnFilter
								options={[
									{ option_value: "LOW", option_name: "Low" },
									{ option_value: "MEDIUM", option_name: "Medium" },
									{ option_value: "HIGH", option_name: "High" },
									{ option_value: "CRITICAL", option_name: "Critical" },
								]}
								onChange={changeFilterHandler}
								name={"severity"}
							/>
							<Th></Th>
							<Th></Th>
							<ColumnFilter
								options={[
									{ option_value: "OPEN", option_name: "Open" },
									{ option_value: "PROGRESS", option_name: "Progress" },
									{ option_value: "CLOSED", option_name: "Closed" },
								]}
								onChange={changeFilterHandler}
								name={"status"}
							/>
							<ColumnFilter
								options={[
									{ option_value: "10", option_name: "in 10 days" },
									{ option_value: "5", option_name: "in 5 days" },
									{ option_value: "3", option_name: "in 3 days" },
									{ option_value: "1", option_name: "in 1 day" },
									{ option_value: "OVERDUE", option_name: "Overdue" },
								]}
								onChange={changeFilterHandler}
								name={"sla"}
							/>
							<Th></Th>
						</Tr>
					</Thead>
					<Tbody>
						{/* Skeleton */}
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
									<Td>{ticket.CaseSubject.subject}</Td>
									<Td>
										{moment(ticket.created_date).format("YYYY-MM-DD HH:mm:ss")}
									</Td>
									<Td>
										<SeverityBadge severity={ticket.CaseSubject.severity} />
									</Td>
									<Td>{ticket.pic?.name}</Td>
									<Td>{ticket.createdBy.name}</Td>
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
													w={"fit-content"}
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
														w={"fit-content"}
													>
														Take
													</Button>
												)}
											{ticket.created_by === user?.id &&
												ticket.status === "OPEN" && (
													<Button
														size="sm"
														colorScheme="red"
														onClick={() => {
															onOpenDelete();
															setSelectedTicket(ticket);
														}}
														leftIcon={<MdDelete />}
														w={"fit-content"}
													>
														Delete
													</Button>
												)}
										</ButtonGroup>
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
									disabled={!data?.previous}
									onClick={fetchPreviousPage}
								/>
								<IconButton
									icon={<FiChevronRight />}
									variant={"outline"}
									size={"sm"}
									ml={1}
									disabled={!data?.next}
									onClick={fetchNextPage}
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
