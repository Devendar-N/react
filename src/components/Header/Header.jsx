import {
  MainHeaderUtilityBar,
  MainHeaderMenu
} from "@components";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <MainHeaderUtilityBar />
      <MainHeaderMenu />
    </div>
  );
}

export default Header;
