import RestaurentCard from "./RestaurentCard";
import restaurentList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">Search</div>
      <div className="restaurent-container">
        {listOfRestaurents.map((restaurent) => (
          <RestaurentCard
            restaurentData={restaurent}
            key={restaurent.data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;