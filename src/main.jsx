import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App.jsx';
import { CategoriesProvider } from './Context/CategoriesContext.jsx';
import { VideosProvider } from './Context/VideosContext.jsx';
import { WatchLaterProvider } from './Context/WatchLaterContext.jsx';
import { NotesProvider } from './Context/NotesContext.jsx';
import { PlayListsProvider } from './Context/PlayListsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <VideosProvider>
          <WatchLaterProvider>
            <NotesProvider>
              <PlayListsProvider>
                <App />
              </PlayListsProvider>
            </NotesProvider>
          </WatchLaterProvider>
        </VideosProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
