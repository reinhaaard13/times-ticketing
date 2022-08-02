import React from "react";
import moment from "moment";
import axios from "axios";
import { useAuth } from "../../contexts/auth-context";
import { useSWRConfig } from "swr";

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Text,
	List,
	ListItem,
	ListIcon,
	useToast
} from "@chakra-ui/react";

import {
	MdWarning,
	MdAssignment,
	MdLibraryBooks,
	MdPerson,
	MdLocationPin,
	MdOutlineAccessTimeFilled,
	MdDescription,
} from "react-icons/md";

import { FaTicketAlt } from "react-icons/fa";

import SeverityBadge from "../UI/Badge";

const ConfirmTicketModal = (props) => {
	const { token } = useAuth();
	const { mutate } = useSWRConfig();
	const toast = useToast()

	const confirmHandler = async () => {
		try {
			const response = await axios.patch(
				`/api/tickets/${props.ticket.ticket_id}/status`,
				{ status: "PROGRESS" },
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			console.log(response.data);
			mutate(["/api/tickets", props.page]);
			props.onConfirm()
			props.onClose();
		} catch (error) {
			props.onClose()
			console.log(error);
			toast({
				title: "An error occured",
				description: `${error.response.data.error}`,
				position: "top",
				status: "error",
				isClosable: true,
				variant: "left-accent",
			});
		}
	};

	return (
		<Modal isOpen={props.isOpen} onClose={props.onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Ticket Description</ModalHeader>
				<ModalCloseButton />

				<ModalBody>
					<List className="text-slate-800/80" spacing={2}>
						<ListItem>
							<ListIcon as={MdWarning} color={"teal"} />
							Severity:{" "}
							<SeverityBadge severity={props.ticket?.CaseSubject.severity} />
						</ListItem>
						<ListItem>
							<ListIcon as={FaTicketAlt} color={"teal"} />
							Ticket ID:{" "}
							<span className="font-semibold uppercase text-slate-800">
								{props.ticket?.ticket_id}
							</span>
						</ListItem>
						<ListItem>
							<ListIcon as={MdLibraryBooks} color={"teal"} />
							Product:{" "}
							<span className="font-semibold text-slate-800">
								{props.ticket?.Product.product_name}
							</span>
						</ListItem>
						<ListItem>
							<ListIcon as={MdPerson} color={"teal"} />
							Name:{" "}
							<span className="font-semibold text-slate-800">
								{props.ticket?.cust_name}
							</span>
						</ListItem>
						<ListItem>
							<ListIcon as={MdLocationPin} color={"teal"} />
							Event Location:{" "}
							<span className="font-semibold text-slate-800">
								{props.ticket?.location}
							</span>
						</ListItem>
						<ListItem>
							<ListIcon as={MdOutlineAccessTimeFilled} color={"teal"} />
							Created at:{" "}
							<span className="font-semibold text-slate-800">
								{moment(props.ticket?.created_date).format(
									"YYYY-MM-DD HH:mm:ss"
								)}
							</span>
						</ListItem>
						<ListItem>
							<ListIcon as={MdDescription} color={"teal"} />
							Subject:{" "}
							<span className="font-semibold text-slate-800">
								{props.ticket?.CaseSubject.subject}
							</span>
						</ListItem>
					</List>
				</ModalBody>

				<ModalFooter>
					<Button mr={3} onClick={props.onClose}>
						Cancel
					</Button>
					<Button colorScheme="blue" onClick={confirmHandler}>
						Take This Ticket
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default ConfirmTicketModal;
