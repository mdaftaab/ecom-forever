import { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');

  const onSubmitHandler = (event) =>{
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-500'>
        
        {/* Heading */}
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>
        
        {/* Sign Up / Login */}
        {
          currentState === 'Sign Up' ? (
            <input type='text' placeholder='Full Name' className='border border-gray-800 w-full outline-none px-3 py-2' required />
          ) : ''
        }
        
        <input type='email' placeholder='Email Address' className='border border-gray-800 w-full outline-none px-3 py-2 mt-2' required />
        <input type='password' placeholder='Password' className='border border-gray-800 w-full outline-none px-3 py-2 mt-2' required />

        <div className='w-full flex justify-between text-sm mt-[-4px]'>
          <p className='cursor-pointer'>
            Forget Password?
          </p>
          {
            currentState === 'Sign Up'? (
              <p className='cursor-pointer' onClick={() => setCurrentState('Login')}>
                Login
              </p>
            ) : (
              <p className='cursor-pointer' onClick={() => setCurrentState('Sign Up')}>
                Create Account
              </p>
            )
          }
        </div>
        <button className='cursor-pointer bg-black text-white px-4 py-2 border'>{currentState === 'Sign Up' ? 'Sign In' : 'Login'}</button>
    </form>
  )
}

export default Login