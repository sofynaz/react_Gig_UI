import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCopy, faCalendarDays, faBolt, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from './assets/logo.png';

const DemoComponent = () => {
  return (
    <>
      {/* navbar design! */}
      <nav className='sm:w-full fixed top-0 left-0 right-0 shadow-md shadow-indigo-300/50 flex justify-between px-4 sm:px-6 bg-white z-50'>
        <div className="log flex items-center">
          <img src={logo} className='w-8 h-8 rounded-2xl mt-2 mb-2' alt="Logo" />
          <h2 className='p-1'>BRILLIANT</h2>
        </div>
        <div className="sm:hidden flex items-center">
          <FontAwesomeIcon icon={faBars} className='text-xl' />
        </div>
        <ul className='hidden sm:flex items-center space-x-3'>
          <li className=''><FontAwesomeIcon icon={faHouse} /> Home</li>
          <li className=''><FontAwesomeIcon icon={faCopy} /> Courses</li>
          <li className=''><FontAwesomeIcon icon={faCalendarDays} /> Today</li>
        </ul>
        <div className="relative hidden sm:flex items-center ">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input className="pl-12 pr-5 bg-cyan-300/10 py-1 rounded-lg border-0 outline-none" type="text" placeholder="Search..." />
        </div>

        <div className="hidden sm:flex items-center justify-center border border-sky-500 h-8 mt-2 rounded-md p-4">
          <button className='h-5 cursor-pointer'>START TRIAL</button>
        </div>
        <div className="hidden sm:flex items-center cursor-pointer">
          <span>2</span>
          <span className='mx-3'><FontAwesomeIcon icon={faBolt} style={{ color: "#ec5a41" }} /> </span>
          <span><FontAwesomeIcon icon={faBars} /></span>
        </div>
      </nav>
    </>
  );
}

export default DemoComponent;
