import Layout from './Layout/Layout';
import { Banner } from './components/Banner/Banner';
import { NavBar } from './components/Navigation/NavBar';
import { Skills } from './components/Skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Layout>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
      </div>
    </Layout>
  );
}

export default App;
