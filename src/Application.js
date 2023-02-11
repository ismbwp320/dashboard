import '../src/styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import Performance from './pages/Performance';
import Settings from './pages/Settings';
import Support from './pages/Support';
import Transactions from './pages/Transactions';
// Components
import Sidebar from './components/Sidebar';
const Application = () => {
  return (
    <Router>
      <div className='application'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/news' element={<News />}/>
          <Route path='/performance' element={<Performance />}/>
          <Route path='/settings' element={<Settings />}/>
          <Route path='/support' element={<Support />}/>
          <Route path='/transactions' element={<Transactions />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default Application;