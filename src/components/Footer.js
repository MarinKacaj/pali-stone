import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="#contact" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Pali Stone Work Service</li><li>Design: <a href="http://html5up.net">HTML5 Up/Strata</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
