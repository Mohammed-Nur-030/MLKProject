import React from 'react'

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;
    let veg = props.veg;
    let setVeg = props.setVeg;

    function filterHandler(title) {
        setCategory(title);
    }
    console.log("veg")
    console.log(veg)
    

  return (
    <div className=''>
      <div className=' flex justify-center items-center gap-4 ' >
        <div
        onClick={()=>setVeg(true)}
        className={` cursor-pointer  text-sm md:text-base lg:text-lg xl:text-xl px-2 py-1 rounded-md font-medium 
        text-white bg-yellow-100 hover:bg-opacity-60 border-2 transition-all duration-300
        ${veg ? 
          "bg-opacity-80 " :
          "bg-opacity-40 border-transparent"}}
        `}
        >
          Veg
        
        </div>
        <div
        className={` cursor-pointer  text-sm md:text-base lg:text-lg xl:text-xl px-2 py-1 rounded-md font-medium 
        text-white bg-yellow-100 hover:bg-opacity-60 border-2 transition-all duration-300
        ${veg===false ? 
          "bg-opacity-80 " :
          "bg-opacity-40 border-transparent"}`}
          onClick={()=>setVeg(false)}
        >
          Non Veg
        
        </div>

      </div>

    <div className="filter-section flex flex-wrap  justify-center items-start  py-6 ">
      {
        filterData.map( (data) => (
           <div className='filter-btn   w-full my-2 '>
             <div
            className={` cursor-pointer  text-sm md:text-base lg:text-lg xl:text-xl px-2 py-1 rounded-md font-medium 
            text-white bg-yellow-100 hover:bg-opacity-60 border-2 transition-all duration-300
            ${category === data.title ? 
            "bg-opacity-80 " :
            "bg-opacity-40 border-transparent"}
            w-[80%]
            mx-auto
            `}
            // className='py-2 px-2 bg-red-400 w-full'
             key={data.id}
             onClick ={() => filterHandler(data.title)}
             >{data.title}</div>
           </div>
        ))
      }
    </div>
    </div>

  )
}

export default Filter
