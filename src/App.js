import './App.css';
import { TreeFill } from 'react-bootstrap-icons';
import { Hurricane } from 'react-bootstrap-icons';

import Gallery from "react-photo-gallery";
import { photos } from "./photos";

// import { slide as Menu } from 'react-burger-menu'

// import Background from './grind1.jpeg';


import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';

// var sectionStyle = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: `url(${Background})`,
//   backgroundSize: 'cover' 
// };

const StaticMenu = () => {
  const homeSection = useScrollSection('home');
  const aboutSection = useScrollSection('about');
  const contactSection = useScrollSection('contact');
  const photosSection = useScrollSection('photos');

  return (
    <div>
      

    <div className="green Menu ">
      <div onClick={homeSection.onClick} selected={homeSection.selected}>
        Home
      </div>
      <div onClick={aboutSection.onClick} selected={aboutSection.selected}>
        About
      </div>
      <div onClick={contactSection.onClick} selected={contactSection.selected}>
        Contact
      </div>
      <div onClick={photosSection.onClick} selected={photosSection.selected}>
        Photos
      </div>
    </div>
    </div>
  );
};

function App() {
  return (
    <div className="App" >
      <ScrollingProvider>
    <StaticMenu />
    <Section id="home" className="App-header RogerTitle"> 

    <TreeFill size={96} />
        <font size="40">
          <b>Roger Alsey</b><br></br>
          Stump grinding since 1997<br/>
          Bishops Stortford<br/>
        </font>
        <p/>
    </Section>

    <Section id="about" className="base green">
        <div className="title">
          ABOUT
          <div>
            <Hurricane size={40} />
          </div>
        </div>

        <div className="contactDetails">
        Based in Little Hallingbury, Bishops Stortford, Essex.
        <p></p>
        Professional experienced stump grinding.
        <p></p>
        Clean and tidy.
        <p></p>
        We have equipment for all types of job, big or small, tight or clear access.
        <p></p>
        We have a  public liability insurance of £5m.
        </div>
    </Section>

    <Section id="contact" className="App-header">
      <div className="title">
        CONTACT
        <div>
          <Hurricane size={40} />
        </div>
      </div>

      <div className="contactDetails">
        Call today for a free no obligation quote<p></p>
        <i>
          Tel: 07802 599820
          </i>
          <p></p>
          <i>

              Email:&nbsp;
            <a href="mailto:rogeralsey@hotmail.co.uk">rogeralsey@hotmail.co.uk</a>
          </i>
      </div>
    </Section>

    <Section id="photos" className="base brown">
    <div className="title">
          PHOTOS
          <div>
            <Hurricane size={40} />
          </div>
        </div>
<center>
        <img width="50%" src="myPredator.jpg"></img><br></br>
        <img width="50%" src="myEquipment.jpg"></img><br></br>
        <img width="50%" src="equipmentLoaded.jpg"></img><br></br>
        <img width="70%" src="predatorMarketing.jpg"></img><br></br>
</center>
    </Section>

    </ScrollingProvider>
    </div>
  );
}

export default App;
