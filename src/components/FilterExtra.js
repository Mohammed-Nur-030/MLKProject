import React from 'react'

const FilterExtra = ({ AdditionalData, extra, setExtra }) => {
    console.log("AdditionalData")
    console.log(AdditionalData)

    function filterHandler(title) {
        setExtra(title);
    }

    return (
        <div>
            <div className="filter-section flex flex-wrap pt-6  justify-center">
                {
                    AdditionalData?.map((data) => (
                        <div className='w-full my-2 filter-btn '>
                            <div
                                className={` cursor-pointer  text-sm md:text-base lg:text-lg xl:text-xl px-2 py-1 rounded-md font-medium 
                                        text-white bg-yellow-200 hover:bg-opacity-60 border-2 transition-all duration-300
                                        ${extra === data.title ?
                                        "bg-opacity-80 border-white" :
                                        "bg-opacity-40 border-transparent"}
                                        w-[80%]
                                        mx-auto
                 `}
                                // className='py-2 px-2 bg-red-400 w-full'
                                key={data.id}
                                onClick={() => filterHandler(data.title)}
                            >{data.title}</div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default FilterExtra
