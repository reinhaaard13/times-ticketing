import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import Image from "next/image";

import image from "../../public/logo.png";
import styles from "./SideBarLayout.module.css";

const SideBarLayout = (props) => {
	return (
		<div className="flex overflow-hidden">
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
						<a href="#">
							<FaPencilAlt />
							<span>Add Ticket</span>
						</a>
					</li>
				</ul>
			</aside>
			<div className="w-full">{props.children}</div>
		</div>
	);
};

export default SideBarLayout;
