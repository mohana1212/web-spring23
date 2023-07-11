import React from "react";
import User from "../../components/User";
const Input = ({ label, ...props }) => {
        return (
                <div className="input-container">
                        <label className="input-label">{label}</label>
                        <input className="input-field" {...props} />
                </div>
        );
};

export default Input;
