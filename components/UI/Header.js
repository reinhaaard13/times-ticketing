/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

import styles from "./Header.module.css";

import HeaderBGSvg from "./HeaderBGSvg"

const Header = () => {
	return (
		<div className={`${styles.header} relative`}>
			<div className="container p-2 z-10 flex items-center justify-between">
				<h1 className="font-bold text-xl logo">
					TIMES <span className="font-normal">Ticketing</span>
				</h1>
				<div className={styles.profile}>
					<p>Reinhard Kevin</p>
					<div className={styles.avatar}>
						<img src="https://via.placeholder.com/150" alt="" />
					</div>
				</div>
			</div>
			<div className="w-full h-60 self-start z-0 absolute">
				<HeaderBGSvg />
			</div>
		</div>
	);
};

export default Header;
