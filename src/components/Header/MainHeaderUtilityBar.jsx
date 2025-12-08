import "./Header.css";

const MainHeaderUtilityBar = () => {
  // js code

  return (
    <div>
      <div className="main-header-utility-bar">
        <div className="main-header-title-container">
          <div className="main-header-title">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </div>
          <a href="https://www.amazon.in/" className="main-header-cta">ShopNow</a>
        </div>
        <div className="main-header-language-switcher">
          <select>
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
            <option>German</option>
            <option>Italian</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default MainHeaderUtilityBar
