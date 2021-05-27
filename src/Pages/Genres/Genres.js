import axios from "axios";
import React, { Component } from "react";
import Navbar from "../../Components/Navbar/navbar";
import GenreCards from "./GenreCards/GenreCards";
import "./Genres.css";

class Genres extends Component {
  state = {
    GenreTitles: [],
    activePage: 1,
    changePage: false,
    loading: true,
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get(
        `http://127.0.0.1:8000/api/page/GenreAPIView/?limit=10&page=${this.state.activePage}`
      )
      .then((res) => {
        console.log(res.data);

        this.setState({ GenreTitles: res.data.results, loading: false });
      });
  };

  render() {
    return (
      <div>
        <Navbar activeItem="Genres" menuId="menu2" />
        <div className="pgBdy">
          <div className="container-fluid !direction !spacing cardsPosition">
            <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
              {this.state.GenreTitles.map((genres) => {
                return (
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                    <GenreCards genre={genres} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Genres;
