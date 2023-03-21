import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
}

const App = () => {
  return (
    <>
      <ProductCard  
        product={ product } 
        style={{ backgroundColor: '#70D1F8'}}
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {
          ({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>   
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
