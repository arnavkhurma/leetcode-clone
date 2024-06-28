import './App.css';
import Questions from './components/question-list';
import Question from './components/question';
import Landing from './components/landing';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Questions />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </div>
  );
}

export default App;
