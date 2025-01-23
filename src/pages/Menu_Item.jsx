import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function MenuItem() {
    const { itemId } = useParams();
    const [item, setItem] = useState([]);
    const menuItemImage = new URL(`../assets/img/menu_items/${item.title}.jpg`, import.meta.url).href;

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/restaurant/menu/items/${itemId}`)
            .then((response) => setItem(response.data))
            .catch((error) => console.error(error));
    }, []);
    return (
        <section>
            <article>
                <h1>Menu item</h1>
                <span>
                    <Link to="/"><a>Home</a></Link>/
                    <Link to="/menu"><a>Menu</a></Link>/
                </span>
                <div class="row">
                    <div class="column">
                        <h2>
                            {item.title}
                        </h2>
                        <p>
                            {item.menu_item_description}
                        </p>
                        <p>
                            Price: ${item.price}
                        </p>
                    </div>
                    <div class="column">
                        <img className="menu-item-img" src={menuItemImage} alt={item.title}/>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default MenuItem;
