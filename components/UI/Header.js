/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
	Avatar,
	List,
	ListItem,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Portal,
	Flex,
} from "@chakra-ui/react";

import styles from "./Header.module.css";

import HeaderBGSvg from "./HeaderBGSvg";
import Notification from "../notification/Notification";
import { useAuth } from "../../contexts/auth-context";

const Header = () => {
	const { user, logout } = useAuth();
	const router = useRouter();

	const logoutHandler = () => {
		router.replace("/auth");
		logout();
	};

	return (
		<div className={`${styles.header} relative`}>
			<div className="container p-2 z-10 flex items-center justify-between">
				<h1 className="font-bold text-xl logo">
					TIMES <span className="font-normal">Ticketing</span>
				</h1>
				<Flex alignItems={"center"}>
					<Notification />
					<Menu>
						<MenuButton as={"div"} className={"cursor-pointer"}>
							<div className={styles.profile}>
								<p>{user?.name}</p>
								<Avatar name={user?.name} />
							</div>
						</MenuButton>
						<MenuList textColor={"gray.800"}>
							<MenuItem color={"red.500"} onClick={logoutHandler}>
								Logout
							</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</div>
			<div className="w-full h-60 self-start z-0 absolute">
				<HeaderBGSvg />
			</div>
		</div>
	);
};

export default Header;
