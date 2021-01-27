import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
import Global from './global';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Global />
    </>
  );
}

export default App;