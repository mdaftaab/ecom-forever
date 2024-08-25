import {useContext, useEffect, useState} from 'react';
import {ShopContext} from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title'
import CartTotal from '../components/CartTotal';


const Cart = () => {
  const {products, currency, cartItems, updateQuantity, navigate} = useContext(ShopContext);
  const [cartData,setCartData] = useState([]);

  useEffect(()=>{

    const tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] > 0){
          tempData.push({
            _id: items,
            size:item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    // console.log(tempData)
    setCartData(tempData);
    
  },[cartItems])

  return (
    <div className='border-t pt-24'>
      <div className='text-2xl mb-3 uppercase'>
        <Title text1={'Your'} text2={'Cart'} />
      </div>
      <div className=''>
        {
          cartData.map((item,index)=>{
            const productData = products.find((product)=> product._id === item._id);

            return (
              <div key={index} className='border-b border-t py-4 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img src={productData.image[0]} alt={productData.name} className='w-16 h-16 sm:w-20 object-cover' />
                  <div>
                    <h3 className='text-lg font-medium'>{productData.name}</h3>
                    <div className='flex gap-3'>
                      <p className='text-sm text-gray-600'><span className='font-semibold'>Price:</span> {currency}{productData.price}</p>
                      <p className='text-sm text-gray-600'><span className='font-semibold'>Size:</span> {item.size}</p>
                      <p className='text-sm text-gray-600'><span className='font-semibold'>Quantity:</span> {item.quantity}</p>
                    </div>
                    
                  </div>
                </div>
                <input onChange={(e)=>e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))} className='border px-1 py-1 sm:px-2 max-w-10 sm:max-w-20 outline-none' type="number" min={1} defaultValue={item.quantity}/>
                <img onClick={()=>{updateQuantity(item._id,item.size,0)}} src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer' alt="" />
              </div>
            )

          })
        }
      </div>
      <div className='flex justify-end my-12'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='flex justify-end mt-6'>
            <button onClick={()=>navigate('/place-order')} className='px-6 py-3 bg-black text-white text-sm font-medium uppercase'>Proceed to Checkout</button>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default Cart