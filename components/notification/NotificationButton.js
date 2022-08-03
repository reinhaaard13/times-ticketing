import React from "react";

import { IconButton, Flex, Box } from "@chakra-ui/react";

import { MdNotifications } from "react-icons/md";

const NotificationButton = ({ count, onClick }) => {
	return (
		<IconButton
			backgroundColor={"blackAlpha.100"}
			_hover={{ backgroundColor: "blackAlpha.300" }}
			_active={{ backgroundColor: "blackAlpha.400" }}
			mr={2}
			size={"lg"}
			fontSize={"xl"}
      onClick={onClick}
			icon={
				<>
					<MdNotifications />
					{!!count && (
						<Box
							as="span"
							bgColor={"red"}
							p={1}
							position={"absolute"}
							top={1}
							right={"5px"}
							fontSize={"xx-small"}
							rounded={"full"}
						>
							{count}
						</Box>
					)}
				</>
			}
		/>
	);
};

export default NotificationButton;
