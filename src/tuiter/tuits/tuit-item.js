import React from "react";

const TuitItem = ({
  post = {
    _id: 234,
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title:
      "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    image: "spacex.jpg",
    liked: true,
    replies: 123,
    retuits: 432,
    likes: 2345,
    handle: "@spacex",
    tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-auto">
          <img
            className="rounded-circle"
            height={48}
            src={`/images/${post.image}`}
            alt={post.image}
          />
        </div>
        <div className="col">
          <div>
            <span className="fw-bolder">{post.userName}</span>
            <i class="bi bi-patch-check-fill text-primary px-2"></i>
            {post.handle}
            <i class="bi bi-dot"></i>
            {post.time}
          </div>
          <div>{post.tuit}</div>
          <div className="row">
            <div className="col">
              <i class="bi bi-chat pe-2"></i>
              {post.replies}
            </div>
            <div className="col">
              <i class="bi bi-arrow-repeat pe-2"></i>
              {post.retuits}
            </div>
            <div className="col">
              {post.liked ? (
                <i class="bi bi-heart-fill pe-2 text-danger"></i>
              ) : (
                <i class="bi bi-heart pe-2"></i>
              )}
              {post.likes}
            </div>
            <div className="col">
              <i class="bi bi-share"></i>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
