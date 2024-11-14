import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResult from "./SearchResult";


const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>72 stays . 27 August to 30 August . 2 guest</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More Filters</Button>
        </div>
        <SearchResult img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
        star={4.73}
        price="R1450/ night"
        total="R2500/ total"
        /> 
        <SearchResult img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="The Blue Room In London"
        description="2 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Washing Machine"
        star={4.23}
        price="R1200/ night"
        total="R8862.65/ total"
        /> 
        <SearchResult img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
        star={3.85}
        price="R1661.75/ night"
        total="R12 001.50/ total"
        /> 
        <SearchResult img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="30 mins to Braam Street, Johannesburg"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
        star={4.1}
        price="R1036.95/ night"
        total="R6033.16/ total"
        /> 
        <SearchResult img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of Johannesburg"
        title="Joburg Studio Apartments"
        description="3 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
        star={3.8}
        price="R697.58/ night"
        total="R3902.70/ total"
        /> 
        <SearchResult img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="Independant luxury studio apartment"
        description="2 guest . 3 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
        star={3.85}
        price="R754.15/ night"
        total="R2960.02/ total"
        /> 
    </div>
  );
};

export default SearchPage;
