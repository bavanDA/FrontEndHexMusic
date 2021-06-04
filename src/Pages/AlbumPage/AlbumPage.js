import React, { Component } from "react";
import AlbumsCarousel from "../../Components/AlbumTable/AlbumsCarousel";
import AlbumTrackTable from "../../Components/AlbumTrackTable/AlbumTrackTable";
import Comment from "../../Components/Comment/Comment.js";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import Slider from "react-slick";
import "./AlbumPage.css";
import eminem from "./eminem.jpg";
import HomePageAlbum from "../../Components/Cards/HomePageAlbum";
import axios from "axios";
import { Loader } from "semantic-ui-react";
import ReactStars from "react-rating-stars-component";

class AlbumPage extends Component {
 
  render() {
    var sectionStyle = {
      width: "100%",
      minHeight: "25rem",
      maxHeight: "fitContent",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(https://upload.wikimedia.org/wikipedia/en/0/02/Radioheadkida.png)`,
      boxShadow: "inset 0 0 0 2000px rgba(2, 2, 2, 0.850)",
    };
      return (
        <div>
          <Navbar activeItem="artist" menuId="menu2" />
          <div class="container-fluid !direction !spacing artistPageContainer">
            <div class="d-none d-sm-none d-md-none d-lg-block">
              <div
                style={sectionStyle}
                class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} x"
              >
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} artistDataPosition">
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 imgContainer">
                    <img
                      width="280"
                      height="280"
                      className="imgkhodesh"
                      src="https://upload.wikimedia.org/wikipedia/en/0/02/Radioheadkida.png"
                    />
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-3 col-sm-4 col-6">
                    <div class="container-fluid !direction !spacing dataContainer">
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} titleContainer">
                        KidA
                      </div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} dateContainer">
                        3.5
                      </div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} dateContainer">
                        1988
                      </div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} dateContainer">
                        Country : USA
                      </div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} genresContainer">
                        Genres : Rap
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-1 col-md-0 col-sm-0 col-0"></div>
                  <div class="col-xl-2 col-lg-3 col-md-3 col-sm-5 col-12 ">
                    <div class="container-fluid !direction !spacing ">
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} followcontain">
                      </div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} ">
                      <ReactStars
                        count={5}
                        size={35}
                        value={2}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        classNames="StarsContainP"
                    />
                      </div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                        <button className="followButton">Add to Favorits</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-block d-lg-none">
              <div style={sectionStyle} class="row ">
                <div class="row PartistDataPosition">
                  <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 PimgContainer">
                    <img
                      width="200"
                      height="200"
                      className="imgkhodesh"
                      src="https://content.api.news/v3/images/bin/ba49fee5bc802f0a32a9415fef635f71"
                    />
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 PdataContainer">
                    <div class="container">
                      <div class="row">
                        <div class="col-12 col-md-4 PtitleContainer">
                          KidA
                        </div>

                        <div class="col-12 col-md-4 dateContainer">
                          1988
                        </div>
                        <div class="col-12 col-md-4 dateContainer">
                          3.5
                        </div>
                        <div class="col-12 col-md-4 dateContainer">Countr</div>
                        <div class="col-12 col-md-4 genresContainer  ">
                          Genres : Rap
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6 pfol">
                    <div className="Pfollowcontain">
                      <div class="row">
                      <div class="col-12 col-sm-6 ">
                      <ReactStars
                        count={5}
                        size={35}
                        value={2}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        classNames="StarsContainP"
                    />
                      </div>
                        <div class="col-12  col-sm-6">
                          <button className="pfollowButton">Add To Favorite</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} bdyContainer">
            <div class="container-fluid !direction !spacing bdyPosition">
              <AlbumTrackTable />
            </div>
          </div>

          <Footer />
        </div>
      );
  }
}
export default AlbumPage;