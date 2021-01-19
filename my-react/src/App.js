import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import axios from 'axios';

function App() {
  const backend = process.env.REACT_APP_BACKEND; //'nmzyx1cr37.execute-api.ap-southeast-1.amazonaws.com';
  const [message, setMessage] = useState("I'm zarking mad!");
  const [loading, setLoading] = useState(false);
  const randomizeQuote = () => {
    (async () => {
      setLoading(true);
      const { data } = await axios.get(`https://${backend}/dev//`); 
      setLoading(false);
      setMessage(data);  
    })();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!loading && 
          <div>
            {message}
          </div>
        }
        {loading && 
          <div>
          ...
          </div>
        }
        <Button onClick={randomizeQuote}>Randomize Quote</Button>
      </header>
    </div>
  );
}

export default App;
