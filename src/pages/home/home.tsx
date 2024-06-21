import { FC } from "react";
import styles from "./home.module.css";

export const Home: FC = () => {
  return (
    <div className={styles.bg}>
      <div className="w-full h-[400px] flex-col items-center justify-center flex">
        <h1 className="italic text-8xl font-black text-primary mb-3">
          BELLAROSA
        </h1>
        <h2 className="text-white text-4xl font-bold tracking-widest">
          RESTAURANT
        </h2>
      </div>
    </div>
  );
};
