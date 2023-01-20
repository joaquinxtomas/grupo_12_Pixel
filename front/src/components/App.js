import React from 'react';
import ProductList from './ProductList';
import SideBar from './SideBar';
//import ContentWrapper from './ContentWrapper';
function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          {/* <ProductList/> */}
          {/* <Movie/> */}
        </div>
    </React.Fragment>
  );
}

export default App;
