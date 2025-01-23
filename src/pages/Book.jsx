import { useState } from "react";
import axios from "axios";

function Book() {
    const [formData, setFormData] = useState({
        name: '',
        no_of_guests: '',
        booking_date: '',
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/restaurant/booking/tables/', formData);
            console.log("Booking created:", response.data);
            alert("Booking Successful!");
            setFormData({
                name: '',
                no_of_guests: '',
                booking_date: '',
            });
        }
        catch (error) {
            console.error('Error creating booking:', error);
            alert("Failed to create booking. Please try again.");
        }
    };

    return (
        <section>
            <article>
                <h1>Make a reservation</h1>
                <div class="row">
                    <div class="column">
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name:
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            </label>
                            <br></br>
                            <label>
                                Number of Guests:
                                <input type="number" name="no_of_guests" value={formData.no_of_guests} onChange={handleChange} required />
                            </label>
                            <br></br>
                            <label>
                                Booking Date:
                                <input type="datetime-local" name="booking_date" value={formData.booking_date} onChange={handleChange} required />
                            </label>
                            <br></br>
                            <input type="submit" id="button" />
                        </form>
                    </div>
                    <div class="column">
                        <div class="videowrap">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11898.289517452584!2d-87.60853049433447!3d41.79442860243028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2912ce6f7027%3A0xc0cfb5545d4a37b2!2sHyde%20Park%2C%20Chicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2spt!4v1662384760663!5m2!1sen!2spt"
                                width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Book;
