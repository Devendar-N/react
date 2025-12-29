import { useLocation } from "react-router-dom";
import "./breadcrumb.css";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  const formatText = (segment) =>
    decodeURIComponent(segment)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (content) => content.toUpperCase());

  if (pathname === "/") return null;

  const shouldCollapse = segments.length > 2;

  return (
    <div className="breadcrumb">
      <span className="breadcrumb-item">Home</span>

      {shouldCollapse ? (
        <>
          <span className="breadcrumb-item"> / … </span>
          <span className="breadcrumb-last">
            / {formatText(segments[segments.length - 1])}
          </span>
        </>
      ) :
        (
          segments.map((segment, index) => {
            const isLast = index === segments.length - 1;

            return (
              <span
                key={index}
                className={isLast ? "breadcrumb-last" : "breadcrumb-item"}
              >
                {" / "}
                {formatText(segment)}
              </span>
            );
          })
        )}
    </div>
  );
};

export default Breadcrumbs;
