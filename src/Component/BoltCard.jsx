import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const BoltCard = () => {
    return (
        <div className="container sm:flex sm:justify-between mt-20 overflow-x-auto">
            <div className="leftContainer flex flex-col items-center sm:flex-row sm:items-start">
                <div className="w-20 md:ml-10 h-20 rounded-full p-6 flex items-center text-lg font-bold" style={{ border: '6px solid #ff9800' }}>
                    <span>2</span>
                    <span><FontAwesomeIcon icon={faBolt} style={{ color: "#ff9800" }} /></span>
                </div>
                <div className="txtInf mt-4 sm:mt-0 sm:ml-4">
                    <p className='text-center sm:text-left text-xl font-bold'>You're on a 2-day streak!</p>
                    <span className='p-3 text-xs'>2 Longest streak</span>
                    <span className='text-xs'>19 Lessons completed</span>
                </div>
            </div>
            <div className="rightContainer flex flex-col mt-4 sm:mt-0 sm:ml-4 lg:ml-8">
                <div className="weekDays flex justify-center sm:justify-start space-x-2 sm:space-x-20">
                    <div>W</div>
                    <div>Th</div>
                    <div>F</div>
                    <div>S</div>
                    <div>Su</div>
                </div>
                <div className="bolt flex justify-center sm:justify-start space-x-2 sm:space-x-20 mt-2">
                    <span><FontAwesomeIcon icon={faBolt} style={{ color: "#ff9800" }} /></span>
                    <span className='border-2 border-yellow-500 rounded-xl h-12 w-8 flex items-center justify-center'>
                        <FontAwesomeIcon icon={faBolt} style={{ color: "#ff9800" }} />
                    </span>
                    <span><FontAwesomeIcon icon={faBolt} style={{ color: "#77B0AA" }} /></span>
                    <span><FontAwesomeIcon icon={faBolt} style={{ color: "#77B0AA" }} /></span>
                    <span><FontAwesomeIcon icon={faBolt} style={{ color: "#77B0AA" }} /></span>
                </div>
            </div>
        </div>
    );
}

export default BoltCard;
