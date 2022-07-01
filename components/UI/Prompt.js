import React from "react";
import { Transition, Dialog } from "@headlessui/react";

const Prompt = ({
	show,
	onClose,
	onConfirm,
	title,
	description,
	primaryAction,
	secondaryAction,
}) => {
	return (
		<Transition appear show={show} as={React.Fragment}>
			<Dialog as="div" className="relative z-10" onClose={onClose}>
				<Transition.Child
					as={React.Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={React.Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
								<Dialog.Title
									as="h3"
									className="text-lg font-medium leading-6 text-slate-800"
								>
									{title}
								</Dialog.Title>
								<div className="mt-2">
									<p className="text-sm text-slate-500">{description}</p>
								</div>

								<div className="mt-4 text-right">
									{secondaryAction && (
										<button
											type="button"
											className="mr-2 inline-flex justify-center rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
											onClick={onClose}
										>
											{secondaryAction}
										</button>
									)}
									{primaryAction && (
										<button
											type="button"
											className="inline-flex justify-center rounded-md text-red-100 px-4 py-2 text-sm font-medium bg-red-800 hover:bg-red-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
											onClick={onConfirm}
										>
											{primaryAction}
										</button>
									)}
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default Prompt;
