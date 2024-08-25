import { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const [error, setError] = useState(null)

  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-500'>
        <div className='inline-flex items-center'>

        </div>
    </form>
  )
}

export default Login