
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import './App.css';
import ContactUsPage from '../pages/ContactUsPage';
import LoginPage from '../pages/LoginPage';
import CreateAccount from '../pages/CreateAccount';
import Layout from '../pages/Layout';
import About from '../pages/About';
import MoviesPage from '../pages/MoviesPage';
import UsersContextProvider from '../context/UsersContextProviders';


function App() {
  let routing = createBrowserRouter([
    {path:'/', element:<Layout></Layout>, children:[
      {index:true,element:<HomePage></HomePage>},
      {path:'/contact', element:<ContactUsPage></ContactUsPage>},
      {path:'/about', element:<About></About>},
      ]
    },
    {path:'createAcc/sign', element:<LoginPage></LoginPage>},
    {path:'/sign', element:<LoginPage></LoginPage>},
    {path:'createAcc',element:<CreateAccount></CreateAccount>},
    {path:'/sign/movies',element:<MoviesPage></MoviesPage>}

  ])
  return (
    <>
      <UsersContextProvider>
        <RouterProvider router={routing}></RouterProvider>
      </UsersContextProvider>
      

    </>
  );
}

export default App;
