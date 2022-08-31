import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiPencil } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
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
import SubjectService from "../../services/subject.service";

const SubjectList = (props) => {
	const router = useRouter();
	const [subjects, setSubjects] = useState([])

	useEffect(() => {
		async function fetchSubjects() {
			const subjects = await SubjectService.getAllSubjects();

			setSubjects(subjects);
		}
		fetchSubjects();
	}, [])

	const editHandler = (id) => {
		router.push(`/subject/edit/${id}`);
	};

	const content = (
		<TableContainer shadow={"lg"} className="border border-slate-500/20 rounded-xl w-full">
			<Table		
				variant="simple"
				bg={"whiteAlpha.900"}
				backdropFilter={"auto"}
				backdropBlur={"md"}
				size="sm"
			>
				<Thead className="bg-slate-500/20">
					<Tr>
						<Th width="2">No.</Th>
						<Th>Case Subject Description</Th>
						<Th>Product</Th>
						<Th>Subproduct</Th>
						<Th width="4">Severity</Th>
						<Th width="16">Actions</Th>
					</Tr>
				</Thead>
				<Tbody>
					{subjects.map((subject, idx) => (
						<Tr key={idx}>
							<Td className="uppercase">{idx + 1}</Td>
							<Td>{subject.subject}</Td>
							<Td>{subject.Subproduct.Product.product_name}</Td>
							<Td>{subject.Subproduct.subproduct_name}</Td>
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
					<Tr>
						<Td></Td>
						<Td>
							<Link href="/subject/new">
								<Button leftIcon={<FiPlus />} size={"sm"}>
									Create New Subject Case
								</Button>
							</Link>
						</Td>
					</Tr>
				</Tbody>
			</Table>
		</TableContainer>
	);

	return content;
};

export default SubjectList;
