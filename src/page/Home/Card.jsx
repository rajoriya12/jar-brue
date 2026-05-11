import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const cards = [
  {
    name: "apple-cinnamon",
    image: "/Recourse/cup-apple.png",
    hover: "/Recourse/hover-apple.jpg",
    bg: "bg-amber-100",
    title: "Apple Cinnamon Walnuts",
    price: " ₹149",
    disc: "A comforting overnight oats bowl topped with fresh apple slices, crunchy walnuts, and a hint of cinnamon. Soaked overnight for a thick, creamy texture that gives you slow-release energy — keeps you full for hours.",
    Ingredients: "Rolled oats · Milk · Fresh apples · Walnuts · Chia seeds · Cinnamon · Honey"

  },

  {
    name: "strawberry-blast",
    image: "/Recourse/cup-strawberry.png",
    hover: "/Recourse/hover-strawberry.jpg",
    bg: "bg-pink-100",
    title: "Strawberry Blast",
    price: " ₹169",
    disc: "A creamy strawberry overnight oats bowl topped with fresh strawberry slices, crunchy almonds, chia seeds, and a light drizzle of honey. Soaked overnight for a thick, creamy texture — light enough to not feel heavy, filling enough to last till lunch",
    Ingredients: "Rolled oats · Milk · Strawberries · Almonds · Chia seeds · Honey"
  },

  {
    name: "chocolate-heaven",
    image: "/Recourse/cup-chocolate.png",
    hover: "/Recourse/hover-chocolate.jpg",
    bg: "bg-stone-400",
    title: "Chocolate Heaven",
    price: " ₹159",
    disc: "A rich, chocolatey overnight oats bowl topped with fresh banana, creamy peanut butter, roasted almonds, and dark chocolate chunks. Naturally sweetened by banana. Indulgent and good for you — yes, both. Protein and healthy fats that keep you going.",
    Ingredients: "Rolled oats · Milk · Banana · Peanut butter · Cocoa · Almonds · Chia seeds · Honey · Dark chocolate"
  }
]

function Card() {
  const navigate = useNavigate()


  const [active, setActive] = useState(1)

  return (
    <>

      <section className='flex flex-col items-center m-10 space-y-4'>
        <h1 className='text-7xl font-extrabold'>
          Pick your fix
        </h1>

        <p className='text-zinc-500'>
          All ₹149
        </p>
      </section>


      <main className=" relative w-full min-h-screen  overflow-hidden flex items-center justify-center px-4 md:px-10 ">

        {cards.map((card, index) => {
          let position = ""
          if (index === active) {
            position = "z-30 scale-110 -translate-y-10"
          }
          else if (
            index === (active - 1 + cards.length) % cards.length
          ) {
            position = "left-10 scale-90 opacity-80 z-10"
          }

          else if (
            index === (active + 1) % cards.length
          ) {
            position = "right-10 scale-90 opacity-80 z-10"
          }

          else {
            position = "hidden"
          }

          return (
            <section key={index} className={`absolute transition-all duration-500  ease-in-out  ${position} `}>


              <div className="w-full flex justify-center group perspective">

                <div className="relative w-[280px] sm:w-[320px] md:w-[360px] h-[500px] sm:h-[550px] md:h-[600px] duration-700 transform-style-preserve-3d
    group-hover:rotate-y-180 scale-100 md:scale-110">

                  <div className=" absolute w-full h-full backface-hidden pointer-events-none rounded-2xl bg-white text-blackshadow-2xl overflow-hidden " >

                    <img
                      className='w-2/3 m-auto mb-10'
                      src={card.image}
                      alt=""
                    />

                    <section className='p-5'>
                      <h3 className='font-extrabold text-2xl'>
                        {card.title}
                      </h3>

                      <p className='text-zinc-600 mt-3 w-60'>
                        A warm classic done right.
                        Fresh apples, creamy oats,
                        nuts & delicious toppings.
                      </p>
                    </section>

                    <div className='border-t border-zinc-300 m-5 pt-5 flex justify-between items-center'>

                      <h3 className='font-extrabold text-2xl'>
                        {card.price}
                      </h3>


                      <button className='border px-4 py-2 rounded-2xl hover:bg-black hover:text-white transition-all duration-300'>
                        Add to Cart
                      </button>

                    </div>
                  </div>

                  {/* BACK */}
                  <div className={`absolute w-full h-full backface-hidden  rotate-y-180 rounded-2xl shadow-2xl overflow-hidden ${card.bg}`}>

                    <img onClick={() => {
                      navigate(`/ProductDitelas/${card.name}`)
                    }}
                      className='bg-zinc-100 w-full'
                      src={card.hover}
                      alt=""
                    />

                    <section className='p-5'>

                      <span className='text-zinc-600'>
                        What's inside this
                      </span>
                      <p className='mt-4'>
                        Rolled oats · Milk · Fresh fruits · Honey ·Chia seeds · Nuts
                      </p>
                      <div className='border-t border-zinc-400 mt-8 pt-5 flex justify-between items-center'>
                        <h3 className='font-extrabold text-2xl'>
                          ₹149
                        </h3>
                        <a className="relative z-50" href={`https://wa.me/919462971381?text=Hi%20I%20want%20to%20order%20${card.title}`} target="_blank" rel="noopener noreferrer">
                          <button className='border px-4 py-2 rounded-2xl hover:bg-black hover:text-white transition-all duration-300'>
                            Add to Cart
                          </button>
                        </a>

                      </div>
                    </section>
                  </div>

                </div>
              </div>
            </section>
          )
        })}<div className="absolute bottom-0 sm:bottom-10 flex gap-5">

          <button onClick={() => setActive((prev) => (prev - 1 + cards.length) % cards.length)} className="border px-6 py-3 rounded-2xl hover:bg-black hover:text-white transition-all duration-300" >
            Prev
          </button>

          <button onClick={() => setActive((prev) => (prev + 1) % cards.length)} className="border px-6 py-3 rounded-2xl hover:bg-black hover:text-white transition-all duration-300">
            Next
          </button>

        </div>

      </main>
    </>
  )
}

export default Card