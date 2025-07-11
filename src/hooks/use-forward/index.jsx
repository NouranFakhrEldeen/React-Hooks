import Form from "./Form";
import Dialog from "./Dialog";
import { useRef, useEffect, useState } from "react";

export const ForwardExample = () => {
  const [name, setName] = useState("");
  const inputRef = useRef(null);         // removed <HTMLInputElement>
  const dialogRef = useRef(null);        // removed <HTMLDialogElement>

  function closeModal() {
    if (!dialogRef.current) return;
    dialogRef.current.close();
    setName("");
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (!dialogRef.current) return;
    dialogRef.current.showModal();
  }

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        ref={inputRef}
      />
      <Dialog closeModal={closeModal} ref={dialogRef}>
        <p>Hello, {name}!</p>
      </Dialog>
      <p>Your name is {name}</p>
    </>
  );
};
