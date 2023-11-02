import React from "react";

function OrderSummary({ data }) {
	return (
		<div className='order-summary'>
            <div className='order-wrap'>
			<h2>Order summary</h2>
            <hr/>
			<div className='summary-item'>
				<p className='summary-label'>Total miles</p>
				<p className='summary-value'>{data.amount}</p>
			</div>
			<div className='summary-item'>
				<p className='summary-label'>GST/HST</p>
				<p className='summary-value'>${(data.amount / 100).toFixed(2)}</p>
			</div>
            <hr/>
			<div className='summary-item'>
				<p className='summary-label'>Total cost</p>
				<p className='summary-value'>${(data.cost+(data.amount / 100)).toFixed(2)}</p>
			</div>
            </div>
		</div>
	);
}

export default OrderSummary;
