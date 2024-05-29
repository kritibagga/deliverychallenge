import React, { useState } from "react";

const countries = [
	{ label: "Select a country", value: "" },
	{ label: "United States", value: "US" },
	{ label: "Canada", value: "CA" },
	// Add more countries as needed
];

const states = {
	US: [
		{ label: "Select a state", value: "" },
		{ label: "New York", value: "NY" },
		{ label: "California", value: "CA" },
	],
	CA: [
		{ label: "Select a province", value: "" },
		{ label: "Ontario", value: "ON" },
		{ label: "Quebec", value: "QC" },
	],
};

const CountryStateDropdown = ({ onCountryChange, onStateChange }) => {
	const [selectedCountry, setSelectedCountry] = useState("");
	const [selectedState, setSelectedState] = useState("");

	const [disabled, setDisabled] = useState(true);

	const handleCountryChange = (event) => {
		const countryValue = event.target.value;
		setDisabled(false);
		setSelectedCountry(countryValue);
		setSelectedState("");
		onCountryChange(countryValue);
	};

	const handleStateChange = (event) => {
		setSelectedState(event.target.value);
		onStateChange(event.target.value);
	};

	const countryOptions = countries.map((country) => (
		<option
			key={country.value}
			value={country.value}>
			{country.label}
		</option>
	));

	const stateOptions = states[selectedCountry]
		? states[selectedCountry].map((state) => (
				<option
					key={state.value}
					value={state.value}>
					{state.label}
				</option>
		  ))
		: null;

	return (
		<>
			<div className='payment-group'>
				<label
					className='payment-label'
					htmlFor='country'>
					Country:
				</label>
				<select
					className='payment-select'
					id='country'
					required
					onChange={handleCountryChange}
					value={selectedCountry}>
					{countryOptions}
				</select>
			</div>
			<div className='payment-group'>
				<label
					className='payment-label'
					htmlFor='state'>
					State/Province:
				</label>
				<select
					className='payment-select'
					id='state'
					required
					placeholder='Select a State'
					disabled={disabled}
					onChange={handleStateChange}
					value={selectedState}>
					{stateOptions}
				</select>
			</div>
		</>
	);
};

export default CountryStateDropdown;
