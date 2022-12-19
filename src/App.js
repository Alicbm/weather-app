import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ContainerApp } from './components/AppContext';
import {Home} from './components/Home';
import { PageSearch } from './components/PageSearch';

function App() {
  return (
    <ContainerApp>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/search' element={<PageSearch />}/>
        </Routes>
      </BrowserRouter>
    </ContainerApp>
  );
}

export default App;
