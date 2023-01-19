import { FaHeart, FaRegHeart } from "react-icons/fa";

const Like = (prop) => {
  const { liked, onLike } = prop;
  return liked ? (
    <h6 onClick={onLike}>
      <FaHeart />
    </h6>
  ) : (
    <h6 onClick={onLike}>
      <FaRegHeart />
    </h6>
  );
};

export default Like;
