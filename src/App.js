
// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
// import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu'
import Contact from './pages/Contact';
import BulkOrder from './pages/BulkOrder';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
    <Helmet>
      <title>
        The Metro Light Kitchen-Homemade Tiffin Delivery in Bengaluru
      </title>
      <meta  name="description"
       content="Indulge in daily gourmet meals tailored to your tastes! With our subscription service, you choose, we deliver. Explore India's culinary treasures, personalized just for you. Join our food journey today" />
      <meta name='keywords' content='Daily Meals,Daily Tiffin,I am Hungry,Canteen,Tiffin Service in Bengaluru ' />

    </Helmet>
    <Routes>
        <Route index  element={<Home/>}/>
         <Route path='/about' element={<About/>}/> 
         <Route path='/menu' element={<Menu/>}/>         
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/orders' element={<BulkOrder/>}/>
    </Routes>
    </>
  );
}

export default App;



















 


