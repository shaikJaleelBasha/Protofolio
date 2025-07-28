import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
function Education() {
  return (
    <div name="About" className="education">
      <h1 className="text-3xl font-bold mb-5 mt-10">
        <center style={{ color: "#22d3ee" }}>About</center>
      </h1>
      <h1 className="pl-10 text-3xl" style={{ color: "#ff007f" }}>
        Education
      </h1>
      <VerticalTimeline lineColor="#ff007f">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#09032b", color: "#ff007f" }}
          icon={<FaGraduationCap />}
          date="2023-present"
        >
          <div className="text-box">
            <center>
              <h1>
                B Tech <small>[cse]</small>
              </h1>
            </center>
            <small>-kl unversity</small>
            <p style={{ color: "#ff007f" }}>cgpa: 9.14</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#09032b", color: "#ff007f" }}
          icon={<GiDiploma />}
          date="2020-2022"
        >
          <div className="text-box">
            <center>
              <h1>
                Intermediate <small>[MPC]</small>
              </h1>
            </center>
            <small>-Sri Chaithanya Junior College</small>
            <p style={{ color: "#ff007f" }}>percentage: 94.7</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#09032b", color: "#ff007f" }}
          icon={<FaSchool />}
          date="2019-2020"
        >
          <div className="text-box">
            <center>
              <h1>
                Secondary<small> [10th]</small>
              </h1>
            </center>
            <small>-Saint Patricks high School</small>
            <p style={{ color: "#ff007f" }}>percentage: 100</p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <br />
    </div>
  );
}

export default Education;
