import { Notification } from "./pages/Notification.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import CookingCourses from "./pages/CookingCourses"
import Deity from "./pages/Deity.js";
import CateringMenu from "./pages/CateringMenu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Gallery from "./pages/Gallery.js";
import CateringPage from "./pages/CateringPage.js";
import CookBookPage from "./pages/CookBookPage.js";
import PaintingGallery from "./pages/PaintingGallery.js";
import DietyGallery from "./pages/DietyGallery.js";

function App() {
  return (
    <>
      {/* 1. PAGES: 
Home, About us, Catering, Cooking Courses, Gallery, Cookbook page, Contact us */}
      <BrowserRouter>
        <Notification />
        <Header />

        <Switch>
          <Homepage exact path="/" />
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/catering">
            <CateringPage />
          </Route>
          <Route path="/cookbook">
            <CookBookPage />
          </Route>
          <Route path="/cateringmenu">
            <CateringMenu />
          </Route>
          <Route path="/cookingcourses">
            <CookingCourses />
          </Route>
          <Route path="/deity">
            <Deity />
          </Route>
          <Route path="/paintings">
            <PaintingGallery  />
          </Route>
          <Route path="/diety-gallery">
            <DietyGallery  />
          </Route>
        </Switch>
        
        <Footer />
        {/* <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/contact">
            <Contact>{ContactForm}</Contact>
          </Route>
        </Switch>
        <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
