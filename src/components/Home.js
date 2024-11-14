import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";
import { listListing } from "../actions/listingAction";

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector((state) => state.listingList);
  const { loading, error, listings } = listingList;

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="home_section">
          {listings.map((listing) => (
            <Card
              src={listing.img}
              title={listing.title}
              description={listing.description}
              price={listing.price}
            />
          ))}
        </div>
      )}
      {/* <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-816419007215609793/original/16045dda-7f5a-4100-9d45-8c74e17e315b.jpeg?im_w=960"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/SeoLandingPage/PropertyType/original/1e465805-b4b5-49ab-8604-b5e8bec72fee.jpg?im_w=480"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-20627068/original/1a0730d8-6ad4-4b84-9db9-81a1c67d8b00.jpeg?im_w=960"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div> */}
      {/* <div className="home_section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="Online Experiences"
          description="Superhost with a stunning view of the beachside in Sunnny Bournemouth"
          price="R1500/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup4.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse."
          price="R1899/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedrrom apartment"
          description="Superhost with great amenities and a fabulous shopping complex nearby"
          price="R1250/night"
        />
      </div> */}
    </div>
  );
};

export default Home;
