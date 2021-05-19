import React, { Component } from "react";
import AlbumTable from "../../Components/AlbumTable/AlbumTable";
import Comment from "../../Components/Comment/Comment.js";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import Slider from "react-slick";
import "./ArtistPage.css";
import eminem from "./eminem.jpg";
import HomePageAlbum from "../../Components/Cards/HomePageAlbum";

class ArtistPage extends Component {
  render() {
    var sectionStyle = {
      width: "100%",
      minHeight: "25rem",
      maxHeight: "fitContent",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage:
        "url(https://content.api.news/v3/images/bin/ba49fee5bc802f0a32a9415fef635f71)",
      boxShadow: "inset 0 0 0 2000px rgba(2, 2, 2, 0.534)",
    };
    const settings = {
      slidesToShow: 5,
      infinite: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 4,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
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
                    src="https://content.api.news/v3/images/bin/ba49fee5bc802f0a32a9415fef635f71"
                  />
                </div>
                <div class="col-xl-4 col-lg-4 col-md-3 col-sm-4 col-6">
                  <div class="container-fluid !direction !spacing dataContainer">
                    <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} titleContainer">
                      Eminem
                    </div>
                    <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} dateContainer">
                      1988–present
                    </div>
<<<<<<< HEAD
                    <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                      <img
                        height="35"
                        className="imgflag"
                        src={
                          "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
                        }
                      />
=======
                    <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} dateContainer">
                      Country : USA
>>>>>>> 01d1d470a18db35ed27cc85a7e76042de990c78c
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
                      <div className="followersContainer">+2K Follows</div>
                    </div>
                    <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                      <button className="followButton">Follow</button>
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
                      <div class="col-12 col-md-4 PtitleContainer">Eminem</div>

                      <div class="col-12 col-md-4 dateContainer">
                        1988–present
                      </div>

                      <div class="col-12 col-md-4 genresContainer  ">
                        Genres : Rap
                      </div>
                    
                   <div class="col-12 col-md-4 dateContainer">
                    1988–present
                    </div>
                    <div class="col-12 col-md-4 dateContainer">
                    Countr
                    </div>
                    <div class="col-12 col-md-4 genresContainer  ">
                      Genres : Rap
                    </div>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6 pfol">
                  <div className="Pfollowcontain">
                    <div class="row">
                      <div className=" folp">
                        <div className="followersContainer">+2K Follows</div>
                        <button className="pfollowButton">Follow</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} bdyContainer">
            <div class="container-fluid !direction !spacing bdyPosition">
              <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} topf">
                <div className="CarouselContainerTemplate">
                  <div className="CarouselTemplate">
                    <Slider {...settings}>
                      <div className="Cells">
                        <HomePageAlbum />
                      </div>
                      <div className="Cells">
                        <HomePageAlbum />
                      </div>
                      <div className="Cells">
                        <HomePageAlbum />
                      </div>
                      <div className="Cells">
                        <HomePageAlbum />
                      </div>
                      <div className="Cells">
                        <HomePageAlbum />
                      </div>
                      <div className="Cells">
                        <HomePageAlbum />
                      </div>
                      <div className="Cells">
                        <HomePageAlbum />
                      </div>
                      <div className="Cells">
                        <HomePageAlbum />
                      </div>
                      <div className="Cells">
                        <HomePageAlbum />
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <AlbumTable />
              <Comment />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ArtistPage;
