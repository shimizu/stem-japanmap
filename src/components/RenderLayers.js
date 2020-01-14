import { GeoJsonLayer } from 'deck.gl';

const colorRange = [ null, [ 60, 255, 60 ], [ 60, 60, 255 ], [ 255, 255, 60 ], [ 255, 60, 60 ], [ 60, 60, 60 ] ];

export function renderLayers(props) {
	const { cityData, prefData, onClick } = props;

	if (!cityData) return [];

	const city = [
		new GeoJsonLayer({
			id: 'city-layer',
			data: cityData,
			pickable: true,
			stroked: true,
			filled: true,
			lineWidthScale: 20,
			lineWidthMinPixels: 0.5,
			getFillColor: (d) => colorRange[d.properties['answer']],
			getLineColor: [ 120, 120, 120 ],
			onClick: onClick
		})
	];

	const pref = [
		new GeoJsonLayer({
			id: 'pref-layer',
			data: prefData,
			pickable: false,
			stroked: true,
			filled: false,
			lineWidthScale: 20,
			lineWidthMinPixels: 1.5,
			getFillColor: [ 0, 0, 0 ],
			getLineColor: [ 20, 20, 20 ]
		})
	];

	return [ city, pref ];
}
