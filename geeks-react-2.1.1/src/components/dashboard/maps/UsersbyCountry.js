// import node module libraries
import {
	ComposableMap,
	Geographies,
	Geography,
	Marker
} from 'react-simple-maps';

// url to a valid topojson file
const geoUrl =
	'https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json';

const markers = [
	{ markerOffset: 30, name: 'United Kingdom', coordinates: [-11.6368, 53.613] },
	{ markerOffset: 30, name: 'India', coordinates: [73.7276105, 20.7504374] },
	{
		markerOffset: 30,
		name: 'United States',
		coordinates: [-104.657039, 37.2580397]
	},
	{
		markerOffset: 30,
		name: 'Australia',
		coordinates: [115.2092761, -25.0304388]
	}
];

const UsersbyCountry = () => {
	return (
		<ComposableMap width={900}>
			<Geographies geography={geoUrl}>
				{({ geographies }) =>
					geographies.map((geo) => (
						<Geography
							key={geo.rsmKey}
							geography={geo}
							className="map-region"
						/>
					))
				}
			</Geographies>
			{markers.map(({ name, coordinates, markerOffset }) => (
				<Marker key={name} coordinates={coordinates}>
					<circle r={10} fill="#754ffe" stroke="#c5b7fc" strokeWidth={3} />
					<text textAnchor="middle" y={markerOffset} className="map-text">
						{name}
					</text>
				</Marker>
			))}
		</ComposableMap>
	);
};

export default UsersbyCountry;
