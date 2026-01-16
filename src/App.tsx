import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Qurulish from './pages/qurulish'
import Kchik from './pages/Kchik'
import Uskuna from './pages/Uskuna'
import Klassifikator from './pages/Klassifikator'
import Bolmlar from './pages/Bolmlar'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
        <Route index={true} element={<Home/>}/>
        <Route path='/materials' element={<Home/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/qurulish' element={<Qurulish/>}/>
        <Route path='/kichik' element={<Kchik/>}/>
        <Route path='/uskuna' element={<Uskuna/>}/>
        <Route path='/klassifikator' element={<Klassifikator/>}/>
        <Route path='/bolmlar' element={<Bolmlar/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App