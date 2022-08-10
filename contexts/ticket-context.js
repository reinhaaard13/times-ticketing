import React, { useState, useContext } from "react";

const TicketContext = React.createContext();

const TicketContextProvider = ({ children }) => {
	const [page, setPage] = useState(1);
	const [sortBy, setSortBy] = useState("created_date");
	const [sortOrder, setSortOrder] = useState("desc");
	const [filter, setFilter] = useState({});

	const fetchNextPage = () => {
		setPage((prevPage) => prevPage + 1);
	};

	const fetchPreviousPage = () => {
		setPage((prevPage) => prevPage - 1);
	};

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
			}}
		>
			{children}
		</TicketContext.Provider>
	);
};

export default TicketContextProvider;

export const useTicket = () => useContext(TicketContext);
