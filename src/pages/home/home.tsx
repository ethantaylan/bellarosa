import { FC } from "react";
import styles from "./home.module.css";
import { Banner } from "./components/banner";

export const Home: FC = () => {
  return (
    <div className={styles.bg}>
      <div className="flex flex-col justify-between h-full">
        <Banner />

        <div className="flex w-full justify-center">
          <div className="h-40 w-3/12 cursor-pointer hover:bg-opacity-100 flex items-center justify-center bg-primary bg-opacity-85">
            <span className="text-md font-bold uppercase tracking-widest text-white">
              Réserver une table
            </span>
          </div>

          <div className="h-40 w-4/12 flex items-center justify-center bg-secondary bg-opacity-85">
            <div className="text-md flex text-center flex-col text-white">
              <span className="font-bold text-white text-xl mb-2">(+33) 6 12 34 56 78</span>
              <span className="text-sm">
                3, Grande Rue Charles de Gaulle, <br /> 94130 Nogent-sur-Marne,
                France
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
