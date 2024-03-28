import { Route, Routes } from "react-router";
import { Home } from './pages/Home/components/Home'
import { MonthStatistics } from "./pages/MonthStatistics/components/MonthStatistics";
import { Header } from "./pages/shared/Header/Header";
import './styles/index.scss';
import { Popup } from "./pages/shared/Popup/Popup";


function App() {
  return (
    <div className='container'>
      <Popup />
      <Header />
      <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/month-statistics' Component={MonthStatistics}/>
        </Routes>
    </div>
  );
}

export default App;
