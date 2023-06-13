import React, { useState, useEffect } from 'react'
import { getModuleTypeByID, getModules } from '../../lib/pocketbase';
import { Link, Route, Routes } from 'react-router-dom';
import { ModulesAdm } from '../../pages/admin/ModulesAdm';
import { CreateModules } from '../../pages/admin/CreateModules';



export const AdminModulesLayout = () => {


    return (
        <>
        <Routes>
            <Route path='/' element={<ModulesAdm/>} />
            <Route path='/create' element={<CreateModules/>} />
        </Routes>
          
        </>
    )
}
