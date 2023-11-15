import React, { useRef, useState } from "react";
import OrderSummary from "./OrderSummary";

function PaymentForm({ selectedCard }) {
	const formRef = useRef(null);
	const [disabled, setDisabled] = useState(true);
	const handleChange = (event) => {
		if (event.target.value) {
			setDisabled(false);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(formRef.current);
		for (const pair of formData) {
			console.log(`${pair[0]}: ${pair[1]}`);
		}
	};

	return (
		<div className='payment-form'>
			<form
				onSubmit={handleSubmit}
				ref={formRef}>
				<h2 className='payment-title'>Payment details</h2>
				<p className='payment-desc'>
					We accept all major credit cards. Please ensure that you enter your
					details exactly as they appear on your credit card statement. All
					fields are required unless is indicated.
				</p>

				<div className='payment-group'>
					<label
						className='payment-label'
						htmlFor='cardholder-name'>
						Cardholder name
					</label>
					<input
						className='payment-input'
						type='text'
						id='cardholder-name'
						name='cardholder'
						required
					/>
				</div>

				<div className='payment-group'>
					<label
						className='payment-label'
						htmlFor='card-number'>
						Card number
					</label>
					<input
						className='payment-input'
						type='text'
						id='card-number'
						required
						maxLength='16'
						pattern='\d{16}'
						name='cardnumber'
					/>
				</div>

				<div className='payment-group'>
					<label
						className='payment-label'
						htmlFor='expiration-date'>
						Expiration date
					</label>


					<div className='new-box'>
						<input
							className='payment-input'
							type='text'
							id='expiration-date'
							required
							placeholder='MMYY'
							maxLength='4'
              name='expirationdate'
							pattern='\d{4}'
						/>
					</div>
				</div>

				<div className='payment-group'>
					<label
						className='payment-label'
						htmlFor='cvv'>
						CVV
					</label>

					<div className='new-box'>
						<input
							className='payment-input'
							type='password'
							id='cvv'
							required
							maxLength='3'
              name='password'
							pattern='\d{3}'
						/>
					</div>

				</div>
				<div>
					<h2>Billing address</h2>

					<div className='payment-group'>
						<label
							className='payment-label'
							htmlFor='street-address'>
							Street Address
						</label>
						<input
							className='payment-input'
							type='text'
							id='street-address'
							required
							name='streetaddress'
						/>
					</div>

					<div className='payment-group'>
						<label
							className='payment-label'
							htmlFor='apt-number'>
							Apt, Suite, Unit Number (Optional)
						</label>
						<input
							className='payment-input'
							type='text'
							id='apt-number'
							name='aptnumber'
						/>
					</div>

					<div className='payment-group'>
						<label
							className='payment-label'
							htmlFor='city'>
							City / Town
						</label>
						<input
							className='payment-input'
							type='text'
							id='city'
							name='city'
							required
						/>
					</div>

					<div className='payment-group'>
						<label
							className='payment-label'
							htmlFor='country'>
							Country
						</label>
						<select
							className='payment-select'
							id='country'
							required
							onChange={handleChange}>
							<option value=''>Select a country </option>
							<option value='US'>United States</option>
							<option value='CA'>Canada</option>
						</select>
					</div>

					<div className='payment-group'>
						<label
							className='payment-label'
							htmlFor='state'>
							State / Province
						</label>
						<select
							className='payment-select'
							id='state'
							disabled={disabled}
							required>
							<option value=''>Select a state or province</option>
							<option value='NY'>New York</option>
							<option value='CA'>California</option>
						</select>
					</div>

					<div className='payment-group'>
						<label
							className='payment-label'
							htmlFor='zip'>
							Zip / Postal code
						</label>
						<input
							className='payment-input'
							type='text'
							id='zip'
							name='zip'
							required
						/>
					</div>

					<div className='payment-group'>
						<label
							className='payment-label'
							htmlFor='phone-number'>
							Phone number
						</label>
						<input
							className='payment-input'
							type='tel'
							id='phone-number'
							name='phonenumber'
							required
						/>
					</div>

					<div className='payment-group'>
						<label
							className='payment-label'
							htmlFor='email'>
							Email receipt to
						</label>
						<input
							className='payment-input'
							type='email'
							id='email'
							name='email'
							required
						/>
					</div>

					<div>
						<label className='payment-terms-label'>
							<input
								className='payment-checkbox'
								type='checkbox'
                id='terms-conditions'
							  name='termsandcondition'
								required
							/>
							<label
								className='payment-label'
								htmlFor='terms-conditions'>
								I agree to the{" "}
								<a href='https://www.google.com/'>terms & conditions</a>
							</label>
							<span className='checkmark'></span>

						</label>

						<button
							className='payment-btn'
							type='submit'>
							Buy Miles
						</button>
					</div>
				</div>
			</form>

			<div className='order-summary-wrap'>
				<OrderSummary data={selectedCard} />
			</div>
		</div>
	);
}

export default PaymentForm;
