import React, { useState } from 'react';
//import Parkinson from "../../public/Parkinson.png";
import game from "../../public/game.png";
import book from "../../public/book.jpeg";
import hospital from "../../public/hospital.jpeg";
import ecommerce from "../../public/ecommerce.jpeg";
import brain from "../../public/brain.jpeg"
function Proj() {
    const [expandedCard, setExpandedCard] = useState(null);

    const cardItem = [
        {
            id: 1,
            logo: brain,
            name: "Parkinson's Disease Detection Project",
            description: "This project aims to detect Parkinson's disease using machine learning algorithms."
        },
        {
            id: 2,
            logo: game,
            name: "Super Mario  Mushroom Game",
            description: "A fun and engaging platformer game inspired by the classic Super Mario game."
        },
        {
            id: 3,
            logo: book,
            name: "Book-Help (Second Hand Books)",
            description: "An online platform to buy and sell second-hand books easily."
        },
        {
            id: 4,
            logo: hospital,
            name: "Hospital Management System",
            description: "A comprehensive system to manage hospital operations and patient information."
        },
        {
            id: 5,
            logo: ecommerce,
            name: "Ecommerce Website",
            description: "A fully functional ecommerce website with various features for seamless online shopping."
        }
    ];

    const handleExpandClick = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <div name="Pojects"
        className='max-w-screen-xl container mx-auto px-4 md:px-20 mt-10'>
            <div className='font-bold mb-5 flex flex-col items-center'>
                <h1 className='text-3xl underline'>My Projects</h1>
                <div className='flex flex-wrap justify-center gap-x-8 gap-y-8 my-5'>
                    {cardItem.map(({ id, logo, name, description }) => (
                        <div 
                            className={`w-[280px] md:w-[350px] border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300 ${expandedCard === id ? 'bg-gray-100' : 'bg-white'}`} 
                            key={id}
                            style={{ height: expandedCard === id ? 'auto' : '250px' }}
                        >
                            <div className='flex flex-col items-center h-full'>
                                <img src={logo} className='w-[120px] h-[120px] p-2 rounded-full' alt={name} />
                                <div className='font-bold text-lg mt-4 text-center'>
                                    {name}
                                </div>
                                <button 
                                    className='bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded mt-4'
                                    onClick={() => handleExpandClick(id)}
                                >
                                    Description
                                </button>
                                {expandedCard === id && (
                                    <div className='mt-4 p-4 bg-lime-200 text-black border-t w-full rounded'>
                                        {description}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
        </div>
        
    );
}

export default Proj;
