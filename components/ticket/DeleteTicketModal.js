import React from "react";
import moment from "moment";
import axios from "axios";
import { useAuth } from "../../contexts/auth-context";

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
	useToast,
} from "@chakra-ui/react";


const DeleteTicketModal = (props) => {
	const { token } = useAuth();
	const toast = useToast();

	const confirmHandler = async () => {
		try {
			const response = await axios.delete(
				`/api/tickets/${props.ticket.ticket_id}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
      console.log(response);
			props.onDelete();
			props.onClose();
		} catch (error) {
			props.onClose();
			console.log(error);
			toast({
				title: "An error occured",
				description: `${error.response?.data.error}`,
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
				<ModalHeader>Delete Ticket</ModalHeader>
				<ModalCloseButton />

				<ModalBody>
          <Text>Are you sure you want to delete this ticket?</Text>
          <Text fontSize={'sm'} textColor={'red'}>This action cannot be undone</Text>
				</ModalBody>

				<ModalFooter>
					<Button mr={3} onClick={props.onClose}>
						Cancel
					</Button>
					<Button colorScheme="red" onClick={confirmHandler}>
						Delete This Ticket
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default DeleteTicketModal;
