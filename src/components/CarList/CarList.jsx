import React from "react";
import whiteCar from "../../assets/white-car.png";
import car1 from "../../assets/car1.png";
import car3 from "../../assets/car6.png";
import { Link } from "react-router-dom";

const carList = [
  {
    name: "BMW UX",
    price: 150,
    image: whiteCar,
    aosDelay: "500",
  },
  {

    name: "KIA UX",
    price: 140,
    image: car1,
    aosDelay: "500",
  },
  {
      name: "Nissan",
      price: 220,
      image: car3,
      aosDelay: "400",
    },



  
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          A small selection of our cars
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          This is a small selection of our most reserved cars .
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <a href="#">Details</a>
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
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            
            <Link to="/Cars" >Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
