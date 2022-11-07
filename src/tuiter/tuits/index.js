import React from "react";
import { useSelector } from "react-redux";
import TuitItem from "./tuit-item";

const TuitsList = () => {
  const postsArray = useSelector((state) => state.tuits);
  return (
    <ul className="list-group">
      {postsArray.map((tuit) => (
        <TuitItem key={tuit._id} tuit={tuit} />
      ))}
    </ul>
  );
};
export default TuitsList;
