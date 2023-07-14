// import node module libraries
import { Card, Tab } from 'react-bootstrap';

// import custom components
import GridListViewButton from 'components/elements/miscellaneous/GridListViewButton';

// import sub components
import StudentsGridCard from './StudentsGridCard';
import StudentsListCard from './StudentsListCard';

// import profile layout wrapper
import ProfileLayout from './ProfileLayout';

const Students = () => {
	return (
		<ProfileLayout>
			<Tab.Container defaultActiveKey="grid">
				<Card className="mb-4 pb-1">
					<Card.Header className="border-0 d-flex justify-content-between ">
						<div className="mb-3 mb-lg-0">
							<h3 className="mb-0">Students</h3>
							<p className="mb-0">Meet people taking your course.</p>
						</div>
						<GridListViewButton keyGrid="grid" keyList="list" />
					</Card.Header>
				</Card>
				<Tab.Content>
					<Tab.Pane eventKey="grid" className="pb-4">
						{/* students in grid view */}
						<Card className="bg-transparent shadow-none">
							<Card.Body className="px-0 py-0">
								<StudentsGridCard />
							</Card.Body>
						</Card>
						{/* end of students in grid view */}
					</Tab.Pane>
					<Tab.Pane eventKey="list" className="pb-4">
						{/* students in list view */}
						<Card className="">
							<Card.Body className="px-0 py-0">
								<StudentsListCard />
								{/* end of students in list view */}
							</Card.Body>
						</Card>
					</Tab.Pane>
				</Tab.Content>
			</Tab.Container>
		</ProfileLayout>
	);
};

export default Students;
