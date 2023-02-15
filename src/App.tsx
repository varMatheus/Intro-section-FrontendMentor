import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.module.scss';
import { Main } from './Components/Main';
import Menu from './Components/Menu'

function App() {
  return (
    <RecoilRoot>
      <Menu />
      <Main />
    </RecoilRoot>
  );
}

export default App;
