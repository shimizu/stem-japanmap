import React, { useEffect, useState } from 'react';
import DeckGL from 'deck.gl';
import { renderLayers } from './components/RenderLayers';
import Window from './components/Window.js';
import Leggend from './components/Leggend.js';

import { json } from 'd3-fetch';

const CITYDATA_URL = './data/city.geojson';
const PREFDATA_URL = './data/pref.geojson';

const MapWrapperStyle = {
	backgroundColor: '#444'
};

const HeaderStyle = {
	position: 'absolute',
	top: '0',
	zIndex: '9',
	width: '100%',
	height: '40px',
	whiteSpace: 'nowrap',
	overflowX: 'auto',
	backgroundColor: '#000'
};
const HeaderTitle = {
	color: 'white',
	textAlign: 'center',
	fontSize: '28px',
	lineHeight: 0
};

const FooterStyle = {
	position: 'absolute',
	bottom: '0',
	zIndex: '9',
	width: '100%',
	height: '40px',
	whiteSpace: 'nowrap',
	overflowX: 'auto',
	backgroundColor: '#000'
};

const FooterLink = {
	color: 'white',
	display: 'inline-block',
	marginLeft: '1em',
	marginTop: '16px',
	fontSize: '20px',
	lineHeight: 0
};

export default () => {
	const [ prefData, setPrefData ] = useState(null);
	const [ cityData, setCityData ] = useState(null);
	const [ detail, setDetail ] = useState();

	useEffect(() => {
		const fetchCityData = async () => {
			const result = await json(CITYDATA_URL);
			setCityData(result);
		};
		const fetchPrefData = async () => {
			const result = await json(PREFDATA_URL);
			setPrefData(result);
		};

		fetchCityData();
		fetchPrefData();
	}, []);

	const [ viewport, setViewport ] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
		longitude: 136.8624917,
		latitude: 36.0880768,
		zoom: 6,
		maxZoom: 16,
		pitch: 0,
		bearing: 0
	});

	//resize
	useEffect(() => {
		const handleResize = () => {
			setViewport((v) => {
				return {
					...v,
					width: window.innerWidth,
					height: window.innerHeight
				};
			});
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const onClick = (d) => {
		console.log('click', d.object.properties);
		setDetail(d);
	};
	const windowClick = () => {
		setDetail(null);
	};

	return (
		<div>
			<div style={HeaderStyle}>
				<h1 style={HeaderTitle}>市町村教育委員会における小学校プログラミング教育に関する取組状況等調査</h1>
			</div>
			<Leggend />
			<DeckGL
				style={MapWrapperStyle}
				layers={renderLayers({
					cityData: cityData,
					prefData: prefData,
					onClick: onClick
				})}
				initialViewState={viewport}
				controller={true}
			/>
			<Window data={detail} onClick={windowClick} />
			<div style={FooterStyle}>
				<a style={FooterLink} href="https://shimz.me/blog">
					About
				</a>
			</div>
		</div>
	);
};
