// import node module libraries
import React, { Fragment, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Col, Row, Form } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-feather';

// import sub components
import TeamGridCard from './TeamGridCard';

// import data files
import { TeamData } from 'data/dashboard/projects/TeamData';

const TeamGrid = () => {
	const [teamMembers, setTeamMembersList] = useState(TeamData.slice(0, 500));
	const [pageNumber, setPageNumber] = useState(0);
	const teamMembersPerPage = 16;
	const pagesVisited = pageNumber * teamMembersPerPage;
	const pageCount = Math.ceil(teamMembers.length / teamMembersPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	const displayTeamMembers = teamMembers
		.slice(pagesVisited, pagesVisited + teamMembersPerPage)
		.map((teamMembers, index) => {
			return (
				<Col xl={3} lg={6} md={6} sm={12} key={index}>
					<TeamGridCard item={teamMembers} />
				</Col>
			);
		});
	// end of paging

	// searching code started
	const [searchTerm, setSearchTerm] = useState('');
	const getSearchTerm = (event) => {
		let searchTerm = event.target.value;
		setSearchTerm(searchTerm);
		if (searchTerm !== '') {
			const newTeamMembersList = TeamData.filter((instructor) => {
				return Object.values(instructor)
					.join(' ')
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
			});
			setTeamMembersList(newTeamMembersList.slice(0, 500));
			setPageNumber(0);
		} else {
			setTeamMembersList(TeamData.slice(0, 500));
		}
	};
	// end of searching code

	return (
		<Fragment>
			{/* search membmer */}
			<Row>
				<Col xxl={2} lg={3} md={12} xs={12} className="mb-4">
					<Form.Control
						type="search"
						placeholder="Search member"
						value={searchTerm}
						onChange={getSearchTerm}
					/>
				</Col>
			</Row>

			{/* show team membmers in grid view */}
			<Row>
				{displayTeamMembers.length > 0 ? (
					displayTeamMembers
				) : (
					<Col>No matching team members found.</Col>
				)}
			</Row>

			{/* grid view pagination*/}
			<ReactPaginate
				previousLabel={<ChevronLeft size="14px" />}
				nextLabel={<ChevronRight size="14px" />}
				pageCount={pageCount}
				onPageChange={changePage}
				containerClassName={'justify-content-center mb-0 pagination'}
				previousLinkClassName={'page-link mx-1 rounded'}
				nextLinkClassName={'page-link mx-1 rounded'}
				pageClassName={'page-item'}
				pageLinkClassName={'page-link mx-1 rounded'}
				disabledClassName={'paginationDisabled'}
				activeClassName={'active'}
			/>
		</Fragment>
	);
};

export default TeamGrid;
