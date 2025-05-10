import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <NavBar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
