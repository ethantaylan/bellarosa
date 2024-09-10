import Applayout from "./components/applayout/applayout";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";

export default function App() {
  return (
    <Applayout>
      <Routes>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Routes>
    </Applayout>
  );
}
