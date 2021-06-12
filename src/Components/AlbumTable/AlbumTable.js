import React from "react";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";
import { Table, Image } from "semantic-ui-react";
import Cover from "./cover-dsotm.jpg";
import "./AlbumTable.css";

const StyledRating = withStyles({
  iconFilled: {
    color: "#d0e1f9",
  },
  iconHover: {
    color: "#d0e1f9",
  },
})(Rating);

const AlbumTable = (props) => (
  <Table id="Albumtable" unstackable inverted>
    <Table.Body>
      <div>
        <div className="row " id="AlbumH">
          <div className="col-sm-11 col-xs">
            <div className="row">
              <div className="col-sm-6 text atTitle">
                <h1 text>Latest Release</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ArtistsAlbumContainer">
        {props.albumsData.map((Album) => {
          return (
            <div>
              <div
                className="row AlbumRow"
                id="desktop"
                href="test"
                onClick="test"
              >
                <div class="container-fluid !direction !spacing boooogh">
                  <div className="row" id="AlbumRow2">
                    <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text">
                      {Album.release_date}
                    </div>
                    <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                      <Image src={Cover} rounded size="mini" />
                    </div>
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4   text">{Album.title}</div>
                    <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2  text">
                      <Rating
                        value={2}
                        precision={0.1}
                        size={"small"}
                        readOnly={true}
                      />
                    </div>
                    <div class="col-sm-4   text">{Album.Genres}</div>
                  </div>
                </div>
              </div>
              <div className="row AlbumRow" id="mobile" href="test">
                <div class="col-12">
                  <div className="row" id="AlbumRow2">
                    <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 txt">
                      {Album.ReleaseDate}
                    </div>
                    <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                      <Image src={Album.cover_image} rounded size="mini" />
                    </div>
                    <div class="col-7  col-sm-7 col-md-7 col-lg-7 col-xl-7">
                      <div className="AlbumText">{Album.AlbumName}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Table.Body>
  </Table>
);

export default AlbumTable;
