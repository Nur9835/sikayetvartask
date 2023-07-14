import React from 'react'
import { Link } from 'react-router-dom';


const LeftPage = () => {
const admin = `../img/logo.jpg`;

  return (
  
 <div className="w-270px  min-h-screen   p-4"
    style={{
     background: '#f2eae1',
   }}>


<h2 className="text-xl font-bold mb-8 text-center relative">
  <span className="absolute left-0 top-0 bottom-0 w-2  bg-yellow-300"></span>
  <span className="  ml-4">MANAGE COURSES</span>
</h2>


   <div className="flex  font-semibold  flex-col items-center">
     <img
      src={admin}
       alt="Logo"
       className="w-28 h-28 rounded-full mb-2"
       
     />
     <h3 className="text-xl font-semibold text-center">John Doe</h3>
     <h3 className=" mb-3 text-yellow-400 font-semibold  text-center">Admin</h3>


     <div className="mt-4"  >


<ul className="flex text-center justify-start items-center flex-col gap-8 mt-10">
  <Link to="/home">
    <li className="flex hover:bg-yellow-400" >
      <img src="img/22.png" alt="Page 1" className="w-6 h-6 mr-4" />
      <span className="text-base">Home</span>
    </li>
  </Link>

  <li className="flex">
    <img src="img/33.png" alt="Page 2" className="w-6 h-6 mr-4" />
    <span className="text-base">Course</span>
  </li>

  <Link to="/student" className='flex'>
    <li className="flex hover:bg-yellow-400">
      <img src="img/44.png" alt="Page 3" className="w-6 h-6 mr-4" />
      <span className="text-base">Students</span>
    </li>
  </Link>

  <li className="flex">
    <img src="img/55.png" alt="Page 3" className="w-6 h-6 mr-4" />
    <span className="text-base">Payment</span>
  </li>

  <li className="flex">
    <img src="img/66.png" alt="Page 3" className="w-6 h-6 mr-4" />
    <span className="text-base">Report</span>
  </li>

  <li className="flex">
    <img src="img/77.png" alt="Page 3" className="w-6 h-6 mr-4" />
    <span className="text-base">Settings</span>
  </li>
</ul>


   </div>
   <div className="flex-grow"></div>

<div className="flex items-center justify-center  mt-28  ">
    <div>Logout</div>
  <img
    src="img/logout.png"
    alt="Logout Icon"
    className="w-5 h-4 ml-5"
  />

</div>

   </div>

 </div>

  )
}

export default LeftPage
