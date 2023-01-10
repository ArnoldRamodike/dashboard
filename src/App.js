import React, {useEffect} from 'react';
import {BrowswerRouter, Routes, Route} from 'react-router-dom';
import { FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';

const App = () => {
  return(
    <div>
      <BrowswerRouter>
        <div className="flex related dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{zIndex: '100'}}>
              <TooltipComponent content="settings" position="Top">
                <button>
                  <FiSettings/>
                </button>
              </TooltipComponent>
            </div>
        </div>
      </BrowswerRouter>
    </div>
  )
}

export default App;
