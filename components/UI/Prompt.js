import React from "react";

import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Button,
} from "@chakra-ui/react";

const Prompt = ({
	show,
	onClose,
	onConfirm,
	title,
	description,
	primaryAction,
	secondaryAction,
	cancelRef,
}) => {
	const content = (
		<AlertDialog isOpen={show} cancelRef={cancelRef} onClose={onClose}>
			<AlertDialogOverlay>
				<AlertDialogContent>
					<AlertDialogHeader fontSize="lg" fontWeight="bold">
						Delete Subject
					</AlertDialogHeader>

					<AlertDialogBody>
						Are you sure want to delete this subject? This action can&apos;t be
						undone
					</AlertDialogBody>

					<AlertDialogFooter>
						<Button ref={cancelRef} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme="red" onClick={onConfirm} ml={3}>
							Delete
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	);

	return content;
};

export default Prompt;
