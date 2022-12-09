import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiPrestashop } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../contexts/ContextProvider'
import { links } from '../data/dummy'

const Sidebar = () => {

  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <= 900 ) {
      setActiveMenu(false);
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'

  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (<>
        <div className="flex justify-between items-center">
          <Link to='/' onClick={handleCloseSidebar}  className="items-center gap-2 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <SiPrestashop /> 
            <span>RABE</span>
          </Link>
          <TooltipComponent content='Menu' position='BottomCenter'>
          {/* We want to change the menu by using the previous value of the menu. We just add a CBF with prev, which is the previous state */}
            <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className='mt-10'>

          {/* loop over data from 'links' */}
          {links.map((item) => (
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink //navlink is a special component belonging to react-router-dom
                  to={`/${link.goto}`} 
                  key={link.name} 
                  onClick={handleCloseSidebar} 

                  // This is what allows all of our sidebar buttons to have the same color as the color we choose to display in the settings.
                  style={({ isActive }) => ({ 
                    backgroundColor: isActive ? currentColor : '' 
                  })}

                  className={({ isActive }) => 
                    isActive ? activeLink : normalLink}
                >
                  {link.icon}
                  <span className='capitalize'>
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar 