
import { Provider, useSelector } from 'react-redux';

import Builder from './components/builder/Builder';
import Footer from './components/footer/Footer';
import NavBar from './components/NavBar'
import SideBar from './components/SideBar';
import ElementProperties from './components/elementProperties/ElementProperties';
import ElementBar from './components/elementBar/ElementBar';
import Preview from './components/Preview';



function App() {

  const preview = useSelector((store) => store?.page?.preview);
  return (

    <div>

      {preview === 0 ? (<div className='bg-gray-200 h-screen overflow-y-auto flex-col'>

        <NavBar />
        <ElementProperties />
        <div className='flex'>
          <div className='w-[5%]'>
            <SideBar />

          </div>
          <div><ElementBar /></div>

          <div className='z-5 mt-[170px] mb-[140px] w-[95%] '>
            <Builder />
          </div>
          <Footer />

        </div>



      </div>) : (
        <div>
          <Preview />
        </div>
      )}


    </div>


  );
}

export default App;
