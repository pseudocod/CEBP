import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/Home.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import Transactions from "./pages/Transactions.jsx";
import BuyOrders from "./pages/BuyOrders.jsx";
import SellOrders from "./pages/SellOrders.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
        element: <RootLayout />,
        children: [
          {path: '/', element: <Login />},
          {path: '/home', element: <Home />},
          {path: '/signup', element: <SignUp/>},
          {path: '/transactions', element: <Transactions />},
          {path: '/buy-orders', element: <BuyOrders />},
          {path: '/sell-orders', element: <SellOrders />},
        ],
    },
  ]);
}

function App() {

  const router = createRouter();

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
