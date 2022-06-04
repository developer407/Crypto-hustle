import Router from 'next/router'
import React from 'react'

const Navbar = () => {
    return (
        <div className=''>
            <div className=' bg-[#2f2f2f] flex justify-between py-4 px-10 items-center'>
                <div>
                    <p
                        // onClick={() => Router.push('/')}
                        // Router.push('/login')
                        className='text-[#6d85ff] hover:text-[#1c42ff] cursor-pointer font-semibold text-sm lg:font-bold lg:text-xl'>
                        Crypto Hustle
                    </p>

                </div>
                <div>
                    <img className='h-9 w-9 rounded-full' src="https://res.cloudinary.com/zarmariya/image/upload/v1653461978/bnmnc4bhltfkqnqan0g2.png" alt="" />
                </div>
            </div>
        </div>

    )
}

export default Navbar
