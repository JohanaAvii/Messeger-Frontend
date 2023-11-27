import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { LoginPages } from '../auth/pages/LoginPages';
import Home from '../Home/components/Home';

import SiderbarPages from '../dashoard/Pages/SiderbarPages';

export const AppRouter = () => {


    return (

        <Routes>
             <Route path='/home' element={<Home />} />
             <Route path="/login" element={<LoginPages />} />
             <Route path='/dashoard' element={<SiderbarPages/>} />
        </Routes>
    );



    
}
//
