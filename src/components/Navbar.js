import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = ({ mobileMenu, setMobileMenu }) => {
    return (
        <div>

            <nav className='big-navbar w-full bg-white z-10 '>

                <div className=' nav-2  w-full flex  px-4 mx-auto justify-between'>
                    <div className='logo w-[180px] h-[70px]'>
                       <img src="images/big-logo.png" alt="logo" data-src-mobile="images/small-logo.png" data-src-small="images/shop-88.jpg"  className='w-full h-full'/>
                    </div>

                    <div className='navbar-middle flex items-end italic text-xs pb-1 ml-4 text-semibold '>
                        Home Made Food Is Where It All Started..
                    </div>

                    <div className='navbar flex items-center  ml-auto mr-auto pt-4 '>
                        <ul className='  flex gap-3 font-semibold'>

                            <li className='group pl-6  '>
                                <NavLink to="/">
                                    <span className="cursor-pointer pt-0.5  font-semibold uppercase text-sm ">HOME</span>
                                    </NavLink>
                                    <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-400"
                                ></span>
                             </li>
                            <li className='group pl-6  '>
                                <NavLink to="/about">
                                    <span className="cursor-pointer pt-0.5 text-sm font-semibold uppercase ">About US</span>
                                    </NavLink>
                                    <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-400"
                                ></span>
                             </li>
                            <li className='group pl-6  '>
                                <NavLink to="/menu">
                                    <span className="cursor-pointer pt-0.5 text-sm font-semibold uppercase ">our menu</span>
                                    </NavLink>
                                    <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-400"
                                ></span>
                             </li>
                            <li className='group pl-6  '>
                                <NavLink to="/orders">
                                    <span className="cursor-pointer pt-0.5 text-sm font-semibold uppercase ">bulk orders</span>
                                    </NavLink>
                                    <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-400"
                                ></span>
                             </li>
                            <li className='group pl-6  '>
                                <NavLink to="/contact">
                                    <span className="cursor-pointer pt-0.5 text-sm font-semibold uppercase ">contact us</span>
                                    </NavLink>
                                    <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-400"
                                ></span>
                             </li>


                        </ul>
                    </div>

                    <div className="hamburger-menu w-8 h-8   hidden mt-8 mr-2 " onClick={() => setMobileMenu(true)} >
                        <img src="images/more.png" alt="menu" className=' w-14 h-8  object-cover ' />
                    </div>

                    <div className={`pointer-events-none fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity  ${mobileMenu ? 'opacity-100 pointer-events-auto' : ''}`}>

                        <div className="absolute left-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3  ">


                            <ul className="mt-8 absolute top-0 right-0 flex flex-col items-center ml-4  ">

                                <li className="py-4">

                                    <span
                                        onClick={() => {
                                            setMobileMenu(false);
                                        }}
                                        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                    ><NavLink to="/">Home</NavLink></span>

                                </li>
                                <li className="py-4">

                                    <span
                                        onClick={() => {
                                            setMobileMenu(false);
                                        }}
                                        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                    ><NavLink to="/about">About</NavLink></span>

                                </li>



                                <li className="py-4">

                                    <span
                                        onClick={() => {

                                            setMobileMenu(false);
                                        }}
                                        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                    ><NavLink to="/menu">OUR MENU</NavLink></span>

                                </li>

                                <li className="py-4">

                                    <span
                                        onClick={() => {

                                            setMobileMenu(false);
                                        }}
                                        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                    ><NavLink to="/contact">Contact us</NavLink></span>

                                </li>
                                <li className="py-4">

                                    <span
                                        onClick={() => {

                                            setMobileMenu(false);
                                        }}
                                        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                    ><NavLink to="/orders">bulk orders</NavLink></span>

                                </li>

                              
                            </ul>
                        </div>
                        <div className="absolute right-0 min-h-screen w-1/3 bg-primary py-4 px-8 shadow md:w-1/3  ">
                            <button
                                className="absolute top-2 right-0 mt-4 mr-4"
                                onClick={() => setMobileMenu(false)}>
                                <img src="images/icons8-x-50.png" className="h-10 w-auto inverted-image z-20" alt="close-menu" />
                            </button>
                        </div>
                    </div>


                </div>
            </nav>

        </div>
    )
}

export default Navbar
