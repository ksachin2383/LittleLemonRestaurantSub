import './App.css';
import Layout from './components/Layout';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Main />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
