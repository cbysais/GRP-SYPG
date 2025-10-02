import { Route, Routes } from "react-router";
import LoginPage from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
