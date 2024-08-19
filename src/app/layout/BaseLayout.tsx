import { Outlet } from "react-router-dom";

export function BaseLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default BaseLayout;
