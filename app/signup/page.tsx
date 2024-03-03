'use client'
import React, { useState } from 'react'

import { useAction } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { UserSignUpRequired } from '@/app/types/types'

const page = () => {
  const signUP = useAction(api.useractions.register)
  const [username, setUserName] = useState<string>('mansoor')
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [preferredLanguage, setPreferredLanguage] = useState<string>('en')
  const [state, setState] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [showSection2, setShowSection2] = useState(false)

  const handleNext = () => {
    setShowSection2(true)
  }

  const handlePrevious = () => {
    setShowSection2(false)
  }

  function checkRequiredFields<T extends Record<string, unknown>>(
    requiredFields: T
  ) {
    for (const [fieldName, fieldValue] of Object.entries(requiredFields)) {
      if (!fieldValue) {
        throw new Error(`The field '${fieldName}' is missing or invalid.`)
      }
    }
  }

  const signUPHandler = async () => {
    try {
      const requiredFields = {
        username,
        name,
        phone,
        password,
        preferredLanguage,
        state,
        city,
        address,
      }

      checkRequiredFields<UserSignUpRequired>(requiredFields)

      const response = await fetch(
        'https://zealous-leopard-593.convex.site/register',
        {
          method: 'POST',
          body: JSON.stringify(requiredFields),
        }
      )
    } catch (err) {
      console.log(err)
      alert(err)
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
                onChange={(e) => {
                  setUserName(e.target.value)
                }}
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
                onChange={(e) => {
                  setName(e.target.value)
                }}
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
                type='number'
                id='phone'
                name='phone'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                onChange={(e) => {
                  setPhone(e.target.value)
                }}
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
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
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
                onChange={(e) => setPreferredLanguage(e.target.value)}
              >
                <option value='EN'>English</option>
                <option value='AR'>Arabic</option>
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
                onChange={(e) => setState(e.target.value)}
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
                onChange={(e) => setCity(e.target.value)}
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
                onChange={(e) => setAddress(e.target.value)}
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
