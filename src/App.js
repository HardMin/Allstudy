import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from './routes/index';

function App() {
    return (
        <BrowserRouter>
            
            <Pagina/>
        </BrowserRouter>
    );
};

export default App;
