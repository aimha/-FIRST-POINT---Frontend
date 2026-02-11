import { Router, Route } from "@solidjs/router";

// import component
import MainLayout from "./layouts/MainLayout/MainLayout";

// import routes
import Telefonate from "./routes/Telefonate/Telefonate";
import Pratiche from "./routes/Pratiche/Pratiche";
import Contatti from "./routes/Contatti/Contatti";

export default function App() {
  return (
    <Router root={ MainLayout}>
      <Route path="/" component={ Telefonate } />
      <Route path="/contatti" component={ Contatti } />
      <Route path="/pratiche" component={ Pratiche } />
    </Router>
  );
}
