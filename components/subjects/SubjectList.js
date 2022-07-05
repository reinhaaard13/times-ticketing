import React from "react";
import { BiPencil } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import { useRouter } from "next/router";

import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Button,
	HStack,
} from "@chakra-ui/react";

import Badge from "../UI/Badge";
// import styles from "./SubjectList.module.css";

const SubjectList = (props) => {
	const router = useRouter();

	const editHandler = (id) => {
		router.push(`/subjects/edit/${id}`);
	};

	const content = (
		<TableContainer className="border border-slate-500/20 rounded-xl w-full">
			<Table variant="simple" size="sm">
				<Thead className="bg-slate-500/20">
					<Tr>
						<Th width="2">No.</Th>
						<Th>Subject Case Description</Th>
						<Th width="4">Severity</Th>
						<Th width="16">Actions</Th>
					</Tr>
				</Thead>
				<Tbody>
					{props.subjects.map((subject, idx) => (
						<Tr key={idx}>
							<Td className="uppercase">{idx + 1}</Td>
							<Td fontSize="medium">{subject.subject}</Td>
							<Td>
								<Badge severity={subject.severity} />
							</Td>
							<Td>
								<HStack>
									<Button
										leftIcon={<BiPencil />}
										onClick={editHandler.bind(this, subject.id)}
										colorScheme="teal"
										size="sm"
									>
										Edit
									</Button>
									<Button
										leftIcon={<FaRegTrashAlt />}
										onClick={props.onDelete.bind(this, subject.id)}
										colorScheme="red"
										size="sm"
									>
										Delete
									</Button>
								</HStack>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);

	return content;
	// <div className="w-full overflow-x-auto rounded-lg shadow">
	// 	<table className={styles.subject_table}>
	// 		<thead>
	// 			<tr>
	// 				<th className="w-24">No.</th>
	// 				<th>Subject Case Description</th>
	// 				<th className="w-24">Severity</th>
	// 				<th className="w-52">Actions</th>
	// 			</tr>
	// 		</thead>
	// 		<tbody>
	// 			{props.subjects.map((subject, idx) => (
	// 				<tr key={idx}>
	// 					<td className="uppercase">{idx + 1}</td>
	// 					<td>{subject.subject}</td>
	// 					<td>
	// 						<Badge severity={subject.severity} />
	// 					</td>
	// 					<td className={styles.actions}>
	// 						<button onClick={editHandler.bind(this, subject.id)}>
	// 							<span>
	// 								<BiPencil />
	// 							</span>
	// 							Edit
	// 						</button>
	// 						<button onClick={props.onDelete.bind(this, subject.id)}>
	// 							<span>
	// 								<FaRegTrashAlt />
	// 							</span>
	// 							Delete
	// 						</button>
	// 					</td>
	// 				</tr>
	// 			))}
	// 		</tbody>
	// 	</table>
	// </div>
};

export default SubjectList;
