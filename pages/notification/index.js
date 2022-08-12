import React from "react";
import Head from "next/head";
import useSWR from "swr";
import { useAuth } from "../../contexts/auth-context";

import { Text, Box, Flex, Spinner, Divider } from "@chakra-ui/react";

import NotificationItem from "../../components/notification/NotificationItem";
import SideBarLayout from "../../components/UI/SideBarLayout";

const NotificationPage = () => {
	const { data } = useSWR("/api/users/notification");
	return (
		<>
		<Head>
			<title>My Notifications</title>
		</Head>
		<SideBarLayout>
			<Box
				className="container"
				maxW={'container.md'}
				bg={"white"}
				shadow={"lg"}
				rounded={"lg"}
        overflow={'hidden'}
			>
				<Text marginX={4} my={3} fontWeight={"semibold"} fontSize={"2xl"}>
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
									onClick={null}
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
									onClick={null}
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
			</Box>
		</SideBarLayout>
		</>
	);
};

export default NotificationPage;
