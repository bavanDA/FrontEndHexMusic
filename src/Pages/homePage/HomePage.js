import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import './HomePage.css';
import Nav from './Components/Navbar/Navbar'
import Item from "./Components/item/Item"



function HomePage() {
  
  
  const Album={
    title:'8 Mile',
    artist:'Eminem',
    rating:4.5,
    pic:'./item/eminem.jpg',
  }
  return (
    <div>
      <Nav></Nav>
      <div  className="container" >
        <div className="row slideContainer">
        <div><h1 className="titr">New Musics</h1></div>
          <div className="slideBar">
          <OwlCarousel className='d-none d-xl-block  owl-theme' items="6" nav autoplay onScroll loop margin={1}>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </OwlCarousel>
          <OwlCarousel className='d-none d-xl-none d-md-block owl-theme'  items="4" loop margin={1}>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </OwlCarousel>
          <OwlCarousel className='d-md-none owl-theme' items="3" loop margin={1}>
            <Item></Item>
          </OwlCarousel>
          </div>
        </div>
        <div className="row slideContainer">
        <div><h1 className="titr">Top10 Musics</h1></div>
          <div className="slideBar">
          <OwlCarousel className='d-none d-xl-block  owl-theme' items="6" nav autoplay onScroll loop margin={1}>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </OwlCarousel>
          <OwlCarousel className='d-none d-xl-none d-md-block owl-theme' items="4" loop margin={1}>
            <Item></Item>
          </OwlCarousel>
          <OwlCarousel className='d-md-none owl-theme' items="3" loop margin={1}>
            <Item></Item>
          </OwlCarousel>
          </div>
        </div>
        <div class="row slideContainer">
        <div><h1 class="titr">Top10 Albums</h1></div>
          <div className="slideBar">
          <OwlCarousel className='d-none d-xl-block  owl-theme' items="6" nav autoplay loop margin={1}>
            <Item></Item>
          </OwlCarousel>
          <OwlCarousel className='d-none d-xl-none d-md-block owl-theme' items="4" loop margin={1}>
            <Item></Item>
          </OwlCarousel>
          <OwlCarousel className='d-md-none owl-theme' items="3" loop margin={1}>
            <Item></Item>
          </OwlCarousel>
          </div>
        </div>
        <div class="row slideContainer">
        <div><h1 className="titr">Top10 Artists</h1></div>
          <div className="slideBar">
          <OwlCarousel className='d-none d-xl-block  owl-theme' items="6" nav autoplay loop margin={1}>
            <Item></Item>
          </OwlCarousel>
          <OwlCarousel className='d-none d-xl-none d-md-block owl-theme' items="4" loop margin={1}>
            <Item></Item>
          </OwlCarousel>
          <OwlCarousel className='d-md-none owl-theme' items="3" loop margin={1}>
            <Item></Item>
          </OwlCarousel>
          </div>
        </div>
      </div> 
      <div className="Foot">
        <div class="container-fluid !direction !spacing">
          <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
            <div class="col-md-4 col-sm-12">
              Provided by HexClan Team
            </div>
            <div class="col-md-4 col-sm-12">
              مطابق قوانین جمهوری اسلامی ایران 
            </div>
            <div class="col-md-4 col-sm-12">
              پیوند ها 
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default HomePage;
