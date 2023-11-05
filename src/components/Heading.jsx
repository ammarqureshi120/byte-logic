import React from "react";

// Styles
import styles from "../styles/heading.module.scss";

const Heading = ({ firstCharacter, lastCharacter }) => {
  return (
    <h1 className={styles.heading}>
      <span>{firstCharacter}</span> {lastCharacter}
    </h1>
  );
};

export default Heading;
