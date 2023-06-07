import React from "react";

import styles from "./button.module.scss";

const Button = React.forwardRef((props, ref) => {
  return (
    <div
      onClick={() => props.level ? props.handleClick(props.level) : props.handleClick()}
      ref={ref}
      className={`${styles.btn} ${styles[props.color]} ${styles[props.size]}`}
      role="button"
    >
      {props.children}
    </div>
  );
});
Button.displayName = "Button"
export default Button;
