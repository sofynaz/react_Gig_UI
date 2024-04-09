import React from 'react';
import box1 from './assets/bonds.jpeg'

const Card4 = () => {
    return (
        <>
            <div class="container mt-10 mx-4 md:mx-10  shadow-md inline-block">
    <h3 class="font-bold text-lg text-center md:text-left my-2">Recommended For You!</h3>
    <div class="box-1 border relative md:inline-block items-center md:border-gray-300 flex flex-col md:flex-row">
        <div class="overflow-hidden md:inline-block md:h-64 md:py-4 md:px-4 flex items-center justify-center">
            <img class="h-auto object-cover rounded-lg md:h-full md:w-auto" src={box1} alt="Box 1" />
        </div>
        <div class="paragraph mt-3  md:ml-4 md:order-first flex flex-col justify-center md:mt-0 md:mb-3 ">
            <div class="text-center    md:text-sm  font-bold">Computer Memory</div>
            <div class="text-center  text-sm ">Lorem ipsum dolor sit amet.</div>
        </div>
    </div>
</div>



        </>
    )
}

export default Card4
