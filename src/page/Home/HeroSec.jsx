import React from 'react'

function HeroSec() {
    return (
        <main>
            <section className='bg-amber-300 w-full min-h-10 flex flex-col-reverse md:flex-row justify-around items-center px-6 md:px-12 py-10 overflow-hidden'>

                <div className='space-y-6 text-center md:text-left'>
                    
                    <h2 className='text-5xl md:text-6xl font-extrabold max-w-xl leading-tight'>
                        Rich, Creamy Overnight Oats.
                    </h2>

                    <p className='max-w-md text-gray-700 text-lg'>
                        No prep. No decisions. Just grab-and-go fuel that tastes like you made it.
                    </p>

                    <button className='bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg'>
                        Grab Yours
                    </button>
                </div>

                <div className='mb-10 md:mb-0'>
                    <img
                        className='w-72 md:w-112.5 hover:scale-110 transition-transform duration-700 drop-shadow-2xl'
                        src="Recourse/hero-mixed.png"
                        alt="Overnight Oats"
                    />
                </div>

            </section>
        </main>
    )
}

export default HeroSec