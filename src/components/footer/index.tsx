import { useEffect, useState } from "react"
import footerSocialLinksData from "../../data/footerSocialLinksData"
import "./index.css"

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(0)

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    setCurrentYear(currentYear)
  }, [])

  return (
    <div>
      <div className="cart-footer flex-center flex-column">

        <p className="footer-content">Made with <span className="primary-color footer-symbol"> &lt;/&gt; </span> by <a
          className="footer-linkedin-link" href="http://www.linkedin.com/in/vishruta-patil-30106b204">Vishruta Patil</a></p>

        <div className="social-links-container">
          <ul className="flex social-links-inner-container">
            {
              footerSocialLinksData.map((item, index) => (
                <li key={index}>
                  <a href={item.social_link} target="_blank"><i
                    className={`fab footer-social-icon ${item.class_name}`}></i></a>
                </li>
              ))
            }
          </ul>
        </div>
        <p className="copywrite-footer">© {currentYear} || magniZent</p>

      </div>
    </div>
  )
}
