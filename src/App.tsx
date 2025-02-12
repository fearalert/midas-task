import './App.css'
import 'antd/dist/reset.css';
import { OPDProvider } from './context/OPDContext';
import OPDDashboard from './pages/OPD/OPDDashboard';

function App() {

  return (
    <>
    <OPDProvider>
     <OPDDashboard />
    </OPDProvider>
    </>
  )
}

export default App
