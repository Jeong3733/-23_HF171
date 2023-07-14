// import node module libraries
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

// import sub component
import CommonHeaderTabs from './CommonHeaderTabs';

// import MDI icons
import Icon from '@mdi/react';
import { mdiFacebook, mdiTwitter, mdiLinkedin } from '@mdi/js';

// import data files
import ComapniesListData from 'data/marketing/jobs/CompaniesListData';

const About = () => {
	const data = ComapniesListData[0];
	return (
		<CommonHeaderTabs data={data}>
			<div className="mb-6">
				{/* About the company text */}
				<h2 className="mb-3">About the company</h2>
				<p>
					We ensure the highest levels of certainty and satisfaction through a
					deep-set commitment to our clients, comprehensive industry expertise
					and a global network of innovation and delivery centers...
				</p>
				<p>
					Aliquam pellentesque mollis interdum. Proin ligula lacus, maximus quis
					ante a, luctus sodales sapien. Donec ut tristique nisi. Nulla a quam
					sit amet turpis convallis porttitor vel sed quam. Ut in odio enim.
					Maecenas eu tellus erat. Maecenas nec maximus elit, ac suscipit justo.
					Maecenas nisl tellus, sodales non gravida eget, placerat sit amet
					erat.{' '}
				</p>
			</div>
			{/* Misson text */}
			<div className="mb-6">
				<h2 className="mb-3">Mission</h2>
				<p>
					Aliquam pellentesque mollis interdum. Proin ligula lacus, maximus quis
					ante a, luctus sodales sapien. Donec ut tristique nisi. Nulla a quam
					sit amet turpis convallis porttitor vel sed quam. Ut in odio enim.
					Maecenas eu tellus erat. Maecenas nec maximus elit, ac suscipit justo.
					Maecenas nisl tellus, sodales non gravida eget, placerat sit amet
					erat.{' '}
				</p>
			</div>
			{/* Vision text */}
			<div className="mb-6">
				<h2 className="mb-3">Vision</h2>
				<p>
					Proin ligula lacus, maximus quis ante a, luctus sodales sapien.
					Aliquam pellentesque mollis interdum. Nulla a quam sit amet turpis
					convallis port titor vel sed quam. Donec ut tristique nisi.{' '}
				</p>
			</div>
			<div>
				{/* table */}
				<Table borderless className="w-lg-40 w-md-50">
					<tbody>
						<tr>
							<td className="ps-0 pb-0">
								<span className="text-dark fw-semi-bold">Founded:</span>
							</td>
							<td className="ps-0 pb-0">
								<span>2011</span>
							</td>
						</tr>
						<tr>
							<td className="ps-0 pb-0">
								<span className="text-dark fw-semi-bold">Company size:</span>
							</td>
							<td className="ps-0 pb-0">
								<span>350 - 500</span>
							</td>
						</tr>
						<tr>
							<td className="ps-0 pb-0">
								<span className="text-dark fw-semi-bold">Website:</span>
							</td>
							<td className="ps-0 pb-0">
								<Link to="https://codescandy.com/">
									https://codescandy.com/
								</Link>
							</td>
						</tr>
						<tr>
							<td className="ps-0 pb-0">
								<span className="text-dark fw-semi-bold">Industry:</span>
							</td>
							<td className="ps-0 pb-0">Information Technology</td>
						</tr>
						<tr>
							<td className="ps-0 pb-0">
								<span className="text-dark fw-semi-bold">Social Presence:</span>
							</td>
							<td className="ps-0 pb-0">
								<Icon
									path={mdiFacebook}
									className="fs-4 text-muted me-2"
									size={0.6}
								/>
								<Icon
									path={mdiTwitter}
									className="fs-4 text-muted me-2"
									size={0.6}
								/>
								<Icon
									path={mdiLinkedin}
									className="fs-4 text-muted"
									size={0.6}
								/>
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</CommonHeaderTabs>
	);
};

export default About;
