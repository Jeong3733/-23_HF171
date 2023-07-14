// import node module libraries
import { Card, ListGroup } from 'react-bootstrap';

const ProjectDescription = () => {
	return (
		<Card>
			<Card.Body>
				<div className="mb-4">
					<h4 className="mb-2">Project Description</h4>
					<p>
						Give a high-level overview of the product / project you're working
						on, its goals, etc..Elaborate on the target audience of your
						project/product, link out to additional resources
					</p>
				</div>
				<div className="mb-4">
					<h4 className="mb-2">Target Audience</h4>
					<p>
						Various versions have evolved over the years, sometimes by accident,
						sometimes on purpose (injected humour and the like).
					</p>

					{/* list  */}
					<ListGroup bsPrefix="list-unstyled" as="ul">
						<ListGroup.Item as="li" bsPrefix=" ">
							- Nulla tincidunt metus nec commodo volutpat.
						</ListGroup.Item>
						<ListGroup.Item as="li" bsPrefix=" ">
							- Aliquam erat volutpat.
						</ListGroup.Item>
						<ListGroup.Item as="li" bsPrefix=" ">
							- Vestibulum ante ipsum primis in faucibus orci luctus.
						</ListGroup.Item>
						<ListGroup.Item as="li" bsPrefix=" ">
							- Ultrices posuere cubilia curae.
						</ListGroup.Item>
						<ListGroup.Item as="li" bsPrefix=" ">
							- UI luctus et erat vel efficitur.
						</ListGroup.Item>
					</ListGroup>

					<p>
						Vivamus vehicula eros id pharetra viverra. In ac ipsum lacus.
						Phasellus facilisis libero eu dolor placerat, sed porttitor augue
						efficitur. Vestibulum tincidunt augue tempus, venenatis sem id,
						ultricies justo. Aliquam erat volutpat.
					</p>
				</div>
				<div>
					<h4 className="mb-2">Competition</h4>
					<p className="mb-0">
						List your competitors here and recommendations how to position your
						product against the competition & handle objections
					</p>
				</div>
			</Card.Body>
		</Card>
	);
};
export default ProjectDescription;
