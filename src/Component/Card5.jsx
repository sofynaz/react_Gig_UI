import React from 'react';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import card from './assets/card.jpeg';
import math from './assets/math.png'


const Card5 = () => {
  return (
    <>
      <div class="mt-10 mx-4 md:mx-10 ">
        <h3 class="font-bold my-2 text-lg">Featued Learning Paths</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="overflow-hidden border border-sky-200 flex flex-col md:flex-row items-center px-2 py-3">
            <div class="w-full md:w-1/3">
              <img src={math} class="w-full h-auto" alt="Math" />
            </div>
            <div class="md:w-2/3 mx-2 mt-3 md:mt-0">
              <p class="text-xs">Cryptocurrency Lesson 1 of 9</p>
              <h4 class="font-bold my-2">A Brief History of Currency</h4>
              <p class="text-sm">Trust is the backbone of all Currencies, from commodity monies to crypto</p>
              <button class="bg-orange-500 text-xs p-2 rounded-full mt-3">
                <FontAwesomeIcon icon={faBookmark} class="mx-1 w-3 h-3 md:w-4 md:h-4" />
                <span class="hidden md:inline-block">In progress</span>
              </button>            </div>
          </div>
          <div class="overflow-hidden border border-sky-200 flex flex-col md:flex-row items-center px-2 py-3">
            <div class="w-full md:w-1/3">
              <img src={math} class="w-full h-auto" alt="Math" />
            </div>
            <div class="md:w-2/3 mx-2 mt-3 md:mt-0">
              <p class="text-xs">Cryptocurrency Lesson 1 of 9</p>
              <h4 class="font-bold my-2">A Brief History of Currency</h4>
              <p class="text-sm">Trust is the backbone of all Currencies, from commodity monies to crypto</p>
              <button class="bg-orange-500 text-xs p-2 rounded-full mt-3">
                <FontAwesomeIcon icon={faBookmark} class="mx-1 w-3 h-3 md:w-4 md:h-4" />
                <span class="hidden md:inline-block">In progress</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Card5
