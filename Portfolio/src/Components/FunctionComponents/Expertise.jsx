import "../CSS/Expertise.css";

const Expertise = () => {
  return (
    <section id="Expertise" className="Expertise">
      <h1 className="impfont2">EXPERTISE</h1>

      <div className="programlang">
        <h1 className="h1font3">Prgramming Language</h1>
        <ol className="ol1">
          <li>Java</li>
          <li>Python</li>
          <li>C</li>
          <li>Qiskit</li>
          <li>Javascript</li>
        </ol>
      </div>

      <div className="quantum">
        <h1 className="h1font3">Quantum Computing</h1>
        <ol className="ol1">
          <li>Language : Python</li>
          <li>Framework : Qiskit</li>
          <li>Platform: IBM Quantum Platform</li>
        </ol>
      </div>

      <div className="DSA">
        <h1 className="h1font3">
          Data Structure and <br /> Algorithms
        </h1>
        <ol className="ol1">
          <li>Java</li>
        </ol>
      </div>

      <div className="webpage">
        <h1 className="h1font3">Full Stack Development</h1>
        <ol className="ol1">
          <li>React</li>
          <li>Html</li>
          <li>Css</li>
        </ol>
      </div>

      <div className="querylang">
        <h1 className="h1font3">Query Language</h1>
        <ol className="ol1">
          <li>MySQL</li>
        </ol>
      </div>

      <div className="addition">
        <h1 className="h1font3">Additional Tools</h1>
        <ol className="ol1">
          <li>GIT</li>
          <li>Github</li>
          <li>Anaconda</li>
          <li>Eclipse</li>
        </ol>
      </div>

    </section>
  );
};

export default Expertise;


