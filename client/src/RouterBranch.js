
import { Route, Routes } from 'react-router-dom';

import Home from 'layout/home/Home';
import Home2 from 'layout/home/Home2';
import Home3 from 'layout/home/Home3';

import Properties from 'layout/property/Properties';
import PropertyDetails from 'layout/propertyDetails/PropertyDetails';
import PropertyAlert from 'layout/property/PropertyAlert';

import ContactUs from 'layout/contact-us/ContactUs';

import Login from 'layout/auth/Login';
import Registration from 'layout/auth/Registration';

import Profile from 'layout/profile/Profile';
import ChangePassword from 'layout/profile/ChangePassword';

import PostProperty from 'layout/postProperty/PostProperty';

import MyProperties from 'layout/myproperties/MyProperties';
import MyProposals from 'layout/myproposals/MyProposals';

import Stripe from 'layout/stripe/Stripe';

import KeyRisks from 'layout/keyRisks/KeyRisks';
import Error404 from 'layout/error/404';

import Test from 'layout/Test';

const RouterBranch = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/home3" element={<Home3 />} />

            <Route path='/properties' element={<Properties />} />
            <Route path='/property-details/:propertyID' element={<PropertyDetails />} />
            <Route path='/property-alert' element={<PropertyAlert />} />
            
            <Route path='/contact-us' element={<ContactUs/>} />
            
            <Route path='/login' element={<Login/>} />
            <Route path='/registration' element={<Registration/>} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/change-password" element={<ChangePassword />} />

            <Route path="/post-property" element={<PostProperty />} />
            
            <Route path="/my-properties" element={<MyProperties />} />
            <Route path="/my-proposals" element={<MyProposals />} />

            <Route path="/stripe" element={<Stripe />} />

            <Route path="/key-risks" element={<KeyRisks />} />

            <Route path="/test" element={<Test />} />

            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}

export default RouterBranch;