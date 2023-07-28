import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  // a ref is like a container to give yourself back the same dom element every single time
  const elRef = useRef(null);

  // we'll get the same div on every single rerender
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    // get the div we created in index.html
    const modalRoot = document.getElementById("modal");

    // attach the div we created as a ref to it
    modalRoot.appendChild(elRef.current);

    // basically this is how we get rid of the modal on close - takes the place of componentWillUnmount in a function component
    // whenever you return anything in an effect, it runs when the component will unmount
    // this is also how to remove event listeners, cancel a setTimeout, requesting animation frame, or canceling a setInterval
    // or if you have a react component wrapped in a jquery component, this is where you'd do any needed cleanup
    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  // div in the return is purely for styling purposes - not necessary to function - pass div and children into elRef.current
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
