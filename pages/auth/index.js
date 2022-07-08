import React, { useState } from "react";
import Image from "next/image";

import LoginForm from "../../components/auth/LoginForm";
import SignupForm from "../../components/auth/SignupForm";

const AuthPage = () => {
	const [isLoginMode, setIsLoginMode] = useState(true)

	const toggleMode = () => {
		setIsLoginMode(!isLoginMode)
	}

	return (
		<div className="flex md:flex-row flex-col min-h-full h-screen p-2 w-full md:justify-evenly items-center bg-gradient-to-tl from-[#485563] to-[#29323c]">
			{/* Logo */}
			<div className="flex flex-col justify-center items-center my-4">
				<div className="relative">
					<Image src="/logo.png" alt="logo" width={200} height={200} />
				</div>
				<h1 className="font-bold text-xl md:text-3xl md:mt-4 text-white logo">
					TIMES <span className="font-normal">Ticketing</span>
				</h1>
			</div>
			{isLoginMode ? (<LoginForm onChangeMode={toggleMode} />) : (<SignupForm onChangeMode={toggleMode} />)}
		</div>
	);
};

export default AuthPage;
