"use client";

import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
 

import InclusionExclusion from "../../Componentes/InclusionExclusion/InclusionExclusion";
import PackageHeaderdetail from "../../Componentes/PackageHeaderdetail/PackageHeaderdetail";
import Navbar from "../../Componentes/Navbar/Navbar";
import Footer from "../../Componentes/Footer/Footer";
import {
  FaMapMarkedAlt,
  FaListUl,
  FaBinoculars,
  FaSlidersH,
} from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa"; // 📍

import Image from "next/image";

const galleryImages = [
  "/Images/ditls-1.jpeg",
  "/Images/ditls-2.jpeg",
  "/Images/ditls-3.jpeg",
  "/Images/ditls-4.jpeg",
  "/Images/ditls-5.jpeg",
];

export default function TourUI() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }, 1000); // 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [galleryImages.length]);

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry form submitted!");
  };

  const fullItinerary = [
    {
      day: "Day 1",
      title: "Arrival - Johannesburg",
      description: `Arrive at Johannesburg International Airport and proceed for overnight stay at Johannesburg.`,
      note: `For any clients arriving other than the group arrival timings, the transfers will be charged as per the costs mentioned in the itinerary.`,
      meals: "Dinner",
    },
    {
      day: "Day 2",
      title: "Johannesburg – Lion Park - Sun City",
      description: `After breakfast, depart for the most memorable tour today. View the lions up close while inside a secure vehicle cage, visit the Cheetah & Wild-Dog viewing areas, then head to Sun City for an overnight stay.`,
      meals: "Breakfast, Lunch, Dinner",
    },
    {
      day: "Day 3",
      title: "Sun City – Leisure Day",
      description: `Enjoy a full day of leisure at Sun City. Explore the Valley of Waves, Water World, or try your luck at the casino. Relax or enjoy various optional adventure activities.`,
      meals: "Breakfast, Lunch, Dinner",
    },
    {
      day: "Day 4",
      title: "Sun City – Pretoria – Johannesburg – George",
      description: `Check out from Sun City and proceed to Pretoria for a panoramic city tour. Visit Union Buildings and other key landmarks. Later, transfer to the airport for your flight to George. On arrival, transfer to your hotel in Garden Route.`,
      meals: "Breakfast, Lunch, Dinner",
    },
    {
      day: "Day 5",
      title: "Garden Route – Oudtshoorn – Cango Caves & Wildlife Ranch",
      description: `Drive to Oudtshoorn and explore the fascinating Cango Caves with stunning limestone formations. Visit Cango Wildlife Ranch to see cheetahs, crocodiles, and more. Return to your hotel.`,
      meals: "Breakfast, Lunch, Dinner",
    },
    {
      day: "Day 6",
      title: "Garden Route – Mossel Bay",
      description: `Visit the Dias Museum Complex and enjoy breathtaking ocean views. Optionally try thrilling water sports. Spend time at the beach or take a stroll through the charming town.`,
      meals: "Breakfast, Lunch, Dinner",
    },
    {
      day: "Day 7",
      title: "Garden Route – Cape Town",
      description: `Transfer to Cape Town by scenic drive. On arrival, check in to the hotel. Enjoy the evening at leisure or explore V&A Waterfront.`,
      meals: "Breakfast, Lunch, Dinner",
    },
    {
      day: "Day 8",
      title: "Cape Town – Table Mountain – City Tour",
      description: `Ascend Table Mountain via cableway (weather permitting) and get a bird's eye view of the city. Later, proceed for a city tour including Company Gardens, Greenmarket Square, Signal Hill, and more.`,
      meals: "Breakfast, Lunch, Dinner",
    },
    {
      day: "Day 9",
      title: "Game Drive",
      description: `Depart for early morning game drive in Pilanesberg National Park. Free day at Sun City. Overnight at hotel.`,
      note: "No Lunch Today",
      meals: "Breakfast, Dinner",
    },
    {
      day: "Day 10",
      title: "Johannesburg – George (By Flight – 2hrs Approx)",
      description: `Take a flight to George and explore the scenic Garden Route. Overnight at George.`,
      meals: "Breakfast, Lunch, Dinner",
    },
  ];

  const visibleItinerary = showAll ? fullItinerary : fullItinerary.slice(0, 2);

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen relative mt-26 ">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex-1 bg-white p-4  ">
            <div className="relative w-full h-96 rounded overflow-hidden">
              <Image
                src={galleryImages[currentImage]}
                alt="Gallery Image"
                fill
                className="object-cover rounded transition-all duration-500"
              />
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <button
                  onClick={handlePrev}
                  className="bg-black bg-opacity-50 p-2 rounded-full text-white"
                >
                  <FaChevronLeft />
                </button>
              </div>
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                <button
                  onClick={handleNext}
                  className="bg-black bg-opacity-50 p-2 rounded-full text-white"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>

            <PackageHeaderdetail />

            <div className="flex gap-3 p-4 flex-wrap mt-6 bg-white z-0 sticky top-[100px] shadow-md">
              <a href="#Overview">
                {" "}
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium shadow-md transition-all duration-300 cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105">
                  <FaMapMarkedAlt className="text-lg" />
                  <span>Overview</span>
                </button>
              </a>
              <a href="#Day">
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium shadow-md transition-all duration-300 cursor-pointer bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 hover:scale-105">
                  <FaSlidersH className="text-lg" />
                  <span>Days</span>
                </button>
              </a>
              <a href="#Inclusion">
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium shadow-md transition-all duration-300 cursor-pointer bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 hover:scale-105">
                  <FaListUl className="text-lg" />
                  <span>Inclusion & Exclusion</span>
                </button>
              </a>
              <a href="#Map">
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium shadow-md transition-all duration-300 cursor-pointer bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 hover:scale-105">
                <FaMapMarkedAlt className="text-lg" />
                <span>Map</span>
              </button></a>
            </div>

            <hr />
            {/*  Our Tour Details */}
            <section className="max-w-5xl mx-auto mt-2 px-4 py-6 bg-white rounded-xl shadow-md space-y-4">
              <h2 className="text-2xl font-bold text-center text-yellow-700">
                Our Tour Details
              </h2>

              <p className="text-gray-700 leading-relaxed">
                <strong>Scenic Manali Volvo Tour by Gold Tour Travel</strong>{" "}
                <br />
                Discover the beauty of Manali with our all-inclusive Volvo
                package from Delhi. Travel in comfort with Volvo coaches, stay
                in premium hotels, and explore breathtaking spots like{" "}
                <strong>Solang Valley</strong>, <strong>Hadimba Temple</strong>,
                and the famous <strong>Mall Road</strong>. A perfect getaway for
                couples, families, and friends seeking mountain bliss.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Enjoy well-planned itineraries, seamless transfers, and
                top-notch services. Your comfort and satisfaction are our top
                priorities. Trust Gold Tour Travel to turn your holidays into
                unforgettable memories.
              </p>

              <p className="text-gray-700 leading-relaxed">
                From snow adventures to cozy mountain evenings, experience
                Manali like never before. Contact Gold Tour Travel today to
                reserve your dream trip and enjoy a relaxing and adventurous
                escape in the Himalayas.
              </p>
            </section>
            {/* Day wise travel itinerary   */}
            <div className="shadow-lg rounded-lg p-6 bg-white mt-12" id="Day">
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                <FaListUl className="text-blue-500 text-3xl" />
                Day wise travel itinerary
              </h2>
              <hr />
              <div className="space-y-6 text-sm leading-relaxed">
                {visibleItinerary.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg shadow-md border border-gray-100"
                  >
                    <p className="text-red-500 mt-2 font-semibold flex items-center gap-1">
                      <FaMapMarkerAlt className="text-red-500" />
                      {item.day}:{" "}
                      <span className="text-black font-bold">{item.title}</span>
                    </p>

                    <p>{item.description}</p>

                    {item.note && (
                      <p className="text-xs font-semibold italic mt-1">
                        Note: {item.note}
                      </p>
                    )}

                    <p className="font-semibold mt-1">
                      Included Meals:{" "}
                      <span className="font-normal">{item.meals}</span>
                    </p>
                  </div>
                ))}
              </div>

              {!showAll && (
                <div className="text-center mt-6">
                  <button
                    onClick={() => setShowAll(true)}
                    className="px-5 py-2 bg-blue-600 text-white cursor-pointer rounded hover:bg-blue-700 transition"
                  >
                    Read More
                  </button>
                </div>
              )}
            </div>

            <div id="Inclusion">
              <InclusionExclusion />
            </div>

            <div className="max-w-5xl mx-auto p-4" id="Map">
              {/* Heading */}
              <h2 className="text-2xl font-semibold mb-2">Tour Map</h2>

              {/* Description Paragraph */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                Explore your journey through our interactive tour map. Discover
                exciting destinations, experience local culture, and plan your
                adventures with ease using this visual guide.
              </p>

              {/* Google Map Iframe */}
              <div className="w-full h-80 md:h-[450px] rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31562.063303317025!2d78.032191!3d27.175015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371c0aeaf1fc9%3A0xb06ab45f4df1cf66!2sTaj%20Mahal!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* right form  */}
          <div className="w-full lg:w-1/3 bg-gray-100 p-6 flex flex-col gap-1 sticky top-20 self-start h-fit">
            <div className="md:static md:mt-0 fixed bottom-0 left-0 w-full bg-white shadow-md p-4 z-50 md:w-auto md:bg-transparent md:shadow-none">
              <h2 className="text-xl font-semibold">Starting Price</h2>
              <div className="text-2xl font-bold">
                ₹ 75,000-/{" "}
                <span className="text-sm font-normal">per person</span>
                <p className="text-xs text-yellow-600">* GST & TCS Extra</p>
              </div>
            </div>

            <div className="mt-2 bg-white p-4 rounded-2xl shadow-xl max-w-xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Inquiry Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
                />
                <textarea
                  placeholder="Your Message"
                  rows="3"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
                >
                  Submit Inquiry Form
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
