import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Arche de pierre', description: 'Arcade en pierre à l\'entrée d\'un manoir'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Mur extérieur', description: 'Tout le mur extérieur de cette maison a été construit en un temps record par notre équipe'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Colonnes de pierre', description: 'Colonnes de pierre à forte charge'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Plancher de pierre', description: 'Sol élégant avec un décor en pierre'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Mur porteur', description: 'Destiné à supporter la charpente et la structure des planchers d\'un bâtiment'},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'L\'ensemble du bâtiment', description: 'Murs, colonnes, planchers, tous par nous'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Pali - Service de travail de la pierre"
        const siteDescription = "Rock solid support for construction and stone"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
			<meta name="google-site-verification" content="I0URx50oskLftHTbomS-_9Y9QQXzcBeEIw-E85AI2WY" />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Qui sommes-nous?</h2>
                        </header>
                        <p>
                        Pali - Service de travail de la pierre, 
                        est une entreprise familiale qui s'efforce d'&ecirc;tre plus qu'une entreprise typique d'artisanat 
                        et de construction. Nous pouvons faire n'importe quel travail de taille, 
                        de la ma&ccedil;onnerie de murs de maison &agrave; la participation &agrave; de grands projets commerciaux.
                        </p>
                        <ul className="actions">
                            <li><a href="#recent-work" className="button">D&eacute;couvrez-nous</a></li>
                        </ul>
                    </section>

                    <section id="two" name="recent-work">
                        <h2>Travail R&eacute;cent</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#contact" className="button">Contact</a></li>
                        </ul>
                    </section>

                    <section id="three" name="contact">
                        <h2>Contact</h2>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form name="contact" method="POST" action="https://formspree.io/m93_vkacaj@yahoo.com">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Prenom" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                    <div className="row uniform">
                                        <ul className="actions">
                                            <li><input type="submit" value="Envoyer" /></li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Addresse</span></h3>
                                        Saint Étienne 4200<br />
                                        Lyon, France
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        +33 7 58 44 05 78 
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope"><span className="label">Email</span></h3>
                                        toni.uklala1@gmail.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
