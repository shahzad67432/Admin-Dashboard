import React, {useEffect} from 'react';
import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';
import {useStateContext} from './context/ContextProoovider'

const App = ()=>{

  const {activeMenu} = useStateContext();
  return (
    <div>
      <BrowserRouter>
       <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Setting" position='Top'>
              <button type='button' className='text-3xl p3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background:"blue", borderRadius:"50%"}}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar/>
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar/>
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar/>
            </div>
            <div>
              <Routes>
                {/* dashboards */}
                <Route path='/' element= {<Ecommerce/>}/>
                <Route path='/ecommerce' element= {<Ecommerce/>} />

                {/* Pages */}
                <Route path='/orders' element={<Orders/>} />
                <Route path='/employees' element={<Employees/>} />
                <Route path='/customers' element={<Customers/>} />

                {/* Apps */}
                <Route path='Kanban' element={<Kanban/>}/>
                <Route path='Editor' element={<Editor/>}/>
                <Route path='Calendar' element={<Calendar/>}/>
                <Route path='ColorPicker' element={<ColorPicker/>}/>

                {/* charts */}
                <Route path='line' element={<Line/>}/>
                <Route path='area' element={<Area/>}/>
                <Route path='bar' element={<Bar/>}/>
                <Route path='pie' element={<Pie/>}/>
                <Route path='finantial' element={<Financial/>}/>
                <Route path='colormapping' element={<ColorMapping/>}/>
                <Route path='pyradid' element={<Pyramid/>}/>
                <Route path='stacked' element={<Stacked/>}/>

              </Routes>
            </div>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App