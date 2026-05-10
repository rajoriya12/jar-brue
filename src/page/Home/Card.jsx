import React from 'react'

function Card() {
  return (
    <>
      <section className='flex flex-col items-center m-10 space-y-4'>
        <h1 className='text-7xl font-extrabold' >Pick your fix</h1>
        <p className='text-zinc-500'>All ₹149</p>
      </section>


      <main className='flex flex-col md:flex-row items-center justify-evenly gap-10 m-5 md:m-10 w-100% overflow-scroll scroll-smooth  scrollbar-track-rose-50 animate-cardScroll' >

        <section>
          <div className="w-full flex justify-center group perspective">

            <div className="relative w-90 h-150 duration-700 transform-style-preserve-3d group-hover:rotate-y-180">


              <div className="absolute w-full h-full backface-hidden rounded-2xl bg-white text-black  shadow-2xl">
                <img className=' w-2/3 m-auto mb-15' src="Recourse/cup-apple.png" alt="" />
                <section className='p-3'>
                  <h3 className='font-extrabold text-xl' >Apple Cinnamon Walnuts</h3>
                  <p className='text-zinc-400 font-extralight'>A warm classic done right. Fresh Apple slice, curnchy Walnuts, a hint of cinnamon on thick, creamy ots. The moring that actually feels like a morning</p>
                </section>

                <div className='border-t-2 border-zinc-400 m-5 flex justify-between'>
                  <h3 className='mt-10 font-extrabold text-2xl'>₹149</h3>
                  <button className='mt-8 border-2 p-2 rounded-[20px]'>Add to Cart</button>
                </div>
              </div>


              <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl  bg-amber-100 text-black  shadow-2xl">
                <img className=' bg-zinc-100 w-full' src="Recourse/hover-apple.jpg" alt="" />

                <section>
                  <span className='text-zinc-400 font-extralight m-5 '>What's inside this</span>
                  <p className='m-4' >Rolled oats · Milk · Fresh apples · Walnuts · Chia seeds · Cinnamon · Honey</p>
                  <div className='border-t-2 border-zinc-400 m-5 flex justify-between'>
                    <h3 className='mt-10 font-extrabold text-2xl'>₹149</h3>
                    <button className='mt-8 border-2 p-2 rounded-[20px] hover:bg-black hover:text-white transition-all duration-300 '>Add to Cart</button>
                  </div>
                </section>

              </div>

            </div>
          </div>
        </section>


        <section>
          <div className="w-full flex justify-center group perspective">

            <div className="relative w-90 h-150 duration-700 transform-style-preserve-3d group-hover:rotate-y-180">


              <div className="absolute w-full h-full backface-hidden rounded-2xl bg-white text-black  shadow-2xl">
                <img className=' w-2/3 m-auto mb-15' src="Recourse/cup-strawberry.png" alt="" />
                <section className='p-3'>
                  <h3 className='font-extrabold text-xl' >Apple Cinnamon Walnuts</h3>
                  <p className='text-zinc-400 font-extralight'>A warm classic done right. Fresh Apple slice, curnchy Walnuts, a hint of cinnamon on thick, creamy ots. The moring that actually feels like a morning</p>
                </section>

                <div className='border-t-2 border-zinc-400 m-5 flex justify-between'>
                  <h3 className='mt-10 font-extrabold text-2xl'>₹149</h3>
                  <button className='mt-8 border-2 p-2 rounded-[20px]'>Add to Cart</button>
                </div>
              </div>


              <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-pink-100 text-black  shadow-2xl">
                <img className=' bg-zinc-100 w-full' src="Recourse/hover-strawberry.jpg" alt="" />
                <section>
                  <span className='text-zinc-400 font-extralight m-5 '>What's inside this</span>
                  <p className='m-4' >Rolled oats · Milk · Fresh apples · Walnuts · Chia seeds · Cinnamon · Honey</p>
                  <div className='border-t-2 border-zinc-400 m-5 flex justify-between'>
                    <h3 className='mt-10 font-extrabold text-2xl'>₹149</h3>
                    <button className='mt-8 border-2 p-2 rounded-[20px] hover:bg-black hover:text-white transition-all duration-300 '>Add to Cart</button>
                  </div>
                </section>
              </div>

            </div>
          </div>
        </section>



        <section>
          <div className="w-full flex justify-center group perspective">

            <div className="relative w-90 h-150 duration-700 transform-style-preserve-3d group-hover:rotate-y-180">


              <div className="absolute w-full h-full backface-hidden rounded-2xl bg-white text-black  shadow-2xl">
                <img className=' w-2/3 m-auto mb-15' src="Recourse/cup-chocolate.png" alt="" />
                <section className='p-3'>
                  <h3 className='font-extrabold text-xl' >Apple Cinnamon Walnuts</h3>
                  <p className='text-zinc-400 font-extralight'>A warm classic done right. Fresh Apple slice, curnchy Walnuts, a hint of cinnamon on thick, creamy ots. The moring that actually feels like a morning</p>
                </section>

                <div className='border-t-2 border-zinc-400 m-5 flex justify-between'>
                  <h3 className='mt-10 font-extrabold text-2xl'>₹149</h3>
                  <button className='mt-8 border-2 p-2 rounded-[20px]'>Add to Cart</button>
                </div>
              </div>


              <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-stone-400 text-black  shadow-2xl">
                <img className=' bg-zinc-100 w-full' src="Recourse/hover-chocolate.jpg" alt="" />
                <section>
                  <span className='text-zinc-400 font-extralight m-5 '>What's inside this</span>
                  <p className='m-4' >Rolled oats · Milk · Fresh apples · Walnuts · Chia seeds · Cinnamon · Honey</p>
                  <div className='border-t-2 border-zinc-400 m-5 flex justify-between'>
                    <h3 className='mt-10 font-extrabold text-2xl'>₹149</h3>
                    <button className='mt-8 border-2 p-2 rounded-[20px] hover:bg-[beige] hover:text-black transition-all duration-300 '>Add to Cart</button>
                  </div>
                </section>
              </div>

            </div>
          </div>
        </section>

        <section>
          <div className="w-full flex justify-center group perspective">

            <div className="relative w-90 h-150 duration-700 transform-style-preserve-3d group-hover:rotate-y-180">


              <div className="absolute w-full h-full backface-hidden rounded-2xl bg-white text-black  shadow-2xl">
                <img className=' w-2/3 m-auto mb-15' src="Recourse/cup-chocolate.png" alt="" />
                <section className='p-3'>
                  <h3 className='font-extrabold text-xl' >Apple Cinnamon Walnuts</h3>
                  <p className='text-zinc-400 font-extralight'>A warm classic done right. Fresh Apple slice, curnchy Walnuts, a hint of cinnamon on thick, creamy ots. The moring that actually feels like a morning</p>
                </section>

                <div className='border-t-2 border-zinc-400 m-5 flex justify-between'>
                  <h3 className='mt-10 font-extrabold text-2xl'>₹149</h3>
                  <button className='mt-8 border-2 p-2 rounded-[20px]'>Add to Cart</button>
                </div>
              </div>


              <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-stone-400 text-black  shadow-2xl">
                <img className=' bg-zinc-100 w-full' src="Recourse/hover-chocolate.jpg" alt="" />
                <section>
                  <span className='text-zinc-400 font-extralight m-5 '>What's inside this</span>
                  <p className='m-4' >Rolled oats · Milk · Fresh apples · Walnuts · Chia seeds · Cinnamon · Honey</p>
                  <div className='border-t-2 border-zinc-400 m-5 flex justify-between'>
                    <h3 className='mt-10 font-extrabold text-2xl'>₹149</h3>
                    <button className='mt-8 border-2 p-2 rounded-[20px] hover:bg-[beige] hover:text-black transition-all duration-300 '>Add to Cart</button>
                  </div>
                </section>
              </div>

            </div>
          </div>
        </section>



        <section>
          <div className="w-full flex justify-center group perspective">

            <div className="relative w-90 h-150 duration-700 transform-style-preserve-3d group-hover:rotate-y-180">


              <div className="absolute w-full h-full backface-hidden rounded-2xl bg-white text-black  shadow-2xl">
                <img className=' w-2/3 m-auto mb-15' src="Recourse/cup-chocolate.png" alt="" />
                <section className='p-3'>
                  <h3 className='font-extrabold text-xl' >Apple Cinnamon Walnuts</h3>
                  <p className='text-zinc-400 font-extralight'>A warm classic done right. Fresh Apple slice, curnchy Walnuts, a hint of cinnamon on thick, creamy ots. The moring that actually feels like a morning</p>
                </section>

                <div className='border-t-2 border-zinc-400 m-5 flex justify-between'>
                  <h3 className='mt-10 font-extrabold text-2xl'>₹149</h3>
                  <button className='mt-8 border-2 p-2 rounded-[20px]'>Add to Cart</button>
                </div>
              </div>


              <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-stone-400 text-black  shadow-2xl">
                <img className=' bg-zinc-100 w-full' src="Recourse/hover-chocolate.jpg" alt="" />
                <section>
                  <span className='text-zinc-400 font-extralight m-5 '>What's inside this</span>
                  <p className='m-4' >Rolled oats · Milk · Fresh apples · Walnuts · Chia seeds · Cinnamon · Honey</p>
                  <div className='border-t-2 border-zinc-400 m-5 flex justify-between'>
                    <h3 className='mt-10 font-extrabold text-2xl'>₹149</h3>
                    <button className='mt-8 border-2 p-2 rounded-[20px] hover:bg-[beige] hover:text-black transition-all duration-300 '>Add to Cart</button>
                  </div>
                </section>
              </div>

            </div>
          </div>
        </section>


      </main>
    </>
  )
}

export default Card
