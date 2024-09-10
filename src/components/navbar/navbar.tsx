import { useNavigate } from "react-router-dom";
import { navigation } from "./navigation";
import { Button } from "../button/button";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between p-3">
      <span
        onClick={() => navigate("/")}
        className="cursor-pointer font-black text-xl italic"
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

      <Button
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        label="Réserver"
      />
    </nav>
  );
}
