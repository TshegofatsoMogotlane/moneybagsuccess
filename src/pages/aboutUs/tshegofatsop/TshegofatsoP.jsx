import {
  ContainerTsp,
  Divider,
  ParagraphTsp,
  SubtitleTsp,
  TitleTsp,
} from "./Tshegofatsop.styled";
import AboutTshego from "../../../assets/AboutTshego.jpeg";
const TshegofatsoP = () => {
  return (
    <ContainerTsp>
      <img src={AboutTshego} alt="Tshego" />
      <Divider>
        <TitleTsp>Tshegofatso Mogotlane</TitleTsp>
        <SubtitleTsp>
          Chief Technology Officer (CTO) of BricsEmpire Photography
        </SubtitleTsp>
        <ParagraphTsp>
          As the Chief Technology Officer (CTO) of BricsEmpire Photography, I
          bring a dynamic blend of creativity and technical proficiency to the
          forefront of our vision. My role involves harnessing my skills as a
          Data Scientist and Full Stack Developer to elevate our photography
          services through innovative technology. Technical Expertise: With a
          strong background in data science, I specialize in leveraging machine
          learning to extract actionable insights from complex datasets. My
          ability to analyze data using advanced statistical methods and
          algorithms allows me to build predictive models that guide our
          strategic decisions. Proficient in Python, I develop and deploy
          machine learning solutions that optimize our business operations and
          enhance client experiences.
        </ParagraphTsp>
        <ParagraphTsp>
          As a Full Stack Developer, I construct comprehensive applications by
          managing both frontend and backend processes. I craft intuitive user
          interfaces using HTML, CSS, and frameworks like React while developing
          robust server-side logic with Node.js. My skills in database
          management, API integration, and deployment practices ensure that our
          applications are scalable, functional, and user-friendly. This unique
          synergy of data-driven insights and application development enables me
          to create impactful solutions that resonate with our audience. Vision
          for BricsEmpire Photography: My goal is to intertwine artistry and
          technology, making BricsEmpire a leader in capturing not just
          photographs but emotional narratives that reflect the journey of our
          clients. I am committed to using technology to amplify our
          storytelling, ensuring that every visual resonates with authenticity
          and meaning.
        </ParagraphTsp>
      </Divider>
    </ContainerTsp>
  );
};

export default TshegofatsoP;
