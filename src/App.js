import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Products from './Components/Products/Products';
import Main from './Layout/Main';
import NotFound from './Components/NotFound/NotFound';
import Friends from './Components/Friends/Friends';
import FriendsDeteils from './Components/FriendsDeteils/FriendsDeteils';
import Posts from './Components/Posts/Posts';
import PostDeteils from './Components/PostDeteils/PostDeteils';

function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Main></Main>, 
    children: 
    [
      {path:'home', element: <Home/>},
      {path:'about', element: <AboutUs/>},
      {path:'products', element: <Products/>},
      
      {
      path:'friends',
      loader: async  () => {
        return fetch('https://jsonplaceholder.typicode.com/users');
      },
      element: <Friends/>},
      {
        path: '/friends/:friendId',
        loader: async ({params}) =>{
         return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
        
        },
        element: <FriendsDeteils/>
      },
      {path:'posts',
      loader: async () =>{
        return fetch ('https://jsonplaceholder.typicode.com/posts');
      } ,
      element: <Posts/>},
      {
        path:'/post/:postId',
        loader: async ({params})=>{
          return fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
        },
        element: <PostDeteils></PostDeteils>
      },
    ] 
  },
  {path:'*', element: <NotFound/>}

  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
