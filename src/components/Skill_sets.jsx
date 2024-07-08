import React from 'react';
import c from "../../public/c.png";
import python from "../../public/python.jpeg";
import react from "../../public/react.png";
import html from "../../public/html.jpeg";
import css from "../../public/css.jpeg";
import javascript from "../../public/javascript.jpeg";
import java from "../../public/java.png";
import mongo from "../../public/mongo.png";
import gol from "../../public/gol.jpeg";
import sql from "../../public/sql.png";
import nodde from "../../public/nodde.png";

function Skill_sets() {
    const skillItems = [
        { id: 1, logo: c, name: "C" },
        { id: 2, logo: python, name: "Python" },
        { id: 3, logo: react, name: "React" },
        { id: 4, logo: html, name: "HTML" },
        { id: 5, logo: css, name: "CSS" },
        { id: 6, logo: javascript, name: "JavaScript" },
        { id: 7, logo: java, name: "Java" },
        { id: 8, logo: mongo, name: "MongoDB" },
        { id: 9, logo: gol, name: "Golang" },
        { id: 10, logo: sql, name: "SQL" },
        { id: 11, logo: nodde, name: "Nodejs" },
    ];

    return (
        <div   name="Skill Set"
        className='max-w-screen-3xl container mx-auto px-4 md:px-20 mt-10'>
            <div className='font-bold mb-5'>
                <h1 className='text-3xl underline flex flex-col items-center'>My Skills</h1>
                <div className='flex flex-wrap justify-center gap-x-6 gap-y-8 my-5'>
                    {skillItems.map(({ id, logo, name }) => (
                        <div 
                            key={id}
                            className='flex flex-col items-center transform transition-transform duration-300 hover:scale-110'
                        >
                            <div 
                                className='w-[120px] h-[120px] border-[2px] rounded-full shadow-lg overflow-hidden mb-2'
                                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <img 
                                    src={logo} 
                                    className='w-[80px] h-[80px] rounded-full object-cover' 
                                    alt={name} 
                                />
                            </div>
                            <div className='font-bold text-lg text-center'>
                                {name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skill_sets;
