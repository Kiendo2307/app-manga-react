import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { publicRoute } from '~/routes';
import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRoute.map((route,index)=>{
              const Layout = route.layout === null ? Fragment: DefaultLayout
              const Page = route.component
              return <Route path={route.path} key={index} element={
                <Layout>
                    <Page/>
                </Layout>
              
            }/>
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
