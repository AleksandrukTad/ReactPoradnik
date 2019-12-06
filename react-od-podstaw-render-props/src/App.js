import React from 'react';
import './App.css';
import "./Modal.css"

import { Modal } from "./components/Modal";
import { ModalContainer } from "./containers/ModalContainer";

function App() {
  return (
    <div className="App">
      Hello World
      <ModalContainer>
        {({ isOpen, handleToggle }) => (
          <>
            <button 
              onClick={handleToggle}
            >
              Wlacz modal
            </button>
            
            <Modal
              isOpen={isOpen}
            >
              <div className="Card">
                <button
                  onClick={handleToggle}
                >
                  Zamknij
                </button>
                <div className="Card_content">
                  Modal
                </div>
              </div>
            </Modal>
          </>
        )}
      </ModalContainer>
    </div>
  );
}

export default App;
