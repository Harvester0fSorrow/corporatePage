import React from "react";

import './footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            © The Big Lisowski {new Date().getFullYear()}
        </div>
    );
}

export default Footer
