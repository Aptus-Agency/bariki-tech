'use client';

import React, { useState, useEffect } from 'react';

const themeSecondary = '#226172';
const headerContactLabel = '#c8d9de';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Custom button style replicating .tp-btn-simelar
    const btnSimilarStyle = {
        display: 'inline-block',
        fontSize: '16px',
        fontWeight: '700',
        color: 'white',
        backgroundColor: themeSecondary, // Custom color
        height: '48px',
        lineHeight: '48px',
        textAlign: 'center',
        padding: '0 38px',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
        transition: 'background-color 0.3s ease-out',
    };

    // Custom menu item separator style
    const menuItemSeparatorStyle = {
        position: 'absolute',
        content: '""',
        top: '50%',
        transform: 'translateY(-50%)',
        right: 0,
        backgroundColor: '#d1d1d1',
        width: '1px',
        height: '18px',
    };

    // Custom search input style
    const searchInputStyle = {
        border: 0,
        textTransform: 'lowercase',
        fontSize: '16px',
        fontWeight: '500',
        backgroundColor: 'transparent',
        width: '170px',
        paddingRight: '20px',
        outline: 'none',
    };

    return (
        <>
            <header className={`relative ${isSticky ? 'header-sticky' : ''}`}>
                {/* Main Header Area (Desktop) */}
                <div
                    className="relative pt-5 pb-12 hidden xl:block bg-primary bg-center" // header-area-space p-relative pt-20 pb-50 d-none d-xl-block
                >
                    <div className="container mx-auto px-4">
                        <div className="flex items-center"> {/* row align-items-center */}
                            <div className="w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12"> {/* col-xl-3 col-lg-6 col-md-6 col-6 */}
                                <div className="logo">
                                    <a href="index.html">Bariki</a> {/* Added Tailwind image classes */}
                                </div>
                            </div>
                            <div className="w-full xl:w-9/12">
                                <div className="flex justify-end items-center"> {/* tp-contact-wapper d-flex justify-content-end align-items-center */}
                                    {/* Custom 'tp-header-contact' styling needed */}
                                    <div className="tp-header-contact hidden xl:block pr-10"> {/* pr-40 -> pr-10 */}
                                        <div className="tp-header-contact-icon flex items-center group"> {/* Added group */}
                                            <div>
                                                <a href="#" className="h-10 w-10 border-2 border-[--headerContactIconBorder] rounded-full text-center leading-[36px] mr-4 text-sm text-white transition duration-300 group-hover:bg-white group-hover:text-[--headerContactIconBorder] block"><i className="fas fa-phone"></i></a> {/* Custom style for icon */}
                                            </div>
                                            <div className="tp-header-icon-info">
                                                <label className="text-sm block mb-0.5" style={{ color: headerContactLabel }}>Make a call</label>
                                                <a href="tel:+98565689656" className="text-white text-xl font-bold block hover:text-[--tp-theme-1] transition duration-300">+985 656 896 56</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Custom 'tp-header-contact' styling needed */}
                                    <div className="tp-header-contact hidden xl:block">
                                        <div className="tp-header-contact-icon flex items-center group"> {/* Added group */}
                                            <div>
                                                <a href="#" className="h-10 w-10 border-2 border-[--headerContactIconBorder] rounded-full text-center leading-[36px] mr-4 text-sm text-white transition duration-300 group-hover:bg-white group-hover:text-[--headerContactIconBorder] block"><i className="fal fa-envelope-open"></i></a> {/* Custom style for icon */}
                                            </div>
                                            <div className="tp-header-icon-info">
                                                <label className="text-sm block mb-0.5" style={{ color: headerContactLabel }}>Email address</label>
                                                <a href="mailto:info@webmail.com" className="text-white text-xl font-bold block hover:text-[--tp-theme-1] transition duration-300">info@webmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Custom 'tp-header-right' styling needed */}
                                    <div className="ml-8"> {/* ml-30 -> ml-8 */}
                                        <a href="contact.html" className="ml-5 hidden md:inline-block hover:bg-black transition duration-300">Make Appointment</a> {/* tp-btn-simelar ml-20 d-none d-md-block */}
                                        {/* Hamburger toggle button - kept original classes for potential interaction */}
                                        {/* <button onClick={toggleSidebar} className="tp-menu-toggle tp-header-icon2 ml-5 xl:hidden"><i className="far fa-bars"></i></button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header Menu Area (Desktop) */}
                {/* Custom positioning might be needed if not sticky */}
                <div className={`hidden xl:block ${!isSticky ? 'absolute bottom-[-36px] left-0 w-full z-10' : 'sticky top-0 z-50'}`}> {/* tp-header-menu-area d-none d-xl-block */}
                    <div className="container mx-auto px-4">
                        <div className="bg-white shadow-md"> {/* header-inner white-bg */}
                            <div className="flex items-center -mx-0"> {/* row g-0 align-items-center */}
                                <div className="w-full xl:w-9/12"> {/* col-xl-9 */}
                                    {/* Custom class 'tp-main-menu-2' needed for specific layout/styling */}
                                    <div className="tp-main-menu-2 pl-10"> {/* Added padding-left */}
                                        <nav id="mobile-menu-desktop">
                                            <ul className="flex"> {/* Added flex */}
                                                {/* Menu items */}
                                                <li className="relative group px-5 mx-5"> {/* Adjusted padding/margin */}
                                                    <a href="index.html" className="font-bold text-black py-5 block uppercase hover:text-[--tp-theme-1]">Home</a>
                                                    <span></span>
                                                    <ul className="absolute top-full left-0 w-[220px] bg-black p-6 text-left z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-300 shadow-lg">
                                                        <li className='block m-0 p-0'><a href="index.html" className="block text-white text-sm py-1.5 capitalize hover:text-[--tp-theme-1]">Home Style 01</a></li>
                                                        <li className='block m-0 p-0'><a href="index-2.html" className="block text-white text-sm py-1.5 capitalize hover:text-[--tp-theme-1]">Home Style 02</a></li>
                                                        <li className='block m-0 p-0'><a href="index-3.html" className="block text-white text-sm py-1.5 capitalize hover:text-[--tp-theme-1]">Home Style 03</a></li>
                                                    </ul>
                                                </li>
                                                <li className="relative group px-5 mx-5">
                                                    <a href="about.html" className="font-bold text-black py-5 block uppercase hover:text-[--tp-theme-1]">About</a>
                                                    <span></span>
                                                </li>
                                                <li className="relative group px-5 mx-5">
                                                    <a href="services.html" className="font-bold text-black py-5 block uppercase hover:text-[--tp-theme-1]">Services</a>
                                                    <span></span>
                                                    <ul className="absolute top-full left-0 w-[220px] bg-black p-6 text-left z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-300 shadow-lg">
                                                        <li className='block m-0 p-0'><a href="services.html" className="block text-white text-sm py-1.5 capitalize hover:text-[--tp-theme-1]">Service</a></li>
                                                        <li className='block m-0 p-0'><a href="services-details.html" className="block text-white text-sm py-1.5 capitalize hover:text-[--tp-theme-1]">Service-Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="relative group px-5 mx-5">
                                                    <a href="#" className="font-bold text-black py-5 block uppercase hover:text-[--tp-theme-1]">Pages</a>
                                                    <span></span>
                                                    <ul className="absolute top-full left-0 w-[220px] bg-black p-6 text-left z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-300 shadow-lg">
                                                        <li className='block m-0 p-0'><a href="team.html" className="block text-white text-sm py-1.5 capitalize hover:text-[--tp-theme-1]">Team</a></li>
                                                        <li className='block m-0 p-0'><a href="team-details.html" className="block text-white text-sm py-1.5 capitalize hover:text-[--tp-theme-1]">Team Details</a></li>
                                                        <li className='block m-0 p-0'><a href="portfolio.html" className="block text-white text-sm py-1.5 capitalize hover:text-[--tp-theme-1]">Portfolio</a></li>
                                                        <li className='block m-0 p-0'><a href="portfolio-details.html" className="block text-white text-sm py-1.5 capitalize hover:text-[--tp-theme-1]">Portfolio Details</a></li>
                                                        <li className='block m-0 p-0'><a href="faq.html" className="block text-white text-sm py-1.5 capitalize hover:text-[--tp-theme-1]">FAQ Page</a></li>
                                                        <li className='block m-0 p-0'><a href="shop.html" className="block text-white text-sm py-1.5 capitalize hover:text-[--tp-theme-1]">Shop</a></li>
                                                        <li className='block m-0 p-0'><a href="shop-details.html" className="block text-white text-sm py-1.5 capitalize hover:text-[--tp-theme-1]">Product-details</a></li>
                                                        <li className='block m-0 p-0'><a href="cart.html" className="block text-white text-sm py-1.5 capitalize hover:text-[--tp-theme-1]">Cart</a></li>
                                                        <li className='block m-0 p-0'><a href="checkout.html" className="block text-white text-sm py-1.5 capitalize hover:text-[--tp-theme-1]">Cheakout</a></li>
                                                    </ul>
                                                </li>
                                                <li className="relative group px-5 mx-5">
                                                    <a href="blog.html" className="font-bold text-black py-5 block uppercase hover:text-[--tp-theme-1]">Blog</a>
                                                    <span></span>
                                                    <ul className="absolute top-full left-0 w-[220px] bg-black p-6 text-left z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-300 shadow-lg">
                                                        <li className='block m-0 p-0'><a href="blog.html" className="block text-white text-sm py-1.5 capitalize hover:text-[--tp-theme-1]">Blog</a></li>
                                                        <li className='block m-0 p-0'><a href="blog-details.html" className="block text-white text-sm py-1.5 capitalize hover:text-[--tp-theme-1]">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="relative group px-5 mx-5">
                                                    <a href="contact.html" className="font-bold text-black py-5 block uppercase hover:text-[--tp-theme-1]">Contact</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Header Area */}
                <div className="block xl:hidden py-5 bg-cover bg-center"> {/* tp-header-2-mobile-area d-block d-xl-none */}
                    <div className="container mx-auto px-4">
                        <div className="flex items-center"> {/* row align-items-center */}
                            <div className="w-6/12"> {/* col-6 */}
                                <div className="logo">
                                    <a href="index.html"><img src="https://res.cloudinary.com/zurri-cloud/image/upload/v1759221309/bariki/alh0lrkyjtbzydirlamy.png" alt="logo" className="max-w-full h-auto" /></a>
                                </div>
                            </div>
                            <div className="w-6/12"> {/* col-6 */}
                                <div className="flex justify-end items-center ml-8"> {/* tp-header-right ml-30 d-flex justify-content-end align-items-center */}
                                    <a href="contact.html" className="ml-5 hidden md:inline-block hover:bg-black transition duration-300">Make Appointment</a> {/* tp-btn-simelar ml-20 d-none d-md-block */}
                                    <button
                                        onClick={toggleSidebar}
                                        className="h-12 w-12 border border-[rgba(255,255,255,0.3)] inline-block text-center leading-[45px] ml-5 text-white hover:bg-white hover:text-black transition duration-300" /* tp-menu-toggle tp-header-icon2 ml-20 */
                                    >
                                        <i className="far fa-bars text-xl"></i> {/* Increased icon size */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sidebar Menu (Mobile) */}
            {/* Custom class 'tp-sidebar-menu' needed, Tailwind controls visibility */}
            <div className={`tp-sidebar-menu fixed top-0 w-[300px] h-full bg-white shadow-[-5px_0_20px_-5px_rgba(0,0,0,0.2)] z-[10000] p-7 overflow-y-auto transition-transform duration-400 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] ${isSidebarOpen ? 'translate-x-0 right-0' : 'translate-x-full right-[-300px]'}`}> {/* Added translate-x for transition */}
                <button className="absolute left-4 top-4 h-10 w-10 bg-gray-200 text-gray-700 rounded-full text-center leading-10 text-xl hover:bg-gray-300" onClick={toggleSidebar}> {/* sidebar-close */}
                    <i className="fal fa-times"></i>
                </button>
                <div className="mb-5"> {/* side-logo mb-20 */}
                    <a href="index.html"><img src="https://res.cloudinary.com/zurri-cloud/image/upload/v1759221309/bariki/alh0lrkyjtbzydirlamy.png" alt="logo" /></a>
                </div>
                {/* Target for MeanMenu or custom mobile nav */}
                <div className="mobile-menu mt-5">
                    <nav id="mobile-menu"> {/* Keep ID for MeanMenu JS if used */}
                        {/* Structure for MeanMenu or custom React nav */}
                        <ul>
                            <li><a href="index.html">Home</a>
                                <ul>
                                    <li><a href="index.html">Home Style 01</a></li>
                                    <li><a href="index-2.html">Home Style 02</a></li>
                                    <li><a href="index-3.html">Home Style 03</a></li>
                                </ul>
                            </li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="services.html">Services</a>
                                <ul>
                                    <li><a href="services.html">Service</a></li>
                                    <li><a href="services-details.html">Service-Details</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Pages</a>
                                <ul>
                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="team-details.html">Team Details</a></li>
                                    <li><a href="portfolio.html">Portfolio</a></li>
                                    <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                    <li><a href="faq.html">FAQ Page</a></li>
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="shop-details.html">Product-details</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="checkout.html">Cheakout</a></li>
                                </ul>
                            </li>
                            <li><a href="blog.html">Blog</a>
                                <ul>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                {/* Contact Info in Sidebar */}
                <div className="mt-8 mb-8"> {/* sidebar-contact mt-30 mb-30 */}
                    <div className="sidebar-title border-b border-gray-200 pb-2 mb-4">
                        <h3 className="text-base font-bold">CONTACT US</h3>
                    </div>
                    {/* Custom class 'sidebar-list' needed for pseudo-elements */}
                    <ul className="sidebar-list text-sm text-gray-600">
                        <li className='relative pl-4 mb-2 before:content-[""] before:absolute before:top-2 before:left-0 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[--tp-theme-1]'>27 Division St, New York</li>
                        <li className='relative pl-4 mb-2 before:content-[""] before:absolute before:top-2 before:left-0 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[--tp-theme-1]'>+1 800 123 456 78</li>
                        <li className='relative pl-4 mb-2 before:content-[""] before:absolute before:top-2 before:left-0 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[--tp-theme-1]'>sectox@mail.com</li>
                    </ul>
                </div>
                {/* Social Links in Sidebar */}
                <div className="tp-sidebar-social mt-8"> {/* Added mt-8 */}
                    <a href="#" className="mr-2 bg-[--tp-theme-1] text-white inline-block w-9 h-9 text-center text-sm leading-9 rounded-full transition duration-300 hover:bg-black hover:-translate-y-1"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="mr-2 bg-[--tp-theme-1] text-white inline-block w-9 h-9 text-center text-sm leading-9 rounded-full transition duration-300 hover:bg-black hover:-translate-y-1"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="mr-2 bg-[--tp-theme-1] text-white inline-block w-9 h-9 text-center text-sm leading-9 rounded-full transition duration-300 hover:bg-black hover:-translate-y-1"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="bg-[--tp-theme-1] text-white inline-block w-9 h-9 text-center text-sm leading-9 rounded-full transition duration-300 hover:bg-black hover:-translate-y-1"><i className="fab fa-dribbble"></i></a>
                </div>
            </div>

            {/* Body Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-[9999] transition-opacity duration-400 ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} // body-overlay
                onClick={toggleSidebar}
            ></div>
        </>
    );
};

export default Header;