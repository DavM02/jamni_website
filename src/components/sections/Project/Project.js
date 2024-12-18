import "./project.css";
import "./media.css";
import ProjectHeader from "./ProjectHeader";
import ProjectForm from "./ProjectForm";
import ProjectImage from "./ProjectImage";
import ProjectLogo from "./ProjectLogo";
import img1 from "../../../assets/img_23.webp";
import img2 from "../../../assets/img_24.webp";

export default function Project() {
  return (
    <section id="project">
      <div className="container">
        <ProjectHeader />
      </div>
      <div className="section-layout">
        <div className="center-gr self-end-y self-end-x" style={{ "--area": "a" }}>
          <ProjectForm includeUpload={true} />
        </div>
        <div style={{ "--area": "b" }}>
          <ProjectImage src={img1} alt="image-1" />
        </div>
        <div style={{ "--area": "c" }}>
          <ProjectImage src={img2} alt="image-2" />
        </div>
        <div style={{ "--area": "d" }}>
          <ProjectLogo />
        </div>
        <div className="center-gr self-start-y self-start-x" style={{ "--area": "e" }}>
          <ProjectForm />
        </div>
      </div>
    </section>
  );
}
