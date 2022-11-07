import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";

const TuitItem = ({
  tuit = {
    _id: 234,
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title:
      "DEFAULT TUIT. 100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    image: "spacex.jpg",
    liked: true,
    replies: 123,
    retuits: 432,
    likes: 2345,
    handle: "@spacex",
    tuit: "DEFAULT TUIT. You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-auto">
          <img
            className="float-end rounded-circle"
            width={50}
            src={`/images/${tuit.image}`}
            alt={tuit.image}
          />
        </div>
        <div className="col-10">
          <div>
            <i
              className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}
            ></i>
            <span className="fw-bolder">{tuit.userName}</span>
            <i className="bi bi-patch-check-fill text-primary px-2"></i>
            {tuit.handle}
            <i className="bi bi-dot"></i>
            {tuit.time}
          </div>
          <div>{tuit.tuit}</div>
          <div className="row">
            <div className="col">
              <i className="bi bi-chat pe-2"></i>
              {tuit.replies}
            </div>
            <div className="col">
              <i className="bi bi-arrow-repeat pe-2"></i>
              {tuit.retuits}
            </div>
            <div className="col">
              {tuit.liked ? (
                <i className="bi bi-heart-fill pe-2 text-danger"></i>
              ) : (
                <i className="bi bi-heart pe-2"></i>
              )}
              {tuit.likes}
            </div>
            <div className="col">
              <i className="bi bi-share"></i>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
