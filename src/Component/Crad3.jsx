import React from 'react';
import box2 from './assets/chemis.jpeg';
import box3 from './assets/chere.jpeg';
import box4 from './assets/tissue.jpeg'

const Crad3 = () => {
    return (
        <>
            <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
                        <img
                            className="w-full h-auto object-cover"
                            src={box3}
                            alt="Box 2"
                        />
                        <div className="p-4">
                            <p className="font-bold">Computer Memory</p>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, ratione..</p>
                            <hr className="border-b-2 border-gray-300 my-2" />
                        </div>
                    </div>

                    <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
                        <img
                            className="w-full h-auto object-cover"
                            src={box2}
                            alt="Box 2"
                        />
                        <div className="p-4">
                            <p className="font-bold">Computer Memory</p>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, ratione..</p>
                            <hr className="border-b-2 border-gray-300 my-2" />
                        </div>
                    </div>

                    <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
                        <img
                            className="w-full h-auto object-cover"
                            src={box3}
                            alt="Box 3"
                        />
                        <div className="p-4">
                            <p className="font-bold">Computer Memory</p>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, similique!.</p>
                            <hr className="border-b-4 border-orange-400 my-2" />
                        </div>
                    </div>

                    <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
                        <img
                            className="w-full h-auto object-cover"
                            src={box4}
                            alt="Box 4"
                        />
                        <div className="p-4">
                            <p className="font-bold">Computer Memory</p>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nulla!.</p>
                            <hr className="border-b-2 border-gray-300 my-2" />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Crad3
