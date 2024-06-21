import { FC } from "react";
import { Applayout } from "./components/applayout/applayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";

export const App: FC = () => {
  return (
    <main className="h-screen">
      <BrowserRouter>
        <Applayout />

        <Routes>
          {routes.map((r) => (
            <Route {...r} />
          ))}
        </Routes>
      </BrowserRouter>
    </main>
  );
};
