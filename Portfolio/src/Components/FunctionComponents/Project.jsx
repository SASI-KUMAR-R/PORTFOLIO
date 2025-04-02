import "../CSS/Project.css";

function Project() {
  return (
    <section id="Project" className="project">
      <h1 className="h3font">MY PROJECT</h1>

      <div className="project1">
        <h1 className="h1fontimp4">
          MEDICAL DISPENSARY AND PATIENT MONITORING ROBOT (HW)
        </h1>
        <p className="paraproject">
          1.Engineered a multi-functional monitoring system for robots,
          integrating advanced sensors to track vital signs such as heart rate,
          SpO2 levels, and temperature in real-time.
        </p>
        <p className="paraproject">
          2. Optimized system accuracy to 70% - 75%, significantly improving
          patient health tracking capabilities and paving the way for enhanced
          robotic healthcare solutions.
        </p>
        <p className="paraproject">Duration: Nov 2023 - Dec 2023</p>
      </div>

      <div className="project2">
        <h1 className="h1fontimp4">VOICE ASSISTANT USING RASPBERRY BI (HW)</h1>
        <p className="paraproject">
          1.Developed and implemented a user-friendly voice assistant
          application on Raspberry Pi, integrating Python code to enable voice
          recognition and interaction for an enhanced user experience.
        </p>
        <p className="paraproject">
          2.The voice assistant successfully achieved an 80% accuracy rate in
          recognizing commands within a range of 2.5 meters, demonstrating
          effective functionality and reliability.
        </p>
        <p className="paraproject">Duration: June 2023 - july 2023</p>
      </div>

      <div className="project3">
        <h1 className="h1fontimp4">
          WORD SEARCH PUZZLE SOLVER WITH VARIABLE TIME (SW)
        </h1>
        <p className="paraproject">
          1.Employed HTML for structuring the interface, CSS for styling, and
          JavaScript to implement backtracking algo- rithms, optimizing the
          solution of word puzzles through efficient problem-solving techniques.
        </p>
        <p className="paraproject">
          2.Introduced a feature enabling users to customize the tracking speed
          (in milliseconds) for word identification within the puzzle, enhancing
          user control and experience.
        </p>
        <p className="paraproject">Duration: Augest 2024 </p>
      </div>

      <div className="project4">
        <h1 className="h1fontimp4">SELF PORTFOLIO (SW)</h1>
        <p className="paraproject">
          1. This website was built using HTML, CSS, JavaScript, and React to
          create a clean, responsive, and dynamic user interface for a better
          user experience.
        </p>
        <p className="paraproject">
          2. I used Git for version control, ensuring efficient project
          management and smooth collaboration during development.
        </p>
        <p className="paraproject">Duration: FEB 2025</p>
      </div>
    </section>
  );
}

export default Project;
