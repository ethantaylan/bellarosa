import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { navigation } from "./navigation";

export const Navbar: FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between p-3">
      <span
        onClick={() => navigate("/")}
        className="btn btn-ghost font-black text-lg italic"
      >
        BELLAROSA
      </span>
      <ul className="flex gap-3 uppercase">
        {navigation.map(({ label, url }) => (
          <li onClick={() => navigate(url)} className="btn btn-ghost">
            {label}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary">Réserver</button>
    </nav>
  );
};
