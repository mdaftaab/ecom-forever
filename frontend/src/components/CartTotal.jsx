import { useContext } from 'react';
import {ShopContext} from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const {currency, getCartAmount, delivery_fee} = useContext(ShopContext);
  return (
    <div className='w-full'>
      <div className='text-2xl uppercase'>
        <Title text1={'Cart'} text2={'Totals'}/>
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency}{getCartAmount()}.00</p>
        </div>
        <hr/>
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency}{delivery_fee}.00</p>
        </div>
        <hr/>
        <div className='flex justify-between'>
          <b>Total</b>
          <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
        </div>
      </div>
      
    </div>
  )
}

export default CartTotal