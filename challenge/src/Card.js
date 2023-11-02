import React from "react";

function Card({ data, onClick, className, index }) {
	return (
		<div
			className={className ? "card " + className : "card"}
			onClick={() => onClick(data, index)}>
			<p>Buy {data.amount} miles</p>
			<p>${data.cost.toFixed(2)}</p>
		</div>
	);
}

export default Card;
