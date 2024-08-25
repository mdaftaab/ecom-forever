import { useState, useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import {ShopContext} from '../context/ShopContext'

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount} = useContext(ShopContext);

    return (
        <>
            <div className='flex items-center justify-between py-5 font-medium'>
                <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>
                <ul className='desktop-menu hidden sm:flex items-center justify-between py-5 gap-8 uppercase'>
                    <li>
                        <NavLink to='/' className='flex flex-col items-center gap-1'>
                            <p>Home</p>
                            <hr className='w-0 border-none h-[1.5px] bg-gray-700 opacity-0' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className='flex flex-col items-center gap-1'>
                            <p>About</p>
                            <hr className='w-0 border-none h-[1.5px] bg-gray-700 opacity-0' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                            <p>Collection</p>
                            <hr className='w-0 border-none h-[1.5px] bg-gray-700 opacity-0' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                            <p>Contact</p>
                            <hr className='w-0 border-none h-[1.5px] bg-gray-700 opacity-0' />
                        </NavLink>
                    </li>
                </ul>

                <div className='flex items-center gap-6'>
                    <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

                    <div className='group relative'>
                        <Link to="/login"><img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" /></Link>
                        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                                <p className='cursor-pointer hover:text-black'>My Profile</p>
                                <p className='cursor-pointer hover:text-black'>Orders</p>
                                <p className='cursor-pointer hover:text-black'>Logout</p>
                            </div>
                        </div>
                    </div>

                    <Link to="/cart" className='relative'>
                        <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[9px]'>{getCartCount()}</p>
                    </Link>
                    <img onClick={()=>{setVisible(true)}} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
                </div>

                {/* Sidebar menu for small screens */}
                <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                    <div onClick={()=>{setVisible(false)}} className='flex flex-col text-gray-600 cursor-pointer'>
                        <div className='flex items-center gap-4 p-3'>
                            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                            <p>Back</p>
                        </div>
                    </div>
                    <div className='flex flex-col mobile-menu'>
                        <NavLink onClick={()=>{setVisible(false)}} className="py-2 pl-6 border" to='/'>Home</NavLink>
                        <NavLink onClick={()=>{setVisible(false)}} className="py-2 pl-6 border" to='/collection'>Collection</NavLink>
                        <NavLink onClick={()=>{setVisible(false)}} className="py-2 pl-6 border" to='/about'>About</NavLink>
                        <NavLink onClick={()=>{setVisible(false)}} className="py-2 pl-6 border" to='/contact'>Contact</NavLink>
                    </div>                    
                </div>
            </div>
        </>
    )
}

export default Navbar