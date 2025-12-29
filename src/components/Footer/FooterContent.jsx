const FooterContent = ({ title, children, logo }) => {
    return (
        <div className="footer-content">

            {/* if calss name is footer-logo */}
           {logo&&( <div className="footer-logo">{logo}</div>)} 

           {/* if class name is footer-quick-link */}
           {title&&( <div className="footer-quick-link">{title}</div>)}
            <div className="quick-link-content">{children}</div>
        </div>
    );
};

export default FooterContent;