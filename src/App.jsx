
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
