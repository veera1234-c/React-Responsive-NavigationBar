import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from './components/Home';

function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Home/>}></Route>
          <Route path = '/AboutUs' element={<AboutUs/>}></Route>
          <Route path = '/ContactUs' element={<ContactUs/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;