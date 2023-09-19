import { Search } from "@material-ui/icons";
import "../topbar/topbar.css";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo"> Pokemon API </span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Name ?" type="text" onChange={(event)=>{event.target.value}} className="searchInput" />
          <button className="button">Search</button>
        </div>
      </div>
      <div className="topbarRight">
      </div>
    </div>
  );
};

export default Topbar;