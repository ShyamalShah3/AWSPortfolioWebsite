import Layout from './Layout/Layout';
import { NavBar } from './components/Navigation/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Layout>
      <div className="App">
        <NavBar />
      </div>
    </Layout>
  );
}

export default App;
