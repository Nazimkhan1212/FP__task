import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Page1/>} />
          <Route path="/page2" element={<Page2/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
