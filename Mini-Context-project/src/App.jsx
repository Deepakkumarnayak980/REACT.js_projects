
import UserContecstProvider from './context/UserContecstProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {


  return (
      <UserContecstProvider>
        <h1>React with Chai and share is important</h1>
        <Login />
        <Profile />
      </UserContecstProvider>
  )
}

export default App
