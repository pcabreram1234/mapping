import SearchMenu from "../components/SearchMenu";
import PopUpModal from "../components/PopUpModal";
import MapContainer from "../components/Map";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="home">
      <SearchMenu />
      <MapContainer />
      {/* <PopUpModal /> */}
    </div>
  );
};

export default Home;
