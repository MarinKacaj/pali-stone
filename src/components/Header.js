import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I am Max Pali</strong>, a passionate<br />
                    stone mason with a long experience in an international environment<br />
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
