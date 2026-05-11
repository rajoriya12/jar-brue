import { useParams } from "react-router-dom"
import { cards } from "./Card"
import Navbar from "./Navbar"

function ProductDetails() {

    const { name } = useParams()

    const product = cards.find(
        (item) => item.name === name
    )


    return (
        <>
            <Navbar />

            <section className="flex justify-center space-x-[5%] mt-30" >
                <div>
                    <img className="w-110 h-110 rounded-2xl bg-zinc-100 sticky top-20"
                        src={product.image}
                        alt=""
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-zinc-400 text-xs">OVERNIGHT OATS</p>
                    <h1 className="font-extrabold text-5xl w-full m-2">{product.title}</h1>
                    <h2 className="font-extrabold text-3xl w-full m-2">{product.price}</h2>
                    <p className="w-110 text-zinc-500 font-light m-2 gap-3">{product.disc}</p>


                    <section>
                        <div className="border-b-2 border-zinc-200 ">
                            <a className="relative z-50" href={`https://wa.me/919462971381?text=Hi%20I%20want%20to%20order%20${cards.title}`} target="_blank" rel="noopener noreferrer">
                                <button className="bg-black text-mist-100 w-full py-4 rounded-4xl m-3 hover:bg-zinc-700 transition-all duration-400 ">Add to cart</button>
                            </a>
                        </div>

                        <div>
                            <div className="mt-3">
                                <p className="text-xs text-zinc-400 font-bold mb-5">HOW TO EAT</p>
                            </div>

                            <div className="space-y-4">

                                <div className="flex items-center gap-4">
                                    <span className=" w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">1</span>
                                    <p>Open the lid</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className=" w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">2</span>
                                    <p>Stir gently</p>
                                </div>
                                <div className="flex items-center gap-4 border-b-2 border-zinc-200 pb-5">
                                    <span className=" w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">3</span>
                                    <p>Enjoy chilled</p>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="mt-3 border-b-2 border-zinc-200 pb-5">
                            <p className="text-xs text-zinc-400 font-bold mb-5 uppercase">Ingredients</p>
                            <p>{product.Ingredients}</p>
                        </div>
                        <div w-full >
                            <ul className="flex flex-wrap gap-3 text-sm text-zinc-500 mt-5">

                                <li className="border border-gray-300 px-4 py-2 rounded-full">
                                    No prep
                                </li>

                                <li className="border border-gray-300 px-4 py-2 rounded-full">
                                    Real ingredients
                                </li>

                                <li className="border border-gray-300 px-4 py-2 rounded-full">
                                    No preservatives
                                </li>

                                <li className="border border-gray-300 px-4 py-2 rounded-full">
                                    Slow energy
                                </li>

                            </ul>
                        </div>
                    </section>

                </div>


            </section>


        </>
    )
}

export default ProductDetails