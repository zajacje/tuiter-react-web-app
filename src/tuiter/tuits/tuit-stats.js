const TuitStats = ({ tuit }) => {
  return (
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
  );
};
export default TuitStats;
