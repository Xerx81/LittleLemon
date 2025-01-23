import { Link } from 'react-router-dom';
import grill from '../assets/img/Grill.jpg';
import salad from '../assets/img/salad.jpg';
import head_chef from '../assets/img/head_chef.jpg';

function Home() {
    return (
        <div>
            <section>
                <article id="hero">
                    <h1 class="heading_shadow">SPECIAL OFFER</h1>
                    <p>
                        30% Off This Weekend 
                    </p>
                    <Link to="/book"><a class="cta"> Book now </a></Link>
                </article>
            </section>
            <section>
                <article>
                    <h2>Our New Menu</h2>
                    <img src={ grill } alt="Grill"/> 
                    <p>
                        Our menu consists of 12-15 seasonal items based on Italian, Greek, and Turkish culture.
                    </p>
                    <p>
                        <Link to="/menu"><a>See our new menu</a></Link>
                    </p>
                </article>
                <article>
                    <h2>Book a table</h2>
                    <img src={ salad } alt="Salad"/>
                    <p>
                        Reserve your table for an Italian, Greek, and Turkish dining experience.
                    </p>
                    <p>
                        <Link to="/book"><a href="/book">Book your table now</a></Link>
                    </p>
                </article>
                <article>
                    <h2>Opening Hours</h2>
                    <img src={ head_chef } />
                    <p>
                        The Little Lemon Restaurant is open 7 days a week, except for public holidays. 
                    </p>
                    <ul>
                        <li>Mon - Fri: 2pm - 10pm</li>
                        <li>Sat: 2pm - 11pm</li>
                        <li>Sun: 2pm - 9pm</li>
                    </ul>
                </article>
            </section>
        </div>
    );
}

export default Home;
