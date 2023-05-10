import { FC } from "react";
import Registration from "./component/Registration/registration";
import "./globalStyles/global.css";
import GlobalContentProvider from "./context/GlobalContentProvider";
import Home from "./component/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login/login";

const App: FC = () => {
  return (
    <GlobalContentProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </GlobalContentProvider>
  );
};

export default App;
