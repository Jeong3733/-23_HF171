// import node module libraries
import React, { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import Footer from 'layouts/marketing/footers/Footer';

const DefaultLayout = (props) => {
	const [login, setLogin] = useState(true);

	return (
		<Fragment>
			<NavbarDefault login={login} setLogin={setLogin} />
			<main>
				{props.children}
				<Outlet />
			</main>
			<Footer />
		</Fragment>
	);
};

export default DefaultLayout;
