import React from 'react';
import ImageSlider from "./components/imgslider";
import Introduce from "./components/introduce";
import Carousallayout from "./components/carouselbar";
import HowItWorks from "./components/worksmanagement";
import Review from "./components/reviewcarousel";
import SecurityBage from "./components/securitybage";
import CompanyMeeting from "./components/meeting";
import IntroductQuestion from "./components/introductquestion";
import Footer from "./components/footer";
import ChatBox from "./components/chatbox";
function App() {
  return (
    <div>
        <ImageSlider />
        <Introduce />
        <Carousallayout />
        <HowItWorks />
        <Review />
        <SecurityBage />
        <CompanyMeeting />
        <IntroductQuestion />
        <Footer />
        <ChatBox />
    </div>
  );
}

export default App;
