/* eslint-disable react/display-name */
import { forwardRef } from "react";

// eslint-disable-next-line react/prop-types
const Dialog = forwardRef(({ children, closeModal }, ref) => {
  return (
    <dialog ref={ref}>
      <h2>Info In here</h2>
      {children}
      <button onClick={closeModal}>Close</button>
    </dialog>
  );
});

export default Dialog;
