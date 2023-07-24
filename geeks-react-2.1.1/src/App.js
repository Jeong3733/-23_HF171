// import node module libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import layouts
import ScrollToTop from "layouts/dashboard/ScrollToTop";
import AllRoutes from "layouts/AllRoutes";

// import required stylesheet
import "simplebar/dist/simplebar.min.css";
import "tippy.js/animations/scale.css";

import { AuthProvider } from "./components/AuthContext";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <AllRoutes />
        </Router>
      </AuthProvider>
    </CookiesProvider>
  );
}

export default App;
