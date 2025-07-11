import { forwardRef } from "react";

// eslint-disable-next-line react/prop-types, react/display-name
const Form = forwardRef(({ handleSubmit, name, setName }, ref) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        ref={ref}
        name="name"
        id="name"
        value={name}
        onInput={(e) => setName(e.currentTarget.value)}
      />
      <input type="submit" />
    </form>
  );
});

export default Form;
