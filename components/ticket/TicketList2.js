import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import moment from "moment";
import { MdRemoveRedEye, MdDelete } from "react-icons/md";
import { BiUserCheck } from "react-icons/bi";
import Image from "next/image";
import axios from "axios";
import { useTable } from "react-table";

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
import DeleteTicketModal from "./DeleteTicketModal";
import ColumnFilter from "./ColumnFilter";

const TicketList = ({ data, next, previous }) => {
	const { user, privileges } = useAuth();
	const { mutate } = useSWRConfig();
	const [filterParam, setFilterParam] = useState([]);

	// for ticket description modal
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		isOpen: isOpenDelete,
		onOpen: onOpenDelete,
		onClose: onCloseDelete,
	} = useDisclosure();
	const [selectedTicket, setSelectedTicket] = useState(null);

	const toast = useToast();

	const confirmHandler = () => {
		toast({
			title: "You have taken this ticket",
			description: `The ticket with ID ${selectedTicket.ticket_id} has been taken by you`,
			position: "top",
			status: "success",
			isClosable: true,
			variant: "left-accent",
		});
		mutate(["/api/tickets", data?.page]);
	};

	const deleteHandler = () => {
		toast({
			title: "You have deleted the ticket",
			description: `The ticket with ID ${selectedTicket.ticket_id} has been deleted by you`,
			position: "top",
			status: "error",
			isClosable: true,
			variant: "left-accent",
			// icon: <MdDelete />,
		});
		mutate(["/api/tickets", data?.page]);
	};

	useEffect(() => {
		axios
			.get("/api/tickets/filterParam")
			.then((res) => setFilterParam(res.data));
	}, []);

	const columns = useMemo(
		() => [
			{
				Header: "No.",
				accessor: (row, index) => index + 1,
				id: "no",
			},
			{
				Header: "Ticket",
				accessor: "ticket_id",
			},
			{
				Header: "Product",
				accessor: "Product.product_name",
			},
			{
				Header: "Subject",
				accessor: "CaseSubject.subject",
			},
			{
				Header: "Created At",
				accessor: "created_date",
				Cell: ({ value }) => {
					return moment(value).format("YYYY-MM-DD HH:mm:ss");
				},
			},
			{
				Header: "Severity",
				accessor: "CaseSubject.severity",
				Cell: ({ value }) => {
					return <SeverityBadge severity={value} />;
				},
			},
			{
				Header: "PIC",
				accessor: "pic.name",
			},
			{
				Header: "Author",
				accessor: "createdBy.name",
			},
			{
				Header: "Status",
				accessor: "status",
				Cell: ({ value }) => {
					return (
						<Badge
							colorScheme={
								value === "OPEN"
									? "yellow"
									: value === "PROGRESS"
									? "green"
									: "gray"
							}
						>
							{value}
						</Badge>
					);
				},
			},
			{
				Header: "SLA",
				accessor: "sla",
			},
			{
				Header: "Action",
				accessor: "action",
			},
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data: data?.tickets || [] });

	return (
		<React.Fragment>
			<ConfirmTicketModal
				isOpen={isOpen}
				onClose={onClose}
				onConfirm={confirmHandler}
				ticket={selectedTicket}
				page={data?.page}
			/>
			<DeleteTicketModal
				isOpen={isOpenDelete}
				onClose={onCloseDelete}
				onDelete={deleteHandler}
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
						{headerGroups.map((headerGroup, idx) => (
							<Tr key={idx} {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column, idx) => (
									<Th key={idx} {...column.getHeaderProps()}>
										{column.render("Header")}
									</Th>
								))}
							</Tr>
						))}
					</Thead>
					<Tbody {...getTableBodyProps()}>
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
						{/* {data?.tickets.map((ticket, idx) => {
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
												{ticket.created_by === user.id && (
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
									)}
								</Tr>
							);
						})} */}
						{rows.map((row) => {
							prepareRow(row);

							return (
								<Tr key={row.id} {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return (
											<Td key={cell.id} {...cell.getCellProps()}>
												{cell.render("Cell")}
											</Td>
										);
									})}
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
