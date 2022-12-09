import {Routes, Route} from 'react-router-dom';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from './pages'
const RouterBranch = () => {
    return (
        <Routes>
            {/* Dashboard */}
            <Route path='/' element={(<Ecommerce />)} />
            <Route path='/ecommerce' element={(<Ecommerce />)} />

            {/* Pages */}
            <Route path='/orders' element={<Orders />} />
            <Route path='/employees' element={<Employees />} />
            <Route path='/customers' element={<Customers />} />

            {/* Apps */}
            <Route path='/kanban' element={<Kanban />} />
            <Route path='/editor' element={<Editor />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/color-picker' element={<ColorPicker />} />

            {/* Charts */}
            <Route path='/line' element={<Line />} />
            <Route path='/area' element={<Area />} />
            <Route path='/bar' element={<Bar />} />
            <Route path='/pie' element={<Pie />} />
            <Route path='/financial' element={<Financial />} />
            <Route path='/color-mapping' element={<ColorMapping />} />
            <Route path='/pyramid' element={<Pyramid />} />
            <Route path='/stacked' element={<Stacked />} />
        </Routes>
    )
}

export default RouterBranch;