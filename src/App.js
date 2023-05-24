import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import DetailPage from './Pages/DetailPage';
import CitiesPage from './Pages/CitiesPage';
import RootLayout from './Pages/RootLayout';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<LandingPage />}></Route>
      <Route path="/home" element ={<Home />}></Route>
      <Route path="/detailpage" element ={<DetailPage />}></Route>
      <Route path="/citiespage" element ={<CitiesPage />}></Route>
    </Route>
  ))


return(
  <>
  <RouterProvider router={router}/>
  </>
)
}

// const App =()=> {
//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<LandingPage />} />
//         <Route index element={<LandingPage />}/>
//         <Route path="/home" element={<Home />}/>
//         <Route path="/detailpage" element={<DetailPage />} />
//         <Route path="/citiespage" element={<CitiesPage />} />
        
//     </Routes>
//     </BrowserRouter>
//     </>
//   );
// }

export default App;
