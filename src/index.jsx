/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router";

// Routes
import Homepage from "./routes/homepage/Homepage";

// Styles
import './styles/global.scss';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => 
  <div class="app-container w-screen h-screen">
    <Router>
      <Route path="/" component={Homepage} />
    </Router>
  </div>
  , root);
