import React from 'react';
import { Provider } from "react-redux";
import Wrapper from './components/layout/Wrapper/Wrapper';
import { store } from './store';
import ProductsList from './components/layout/ui/ProductsList';

const App: React.FC = () => {
  return (
    <>
    <Provider store={store}>
      <Wrapper>
        <ProductsList/>
      </Wrapper>
    </Provider>,
    </>
  )
};

export default App;