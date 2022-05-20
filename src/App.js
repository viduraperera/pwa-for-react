import React, { useState } from 'react';
import logo from './logo.svg';
import { useSelector } from 'react-redux';
import PopUp from './common/pop-ups';
import { SW_INITIALIZE, SW_UPDATE } from './constants/constants.js';
import './App.css';

function App() {


  const isServiceWorkerInitialized = useSelector(
    state => state.serviceWorkerInitialized,
  );
  const isServiceWorkerUpdated = useSelector(
    state => state.serviceWorkerUpdated,
  );
  const serviceWorkerRegistration = useSelector(
    state => state.serviceWorkerRegistration,
  );

  const updateServiceWorker = () => {
    const registrationWaiting = serviceWorkerRegistration.waiting;

    if (registrationWaiting) {
      registrationWaiting.postMessage({ type: 'SKIP_WAITING' });

      registrationWaiting.addEventListener('statechange', e => {
        if (e.target.state === 'activated') {
          window.location.reload();
        }
      });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <div className="App-alert">
          {isServiceWorkerInitialized && (
            <PopUp text="Service Worker is initialized for the first time" type={SW_INITIALIZE} />
          )}
          {isServiceWorkerUpdated && (
            <PopUp
              text="There is a new version available."
              buttonText="Update"
              type={SW_UPDATE}
              onClick={updateServiceWorker}
            />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
