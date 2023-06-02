import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
//import "../node_modules/react-bootstrap/dist/react-bootstrap"
import './index.css';
import App from './App';
import AuthProvider from './Store/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthProvider>
<App />
</AuthProvider>
);

