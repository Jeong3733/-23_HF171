// import node module libraries
import { Col, Row, Card, Image } from 'react-bootstrap';

// import media files
import Blogpost1 from 'assets/images/blog/blogpost-1.jpg';

const AboutTab = () => {
	return (
		<Row>
			<Col lg={12} md={12} sm={12}>
				{/* Card */}
				<Card>
					<Card.Header>
						<h3 className="mb-0">About Path</h3>
					</Card.Header>
					<Card.Body>
						<h2>Header Level 2</h2>
						<p>
							Quickly design and customize responsive mobile-first sites with
							Bootstrap, the world’s most popular front-end open source toolkit,
							featuring Sass variables and mixins, responsive grid system,
							extensive prebuilt components, and powerful JavaScript plugins.
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
							obcaecati sint dolore officiis unde veritatis dignissimos iusto
							fugit officia? Atque ullam, saepe tempora eum voluptates cum
							labore nisi mollitia quidem!
						</p>
						<p className="mb-4">
							Vestibulum nec porta tortor. Phasellus metus quam, semper ut
							tincidunt sit amet, viverra quis neque. Nullam mattis mollis massa
							nec pulvinar. Vivamus ut velit orci. Aenean nec pretium augue. In
							eu tellus quis urna vestibulum pulvinar. Etiam in elementum
							lectus, id dignissim mauris. Quisque tempus posuere aliquet.
						</p>
						<h3 className="mb-3">Header Level 3 </h3>
						{/* Img */}
						<Image src={Blogpost1} alt="" className="img-fluid mb-5 w-100" />
						<h4 className="mb-5">Header Level 4 </h4>
						{/* Blockquote */}
						<blockquote className="blockquote-left ">
							<p className="mb-4 font-italic ms-4">
								Blockquote. Lorem ipsum dolor sit amet, consectetur adipiscing
								elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a
								est eget ligula molestie gravida. Curabitur massa. Donec
								eleifend, libero at sagittis mollis, tellus est malesuada
								tellus, at luctus turpis elit sit amet quam. Vivamus pretium
								ornare est
							</p>
							<footer className="blockquote-footer ms-4">Andrew Watkins</footer>
						</blockquote>
						<ol>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Consectetur adipiscing elit</li>
							<li>Integer molestie lorem at massa</li>
							<li>Facilisis in pretium nisl aliquet</li>
						</ol>
						<h5 className="mb-3 mt-4">Header Level 5 </h5>
						<ul>
							<li>Phasellus iaculis neque</li>
							<li>Purus sodales ultricies</li>
							<li>Vestibulum laoreet porttitor sem</li>
							<li>Ac tristique libero volutpat at</li>
						</ul>
						<h6 className="mb-3 mt-4">Header Level 6 </h6>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Provident, maiores laboriosam necessitatibus eveniet suscipit ad
							accusamus nisi dolores dolorum deserunt atque dicta libero
							doloribus veritatis enim tempora! Laboriosam quasi quod sint
							incidunt neque? Perferendis tempore neque molestias reiciendis
							consequuntur hic explicabo exercitationem ipsum a esse? Sit soluta
							reiciendis sint molestiae!
						</p>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};
export default AboutTab;
