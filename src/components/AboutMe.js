import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section className="about" id="aboutMe">
      <div className="spotlight-container" data-aos="fade-up">
        <span className="spotlight-heading">About Me</span>
      </div>

      <div className="about-text-container" data-aos="fade-up">
        <div>
          <p>
            Hey there! I'm <strong>Mohamed Zuhair</strong> — a Machine Learning Engineer
            passionate about building systems that help machines understand the world better.
          </p>

          <p>
            I’m currently pursuing{" "}
            <strong>Computer Science and Engineering with a specialization in AI & ML</strong>.
            What began as curiosity about how algorithms learn turned into a passion for solving
            real-world problems through data and intelligent automation.
          </p>

          <p>
            I’ve explored various domains, from{" "}
            <strong>NeuroBin</strong> — an AI-powered smart waste bin — to research that studies
            how AI can enhance <strong>Additive Manufacturing</strong>. Each project helps me see
            how theory turns into working technology.
          </p>

          <p>
            My current skillset includes{" "}
            <strong>
              Python, TensorFlow, PyTorch, scikit-learn, NumPy, Pandas,
            </strong>{" "}
            and data visualization tools. I love creating models that are efficient, interpretable,
            and practical to deploy.
          </p>

          <p>
            Outside coding, I enjoy tinkering with circuits and exploring how software and hardware
            connect — because intelligence isn’t only digital, it’s physical too.
          </p>
        </div>

        <div data-aos="fade-up">
          <button
            className="resume-btn"
            id="resume-btn"
            onClick={() => window.open("/mohamed-zuhair-resume.pdf", "_blank")}
          >
            <div className="sign">
              <svg viewBox="0 0 640 512">
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
              </svg>
            </div>
            <div className="text">Resume</div>
          </button>
        </div>
      </div>
    </section>
  );
};
