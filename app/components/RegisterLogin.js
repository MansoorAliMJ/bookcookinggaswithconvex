import React from 'react'

const RegisterLogin = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='max-w-lg max-w-sm w-96 mx-auto px-4'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            className='mx-auto h-10 w-auto'
            src='images/cooking.png'
            alt='Your Company'
          />
          <h2 className='mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign IN
          </h2>
        </div>

        <div>
          {/* Username field */}
          <div className='mb-4'>
            <label
              htmlFor='username'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Username or Phone
            </label>
            <input
              type='text'
              id='username'
              name='username'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>

          {/* Password field */}
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
export default RegisterLogin
