import React from "react";
import { AiFillHome, AiOutlineAppstore } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { MdSubject, MdOutlineLogout } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth } from "../../contexts/auth-context";

import { Box, Flex, Tooltip, Divider } from "@chakra-ui/react";
import Header from "./Header";

import image from "../../public/logo.png";
import styles from "./SideBarLayout.module.css";

const SideBarLayout = (props) => {
	const router = useRouter();
	const { role, privileges, logout } = useAuth();

	const path = router.pathname;

	return (
		<div className="flex w-full">
			<aside className={styles.sidebar}>
				<ul>
					<li>
						<a href="#">
							<div className="relative w-full h-full">
								<Image
									alt="times-logo"
									src={image}
									layout="fill"
									objectFit="contain"
								/>
							</div>
						</a>
					</li>
					<li>
						<Link href="/">
							<a className={`${path === "/" && "bg-slate-500"}`}>
								<Tooltip label="Home" placement="right">
									<span>
										<AiFillHome />
									</span>
								</Tooltip>
							</a>
						</Link>
					</li>
					{privileges.includes("TICKET_CREATE") && (
						<li>
							<Link href="/ticket/new">
								<a className={`${path === "/ticket/new" && "bg-slate-500"}`}>
									<Tooltip label="Add Ticket" placement="right">
										<span>
											<FaPencilAlt />
										</span>
									</Tooltip>
								</a>
							</Link>
						</li>
					)}

					{role === "Administrator" && (
						<React.Fragment>
							<li>
								<Link href="/subject">
									<a className={`${path === "/subject" && "bg-slate-500"}`}>
										<Tooltip label="Subject Cases" placement="right">
											<span>
												<MdSubject />
											</span>
										</Tooltip>
									</a>
								</Link>
							</li>
							<li>
								<Link href="/product" passHref>
									<a className={`${path === "/product" && "bg-slate-500"}`}>
										<Tooltip label="Products" placement="right">
											<span>
												<AiOutlineAppstore />
											</span>
										</Tooltip>
									</a>
								</Link>
							</li>
							<li>
								<Link href="/admin/register" passHref>
									<a
										className={`${
											path === "/admin/register" && "bg-slate-500"
										}`}
									>
										<Tooltip label="Register User" placement="right">
											<span>
												<FiUserPlus />
											</span>
										</Tooltip>
									</a>
								</Link>
							</li>
							<li>
								<Link href="/admin/report" passHref>
									<a
										className={`${
											path === "/admin/report" && "bg-slate-500"
										}`}
									>
										<Tooltip label="Issue A Report" placement="right">
											<span>
												<HiOutlineDocumentReport />
											</span>
										</Tooltip>
									</a>
								</Link>
							</li>
						</React.Fragment>
					)}
					<li className="mt-auto">
						{/* <Link href="" passHref> */}
						<a onClick={logout}>
							<Tooltip label="Logout" placement="right">
								<span className="text-red-500">
									<MdOutlineLogout />
								</span>
							</Tooltip>
						</a>
						{/* </Link> */}
					</li>
				</ul>
			</aside>
			<div className="flex-1 bg-slate-100 overflow-x-scroll">
				<Header />
				<div className="relative w-full">{props.children}</div>
			</div>
		</div>
	);
};

export default SideBarLayout;
