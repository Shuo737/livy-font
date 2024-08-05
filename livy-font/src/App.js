import { useState } from 'react';

import './App.css';
import LivyHeader from './header';
import LivyContent from './content';

function App() {
  const [state, setState] = useState({
    text: 'Livy Gift Shop'
  });

  const updateText = (text) => {
    setState({
      text
    });
  }
  return (
    <div className="App">
      <LivyHeader updateText={updateText}/>
      <LivyContent message={state.text} />
    </div>
  );
}

export default App;
