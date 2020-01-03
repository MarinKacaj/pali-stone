import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/photo.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <img src={avatar} alt="" />
                    <h1><strong>Je suis Toni Pali</strong>, un passionn&eacute;<br />
                        tailleur de pierre avec une longue exp&eacute;rience international<br />
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
