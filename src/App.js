import Main from './Screens/Main'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="calendar">
      <header>
        <div id ='logo'>
          <span className='icon'>date_range</span>
          <span>
            <b>Calendar</b>
          </span>
        </div>
      </header>
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
