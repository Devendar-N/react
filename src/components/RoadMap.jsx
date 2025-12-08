import { useLocation } from "react-router-dom";
import "./RoadMap.css";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  const formatText = (pathSegment) =>
    decodeURIComponent(pathSegment)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  if (pathname === "/") return null;

  return (
    <div className="breadcrumb">
      <span className="breadcrumb-item">Home</span>

      {segments.map((routeSegment, index) => {
        const isLast = index === segments.length - 1;

        return (
          <span
            key={index}
            className={isLast ? "breadcrumb-last" : "breadcrumb-item"}
          >
            {" / "}
            {formatText(routeSegment)}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
