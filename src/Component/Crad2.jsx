import React from 'react';
import card from './assets/card.jpeg';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Crad2 = () => {
    return (
        <>
           <div className="container-full mt-10 mx-11">
            <h3 className='ml-10'>Pick up where you left off</h3>

            <div className="container border border-sky-200 flex flex-col sm:flex-row items-center justify-between px-2 py-3">
                <div className="card mb-4 sm:mb-0 sm:mr-4">
                    <img src={card} alt="Lesson" className="w-full h-auto" />
                </div>
                <div className="brief">
                    <p className='text-xs'>Cryptocurrency Lesson 1 of 9</p>
                    <h4 className='font-bold my-2'>A Brief History of Currency</h4>
                    <p className='text-sm'>Trust is the backbone of all Currencies, from commodity <br /> monies to crypto</p>
                    <button className='bg-slate-900 text-white p-2 rounded-md mt-3 mx-auto sm:mx-1'>
                        <FontAwesomeIcon icon={faPlay} className='mx-1' />
                        Resume course
                    </button>
                </div>
            </div>
        </div>





        </>
    )
}

export default Crad2
