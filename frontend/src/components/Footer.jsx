import {assets} from '../assets/assets'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 sm:mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores hic voluptate rem consequatur unde provident quos ex est aperiam, quod ipsa similique exercitationem laboriosam debitis omnis molestiae temporibus tempora perspiciatis.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 uppercase'>Company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About us</Link></li>
                <li><Link to='/delivery'>Delivery</Link></li>
                <li><Link to='/privacy-policy'>Privacy policy</Link></li>
            </ul>
        </div>
        
        <div>
            <p className='text-xl font-medium mb-5 uppercase'>GET In Touch</p>
            <ul className='flex flex-col gap-1 text-gray-600 mb-4'>
                <li><Link to='tel:919876543210'>+91 9876 543 210</Link></li>
                <li><Link to='mail:info@forever.com'>info@forever.com</Link></li>
            </ul>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li><Link to='/contact'>Contact us</Link></li>
                <li><Link to='/terms-conditions'>Terms & conditions</Link></li>
            </ul>
        </div>
        
    </div>
    <div>
        <hr/>
        <p className='text-center text-gray-600 text-sm capitalize py-4'>Copyright 2024@ Ecom Forever. All rights reserved.</p>
    </div>
    </>
  )
}

export default Footer