import React, { useEffect, useState, Fragment } from 'react';
import Logo from './../assets/logo.svg';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { getCompanies } from '../lib/pocketbase';

function Navbar(props) {
    const [companies, setcompanies] = useState([]);

    useEffect(() => {
        getCompanies().then((res) => setcompanies(res));
    }, []);
    return (
        <div className='  navbar h-16 z-50 bg-white'>
           <Link to={'/'}> <img src={Logo} className='h-8' /> </Link>
            <div className='flex items-center space-x-4'>
                <div className="flex  space-x-6 mr-9">
                    <Link to={"/"} className='active-nav-item h-16'>Home</Link>
                    <Link to={"/dashboard/aptitude"} className='nav-item'>Modules</Link>

                    <Menu as={'div'} className="relative inline-block">
                        <Menu.Button className='nav-item inline-flex '>Company specific process </Menu.Button>
                        <Transition as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="absolute right-0  origin-top-right min-w-full w-max bg-white shadow border-t ">
                                {
                                    companies.map((company) => (
                                        <div key={company.id} className=' flex items-center w-full border-l-4 border-l-transparent hover:border-l-primary px-4 py-2 hover:bg-indigo-50 text-slate-500 hover:text-indigo-800 cursor-pointer border-b last:border-b-none'>
                                           <img src={process.env.REACT_APP_FILES_URL + company.collectionId + `/` + company.id + `/` + company.icon} className='h-6 w-6 rounded-full border bg-white mr-3' alt="" /> {company.name}
                                        </div>
                                    ))
                                }
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Link to={"/dashboard/companies"} className='nav-item'>Contact Us</Link>

                </div>
            </div>
        </div>
    );
}

export default Navbar;