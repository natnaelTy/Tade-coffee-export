
import { Routes, Route } from 'react-router-dom';
import Home from './components/home-page/Home';
import NavBar from './components/header/NavBar';
import AboutUsDetail from './components/about/About-us-Detail';
import Footer from './components/footer/Footer';
import OrderingInfo from './components/FQA/OrderingInfo';
import Contact from './components/contact/Contact';
import "./index.css";
function App() {
  return (
    <>
     <NavBar/>
      <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/aboutUs'} element={<AboutUsDetail/>}/>
      <Route path={'/ordering-info'} element={<OrderingInfo/>}/>
      <Route path={'/contact'} element={<Contact/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
