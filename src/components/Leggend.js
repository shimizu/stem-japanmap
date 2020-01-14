import React from 'react';

const style = {
	position: 'absolute',
	padding: '20px',
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
	color: 'white',
	fontSize: '12px',
	width: '400px',
	heigth: '150px',
	zIndex: '999',
	top: 60,
	left: 20
};

export default (props) => {
	return (
		<div style={style}>
			<style jsx>
				{`
					ul {
						padding-left: 0.25em;
					}
					li {
						list-style: none;
					}
					li:before {
						display: inline-block;
						width: 12px;
						height: 12px;
						margin-right: 1em;
						content: "";
					}
					li.l1:before {
						background-color: rgb(60, 255, 60);
					}
					li.l2:before {
						background-color: rgb(60, 60, 255);
					}
					li.l3:before {
						background-color: rgb(255, 255, 60);
					}
					li.l4:before {
						background-color: rgb(255, 60, 60);
					}
					li.l5:before {
						background-color: rgb(60, 60, 60);
					}
				`}
			</style>
			<h3>問１～３を合わせた場合の、プログラミング教育に関する実践的な研修、または、授業の実践や模擬授業の実施状況・予定</h3>
			<ul>
				<li className="l1">各校１人以上の教員が実施済みと把握</li>
				<li className="l2">各校１人以上の教員が年度末までに実施予定と把握</li>
				<li className="l3">一部の学校の教員が実施済み、あるいは年度末までに実施予定と把握</li>
				<li className="l4">行っていない、行わないと把握</li>
				<li className="l5">データなし</li>
			</ul>
		</div>
	);
};
