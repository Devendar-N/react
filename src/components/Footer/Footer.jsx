import {
  QR,
  PlayStore,
  AppStore,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  SendIcon,
  CopyrightIcon
} from "@images/images"

import { FooterContent} from "@components"
import "./Footer.css";


export const Copyright = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="copyright">
            <div className="copyright-content">
                <div className="copyright-icon"><img src={CopyrightIcon} alt="Copyright icon" /></div>
                <div className="copyright-text" id="copyright-text">Copyright Rimel{currentYear}. All right reserved</div>
            </div>
        </div>
    )
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content-container">

        {/* Exclusive */}
        <FooterContent logo="Exclusive" className="footer-content">
          <div className="footer-quick-link">Subscribe</div>
          <div className="quick-link-content">Get 10% off your first order</div>
          <div className="send-mail">
            <div className="input"> Enter your email</div>
            <div className="send-icon"><img src={SendIcon} /></div>
          </div>
        </FooterContent>

        {/* Support */}
        <FooterContent title="Support" className="footer-content">
          <div className="quick-link-content">111 Bijoy sarani, Dhaka, DH 1515, <br /> Bangladesh.</div>
          <div className="quick-link-content">exclusive@gmail.com</div>
          <div className="quick-link-content">+88015-88888-9999</div>
        </FooterContent>

        {/* Account */}
        <FooterContent title="Account" className="footer-content">
          <div className="quick-link-content">MY Account</div>
          <div className="quick-link-content">Login/Register</div>
          <div className="quick-link-content">Cart</div>
          <div className="quick-link-content">Wishlist</div>
          <div className="quick-link-content">Shop</div>
        </FooterContent>

        {/* Quick Link */}
        <FooterContent title="Quick-link" className="footer-content">
          <div className="quick-link-content">Privacy Policy</div>
          <div className="quick-link-content">Terms of Use</div>
          <div className="quick-link-content">FAQ</div>
          <div className="quick-link-content">Contact</div>
        </FooterContent>

        {/* Download App */}
        <FooterContent title="Download App" className="footer-content">
          <div className="new-user">Save $3 with App New User Only</div>
          <div className="links">
            <div><img src={QR} alt="Qrcode" /></div>
            <div className="download">
              <div><img src={PlayStore} alt="playstore" /></div>
              <div><img src={AppStore} alt="Appstore" />
              </div>
            </div>
          </div>
          <div className="social-media">
            <div><img src={FacebookIcon} alt="Facebook" /></div>
            <div><img src={TwitterIcon} alt="Twitter" /></div>
            <div><img src={InstagramIcon} alt="Instagram" /></div>
            <div><img src={LinkedinIcon} alt="linkedin" /></div>
          </div>
        </FooterContent>
      </div>
      <Copyright />
    </footer>

  )
}

export default Footer