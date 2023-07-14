import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
   //  basit bir kontrol yapısı 
    if (username === 'admin' && password === '12345') {
      // Başarılı giriş durumunda ana sayfaya yönlendirme
      navigate('/home');
    } else {
      // Hatalı giriş 
      alert('Hatalı kullanıcı adı veya parola!');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen"
    style={{
      background: '#ffc82c',
    }}
    >
        
    <div
      className="bg-yellow-200 p-8 rounded-lg border border-gray-300 shadow-xl"
      style={{
        width: '475px',
        height: '550px',
        borderRadius: '20px',
        background: '#FFFFFF',
        boxShadow: '2px 5px 10px 0px #0000001A',
        display: 'flex',
        flexDirection: 'column',
      }}
    >

      


<div className="flex  mb-12 flex-col items-center">

<h2 className="text-3xl font-bold mb-8 text-center relative">
  <span className="absolute left-0 top-0 bottom-0 w-2  bg-yellow-300"></span>
  <span className="  ml-4">MANAGE COURSES</span>
</h2>

    <label className='text-2xl font-bold '>  SIGN IN</label>
    <label className='text-gray-500'> Enter your credentials to access your account </label>

      </div>




        <div className="mb-4">
          <label htmlFor="username" className="text-gray-500  block mb-2">Email</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className=" text-gray-500 block mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            placeholder="Enter your password"
          />
        </div>


        <button
          onClick={handleSignIn}
          className=" mb-4   hover:bg-blue-600 bg-blue text-white py-2 px-4 rounded-md"
          style={{

            background: '#fcb912',
          }}
        >
          SIGN IN
        </button>
       

        <div className="flex  mb-4 flex-col items-center">
       <label  className='text-center'>
       Forgot your password?  
     <a href='#'  className='text-yellow-400 font-semibold   hover:underline'>  Reset Password  </a> 
       
       </label>
</div>


      </div>
    </div>
  );
};

export default Login;
