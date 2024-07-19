import React, {useState} from 'react'

function OnChange() {
    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState();
    function nameChange(e) {
        const val = e.target.value;
        setName(val);
    }
    function qntyChange(e) {
        const val = e.target.value;
        setQuantity(val);
    }
    function commentUpdate(event) {
        setComment(event.target.value);
    }
    function selectPayment(event) {
        setPayment(event.target.value);
    }
    function shippingStatus(event) {
        setShipping(event.target.value);
    }
  return (
    <div>
        <input type='text' value={name} onChange={nameChange}/>
        <p>Name: {name}</p>
        <input type='number' onChange={qntyChange}/>
        <p>Quantity: {quantity}</p>
        <h3>Comment</h3>
        <textarea value={comment} onChange={commentUpdate}/>
        <p>{comment}</p>
        <select value={payment} onChange={selectPayment}>
            <option value={payment}>Select Payment Type</option>
            <option value='Visa'>Visa</option>
            <option value='MasterCard'>MasterCard</option>
            <option value='CreditCard'>CreditCard</option>
        </select>
        <p>Payment: {payment}</p>
        <label>
            <input type='radio' value='Pick Up'
                checked={shipping === 'Pick Up'}
                onChange={shippingStatus}
            />
            Pick Up
        </label>
        <br/>
        <label>
            <input type='radio' value='Delivery'
                checked={shipping === 'Delivery'}
                onChange={shippingStatus}
            />
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>
  )
}

export default OnChange
