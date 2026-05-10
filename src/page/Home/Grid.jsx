import React from 'react'

function Grid() {
    return (
        <>
            <main className='bg-zinc-100 w-full py-10 px-4 md:px-10'>

                <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>

                    <div className='flex flex-col bg-white text-black min-h-80 p-8 md:p-10 rounded-2xl space-y-6 shadow-sm'>
                        <span className='text-5xl font-extrabold text-zinc-200'>01</span>

                        <h2 className='font-bold text-xl'>
                            Real Overnight Oats
                        </h2>

                        <p className='font-light text-zinc-500 leading-7'>
                            Soaked overnight. Thick, creamy texture. Not a powder,
                            not a mix. The real thing.
                        </p>
                    </div>


                    <div className='flex flex-col bg-white text-black min-h-80 p-8 md:p-10 rounded-2xl space-y-6 shadow-sm'>
                        <span className='text-5xl font-extrabold text-zinc-200'>02</span>

                        <h2 className='font-bold text-xl'>
                            Real Ingredients
                        </h2>

                        <p className='font-light text-zinc-500 leading-7'>
                            Fruits, nuts, and natural sweeteners. Nothing artificial.
                            Nothing you can't pronounce.
                        </p>
                    </div>


                    <div className='flex flex-col bg-white text-black min-h-80 p-8 md:p-10 rounded-2xl space-y-6 shadow-sm'>
                        <span className='text-5xl font-extrabold text-zinc-200'>03</span>

                        <h2 className='font-bold text-xl'>
                            Slow Energy
                        </h2>

                        <p className='font-light text-zinc-500 leading-7'>
                            Complex carbs and fibre that keep you full till lunch.
                            Not just till 10am.
                        </p>
                    </div>


                    <div className='flex flex-col bg-white text-black min-h-80 p-8 md:p-10 rounded-2xl space-y-6 shadow-sm'>
                        <span className='text-5xl font-extrabold text-zinc-200'>04</span>

                        <h2 className='font-bold text-xl'>
                            Zero Prep
                        </h2>

                        <p className='font-light text-zinc-500 leading-7'>
                            Open the lid. Stir gently. Eat. That is genuinely all
                            there is to it.
                        </p>
                    </div>

                </section>
            </main>
        </>
    )
}

export default Grid