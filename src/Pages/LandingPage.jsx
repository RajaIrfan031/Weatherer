import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {TiWeatherWindy} from 'react-icons/ti';
import AuthForm from '../components/AuthForm'
import { Provider } from 'react-redux';
import store from '../redux/store';

const Home = () =>{

  const [showForm, setShowForm] = useState(false);

  const handleShowForm =()=>{
    setShowForm(true);
  }

    return(
        <>
        <Provider store={store}>
          <div className='h-screen w-screen bg-[#0B131E] p-8'>
          <div className='md:flex md:flex-row w-full h-full sm:px-32'>
            <div className='flex md:flex-1 justify-center align-middle'>
              <div className='bg-[#202B3B] rounded-2xl md:w-full w-32 md:h-full max-h-[760px]'>
                {
                  showForm ? 
                  <AuthForm />
                  :
                  <div className='flex flex-col h-[80%] w-[70%] justify-center align-middle items-center border] m-[15%] rounded-2xl'>
                    <TiWeatherWindy size={'100%'} color='#71C7E9'/>
                  </div>
                }
              </div>
            </div>
            <div className='w-full md:flex-1 md:h-full text-white  max-h-[760px]'>
              <div className='flex flex-col justify-center items-center md:h-full h-96'>
                  <TiWeatherWindy size={'100%'} className='md:h-24 h-0'/>
                  <h1 className='text-4xl mt-4'>Weather-er</h1>
                  <p className='text-slate-300 mb-4'>The Weather App</p>
                  <button onClick={handleShowForm} className='my-4 text-sm font-2xl'>Get Started</button>
                  <button to="/home" className='text-sm font-2xl'><Link to="/home">Continue as guest</Link></button>
              </div>
            </div>
          </div>        
        </div> 
      </Provider>
      </>
    )
}

export default Home;