
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import ReactHooks from './components/reactHooks/ReactHooks';
import ReactTutorial from './components/reactTutorial/ReactTutorial';

function App() {
  return (
    <div className='navbar'>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
