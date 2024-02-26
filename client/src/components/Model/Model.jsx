import React, { useRef } from "react";
import useOnClickOutside from "../../Helper/useOnClickOutside";
import crossIcon from '../../assets/images/cross.svg'
import styles from "./model.module.css";
const Model = ({ setShowModel = () => { }, children = <></>, title = "", width = "", outSideClickClosed = true, showCross=true }) => {
    const modalRef = useRef(null);
    useOnClickOutside(modalRef, () => {
        if (outSideClickClosed) {
            setShowModel(false);
        }
    })

    return (
        <div className={styles.mainContainer} >
            <div className={styles.modelBox}
                ref={modalRef}
                style={{ width: width }}
            >
                <div className={styles.headingBox}>
                    <div>

                        <h3>{title}</h3>
                    </div>
                    {showCross && <div className={styles.crossIconBox}>
                        <img src={crossIcon} alt="crossIcon" onClick={(e) => {
                            e.stopPropagation();
                            setShowModel(false)
                        }} />
                    </div>}
                </div>
                {children}
            </div>

        </div>
    );
};

export default Model;
