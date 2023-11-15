import "./App.css";
import React, { useState } from "react";
import { cardData } from "./CardData.js";
import Card from "./Card";

import PaymentForm from "./PaymentForm";

function App() {
	const [selectedCard, setSelectedCard] = useState(cardData[0]);
	const [current, setCurrent] = useState([true, false, false]);
	const setCardClass = (index) => {
		let temp = current;
		for (let i = 0; i < current.length; i++) {
			if (i === index) {
				temp[i] = true;
			} else {
				temp[i] = false;
			}
			setCurrent(temp);
		}
	};

	return (
		<div className='container'>
			<header className='heading'>
				<h1>Get your rewards faster. Buy, Gift or Transfer Miles today!</h1>
			</header>
			<div className='card-container'>
				{cardData.map((data, index) => (
					<Card
						key={index}
						index={index}
						data={data}
						onClick={(data, key) => {
							setSelectedCard(data);
							setCardClass(key);
						}}
						className={current[index] ? "card-selected" : ""}
					/>
				))}
			</div>
			<section>
				{selectedCard && <PaymentForm selectedCard={selectedCard} />}
			</section>
		</div>
	);
}

export default App;
