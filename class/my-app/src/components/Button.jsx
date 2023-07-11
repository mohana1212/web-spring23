import React from "react";

const Button = ({ onClick, children, className = "", secondary = false }) => {
        const styles = `${
                secondary ? "bg-orange-500" : "bg-indigo-500"
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
