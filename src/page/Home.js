import React from 'react';
import LeftPage from '../components/LeftPage';

const Home = () => {

  return (
<div className="flex">
<LeftPage/>

  <div className="flex-1 flex-col p-4 bg-white"  
style={{
  background: '#ffff',
}}>

    <div className="flex-grow relative justify-center items-center   mb-28 " >

    <div className="absolute w-full  flex justify-between  items-center px-4"   >
      <div className='flex items-center'>  
      <img         
        src="img/left.png"
        alt="Sol Logo"
        className="w-5 h-5 mr-3"
      />
       </div>
      <img
        src="img/right.png"
        alt="Sağ Logo"
        className="w-5 h-5"
      />
    </div>

   <div className="py-10 "     style={{

    }}>



<div className="flex flex-col md:flex-row md:flex-wrap gap-4 ml-4">
  <div className="w-full md:w-64 h-40 bg-blue-50 rounded-lg shadow-md inline-block">
    <div className="text-start pt-4">
      <div className="text-lg font-semibold">
        <img src="img/s.png" alt="Page 1" className="w-15 h-12 ml-3" />
      </div>
      <h className="ml-3">Students</h>
    </div>
    <div className="text-center py-4">
      <h3 className="text-right mr-3 text-3xl font-bold">243</h3>
    </div>
  </div>

  <div
    className="w-full md:w-64 h-40 rounded-lg shadow-md inline-block"
    style={{
      background: '#FEF6FB',
    }}
  >
    <div className="text-start pt-4">
      <div className="text-lg font-semibold">
        <img src="img/c.png" alt="Page 1" className="w-15 h-12 ml-3" />
      </div>
      <h className="ml-3">Course</h>
    </div>
    <div className="text-center py-4">
      <h3 className="text-right mr-3 text-3xl font-bold">13</h3>
    </div>
  </div>

  <div
    className="w-full md:w-64 h-40 rounded-lg shadow-md inline-block"
    style={{
      background: '#FEFBEC',
    }}
  >
    <div className="text-start pt-4">
      <div className="text-lg font-semibold">
        <img src="img/p.png" alt="Page 1" className="w-15 h-12 ml-3" />
      </div>
      <h className="ml-3">Payments</h>
    </div>
    <div className="text-center py-4">
      <h3 className="text-right mr-3 text-3xl font-bold">556,000₺</h3>
    </div>
  </div>

  <div
    className="w-full md:w-64 h-40 rounded-lg shadow-md inline-block"
    style={{
      background: 'linear-gradient(to right, #FEAF00, #F8D442)',
    }}
  >
    <div className="text-start pt-4">
      <div className="text-lg font-semibold">
        <img src="img/ww.png" alt="Page 1" className="w-15 h-12 ml-3" />
      </div>
      <h className="ml-3">Users</h>
    </div>
    <div className="text-center py-4">
      <h3 className="text-right mr-3 text-3xl font-bold">3</h3>
    </div>
  </div>
</div>



</div>



</div>

  </div>

</div>



  );
};

export default Home;
