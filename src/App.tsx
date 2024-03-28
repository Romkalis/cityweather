import { Route, Routes } from "react-router";
import { Home } from './pages/Home/components/Home'
import { MonthStatistics } from "./pages/MonthStatistics/components/MonthStatistics";
import { Header } from "./pages/shared/Header/Header";
import './styles/index.scss';


function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/month-statistics' Component={MonthStatistics}/>
        </Routes>
    </div>
  );
}

export default App;
