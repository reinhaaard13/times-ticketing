import React from "react";
import { AiFillHome, AiOutlineAppstore } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { MdSubject } from "react-icons/md";
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from "next/router";

import image from "../../public/logo.png";
import styles from "./SideBarLayout.module.css";

const SideBarLayout = (props) => {
	const router = useRouter();

	const path = router.pathname;

	return (
		<div className="flex w-screen">
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
						<a href="#">
							<AiFillHome />
							<span>Home</span>
						</a>
					</li>
					<li>
						<Link href="/ticket/new">
						<a className={`${path === '/ticket/new' && 'bg-slate-500'}`}>
							<FaPencilAlt />
							<span>Add Ticket</span>
						</a>
						</Link>
					</li>
					<li>
						<Link href="/subjects">
							<a className={`${path === '/subjects' && 'bg-slate-500'}`}>
								<MdSubject />
								<span>Subject Cases</span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="/product">
							<a className={`${path === '/product' && 'bg-slate-500'}`}>
								<AiOutlineAppstore />
								<span>Products</span>
							</a>
						</Link>
					</li>
				</ul>
			</aside>
			<div className="flex-1 overflow-hidden bg-slate-100">{props.children}</div>
		</div>
	);
};

export default SideBarLayout;
