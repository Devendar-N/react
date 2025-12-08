const FooterContent = ({ title, children, logo }) => {
    return (
        <div className="footer-content">
           {logo&&( <div className="footer-logo">{logo}</div>)}
           {title&&( <div className="footer-quick-link">{title}</div>)}
            <div className="quick-link-content">{children}</div>
        </div>
    );
};

export default FooterContent;