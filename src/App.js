import './App.css';
import Navigation from './components/navigation';
import Question from './components/question-list';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navigation />
      <Question />
    </div>
  );
}

export default App;
