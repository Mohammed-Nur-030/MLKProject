import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { client, urlFor } from '../client';
// import Switch from "react-switch";
import { Switch } from "antd";


import Loader from '../components/Loader';
import Filter from '../components/Filter';
import Plan from '../components/Plan';
import FilterExtra from '../components/FilterExtra';
import PlanExtra from '../components/PlanExtra';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import PlanVeg from '../components/PlanVeg';
import { Helmet } from 'react-helmet';


const filterData = [
  {
    id: "1",
    title: "Monday",
  },
  {
    id: "2",
    title: "Tuesday",
  },
  {
    id: "3",
    title: "Wednesday",
  },
  {
    id: "4",
    title: "Thursday",
  },
  {
    id: "5",
    title: "Friday",
  },
  {
    id: "6",
    title: "Saturday",
  },
  {
    id: "7",
    title: "Sunday",
  },
];
const AdditionalData = [
  {
    id: "1",
    title: "Salads",
  },
  {
    id: "2",
    title: "Addons",
  },
  {
    id: "3",
    title: "Beverages",
  },
];

const Menu = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [menu, setMenu] = useState([]);

  const [loading, setLoading] = useState(false) // Initialize loading state as true
  const [category, setCategory] = useState(filterData[0].title);
  const [extra, setExtra] = useState(AdditionalData[0].title);
  const [additional, setAdditional] = useState([]);
  const [veg, setVeg] = useState(true);
  const [vegHead, setVegHead] = useState(true);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Kolkata' };
  const today = new Date();
  const date = today.toLocaleDateString(undefined, options);
  const day = today.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'Asia/Kolkata' });



  async function connectToSanity() {
    const menuQuery = `*[_type == "meal"]`;
    const additonalQuery = `*[_type == "additional"]`;

    try {
      setLoading(true);
      const menuData = await client.fetch(menuQuery);
      setMenu(menuData);
      const additionalData = await client.fetch(additonalQuery);
      setAdditional(additionalData);

    } catch (error) {
      console.error('Error fetching data from Sanity:', error);
    } finally {
      setLoading(false); // Update loading state to false after fetching data
    }
  }


  useEffect(() => {
    connectToSanity();
  }, []);


  const newMenu = menu.filter((obj) => !obj.day.startsWith("Veg"));;
  const newAdditional = additional;

  const foundObject = newMenu.filter((obj) => {
    const dayWords = obj.day.split(' ');
    const lastWord = dayWords[dayWords.length - 1].toLowerCase();
    return lastWord === day.toLowerCase();
  });
  const vegDaysArray = menu.filter((obj) => obj.day.startsWith("Veg"));
  const foundObjectVeg = vegDaysArray.filter((obj) => {
    const dayWords = obj.day.split(' ');
    const lastWord = dayWords[dayWords.length - 1].toLowerCase();
    return lastWord === day.toLowerCase();
  });
  const handleToggle = () => {
    setVegHead(!vegHead); // Toggle the state between true and false
  };

  // console.log("vegDaysArray");
  // console.log(vegDaysArray);
  // console.log("foundObjectVeg")
  // console.log(foundObjectVeg)


  // console.log("menu")
  // console.log(menu)
  // console.log("foundObject")
  // console.log(foundObject)
  // console.log("foundObjectveg")
  // console.log(foundObjectVeg)
  // console.log("newMenu")
  // console.log(newMenu)

  // console.log("additional")
  // console.log(additional)
  // console.log("newAdditional")
  // console.log(newAdditional)


  if (loading) {
    return (
      <div className='bg-yellow-200 h-[110vh]'>
        <Loader />
      </div>

    )

  }

  return (
    <div>
      <Helmet>
                <title>
                    Menu-TheMetroLightKitchen
                </title>
                <meta name="description"
                    content=" Indulge in a culinary journey through the flavors of India with our diverse menu. From classic favorites like Butter Chicken and Aloo Paratha to healthy choices like Methi Aloo and Drumstick Fry, there's something for every palate. Explore our daily specials and plan your week with our themed dishes. Dive into the deliciousness today" />
 <meta name='keywords' content='Daily Meals,Daily Tiffin,I am Hungry,Canteen,Tiffin Service in Bengaluru ' />
            </Helmet>
      <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <div>


        <div className='menu-hero flex justify-center items-center flex-col text-white'>

          <div className=' py-6 day-title'>
            {
              day === "Monday" ? (
                <div>
                  Hey it's  Lazy Monday!
                </div>
              ) : day === "Tuesday" ? (
                <div>
                  Hey it's  Tasting Tuesday!
                </div>
              ) :
                day === "Wednesday" ? (
                  <div>
                    Hey it's  Wellness Wednesday!
                  </div>
                ) :
                  day === "Thursday" ? (
                    <div>
                      Hey it's  Tempting Thursday!
                    </div>
                  ) :
                    day === "Friday" ? (
                      <div>
                        Hey it's  Feel Good  Friday!
                      </div>
                    )
                      : day === "Saturday" ? (
                        <div>
                          Hey it's  Swagy Saturday!
                        </div>
                      )
                        :
                        (
                          <div>
                            Hey it's  Fishys Sunday!
                          </div>
                        )
            }
          </div>

          <div className=' description-title mx-auto '>
            {
              foundObject[0]?.description
            }
          </div>

        </div>


        <section className="today-meal my-4 py-6">
          <div className=" w-[90vw] mx-auto    ">
          

              <h2 className='today-meal-heading py-4 bg-yellow-100 text-slate-900  text-center rounded-t-xl font-semibold flex justify-center items-center text-lg  sm:text-lg md:text-lg lg:text-xl xl:text-2xl px-6  '>
                Handcrafted Special Combo Just For you
                <div className='ml-auto'>
              <Switch checkedChildren="Non-veg" unCheckedChildren="veg" onChange={handleToggle}  defaultChecked className='bg-green-400 checked:bg-red-400'/>
                </div>

              </h2>
           
            <div className=' today-menu-parent   flex   gap-2 px-4 bg-slate-900 rounded-b-xl'>
              <div className="w-[70%]  today-menu-child1 flex justify-center items-center flex-wrap py-4  ">
                {
                  vegHead ? (
                    foundObject[0]?.namesAndVeg.map((item, index) => {
                      return (
                        <div key={index} className="w-60 h-60 todays-food  mx-2 shadow-sm shadow-white rounded-xl mt-2"
                          style={{
                            backgroundImage: `url(${urlFor(item?.image?.asset?._ref).url()})`,
                          }}
                        ></div>
  
                      )
                    })
                  ):(
                    foundObjectVeg[0]?.namesAndVeg.map((item, index) => {
                      return (
                        <div key={index} className="w-60 h-60 todays-food  mx-2 shadow-sm shadow-white rounded-xl mt-2"
                          style={{
                            backgroundImage: `url(${urlFor(item?.image?.asset?._ref).url()})`,
                          }}
                        ></div>
  
                      )
                    })
                  )
                 
                }

              </div>
              <div className="w-[30%] today-menu-child2  flex justify-center items-center flex-col bg-white rounded-xl shadow-md shadow-white my-4 ">
                <div className='font-semibold text-xl py-6 '>
                  This Combo Consists of:
                </div>
                <div>
                  <ul className='list-disc mx-auto'>

                    {
                      vegHead? (
                        foundObject[0]?.namesAndVeg.map((item, index) => {
                          return (
                            <li key={index}>{item.name}</li>
  
                          )
                        })
                      ):(
                        foundObjectVeg[0]?.namesAndVeg.map((item, index) => {
                          return (
                            <li key={index}>{item.name}</li>
  
                          )
                        })
                      )


                    }
                  </ul>
                </div>
                <div className='py-6'>
                  All of these at just <span className='text-semibold'>&#8377;149</span>
                </div>
                <div className='flex flex-col py-2 gap-2'>
                  <div>
                    Order Now to grab your Meal
                  </div>
                  <div className='mx-auto'>
                    <NavLink to="https://wa.me/919353627039?text=Hi!%20I%20Want%20to%20enquire%20about%20today's%20meal">
                      <div className='meal-option-btn text-white py-2 px-4 w-40 text-center flex justify-between items-center '>
                        <div>
                          Order Now
                        </div>
                        <div className='h-8 w-8'>
                          <img src="images/whatsapp.png" alt="whatsapp" className='h-full w-full ' />
                        </div>
                      </div>
                    </NavLink>

                  </div>
                </div>


              </div>

            </div>

          </div>
        </section>

        <section className="weekly-menu py-4 bg-slate-900">
          <div className="   mx-auto  ">
            <h2 className=' weekly-menu-heading text-center text-2xl font-semibold pb-12 my-2 pt-12 text-yellow-100  '>Our Weekly Plan</h2>

            <div className=" weekly-menu-parent  flex justify-center  ">

              <div className=" weekly-menu-child1 category w-1/4 flex justify-start items-start flex-col bg-slate-900 rounded-xl shadow-md shadow-white py-6 ">
                <h2 className=' font-bold w-full  py-2  flex justify-center items-center text-yellow-100 '>Weekly Menu</h2>
                <div className='filter-button-container'>

                  <Filter
                    filterData={filterData}
                    category={category}
                    setCategory={setCategory}
                    veg={veg}
                    setVeg={setVeg}
                  >
                  </Filter>


                  <div className=' rounded-xl w-full '>
                    {/* <hr /> */}
                    <h2 className='font-bold w-full  py-2  flex justify-center items-center  text-yellow-100'>Additionals:</h2>

                    <FilterExtra
                      AdditionalData={AdditionalData}
                      extra={extra}
                      setExtra={setExtra}
                    >
                    </FilterExtra>
                  </div>



                </div>

              </div>

              <div className="content weekly-menu-child2 w-3/4 mx-2 rounded-xl ml-2 shadow-md shadow-white ">
                {
                  console.log("before rendering", veg, category)
                }
                {
                  veg ? (
                    <PlanVeg vegDaysArray={vegDaysArray} category={category} />
                  ) :
                    (
                      <Plan newMenu={newMenu} category={category} />
                    )

                }
                {
                  <PlanExtra newAdditional={newAdditional} extra={extra} />
                }

              </div>




            </div>
          </div>
        </section>

        <section className="order bg-slate-900 py-8">
          <dive className="container py-6">
            <div className='meal-option-btn w-[350px] cursor-pointer  mx-auto py-2 px-2 text-center rounded-xl text-white font-semibold flex justify-center items-center gap-4'>
              <div>
                Order your <span>{foundObject[0]?.day} Meal Now</span>
              </div>
              <div className='h-8 w-8'>
                <img src="images/whatsapp.png" alt="whatsapp" className='h-full w-full ' />
              </div>

            </div>
          </dive>
        </section>
        <hr />

      </div>
      <Footer />




    </div>
  )
}

export default Menu
