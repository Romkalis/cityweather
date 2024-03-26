import { Route, Routes } from "react-router";
import { Home } from './pages/Home/components/Home'
import { MonthStatistics } from "./pages/MonthStatistics/components/MonthStatistics";
import { Header } from "./pages/shared/Header/Header";
function App() {


  return (
    <>
    <Header />
     <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/month-statistics' Component={MonthStatistics}/>
      </Routes>
    </>
  );
}

export default App;
