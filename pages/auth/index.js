import React from "react";
import Image from "next/image";
import { useFormik } from "formik";

import Input from "../../components/UI/Input";

const AuthPage = () => {
	const formik = useFormik({
		initialValues: {
			user: "",
			password: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div className="flex md:flex-row flex-col h-screen p-2 w-full md:justify-evenly items-center bg-gradient-to-tl from-[#485563] to-[#29323c]">
			{/* Logo */}
			<div className="flex flex-col justify-center items-center my-4">
				<div className="relative">
					<Image src="/logo.png" alt="logo" width={200} height={200} />
				</div>
				<h1 className="font-bold text-xl md:text-3xl md:mt-4 text-white logo">
					TIMES <span className="font-normal">Ticketing</span>
				</h1>
			</div>
			<div className="flex flex-col w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
				<h1 className="text-2xl font-bold mb-4">Login</h1>
				<form className="flex flex-col" onSubmit={formik.handleSubmit} >
					<Input
						label="Enter Your Username / Email"
						id="user"
						name="user"
						value={formik.values.user}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.errors.user}
					/>

					<Input
						label="Enter Your Password"
						id="password"
						name="password"
						type="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.errors.password}
					/>

					<button type="submit" className="px-5 py-2 rounded-full font-medium text-sm self-center tracking-wider uppercase bg-slate-600 text-white w-fit">
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default AuthPage;
