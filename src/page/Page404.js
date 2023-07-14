import React from 'react'
import LeftPage from '../components/LeftPage';


function Page404() {
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


<h1 className="text-red-400">
          Üzgünüz, aradığınız sayfa bulunamadı...
        </h1>



</div>



</div>

  </div>


        
    </div>
  )
}

export default Page404
