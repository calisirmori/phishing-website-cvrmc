import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

function logLoginToSheet(username) {
  fetch('https://script.google.com/macros/s/AKfycbxpeQEome2yuwVIigU6cqUCuLeM2iKkZz27nulIdNOt7TbNd0WQiuxnHEAdvJylKL_obQ/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
    }),
  });
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-montserrat">
      {/* topbar */}
      <div className='w-full h-[50px] bg-cobreBlue flex justify-end items-center'>
        <ul className='flex text-white h-full items-center'>
          <li className='flex items-center h-full px-4 cursor-pointer hover:bg-[#66b7b1] hover:text-[#545460] hover:font-bold transition-all duration-200'>COVID-19 Vaccine</li>
          <li className='flex items-center h-full px-4 cursor-pointer hover:bg-[#66b7b1] hover:text-[#545460] hover:font-bold transition-all duration-200 bg-[#9d5324]'>COVID-19 Resources</li>
          <li className='flex items-center h-full px-4 cursor-pointer hover:bg-[#66b7b1] hover:text-[#545460] hover:font-bold transition-all duration-200'>Employee Area</li>
          <li className='flex items-center h-full px-4 cursor-pointer hover:bg-[#66b7b1] hover:text-[#545460] hover:font-bold transition-all duration-200'>Careers</li>
          <li className='flex items-center h-full px-4 cursor-pointer bg-[#66b7b1] text-[#545460] font-bold transition-all duration-200'>Bill Pay</li>
          <li className='flex items-center h-full px-4 cursor-pointer hover:bg-[#66b7b1] hover:text-[#545460] hover:font-bold transition-all duration-200'>Español</li>
          <li className='flex items-center h-full px-3 cursor-pointer hover:bg-[#66b7b1] transition duration-300'>
            <FaFacebookF className="text-xl" />
          </li>
          <li className='flex items-center h-full px-3 cursor-pointer hover:bg-[#66b7b1] transition duration-300'>
            <FaInstagram className="text-xl" />
          </li>
          <li className='flex items-center h-full px-3 cursor-pointer hover:bg-[#66b7b1] transition duration-300'>
            <FiSearch className="text-xl" />
          </li>
        </ul>
      </div>

      {/* navbar with the logo */}
      <div className='px-[30px] flex justify-between items-center py-[30px]'>
        <img
          src="https://cvrmc.org/wp-content/uploads/2021/01/CVRMC_mainlogo-REBUILT-OL.png"
          alt="CVRMC Logo"
          className="w-[370px]"
        />
        <div>
          <ul className='text-[#5a5a5a] flex justify-center'>
            <li className='px-4 text-lg text-center hover:opacity-70 cursor-pointer'>ABOUT US</li>
            <li className='px-4 text-lg text-center hover:opacity-70 cursor-pointer'>FIND A PROVIDER</li>
            <li className='px-4 text-lg text-center hover:opacity-70 cursor-pointer'>SERVICES</li>
            <li className='px-4 text-lg text-center hover:opacity-70 cursor-pointer'>LOCATIONS</li>
            <li className='px-4 text-lg text-center hover:opacity-70 cursor-pointer'>PATIENT RESOURCES</li>
            <li className='px-4 text-lg text-center hover:opacity-70 cursor-pointer'>PATIENT PORTAL</li>
          </ul>
        </div>
      </div>

      {/* actual content */}

      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-lg shadow-md p-10 w-full max-w-sm text-center">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnn5IYjo238aENQd0GushBCW1d_DgBmFyRSA&s" // replace with your logo
              alt="Logo"
              className="w-16 h-16"
            />
          </div>

          {/* Heading */}
          <h2 className="text-xl font-semibold text-gray-700">HR Partner</h2>
          <h3 className="text-lg font-bold text-cobreBlue mb-2">Employee Portal</h3>
          <p className="text-gray-500 mb-6">Welcome. Please login below.</p>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cobreBlue"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cobreBlue"
            />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                const username = document.querySelector("#username").value;
                logLoginToSheet(username);
                alert("Your login has been recorded.\n\nYou've just fallen for a simulated phishing attempt.\nYour credentials have been compromised.\n\nPlease report this to IT security immediately.");
              }}
              className="w-full bg-cobreBlue text-white font-semibold py-2 rounded hover:bg-[#005d5c] transition duration-200"
            >
              Login
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-6">
            Note: This login is for employees only. Admin users please use the admin <a href="#" className="text-cobreBlue hover:underline">login</a> form.
          </p>

          <p className="text-xs text-gray-400 mt-4">© 2021 HR Partner Software Pty Ltd</p>
        </div>
      </div>


      {/* footer */}
      <div className='bg-[#545454] w-full h-[260px] flex justify-center items-center'>
        <div className=' grid grid-cols-[2fr_1fr_1fr] w-[1220px]'>
          <div className='flex flex-col'>
            <div>
              <img
                src="https://cvrmc.org/wp-content/uploads/2020/10/CVRMC-logo-white.png"
                alt="CVRMC Logo"
                className="w-[250px]"
              />
              <div className='text-[#ffffff] mt-4 ml-[50px]'>5880 S. Hospital Drive</div>
              <div className='text-[#ffffff] -mt-2 ml-[50px]'>Globe, Arizona 85501</div>
              <div className='text-[#ffffff]  text-2xl ml-[50px]'>(928) 425-3261</div>
            </div>
          </div>
          <div className='w-[285px]'>
            <ul className='text-[#ffffff]'>
              <li className='bg-[#00877d] hover:bg-[#000000] cursor-pointer duration-200 text-center text-lg'>ABOUT US</li>
              <li className='bg-[#00877d] hover:bg-[#000000] cursor-pointer duration-200 text-center text-lg mt-0.5'>CAREERS</li>
              <li className='bg-[#00877d] hover:bg-[#000000] cursor-pointer duration-200 text-center text-lg mt-0.5'>COMMUNITY GUIDLINES</li>
              <li className='bg-[#00877d] hover:bg-[#000000] cursor-pointer duration-200 text-center text-lg mt-0.5'>CONTACT US</li>
              <li className='bg-[#00877d] hover:bg-[#000000] cursor-pointer duration-200 text-center text-lg mt-0.5'>COVID-19 RESOURCES</li>
              <li className='bg-[#00877d] hover:bg-[#000000] cursor-pointer duration-200 text-center text-lg mt-0.5'>EMPOLYEE AREA</li>
            </ul>
          </div>
          <div className='w-[285px]'>
            <ul className='text-[#ffffff]'>
              <li className='bg-[#00877d] hover:bg-[#000000] cursor-pointer duration-200 text-center text-lg'>BILL PAY</li>
              <li className='bg-[#00877d] hover:bg-[#000000] cursor-pointer duration-200 text-center text-lg mt-0.5'>FIND A PROVIDER</li>
              <li className='bg-[#00877d] hover:bg-[#000000] cursor-pointer duration-200 text-center text-lg mt-0.5'>LOCATIONS</li>
              <li className='bg-[#00877d] hover:bg-[#000000] cursor-pointer duration-200 text-center text-lg mt-0.5'>PATIENT RESOURCES</li>
              <li className='bg-[#00877d] hover:bg-[#000000] cursor-pointer duration-200 text-center text-lg mt-0.5'>REPORTS & POLICY NOTICES</li>
              <li className='bg-[#00877d] hover:bg-[#000000] cursor-pointer duration-200 text-center text-lg mt-0.5'>SERVICES</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
