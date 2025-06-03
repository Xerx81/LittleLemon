import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Menu() {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        axios.get("https://littlelemonapi.pythonanywhere.com/restaurant/menu/items/")
            .then((response) => setMenuItems(response.data))
            .catch((error) => console.error(error));
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div>
                <h1>Menu</h1>
                <div class="column">
                    Loading Items...
                </div>
            </div>
        );
    }

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
