import Languages from "./Languages";
import { FaDownload } from "react-icons/fa";
import SkillProgressBar from "./SkillProgressBar";
import Scrollbar from "smooth-scrollbar";
import { useEffect, useRef } from "react";
const InfoScroll = () => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (sidebarRef.current) {
      Scrollbar.init(sidebarRef.current);
    }
  }, []);
  const fileName = "GouravSuthar.pdf";
  return (
    <div className="infoScroll" id="sidebarScroll" ref={sidebarRef}>
      <div className="scrollContent">
        <div className="dataTable py-3">
          <ul className="px-2 mb-0">
            <li>
              <h6>Residence:</h6>
              <span>India</span>
            </li>
            <li>
              <h6>City:</h6>
              <span>Jodhpur</span>
            </li>
            <li>
              <h6>Age:</h6>
              <span>23</span>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <Languages />
        <div className="divider"></div>
        <SkillProgressBar />
        <div className="divider"></div>
        <div className="skillList">
          <ul className="ps-0 pt-3">
            <li>Wordpress, Woocommerce</li>
            <li>Bootstrap, Tailwind</li>
            <li>Next Js</li>
            <li>Git knowledge</li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="downloadCv text-center py-2 pb-3">
          <a href={`/${fileName}`} download={fileName}>
            DOWNLOAD CV <FaDownload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoScroll;
