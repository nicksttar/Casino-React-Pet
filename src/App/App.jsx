import { Route, Routes, useParams } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Xplay from '../components/games/xplay/xplay';
import RPGame from '../components/games/rpc/rpc';


const DynamicGame = () => {
  const { id } = useParams();
  switch(id){
    case 'xplay':
      return <Xplay/>
    case 'rpc':
      return <RPGame/>
  }
};


function App() {
  return (
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/:id' element={<DynamicGame/>}></Route>
        <Route path="*" element={<Login />} /> {/* Роут по умолчанию */}
      </Routes>
  );
}

export default App;
