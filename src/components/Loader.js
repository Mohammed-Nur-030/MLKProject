import React from 'react';
import './Loader.css'; // Import the CSS file containing the styles

const Loader = () => {
    return (
        <div className=' container mx-auto flex justify-center items-center flex-col bg-yellow-200 '>
           
            <h1>Cooking in progress..</h1>
            
            <div className=''>
                <div id="cooking">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className=''>
                        <div id="area">
                            <div id="sides">
                                <div id="pan"></div>
                                <div id="handle"></div>
                            </div>
                            <div id="pancake">
                                <div id="pastry"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Loader;
