import { useState , useEffect } from 'react'
import './App.css'
import Header from './components/Header';
import Home from './pages/Home.jsx'
import Detail from './pages/Detail';
import Nav from './components/Nav'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  const [darkmode , setDarkmode] = useState(false);

  const handleDarkmode = () => {
    setDarkmode(!darkmode);
  }

  const [data , setData] = useState([]);
  const url = `https://restcountries.com/v3.1/all`

  const fetchData = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className={!darkmode ? 'darkmode' : 'lightmode'}>
      <BrowserRouter>
        <Header darkmode={darkmode} handleDarkmode={handleDarkmode} />
        <Nav />
        <Routes>
          <Route path='/' element={<Home data={data} darkmode={darkmode}/>} />
          <Route path='/detail/:id' element={<Detail data={data} darkmode={darkmode}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
