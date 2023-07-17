// import node module libraries
import { Col, Row } from 'react-bootstrap';

// import custom components
import ProfileCard from '../ProfileCard';

// import data files
import { AuthorData } from 'data/marketing/AuthorData';

const AuthorTab = () => {
	return (
		<Row>
			{AuthorData.filter(function (datasource) {
				return datasource;
			}).map((item, index) => (
				<Col lg={6} md={6} sm={12} key={index}>
					<ProfileCard item={item} />
				</Col>
			))}
		</Row>
	);
};
export default AuthorTab;
