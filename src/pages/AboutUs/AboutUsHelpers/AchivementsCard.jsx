import "../styles/AchivementsCard.css";
import {
    ShopIcon,
    SalseIcon,
    ShoppingIcon,
    MoneyBagIcon
} from "@images/index";


export const AchivementCard = ({
  icon,
  achivementCount,
  achivementText
}) => {
  return (
    <div className="achivement">
      <div className="achivement-icon">
        <div className="outer-circle">
          <div className="inner-circle">
            <img src={icon} alt="Icon" />
          </div>
        </div>
      </div>

      <div className="achivement-text">
        <div className="achivement-count">{achivementCount}</div>
        <div className="achivement-text">{achivementText}</div>
      </div>
    </div>
  )
}

export const AchivementContainer = () => {
  return (
    <div className="achivement-container">
      <AchivementCard icon={ShopIcon} achivementCount="10.5k" achivementText="Sallers active our site" />
      <AchivementCard icon={SalseIcon} achivementCount="33k" achivementText="Monthly Product Sale" />
      <AchivementCard icon={ShoppingIcon} achivementCount="25k" achivementText="Annual gross sale in our site" />
      <AchivementCard icon={MoneyBagIcon} achivementCount="45.5k" achivementText="Customer active in our site" />
    </div>
  )
}
