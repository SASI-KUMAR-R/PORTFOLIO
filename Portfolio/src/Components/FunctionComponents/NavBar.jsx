import { Link } from "react-scroll";
import "../CSS/NavBar.css";

function NavBar() {
  return (
    <div className="container">
      <header>
        <nav>
          <li>
            <Link to="Name" smooth={true} duration={3500}>
              Home
            </Link>
          </li>
          <li>About</li>
          <li>
            <Link to="Expertise" smooth={true} duration={3500}>
              Expertise
            </Link>
          </li>
          <li>
            <Link to="Project" smooth={true} duration={3500}>
              Project
            </Link>
          </li>
          <li>
            <Link to="Achievement" smooth={true} duration={3500}>
              Achievements
            </Link>
          </li>
          <li>
            <Link to="button1" smooth={true} duration={3500}>
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1gAu6KA0TJCpgZDpjAjvCipm_5LdiLjtx/view?usp=sharing"
              className="SOMEDOWN"
            >
              Download Resume
            </a>
          </li>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
