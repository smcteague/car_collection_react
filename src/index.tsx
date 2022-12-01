import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme/themes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Home, Dashboard, SignIn, Profile, SignUp, Logout } from './components';




import reportWebVitals from './reportWebVitals';
import './styles.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path='/' element={<Home title={'Car Collection'}/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/logout' element={<Logout/>}/>
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
