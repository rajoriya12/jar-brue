import React from 'react'

function Navbar() {
    return (
        <>
            <section className='w-full flex justify-around items-center font-bold p-2 bg-white z-50 shadow-md'>
                <h2 className='text-3xl'>
                   Jar&Brue
                </h2>

                <button className='bg-black text-white px-5 py-3 rounded-3xl hover:bg-gray-700 hover:opacity-80 hover:scale-105 transition-all duration-300'>
                    Grab yours
                </button>
            </section>
        </>
    )
}

export default Navbar