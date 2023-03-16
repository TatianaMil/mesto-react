import React from "react"
import headerLogo from "../images/logo.svg"

function Header() {
    return (
        //add marking up header
        <div>
            <header className="header">
                <img src={headerLogo} alt="логотип страницы место" className="header__logo" />
            </header>
        </div>
    )
}

export default Header