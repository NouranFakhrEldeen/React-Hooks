import { useEffect } from "react";
import PropTypes from "prop-types";

function Child({ returnComment }) {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);

  return <div>{returnComment("Hamada")}</div>;
}
Child.propTypes = {
  returnComment: PropTypes.func.isRequired,
};

export default Child;