import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { SiPrestashop } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../contexts/ContextProvider'
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
const links = [
  {
    // title: 'Sellers',
    links: [
      {
        name: 'Sellers',
        icon: <FiShoppingBag />,
      },
    ],
  },
  {
    // title: 'Agents',
    links: [
      {
        name: 'Agents',
        icon: <FiShoppingBag />,
      },
    ],
  },
];
const Sidebar = () => {
  
  const [ activeMenu, setActiveMenu ] = useState(true);
  const [currentColor, setCurrentColor] = useState('#03C9D7');

  const handleCloseSidebar = () => {
    if(activeMenu) {
      setActiveMenu(false);
    }
  }
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'

  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
  return (
    <div className="ms-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (<>
        <div className="flex justify-between items-center">
          <Link to='/' className="items-center gap-2 ms-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <SiPrestashop /> 
            <span>PETROLNAUT</span>
          </Link>
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
                  to={`/${link.name}`} 
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
  );
}

export default Sidebar;