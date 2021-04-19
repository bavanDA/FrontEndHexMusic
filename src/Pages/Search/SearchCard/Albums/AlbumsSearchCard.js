import React from "react";
import "./AlbumsSearchCard.css";
import Kida from "./Kida.jpg"


function AlbumsSearchCard(props){
    return(
        <div className="CardBody">
            <div className="container-fluid !direction !spacing">
                <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                    <div className="col-md-2 col-sm-12 imageContainer">
                        <img width="130" height="130"  src={Kida}/>
                    </div>
                    <div className="col-md-10 col-sm-12  textContainer">
                        <h1>Kid_A</h1>
                        <h3>Radio Head</h3>
                        <h4>2000</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlbumsSearchCard;