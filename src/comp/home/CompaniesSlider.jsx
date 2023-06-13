import React, { useState, useEffect } from 'react';
import { getCompanies } from '../../lib/pocketbase';
import { Link } from 'react-router-dom';

const CompaniesSlider = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getCompanies().then((res) => setData(res));
    }, []);
    return (
        <div className='text-center container mx-auto px-32 py-10  '>
            <p className='header '>Companies</p>
            <p className="subheader ">specific process</p>
            <div className='grid grid-cols-7 w-full mt-10'>
                {data.map((item) => (
                    <div key={item.id} className=' flex justify-center '>
                        <Link to={`/dashboard/companies/${item.id}`} target='blank' className=''>
                            <img src={process.env.REACT_APP_FILES_URL + `/` + item.collectionId + `/` + item.id + `/` + item.logo} alt="" className='h-18 grayscale hover:grayscale-0 duration-150 opacity-60 hover:opacity-100' />
                            {item.name}
                        </Link>
                    </div>
                ))}
            </div>
            
            </div >
    );
};


export default CompaniesSlider;