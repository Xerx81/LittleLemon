import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Menu() {
    const [menuItems, setMenuItems] = useState([]);
    
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/restaurant/menu/items/")
            .then((response) => setMenuItems(response.data))
            .catch((error) => console.error(error));
    }, []);
    return (
        <div>
            <h1>Menu</h1>
            <div class="column">
                {menuItems.map((item) => (
                    <p key={item.id}>
                        <Link to={`/menu/${item.id}`}>
                            <a>{item.title}</a>
                        </Link>
                        <span className="menu-price">${item.price}</span>
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Menu;
