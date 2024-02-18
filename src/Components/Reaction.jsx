import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BASE_ENDPOINT } from "../Utility/constants";
import { putData } from "../Api/putData";
import { useParams } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Reaction = ({ post }) => {
  let { id } = useParams();
  const [reactionCount, setReactionCount] = useState(post.reactions || 0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setReactionCount(post.reactions || 0);
  }, [post.reactions]);

  const handleReactionClick = async () => {
    try {
      const newReactionCount = isActive ? reactionCount - 1 : reactionCount + 1;
      await putData(`${BASE_ENDPOINT}/${id}`, { reactions: newReactionCount });

      setReactionCount(newReactionCount);
      setIsActive(!isActive);
    } catch (error) {
      alert("Error updating reaction: " + error.message);
    }
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faHeart}
        size="lg"
        className={`me-2 cursor text-${isActive ? "danger" : "primary"}`}
        onClick={handleReactionClick}
      />
      <span className="text-dark">
        {reactionCount === 1
          ? `${reactionCount} reaction`
          : `${reactionCount} reactions`}
      </span>
    </div>
  );
};
