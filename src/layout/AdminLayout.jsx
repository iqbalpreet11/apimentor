import React, { useState } from 'react'
import { client, createModules } from '../lib/pocketbase'
import Logo from "./../assets/logo.svg";
import { HomeIcon, BuildingOfficeIcon, BookOpenIcon, DocumentIcon, UserIcon, ShareIcon } from '@heroicons/react/24/outline'
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { AdminModulesLayout } from './admin/AdminModulesLayout';

export const AdminLayout = () => {
    const [admin, setAdmin] = useState(client.authStore.model);


    const logout = () => {
        client.authStore.clear();
        window.location.reload();
    }






    return (
        <>
            <div>
                <div className="flex h-screen flex-col bg-slate-50 text-[15px] overflow-hidden">
                    {/* navbar */}
                    <div className=" px-5 py-3 h-14 bg-white  border-slate-200 border-b flex justify-between items-center sticky top-0 shadow">
                        <img src={Logo} className="h-full" alt="" />
                        <div className='text-sm text-slate-800'>  {admin.email}</div>

                    </div>
                    <div className="h-full flex">
                        {/* sidebar */}
                        <div className="h-full   bg-black px-5  py-10   w-72"    >

                            <NavLink to={""} end className={({ isActive }) => isActive ? 'sidebar-active-item' : 'sidebar-item'}>
                                <HomeIcon className='sidebar-item-icon' />  Dashboard
                            </NavLink>


                            <hr className="my-2   border-white/20" />

                            <NavLink to={"companies"} className={({ isActive }) => isActive ? 'sidebar-active-item' : 'sidebar-item'}>
                                <BuildingOfficeIcon className='sidebar-item-icon' />  Companies
                            </NavLink>

                            <NavLink   to={"modules"} className={({ isActive }) => isActive ? 'sidebar-active-item' : 'sidebar-item'}>
                                <BookOpenIcon className='sidebar-item-icon' />  Modules
                            </NavLink>


                            {/* <NavLink end to={"gusstimate_cases"} className={({ isActive }) => isActive ? 'sidebar-active-item' : 'sidebar-item'}>
                            <DocumentIcon className='sidebar-item-icon' />  Guesstimates/Cases
                        </NavLink> */}

                        </div>
                        <div className="w-full h-full overflow-auto">

                            <Routes>
                                <Route path='/modules/*' element={<AdminModulesLayout />} />
                            </Routes>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
