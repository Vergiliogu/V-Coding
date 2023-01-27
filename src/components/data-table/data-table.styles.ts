import styled from "styled-components";

export const Table = styled.table`
	@media (max-width: 640px) {
		font-size: 12px;
	}
`;

export const THead = styled.thead`
	text-align: left;
	background-color: rgb(0, 110, 255);
	padding: 6px 10px;
	color: white;
	font-weight: 800;
	
	th {
		padding: 6px 20px 6px 10px;

		&:first-of-type {
			border-top-left-radius: 7px;
		}
		&:last-of-type {
			border-top-right-radius: 7px;
		}
	}
`

export const TBody = styled.tbody`
	text-align: left;
	font-weight: 600;

	td {
		padding: 8px 20px 8px 10px;

	}

	tr:nth-child(even) {
		background-color: rgba(0, 110, 255, 0.2);
	}
`