import logo from './logo.svg';
import './App.css';
import AddUsers from './components/AddUsers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchUsers from './components/SearchUsers';
import ViewUsers from './components/ViewUsers';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddUsers/>}/>
        <Route path="/search" element={<SearchUsers/>}/>
        <Route path="/view" element={<ViewUsers/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;