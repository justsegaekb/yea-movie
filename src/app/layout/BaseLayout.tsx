import { Header } from "@/pages/main/ui/header/Header";
import { Outlet } from "react-router-dom";
import styles from "./BaseLayout.module.css";
import cn from "classnames";

export function BaseLayout() {
  return (
    <>
      <header className={cn(styles.container)}>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default BaseLayout;
