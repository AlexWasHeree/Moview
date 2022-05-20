import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css'

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="moview-nav-content">
                    <h1>Moview</h1>
                    <a href="https://github.com/AlexWasHeree">
                        <div className='moview-contact-container'>
                            <GithubIcon />
                            <p className='moview-contact-github'>/AlexWasHeree</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;