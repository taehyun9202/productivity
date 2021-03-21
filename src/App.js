import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home'
import UserAvatar from './components/UserAvatar'

function App() {
  const [ userName, setUserName ] = useState('')

  useEffect(() => {
    const userName =  prompt('Enter Your Name')
    setUserName(userName)
  }, [])

  return (
    <div className="app">
      <UserAvatar user={userName} />
      <Home user={userName} />
    </div>
  );
}

export default App;
