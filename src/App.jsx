import { Router, Route } from "@solidjs/router";

// import component
import MainLayout from "./layouts/MainLayout/MainLayout";

// import routes
import Telefonate from "./routes/telefonate/Telefonate";

export default function App() {
  return (
    <Router root={ MainLayout}>
      <Route path="/" component={ Telefonate } />
    </Router>
  );
}
