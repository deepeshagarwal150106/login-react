import './App.css'
import LoginPage from './Components/LoginPage.jsx'
import  {createBrowserRouter} from 'react-router-dom'
function App() {
  const appRouter = createBrowserRouter([
        {
          path:"/",
          element: <LoginPage/>
        }
      ]
  );




  return (
    <div>
      <LoginPage/>
    </div>
  )
}


export default App
