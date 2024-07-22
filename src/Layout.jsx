import React from "react";
import SidePanel from "./components/info-panel/SidePanel";
import MenuItems from "./components/MenuItems";
import MobileHeader from "./components/MobileHeader";
import HoverContext from "./HoverContext";
import Scrollbar from "smooth-scrollbar";
import { useEffect, useRef, useContext } from "react";
const Layout = ({ children }) => {
  const { isHovered } = useContext(HoverContext);
  const { isOpacity } = useContext(HoverContext);
  const mainScrollref = useRef(null);

  useEffect(() => {
    if (mainScrollref.current) {
      const scrollbar = Scrollbar.init(mainScrollref.current);
      return () => {
        scrollbar.destroy();
      };
    }
  }, []);
  return (
    <div className="App">
      <div className="wraper">
        <div className="app-container">
          <MobileHeader />
          <SidePanel />
          <main className={`main-container ${isHovered ? "menuActive" : ""}`}>
            <div
              className={`overlay ${isOpacity ? "overlayActive" : ""}`}
            ></div>
            <div className="topbgimg">
              <div className="bgiOverlay"></div>
            </div>
            <div className="scrollBox" ref={mainScrollref}>
              <div>{children}</div>
            </div>
          </main>
          <MenuItems />
        </div>
      </div>
    </div>
  );
};

export default Layout;
