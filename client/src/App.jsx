import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import {AppLogo} from './assets';

import {Home, CreatePost} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">

          
          

          <div className="flex">
            <div className="ml-auto w-auto">
                <img src={AppLogo} alt="logo" className='w-28 object-contain'></img>
            </div>

              <div className="ml-auto w-auto">
              <img src={logo} alt="logo" className='w-28 object-contain'></img>

              </div>
          </div>

        </Link>

      

        <Link to="/create-post" className='font-inter font-medium bg-[#003753] text-white px-4 py-2 rounded-md hover:bg-[#dea247]'>
          Create

        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create-post' element={<CreatePost/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App