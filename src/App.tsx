import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';

import AppProvider from './context';
import Characters from './pages/Characters';
import Layout from './components/Layout';
import { client } from './graphql';

import 'react-toastify/dist/ReactToastify.css';
import 'rc-pagination/assets/index.css';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Characters />,
  },
]);

function App() {
  return (
    <>
      <AppProvider>
        <ApolloProvider client={client}>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </ApolloProvider>
      </AppProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default App
