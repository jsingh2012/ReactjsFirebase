import React from 'react'
import { heroData } from '../utils/data'
import Delivery from './img/delivery.png'
import HeroBg from "./img/heroBg.png"


const HomeContainer = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
            <div className="py-2 flex-1 flex flex-col items-start md:items-center justify-center gap-6">
                <div className="flex flex-col items-start  justify-center gap-6">
                    <div className="flex items-center gap-2 justify-center bg-orange-100 
            px-4 py-1 rounded-full">
                        <p className="text-base text-orange-500 font-semibold">
                            Bike Delivery
                        </p>
                        <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
                            <img src={Delivery}
                                className="w-full h-full bg-white object-contain"
                                alt="delivery"
                            />
                        </div>
                    </div>
                    <p className='text-[2.5rem]  md:text-[4.5rem] font-bold tracking-wide text-headingColor'>
                        The Fastest Delivery in <span className='text-orange-600 text-[3rem] md:text-[5rem]'>Your City</span>
                    </p>
                    <p className="text-base text-textColor  text-center md:text-left md:w-[80%]">
                        hjfgs fgsfhgskj gfjskgf hjsgfhsgfgsgf jsgsfhg jkhskjdfgh jkhsgjkh dsjklghkjlsdhgjkdshkg sdjkfl4
                        sfdhgkjdsgsdgkldsgjlksd hgsjghksfhgkljlskgj lgsdf kghkjshgklsdfjgljlkdfgjlkdjfl
                        gdsfkjghkdsjfdfkfjhsgfj sdgfgsjgfjysgf ersfhjsg flglfjsgdjkfglsk ghfkljs flshfljkshfkl slif
                    </p>
                    <button type="button"
                        className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">Order Now</button>
                </div>
            </div>
            <div className="py-2 flex-1 flex items-center relative">
                <img src={HeroBg} className="ml-auto h-400 w-full lg:w-auto lg:h-650" alt="hero-bg"></img>
                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4 gap-2 flex-wrap">
                    {heroData && heroData.map(n => (
                        <div key={n.id} className="w-190 p-4 flex flex-col bg-cardOverlay backdrop-blur-md rounded-3xl items-center 
                        justify-center drop-shadow-2xl
                        ">
                            <img src={n.imageSrc} className="w-40 -mt-20" alt="I1"></img>
                            <p className="text-xl font-semibold text-textColor mt-4">
                                {n.name}
                            </p>
                            <p className="text-sm font-semibold text-lighttextGray my-3">
                                {n.decp}
                            </p>
                            <p className="text-sm font-semibold text-headingColor">
                                <span className="text-xs text-red-500">$</span> {n.price}</p>
                        </div>))}
                </div>
            </div>
        </section>
    )
}

export default HomeContainer