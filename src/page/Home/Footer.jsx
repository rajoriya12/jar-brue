import React from 'react'
import AutoScroll from './AutoScroll'

function Footer() {
    return (
        <>
            <main>
                <section className='bg-amber-300 w-full min-h-screen flex flex-col items-center justify-center px-6 text-center'>

                    <h4 className='text-zinc-700 text-2xl font-medium'>
                        New Flavours Dropping
                    </h4>

                    <h1 className='font-extrabold text-4xl md:text-6xl my-5'>
                        Be the first to know.
                    </h1>

                    <p className='text-gray-700 max-w-xl mb-8'>
                        Join our WhatsApp broadcast. We'll ping you when new
                        flavours land — no spam, ever.
                    </p>

                    <div className='flex flex-col md:flex-row gap-4 w-full max-w-xl'>

                        <input
                            className='bg-white w-full px-5 py-4 rounded-xl outline-none shadow-md'
                            type="text"
                            placeholder='Enter your number '
                        />

                    </div>

                    <button className='bg-black text-white w-[40%] py-4 mt-10 rounded-xl font-semibold hover:bg-zinc-800 duration-300 shadow-lg'>
                        Join Channel
                    </button>
                </section>

                <AutoScroll />


                <section className='p-20 flex justify-between'>
                    <h2 className='font-bold text-2xl font-mono'>JarNBrew</h2>
                    <div>
                        <h4 className='font-medium text-zinc-500'><i>grab. open. enjoy.</i></h4>
                        <p className='text-zinc-300'>&copy;2025 Grabbly. Bangalore.</p>
                    </div>
                </section>


            </main>
        </>
    )
}

export default Footer