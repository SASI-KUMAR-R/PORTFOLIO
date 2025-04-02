import "../CSS/Button.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodingninjas } from "react-icons/si";
import { PiCopyright } from "react-icons/pi";
function Button() {
  return (
    <section className="button1">
      <h1 className="h1contact">Let's Talk , We Connect : </h1>

      <div className="imph1font">
        <h1 className="somesent">
          If you'd like to discuss any project, idea, life experiences, career
          growth, guidance, or anything else—feel free to have a chat with me...
          <a
            href="https://www.linkedin.com/in/sasikumar-r-9b5478258/"
            className="linkedaa"
          >
            {" "}
            HERE{" "}
          </a>
        </h1>
      </div>

      <div className="mainbutton">
        <a href="https://www.linkedin.com/in/sasikumar670/" target="_blank">
          <FaLinkedin className="iconebtuu" />
        </a>
        <a href="https://github.com/SASI-KUMAR-R" target="_blank">
          <FaGithub className="iconebtuu" />
        </a>
        <a href="https://leetcode.com/u/sasikumar_rr/" target="_blank">
          <SiLeetcode className="iconebtuu" />
        </a>
        <a
          href="https://www.geeksforgeeks.org/user/rsasikumar670/"
          target="_blank"
        >
          <SiGeeksforgeeks className="iconebtuu" />
        </a>
        <a
          href="https://www.naukri.com/code360/profile/SASIKUMAR_R"
          target="_blank"
        >
          <SiCodingninjas className="iconebtuu" />
        </a>
      </div>
      <footer className="copyright">
        &copy; {new Date().getFullYear()} SASIKUMAR R. All rights reserved.
      </footer>
    </section>
  );
}

export default Button;
