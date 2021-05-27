import React, { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs";
import "./Profile.css";
import Navbar from "../../Components/Navbar/navbar";
import Favorite from "../../Components/FavoritCards/Favorite";
import CommentCard from "../../Components/CommentCards/CommentCard";
import ProfileModals from "../../Components/ProfileModals/ProfileModals";
import CommentModals from "../../Components/CommentModal/CommentModal";
import ProfileRatingCard from "../../Components/ProfileRatingCard/ProfileRatingCard";
import RatingModal from "../../Components/RatingModal/RatingModal";
import Gear from "./gear.png";
import axios from "axios";

class Profile extends React.Component {
  state = {
    id: "",
    userProfile: false,
    username: "",
    email: "",
    password: "",
    cPassword: "",
    currentPassword: "",
    FName: "",
    LName: "",
    description: "",
    usernameError: "",
    emailError: "",
    avatar: "",
  };

  componentDidMount() {
    this.setState({ id: this.props.match.params.id });

    if (localStorage.getItem("autToken") !== null) this.APICallFunction();
  }
  APICallFunction = () => {
    axios
      .get("http://127.0.0.1:8000/djoser/users/me/", {
        headers: {
          Authorization: `Token ${localStorage.getItem("autToken")}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({
          username: res.data.username,
          email: res.data.email,
          aemail: res.data.email,
          FName: res.data.first_name,
          LName: res.data.last_name,
        });
      })
      .catch((error) => {
        console.log(this.state.token);
        console.log(error.response);
      });

    if (this.state.id === this.state.username) {
      this.setState({ userProfile: true });
    }

    axios
      .get("http://127.0.0.1:8000/update_profile/me/", {
        headers: {
          Authorization: `Token ${localStorage.getItem("autToken")}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);

        this.setState({
          description: res.data.description,
          avatar: `http://127.0.0.1:8000${res.data.avatar}`,
        });
      })
      .catch((error) => {
        console.log(this.state.token);
        console.log(error.response);
      });
  };
  render() {
    var sectionStyle = {
      width: "100%",
      minHeight: "20rem",
      maxHeight: "fitContent",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${this.state.avatar})`,
      boxShadow: "inset 0 0 0 2000px rgba(2, 2, 2, 0.534)",
    };

    return (
      <div>
        <Navbar activeItem="profile" menuId="menu2" />
        <div
          style={sectionStyle}
          className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rowOne"
        >
          <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} proData">
            <a href="/editprofile" className="editP">
              {" "}
              <img width="30" height="30" src={Gear} />{" "}
              <p className="editPt">EditProfile</p>
            </a>

            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6 col-xs-12 topCol">
              <div className="imgContainer">
                <img className="Picture" src={this.state.avatar} />
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-7 col-sm-6 col-xs-12 nameAndDesContainer">
              <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                <div class="col-xl-12 ">
                  <div className="NameContainer">Zlatan Ibrahimovich</div>
                </div>
                <div class="col-xl-12">
                  <div className="DescriptionContainer">
                    Morghi ke Anjir Mikhore Nokesh Kaje
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-3 col-md-5 col-sm-12 col-xs-12"></div>
          </div>
        </div>
        <div className="container-fluid !direction !spacing Contain">
          <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rowtwo">
            <div className="col-md-8 col-sm-12  colone">
              <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} leftContain">
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} titlecomment">
                  <div class="col-12 col-sm-6-col-md-4 col-lg-3 col-xl-2">
                    Comments
                  </div>
                  <div class="col-0 col-sm-0-col-md-4 col-lg-6 col-xl-8"></div>
                  <div class="col-12 col-sm-6-col-md-4 col-lg-3 col-xl-2">
                    <RatingModal />
                  </div>
                </div>
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} ratingPosition">
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 profileRatingContainer">
                    <ProfileRatingCard />
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 profileRatingContainer">
                    <ProfileRatingCard />
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 profileRatingContainer">
                    <ProfileRatingCard />
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 profileRatingContainer">
                    <ProfileRatingCard />
                  </div>
                  <div class="col-0 col-sm-0 col-md-0 col-lg-0 col-xl-3 d-none d-xl-block profileRatingContainer"></div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 profileRatingContainer">
                    <ProfileRatingCard />
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 profileRatingContainer">
                    <ProfileRatingCard />
                  </div>
                  <div class="col-0 col-sm-0 col-md-0 col-lg-0 col-xl-3 d-none d-xl-block profileRatingContainer"></div>
                </div>
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} titlecomment">
                  <div class="col-12 col-sm-6-col-md-4 col-lg-3 col-xl-2">
                    Comments
                  </div>
                  <div class="col-0 col-sm-0-col-md-4 col-lg-6 col-xl-8"></div>
                  <div class="col-12 col-sm-6-col-md-4 col-lg-3 col-xl-2">
                    <CommentModals title="Comments" />
                  </div>
                </div>
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
              </div>
            </div>
            <div className="col-md-4 col-sm-12 coltwo">
              <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rightContain">
                <div className="FavoriteTitle">Albums</div>
                <Favorite />
                <Favorite />
                <Favorite />
                <Favorite />
                <Favorite />
                <ProfileModals title="Favorite Albums" />
              </div>
              <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rightContain">
                <div className="FavoriteTitle">Tracks</div>
                <Favorite />
                <Favorite />
                <Favorite />
                <Favorite />
                <Favorite />
                <ProfileModals title="Favorite Tracks" />
              </div>
              <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rightContain">
                <div className="FavoriteTitle">Artists</div>
                <Favorite />
                <Favorite />
                <Favorite />
                <Favorite />
                <Favorite />
                <ProfileModals title="Favorite Artists" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
