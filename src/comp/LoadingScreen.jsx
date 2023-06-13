import React from 'react'
import { TailSpin } from 'react-loader-spinner';

export const LoadingScreen = () => {
  return (
    <div className='h-full w-full absolute top-0 flex flex-wrap justify-center content-center bg-white'>
    <TailSpin height={50} width={50} color='#292929'/>

</div>
  )
}
