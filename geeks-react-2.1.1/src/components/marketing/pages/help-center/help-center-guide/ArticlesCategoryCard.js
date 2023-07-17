// import node module libraries
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import MDI icons
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

const ArticlesCategoryCard = ({ item }) => {
	return (
		<Card className="border mb-4">
			<Card.Body className="p-5">
				{/* category title and description  */}
				<div className="mb-5">
					<h2 className="fw-semi-bold">{item.title}</h2>
					<p>{item.description}</p>
				</div>
				{/* articles list  */}
				<ListGroup as="ul" bsPrefix="list-unstyled">
					{item.articles.map((article, index) => {
						return (
							<ListGroup.Item as="li" className="mb-2" bsPrefix=" " key={index}>
								<Link
									to={`/marketing/help-center/guide-single/${item.categoryslug}/${article.articleslug}`}
									className="text-body"
								>
									<Icon
										path={mdiArrowRight}
										className="me-1 text-muted"
										size={0.6}
									/>
									{article.articletitle}
								</Link>
							</ListGroup.Item>
						);
					})}
				</ListGroup>
			</Card.Body>
			<Card.Footer>
				<Link to="#" className="link-primary">
					{item.totalarticles} articles <Icon path={mdiArrowRight} size={0.6} />
				</Link>
			</Card.Footer>
		</Card>
	);
};
export default ArticlesCategoryCard;
