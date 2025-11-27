import './index.css';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext'; // ✅ import context

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SearchProvider>  {/* ✅ Wrap App with your context */}
      <App />
    </SearchProvider>
  </BrowserRouter>
);
