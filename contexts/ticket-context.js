import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

const TicketContext = React.createContext();

const TicketContextProvider = ({ children, initialPage }) => {
	const [page, setPage] = useState(initialPage || 1);
	const [sortBy, setSortBy] = useState("created_date");
	const [sortOrder, setSortOrder] = useState("desc");
	const [filter, setFilter] = useState({});

	const router = useRouter();

	const fetchNextPage = () => {
		setPage((prevPage) => prevPage + 1);
	};

	const fetchPreviousPage = () => {
		setPage((prevPage) => prevPage - 1);
	};

	// for persistent pagination on back button
	useEffect(() => {
		router.push(`/?page=${page}`, undefined, { shallow: true });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page]);

	const changeSort = (toSortBy, toSortOrder) => {
		if (sortBy === toSortBy && !toSortOrder) {
			setSortOrder((prevSortOrder) =>
				prevSortOrder === "asc" ? "desc" : "asc"
			);
		}
		setSortBy(toSortBy);
		if (toSortOrder) {
			setSortOrder(toSortOrder);
		}
		setPage(1);
	};

	const addFilter = (field, value) => {
		if (value.trim().length === 0) {
			setFilter((prevFilter) => {
				const { [field]: _, ...newFilter } = prevFilter;
				return newFilter;
			});
		} else {
			setFilter((prevFilter) => ({ ...prevFilter, [field]: value }));
		}
		setPage(1);
	};

	return (
		<TicketContext.Provider
			value={{
				page,
				sortBy,
				sortOrder,
				filter,
				fetchNextPage,
				fetchPreviousPage,
				changeSort,
				addFilter,
				setPage,
			}}
		>
			{children}
		</TicketContext.Provider>
	);
};

export default TicketContextProvider;

export const useTicket = () => useContext(TicketContext);
