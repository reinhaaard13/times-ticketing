import React from "react";
import axios from "axios";

import { Flex } from "@chakra-ui/react";

import RegisterUserForm from "../../components/admin/RegisterUserForm";
import SideBarLayout from "../../components/UI/SideBarLayout";

const RegisterUserPage = (props) => {
	return (
		<SideBarLayout>
			<Flex
				className="container"
				p={6}
				direction={"column"}
				bg={"whiteAlpha.900"}
				backdropFilter={"auto"}
				backdropBlur={"md"}
				mt={"2"}
				rounded={"xl"}
				shadow={"lg"}
			>
				<RegisterUserForm roles={props.roles} />
			</Flex>
		</SideBarLayout>
	);
};

export async function getServerSideProps() {
	const response = await axios.get("/api/roles");

	return {
		props: { roles: response.data },
	};
}

export default RegisterUserPage;
