// import node module libraries
import { Col, Row } from 'react-bootstrap';

// import media files
import CommonHeaderTabs from './CommonHeaderTabs';

// import data files
import ComapniesListData from 'data/marketing/jobs/CompaniesListData';

// import media files
import JobTraining from 'assets/images/job/job-training.svg';
import HealthInsurance from 'assets/images/job/health-insurance.svg';
import SoftkillTraining from 'assets/images/job/skill-training.svg';
import Cafeteria from 'assets/images/job/cafeteria.svg';
import TeamOutings from 'assets/images/job/team-outings.svg';
import WorkFromHome from 'assets/images/job/work-from-home.svg';
import FreeTransport from 'assets/images/job/free-transport.svg';
import EducationAssistance from 'assets/images/job/education-assistance.svg';
import ChildCare from 'assets/images/job/child-care.svg';
import Gymnasiums from 'assets/images/job/gymnasiums.svg';
import FreeFood from 'assets/images/job/free-food.svg';
import InternationalRelocation from 'assets/images/job/international-relocation.svg';

const Benifits = () => {
	const data = ComapniesListData[0];
	const benefits = [
		{ title: 'Job Training', icon: JobTraining },
		{ title: 'Health Insurance', icon: HealthInsurance },
		{ title: 'Soft Skill Training', icon: SoftkillTraining },
		{ title: 'Cafeteria', icon: Cafeteria },
		{ title: 'Team Outings', icon: TeamOutings },
		{ title: 'Work From Home', icon: WorkFromHome },
		{ title: 'Free Transport', icon: FreeTransport },
		{ title: 'Education Assistance', icon: EducationAssistance },
		{ title: 'Child care', icon: ChildCare },
		{ title: 'Gymnasium', icon: Gymnasiums },
		{ title: 'Free Food', icon: FreeFood },
		{ title: 'International Relocation', icon: InternationalRelocation }
	];
	return (
		<CommonHeaderTabs data={data}>
			<Row className="mt-6">
				<Col md={12} className="col-md-12 ">
					<h2 className="mb-4">Employee Benefits</h2>
					<Row className="row-cols-2 row-cols-lg-5 row-cols-md-4 g-2 g-lg-3">
						{benefits.map((item, index) => {
							return (
								<Col xs key={index}>
									<div className="text-center my-5">
										<img src={item.icon} alt="" className="mb-2" />
										<h5 className="mb-0">{item.title}</h5>
									</div>
								</Col>
							);
						})}
					</Row>
				</Col>
			</Row>
		</CommonHeaderTabs>
	);
};

export default Benifits;
