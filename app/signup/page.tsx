'use client'
import React, { useState } from 'react'

import { useAction } from 'convex/react'
import { api } from '@/convex/_generated/api'

const page = () => {
  const signUP = useAction(api.useractions.register)
  const [username, setUserName] = useState('mansoor')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState(9632)
  const [password, setPassword] = useState('')
  const [preferredLanguage, setPreferredLanguage] = useState('en')
  const [state, setSate] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [showSection2, setShowSection2] = useState(false)

  const handleNext = () => {
    setShowSection2(true)
  }

  const handlePrevious = () => {
    setShowSection2(false)
  }

  const signUPHandler = async () => {
    try {
      await signUP({
        username,
        name,
        phone,
        password,
        preferredLanguage,
        state,
        city,
        address,
      })
    } catch (err) {
      console.log(err)
    }
  }

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
            Sign Up
          </h2>
        </div>

        {!showSection2 && (
          <div>
            {/* Username field */}
            <div className='mb-4'>
              <label
                htmlFor='username'
                className='block text-gray-700 text-sm font-bold mb-2'
              >
                Username
              </label>
              <input
                type='text'
                id='username'
                name='username'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>

            {/* Name field */}
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-gray-700 text-sm font-bold mb-2'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>

            {/* Phone field */}
            <div className='mb-4'>
              <label
                htmlFor='phone'
                className='block text-gray-700 text-sm font-bold mb-2'
              >
                Phone
              </label>
              <input
                type='text'
                id='phone'
                name='phone'
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

            {/* Next button */}
            <div className='flex items-center justify-between'>
              <button
                type='button'
                onClick={handleNext}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Section 2: Remaining four fields */}
        {showSection2 && (
          <div>
            {/* Preferred Language dropdown */}
            <div className='mb-4'>
              <label
                htmlFor='language'
                className='block text-gray-700 text-sm font-bold mb-2'
              >
                Preferred Language
              </label>
              <select
                id='language'
                name='language'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value='english'>English</option>
                <option value='spanish'>Spanish</option>
                <option value='french'>French</option>
              </select>
            </div>

            {/* State dropdown */}
            <div className='mb-4'>
              <label
                htmlFor='state'
                className='block text-gray-700 text-sm font-bold mb-2'
              >
                State
              </label>
              <select
                id='state'
                name='state'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value='state1'>State 1</option>
                <option value='state2'>State 2</option>
                <option value='state3'>State 3</option>
              </select>
            </div>

            {/* City dropdown */}
            <div className='mb-4'>
              <label
                htmlFor='city'
                className='block text-gray-700 text-sm font-bold mb-2'
              >
                City
              </label>
              <select
                id='city'
                name='city'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value='city1'>City 1</option>
                <option value='city2'>City 2</option>
                <option value='city3'>City 3</option>
              </select>
            </div>

            {/* Address field */}
            <div className='mb-4'>
              <label
                htmlFor='address'
                className='block text-gray-700 text-sm font-bold mb-2'
              >
                Address
              </label>
              <textarea
                id='address'
                name='address'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              ></textarea>
            </div>

            {/* Previous and Submit buttons */}
            <div className='flex items-center justify-between'>
              <button
                type='button'
                onClick={handlePrevious}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              >
                Previous
              </button>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                onClick={signUPHandler}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default page
