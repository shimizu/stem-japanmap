import React from 'react';

const answerIndex = [
	null,
	'各校１人以上の教員が実施済みと把握',
	'各校１人以上の教員が年度末までに実施予定と把握',
	'一部の学校の教員が実施済み、あるいは年度末までに実施予定と把握',
	'行っていない、行わないと把握'
];

export default (props) => {
	const { data, onClick } = props;

	if (!data) return null;

	const p = data.object.properties;

	const address = [ p.KEN, p.SEIREI, p.GUN, p.SIKUCHOSON ].filter((d) => d).join('');
	const answer = answerIndex[p.answer];
	const style = {
		position: 'absolute',
		padding: '20px',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		color: 'white',
		fontSize: '12px',
		width: '300px',
		heigth: '150px',
		zIndex: '999',
		top: data.y,
		left: data.x
	};

	return (
		<div style={style} onClick={onClick}>
			<h1>{address}</h1>
			<p>{answer}</p>
		</div>
	);
};
