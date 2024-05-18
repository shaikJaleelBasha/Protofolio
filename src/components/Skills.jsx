function Skills() {
  return (
    <div>
      <section className="experience-section" id="about">
        <div className="container3">
          <div className="section_title center">
            <h1 className="text-3xl" style={{ color: "#ff007f" }}>
              Progrmming-languages
            </h1>
          </div>
          <div className="experience-items">
            <div className="experience-item">
              <div className="experience-info">
                <p>c language</p>
                <p>90%</p>
              </div>
              <div className="progress-line" data-percent="90%">
                <span style={{ width: "90%" }}></span>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-info">
                <p>Java Script</p>
                <p>80%</p>
              </div>
              <div className="progress-line" data-percent="90%">
                <span style={{ width: "80%" }}></span>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-info">
                <p>Java</p>
                <p>70%</p>
              </div>
              <div className="progress-line" data-percent="70%">
                <span style={{ width: "70%" }}></span>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-info">
                <p>python</p>
                <p>60%</p>
              </div>
              <div className="progress-line" data-percent="70%">
                <span style={{ width: "60%" }}></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
}

export default Skills;
