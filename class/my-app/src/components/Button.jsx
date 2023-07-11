import React from "react";

const Button = ({ onClick, children, className = "", secondary = false }) => {
        const styles = `${
                secondary ? "bg-orange-400" : "bg-indigo-400"
        } text-white rounded-md p-1 ${className}`;

        return (
                // <button  {...otherProps}>
                //         {children}
                // </button>

                <button className={styles} onClick={onClick}>
                        {children}
                </button>
        );
};

export default Button;
