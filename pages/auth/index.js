import React from "react";
import Head from "next/head";
import Image from "next/image";

import LoginForm from "../../components/auth/LoginForm";
import image from "../../public/logo.png";

const AuthPage = () => {
	// const [isLoginMode, setIsLoginMode] = use
	return (
		<>
		<Head>
			<title>TIMES Login</title>
		</Head>
		<div className="flex md:flex-row flex-col h-full min-h-screen p-2 w-full md:justify-evenly items-center bg-gradient-to-tl from-[#485563] to-[#29323c]">
			{/* Logo */}
			<div className="flex flex-col justify-center items-center my-4">
				<div className="relative">
					<Image src={image} alt="logo" width={200} height={200} />
				</div>
				<h1 className="font-bold text-xl md:text-3xl md:mt-4 text-white logo">
					TIMES <span className="font-normal">Ticketing</span>
				</h1>
			</div>
				<LoginForm />
		</div>
		</>
	);
};

export default AuthPage;
