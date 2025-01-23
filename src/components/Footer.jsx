import footer_logo from '../assets/img/logo_footer.png';

function Footer() {
    return (
        <footer>
            <article>
                <img src={footer_logo} alt='LittleLemon Logo'/>
            </article>
            <article>
                <p>Copyright Little Lemon</p> 
            </article>
        </footer>
    );
}

export default Footer;
