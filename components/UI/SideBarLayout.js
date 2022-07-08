import React from "react";
import { AiFillHome, AiOutlineAppstore } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { MdSubject } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Box, Flex, Tooltip } from "@chakra-ui/react";
import Header from "./Header";

import image from "../../public/logo.png";
import styles from "./SideBarLayout.module.css";

const SideBarLayout = (props) => {
	const router = useRouter();

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
						<Link href="/admin/dashboard">
							<a>
								<Tooltip label="Home" placement="right">
									<span>
										<AiFillHome />
									</span>
								</Tooltip>
							</a>
						</Link>
					</li>
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
				</ul>
			</aside>
			<div className="flex-1 bg-slate-100">
				<Header />
				<div className="relative w-full z-10">{props.children}</div>
			</div>
		</div>
	);
};

export default SideBarLayout;
