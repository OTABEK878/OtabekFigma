import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Navbar from './home/navbar/navbar.jsx';
import HomeHome from './home/home/home.jsx';
import HomeImg from './home/img/img.jsx';
import HomeValue from './home/value/value.jsx';
import HomeQuestions from './home/questions/questions.jsx';
import HomeServices from './home/services/services.jsx';
import HomeBuilder from './home/builder/builder.jsx';
import HomePartner from './home/partners/partner.jsx';
import HomeFacts from './home/facts/facts.jsx';
import HomeNews from './home/news/news.jsx';
import HomeContact from './home/contact/contact.jsx';
import HomeFooter from './home/footer/footer.jsx';

import ServicesHome from "./services/home/home.jsx";
import ServicesAbout from "./services/about/about.jsx";
import ServicesContact from "./services/contact/contact.jsx"
import ServicesFooter from "./services/footer/footer.jsx"

import Services2Home from "./services/services-2/home/home.jsx"
import Services2About from "./services/services-2/about/about.jsx"
import Services2How from './services/services-2/how/how.jsx'
import Services2Benefits from "./services/services-2/benefits/benefits.jsx"
import Services2Builder from "./services/services-2/builder/builder.jsx"
import Services2Pricing from "./services/services-2/pricing/pricing.jsx"
import Services2Partners from "./services/services-2/partners/partners.jsx"
import Services2Contact from "./services/services-2/contact/contact.jsx"
import Services2Footer from "./services/services-2/footer/footer.jsx"

import WorkHome from "./work/home/home.jsx"
import WorkCards from "./work/cards/cards.jsx"
import WorkClient from "./work/client/client.jsx"
import WorkPartners from "./work/partners/partners.jsx"
import WorkContact from "./work/contact/contact.jsx"
import WorkFooter from "./work/footer/footer.jsx"

import Work2Home from "./work/work-2/home/home.jsx"
import Work2Project from "./work/work-2/project/project.jsx"
import Work2Decisions from "./work/work-2/decisions/decisions.jsx"
import Work2Builder from "./work/work-2/builder/builder.jsx"
import Work2Contact from "./work/work-2/contact/contact.jsx"
import Work2Footer from "./work/footer/footer.jsx"

import NewsHome from "./news/home/home.jsx"
import NewsCards from "./news/cards/cards.jsx"
import NewsContact from "./news/contact/contact.jsx"
import NewsFooter from "./news/footer/footer.jsx"

import News2Home from "./news/news2/home/home.jsx"
import News2About from "./news/news2/about/about.jsx"
import News2Comments from "./news/news2/comments/comments.jsx"
import News2Leave from "./news/news2/leave/leave.jsx"
import News2Contact from "./news/news2/contact/contact.jsx"
import News2Footer from "./news/footer/footer.jsx"

import Contacts from "./contacts/home/home.jsx"
import ContactsContact from "./contacts/contact/contact.jsx"
import ContactOffices from "./contacts/offices/offices.jsx"
import ContactFooter from "./contacts/footer/footer.jsx"

import AboutHome from "./about/home/home.jsx"
import AboutAbout from "./about/about/about.jsx"
import AboutAlexander from "./about/alexander/alexander.jsx"
import AboutValue from "./about/value/value.jsx"
import AboutHistory from "./about/history/history.jsx"
import AboutPartnerts from "./about/partners/partner.jsx"
import AboutTeam from "./about/team/team.jsx"
import AboutMap from "./about/map/map.jsx"
import AboutContact from "./about/contact/contact.jsx"
import AboutFooter from "./about/footer/footer.jsx"

import About2Home from "./about/about2/home/home.jsx"
import About2Locations from "./about/about2/locations/locations.jsx"
import About2Value from "./about/about2/value/value.jsx"
import About2Contact from "./about/about2/contact/contact.jsx"
import About2Footer from "./about/about2/footer/footer.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
  <Route path="/" element={
    <>
     <HomeHome />
     <HomeImg />
     <HomeValue />
     <HomeQuestions />
     <HomeServices />
     <HomeBuilder />
     <HomePartner />
     <HomeFacts />
     <HomeNews />
     <HomeContact />
     <HomeFooter />
    </>
  } />
  <Route path="/services" element={
    <>
    <ServicesHome />
    <ServicesAbout />
    <ServicesContact />
    <ServicesFooter />
    </>
  } />
  
  <Route path='/services-2' element={
    <>
    <Services2Home />
    <Services2About />
    <Services2How />
    <Services2Benefits />
    <Services2Builder />
    <Services2Pricing />
    <Services2Partners />
    <Services2Contact />
    <Services2Footer />
    </>
  } />

  <Route path='/work' element={
    <>
    <WorkHome />
    <WorkCards />
    <WorkClient />
    <WorkPartners />
    <WorkContact />
    <WorkFooter />
    </>
  } />

  <Route path='/work-2' element={
    <>
    <Work2Home />
    <Work2Project />
    <Work2Decisions />
    <Work2Builder />
    <Work2Contact />
    <Work2Footer />
    </>
  } />

  <Route path='/news' element={
    <>
    <NewsHome />
    <NewsCards />
    <NewsContact />
    <NewsFooter />
    </>
  } />

  <Route path='/news-2' element={
    <>
    <News2Home />
    <News2About />
    <News2Comments />
    <News2Leave />
    <News2Contact />
    <News2Footer />
    </>
  } />

  <Route path='/contacts' element={
    <>
    <Contacts />
    <ContactsContact />
    <ContactOffices />
    <ContactFooter />
    </>
  } />

  <Route path='/about' element={
    <>
    <AboutHome />
    <AboutAbout />
    <AboutAlexander />
    <AboutValue />
    <AboutHistory />
    <AboutPartnerts />
    <AboutTeam />
    <AboutMap />
    <AboutContact />
    <AboutFooter />
    </>
  } />

  <Route path='/about-2' element={
    <>
    <About2Home />
    <About2Locations />
    <About2Value />
    <About2Contact />
    <About2Footer />
    </>
  } />
</Routes>

    </Router>
  </StrictMode>
);
