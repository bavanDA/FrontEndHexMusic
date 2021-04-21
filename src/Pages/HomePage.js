import React, { Component } from "react";
import LandingTop from "../Components/LandingTop/LandingTop";
import Navbar from "./../Components/Navbar/navbar";
import ArtistsCarousel from "../Components/AtistsCarousel/ArtistsCarousel";
import HomePageTracks from "../Components/Cards/HomePageTracks";
import Container from "../Components/Container/Container";
import "./HomePage.css";
import Footer from "../Components/Footer/footer";

class HomePage extends Component {
  state = { menuId: "menu1" };
  onScrollNavbar = () => {
    console.log(this.state.menuId);
    if (document.getElementById("container-navabr").scrollTop > 330) {
      this.setState({ menuId: "menu2" });
    } else {
      this.setState({ menuId: "menu1" });
    }
  };
  render() {
    return (
      <div id="container-navabr" onScroll={this.onScrollNavbar}>
        <Navbar id="navbar" menuId={this.state.menuId} activeItem="Home" />
        <div id="landingtop" className="container-fluid !direction !spacing ">
          <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rowSetting">
            <LandingTop />
          </div>
          <div className="hpFContainer">
            <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}  tracksContain rowSetting">
              <h2 class="divider line glow" contenteditable>
                {"TOP ARTISTS"}
              </h2>
              <ArtistsCarousel />
            </div>
            <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} tracksContain rowSetting">
              <h2 class="divider line glow" contenteditable>
                {"TOP TRACKS"}
              </h2>
              <div className="tracks">
                <HomePageTracks />
              </div>
            </div>
            <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} containerSetting rowSetting">
              <h2 class="divider line glow" contenteditable>
                {"TOP ALBUMS"}
              </h2>
              <Container />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;
