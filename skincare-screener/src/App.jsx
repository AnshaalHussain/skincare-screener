import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Error } from "./pages/Error";

function App() {
  return (
    <div>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Dashboard />} />
        <Route path="*" element={<Error />} />

        {/* Private Pages */}
      </Routes>
    </div>
  );
}

export default App;
