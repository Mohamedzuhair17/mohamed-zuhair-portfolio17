import icPython from "../assets/img/ic-python.png";
import icTensorflow from "../assets/img/ic-tensorflow.png";
import icPytorch from "../assets/img/ic-pytorch.png";
import icNumpy from "../assets/img/ic-numpy.png";
import icPandas from "../assets/img/ic-pandas.png";
import icSklearn from "../assets/img/ic-sklearn.png";
import icMatplotlib from "../assets/img/ic-matplotlib.png";
import icGit from "../assets/img/ic-git.png";
import icVsCode from "../assets/img/ic-vscode.png";
import icJupyter from "../assets/img/ic-jupyter.png";

import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const skills = [
    { icon: icPython, name: "Python" },
    { icon: icTensorflow, name: "TensorFlow" },
    { icon: icPytorch, name: "PyTorch" },
    { icon: icNumpy, name: "NumPy" },
    { icon: icPandas, name: "Pandas" },
    { icon: icSklearn, name: "Scikit-learn" },
    { icon: icMatplotlib, name: "Matplotlib" },
    { icon: icJupyter, name: "Jupyter Notebook" },
    { icon: icGit, name: "Git" },
    { icon: icVsCode, name: "VS Code" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="spotlight-container" data-aos="fade-up">
        <span className="spotlight-heading">Skills</span>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <span className="tech-stack-highlight" data-aos="fade-up">
              Machine Learning Stack
            </span>

            <ul className="skill-box-wrapper">
              {skills.map((skill, index) => (
                <li key={index} className="skill-box" data-aos="fade-up">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon"
                    style={
                      skill.name === "Jupyter Notebook"
                        ? { transform: "scale(2)" }
                        : skill.name === "Scikit-learn"
                        ? { transform: "scale(1.6)" }
                         : skill.name === "pyTorch"
                        ? { transform: "scale(4)" }
                        : skill.name === "matplotlib"
                        ? { transform: "scale(1.8)" }
                        : {}
                    }
                  />
                  <span className="tooltip">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
