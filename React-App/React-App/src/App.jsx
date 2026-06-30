
import './App.css'  
import Navbar from './navbar.jsx';
import Courses from './Courses.jsx';
import html from './assets/html.png';
import css from './assets/css.png';
import js from './assets/javascript.png';

function App() {
  

  return (
    <>
      <Courses name="HTML" price="$19.99" rating="4.5" image={html} />
      <Courses name="CSS" price="$19.99" rating="4.3" image={css} />
      <Courses name="JavaScript" price="$29.99" rating="4.7" image={js} />
    </>
  )
}

export default App
  