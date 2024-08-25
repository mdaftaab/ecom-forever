import { useContext } from 'react'
import {ShopContext} from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {
  const {products, currency, quantity} = useContext(ShopContext);


  return (
    <div className='border-t pt-16'>

        <div className='text-2xl uppercase'>
          <Title text1={'My'} text2={'Orders'}/>
        </div>

        <div className=''>
            {
              products.slice(0,4).map((item,index)=>(
                <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between pag-4'>
                  <div className='flex items-start gap-6 text-sm'>
                    <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                    <div>
                      <h3 className='sm:text-base font-medium'>{item.name}</h3>
                      <div className='flex items-center gap-3 my-2 text-base text-gray-500'>
                        <p className='text-gray-700'>{currency}{item.price}</p>
                        <p className='text-gray-700'>Quantity: 1</p>
                        <p className='text-gray-700'>Size: M</p>
                      </div>
                      <p>Date: <span className='text-gray-400 '>25/July/2024</span></p>
                    </div>
                  </div>
                  <div className='md:w-1/2 flex justify-between'>
                    <div className='flex items-center gap-2'>
                      <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                      <p className='text-sm md:text-base'>Ready to ship</p>
                    </div>
                    <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
                  </div>
                </div>
              ))
            }
        </div>


    </div>
  )
}

export default Orders