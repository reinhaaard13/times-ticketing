import React, { useRef } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/auth-context";
import { useSWRConfig } from "swr";

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	Text,
	Textarea,
	useToast,
} from "@chakra-ui/react";

const CloseTicketModal = ({ isOpen, onClose, ticketId }) => {
	const solutionInputRef = useRef();
	const { token } = useAuth();
	const { mutate } = useSWRConfig();
	const toast = useToast();

	const submitHandler = async () => {
		// console.log(solutionInputRef.current.value);

		const response = await axios.patch(
			`/api/tickets/${ticketId}/status`,
			{
				status: "CLOSED",
				solution: solutionInputRef.current.value,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		// console.log(response);
		toast({
			title: "Ticket Closed",
			description: `The ticket with ID ${ticketId} has been closed`,
			position: "top",
			status: "success",
			isClosable: true,
			variant: "left-accent",
		});
		mutate(`/api/tickets/${ticketId}`, response.data.ticket, {
			optimisticData: response.data.ticket,
		});
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Close Ticket</ModalHeader>
				<ModalCloseButton />

				<ModalBody>
					<Text fontSize={"large"} fontWeight={"semibold"}>
						You are closing this ticket
					</Text>
					<Text fontSize={"sm"} mb={4} color={"red"}>
						Please note that this action cannot be undone
					</Text>
					<Text mb={1}>Please tell the solution of this ticket</Text>
					<Textarea
						ref={solutionInputRef}
						placeholder="Solution"
						resize={"none"}
						mb={2}
					/>
				</ModalBody>

				<ModalFooter>
					<Button onClick={onClose}>Cancel</Button>
					<Button colorScheme={"red"} ml={2} onClick={submitHandler}>
						Close Ticket
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default CloseTicketModal;
