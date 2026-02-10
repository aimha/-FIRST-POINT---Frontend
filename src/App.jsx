import { Router, Route } from "@solidjs/router";

// import component
import MainLayout from "./layouts/MainLayout/MainLayout";

// import routes
import Telefonate from "./routes/telefonate/Telefonate";
import Pratiche from "./routes/pratiche/Pratiche";
import Contatti from "./routes/contatti/Contatti";

export default function App() {
  return (
    <Router root={ MainLayout}>
      <Route path="/" component={ Telefonate } />
      <Route path="/contatti" component={ Contatti } />
      <Route path="/pratiche" component={ Pratiche } />
    </Router>
  );
}
