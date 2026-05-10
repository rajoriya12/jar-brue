import React from 'react'


function AutoScroll() {

    const items = [
        "Real Overnight Oats",
        "✦",
        "Zero Prep",
        "✦",
        "Actually Filling",
        "✦",
        "Real Overnight Oats",
        "✦",
        "Real Ingredients",
        "✦",
        "Zero Prep",
        "✦",
        "Actually Filling",
        "✦",
        "Grab. Open. Enjoy.",
        "✦",
        "Real Ingredients",
        "✦",
    ]
    return (
        <>
            <div className="overflow-hidden whitespace-nowrap bg-black py-4 ">

                <div className="flex gap-6 animate-scroll w-max">

                    {[...items, ...items].map((item, index) => (
                        <div
                            key={index}
                            className=" text-white px-4 py-2 rounded-xl font-bold"
                        >
                            {item}
                        </div>
                    ))}

                </div>

            </div>
        </>
    )
}

export default AutoScroll
