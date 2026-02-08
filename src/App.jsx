import { Router, Route } from "@solidjs/router";

// import component
import MainLayout from "./layouts/MainLayout/MainLayout";

// import routes
import Homepage from "./routes/homepage/Homepage";

export default function App() {
  return (
    <Router root={ MainLayout}>
      <Route path="/" component={ Homepage } />
    </Router>
  );
}
