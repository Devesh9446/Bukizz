import React from "react";
import styles from "./TableViewer.module.css";
import Loader from "../Loader/Loader";

const TableViewer = ({ heading = [], children, loading = false, mainContainerStyle={} }) => {
  return (
    <div className={styles.mainConatiner} style={{...mainContainerStyle}}>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            {heading.map((elemlent, index) => {
              return <th key={index}>{elemlent}</th>;
            })}
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {loading ?
            <tr style={{ border: "none" }} >
              <td colSpan={heading.length} style={{ border: "none" }} >
                <Loader style={{ height: "50vh" }} />
              </td>
            </tr>
            : children}
        </tbody>
      </table>
    </div>
  );
};

export default TableViewer;
