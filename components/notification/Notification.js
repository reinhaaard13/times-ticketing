import React from "react";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/auth-context";

import {
	IconButton,
	Flex,
	Box,
	Text,
	Divider,
	Spinner,
	useDisclosure,
	Portal,
	ModalOverlay,
	Fade,
	useMediaQuery,
} from "@chakra-ui/react";

import { MdNotifications } from "react-icons/md";

import NotificationButton from "./NotificationButton";
import NotificationItem from "./NotificationItem";

const Notification = () => {
  const router = useRouter();
	const { token } = useAuth();
	const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
	const [isPhone] = useMediaQuery("(max-width: 768px)");

	const { data } = useSWR("/api/users/notification", async (url) => {
		const response = await axios.get(url, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	});

	if (isPhone) {
		return (
			<NotificationButton
				count={data?.filter((n) => n.status === "UNREAD").length}
				onClick={() => router.push('/notification')}
			/>
		);
	}

	return (
		<>
			<NotificationButton
				count={data?.filter((n) => n.status === "UNREAD").length}
				onClick={onToggle}
			/>
			<Portal>
				{isOpen && (
					<Box
						w={"full"}
						h={"full"}
						position={"fixed"}
						top={0}
						left={0}
						onClick={onClose}
					></Box>
				)}
				<Fade in={isOpen} offsetY={"20px"} unmountOnExit>
					<Flex
						flexDir="column"
						position={"absolute"}
						top={20}
						right={10}
						textColor={"black"}
						bg={"whiteAlpha.800"}
						backdropFilter={'auto'}
						backdropBlur={'lg'}
						width={500}
						shadow={"lg"}
						rounded={"lg"}
						overflowY={"auto"}
						maxHeight={"500px"}
						className="scrollbar"
					>
						<Text marginX={4} my={3} fontWeight={"semibold"} fontSize={"lg"}>
							Notification
						</Text>
						<Divider />

						{data ? (
							<>
								{data.filter((notification) => notification.status === "UNREAD")
									.length > 0 && (
									<Text
										margin={4}
										my={2}
										fontWeight={"semibold"}
										className={"text-lime-600"}
									>
										Unread
									</Text>
								)}

								{data
									.filter((notification) => notification.status === "UNREAD")
									.map((notification, index) => (
										<NotificationItem
											notification={notification}
											key={index}
											onClick={onClose}
										/>
									))}

								{data.filter((notification) => notification.status === "READ")
									.length > 0 && (
									<Text
										margin={4}
										my={2}
										fontWeight={"semibold"}
										className={"text-lime-600"}
									>
										Earlier
									</Text>
								)}

								{data
									.filter((notification) => notification.status === "READ")
									.map((notification, index) => (
										<NotificationItem
											notification={notification}
											key={index}
											onClick={onClose}
										/>
									))}
							</>
						) : (
							<Flex
								alignItems={"center"}
								justifyContent={"center"}
								padding={4}
								gap={4}
							>
								<Spinner />
								<Text>Loading...</Text>
							</Flex>
						)}

						{data?.length === 0 && (
							<Text padding={4} color={"gray.600"}>
								You have no notification
							</Text>
						)}
					</Flex>
				</Fade>
			</Portal>
		</>
	);
};

export default Notification;
