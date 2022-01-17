import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import OrderList from './components/orderList.component'
import ConfirmOrder from './components/confirmOrder.component'

function App() {
  return (
    <div className="container m-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OrderList/>}></Route>
          <Route path="/:id" element={<ConfirmOrder/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
