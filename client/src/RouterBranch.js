
import { Route, Routes, Redirect } from 'react-router-dom';

//import Test from 'layouts/test/Test';
import Home from 'layout/home/Home';
import Home2 from 'layout/home/Home2';
import Home3 from 'layout/home/Home3';

import Properties from 'layout/property/Properties';
import PropertyDetails from 'layout/property/PropertyDetails';
import PropertyAlert from 'layout/property/PropertyAlert';

import BusinessLoan from 'layout/loan/BusinessLoan';
import LoanDetails from 'layout/loan/LoanDetails';
import LoanApplication from 'layout/loan/LoanApplication';

import ListYourProperty from 'layout/list-your-property/ListYourProperty';

import ContactUs from 'layout/contact-us/ContactUs';

import Login from 'layout/auth/Login';
import Registration from 'layout/auth/Registration';

const RouterBranch = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/home3" element={<Home3 />} />

            <Route path='/properties' element={<Properties />} />
            <Route path='/property-details' element={<PropertyDetails />} />
            <Route path='/property-alert' element={<PropertyAlert />} />

            <Route path='/business-loan' element={<BusinessLoan/>} />
            <Route path='/business-loan-details' element={<LoanDetails/>} />
            <Route path='/loan-application' element={<LoanApplication/>} />
            
            <Route path='/list-your-property' element={<ListYourProperty/>} />
            
            <Route path='/contact-us' element={<ContactUs/>} />
            
            <Route path='/login' element={<Login/>} />
            <Route path='/registration' element={<Registration/>} />
        </Routes>
    )
}

export default RouterBranch;