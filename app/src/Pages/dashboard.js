import React from "react";
import SideBar from "../Components/sidebar";
function isMobile() {
  if (!process.browser) {
    return false;
  }

  return global.innerWidth <= 840;
}

const Index = () => {
  return (
    <>
      <SideBar isMobile={isMobile()} />
    </>
  );
};

export default Index;
