import React from 'react';
import whiteCar from "../../assets/white-car.png";
import { FaCartPlus } from "react-icons/fa";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.webp";
import car4 from "../../assets/car4.png";
import car5 from "../../assets/car5.png";
import car6 from "../../assets/car6.png";
import car7 from "../../assets/car7.png";
import car10 from "../../assets/car10.webp";


const carList = [
    {
      id: 1 ,
      name: "BMW UX",
      price: 150,
      image: whiteCar,
      aosDelay: "500",
    },
    {
      id: 2, 
      name: "KIA UX",
      price: 140,
      image: car1,
      aosDelay: "500",
    },
    {
        id: 3, 
        name: "Nissan",
        price: 220,
        image: car3,
        aosDelay: "400",
      },
      {
        id: 4, 
        name: "Lamborghini",
        price: 230,
        image: car7,
        aosDelay: "500",
      },
      {
        id: 5, 
        name: "	Hyundai",
        price: 200,
        image: car5,
        aosDelay: "1100",
      },
      {
        id: 6, 
        name: "Ferrari",
        price: 300,
        image: car10,
        aosDelay: "1200",
      },
  ];
const Cars = ({ addToCart }) => {


  const handleAddToCart = (car) => {
    const carToAdd = {
      id: car.id, // استخدام ID الخاص بالسيارة
      name: car.name,
      price: car.price,
      image: car.image,
    };

    // إضافة السيارة إلى السلة
    addToCart(carToAdd);
  };
    return (
        <div className="pb-24 mt-16">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-center text-3xl sm:text-4xl font-semibold font-serif mb-3 "
        >
          Lorem ipsum dolor
        </h1>
        <p data-aos="fade-up" aos-delay="400" className=" text-center text-sm pb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
          nemo ab?
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((car) => (
              <div
                data-aos="fade-up"
                data-aos-delay={car.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={car.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{car.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold ">
                    <p>${car.price}/Day</p>
                     <button  className="text-red-500" onClick={() => handleAddToCart(car)}><FaCartPlus /></button> 
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  12Km
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        
      </div>
    </div>
      );

}

export default Cars;