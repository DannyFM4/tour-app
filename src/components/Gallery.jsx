import React, {useEffect, useState} from 'react';
import TourCard from './TourCard';

// Gallery is responsible for fetching tours and rendering the list

const Gallery = ({tours, setTours, onRemove}) => {
    // local state to manage loading and error
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // creates a function to fetch tours from the API

    const fetchTours = async () => {
        try {
            const response = await fetch('https://course-api.com/react-tours-project');
            const data = await response.json(); // Extract JSON data from the response
            // Map the API data to only the field we need

            const trimmed = data.map((tour => ({
                id: tour.id,
                name: tour.name,
                info: tour.info,
                price: tour.price,
                image: tour.image
            })));
            setTours(trimmed);
            setLoading(false);
    } catch (error) {
            setError(true); // if fetch fails, it will show the error
            setLoading(false); // set loading to false
        }
    };

    // Run fetchTours when the component mounts
    useEffect(() => {
        fetchTours();
    }, []);

    // Render loading state
    if (loading) {
        return <h2>Loading...</h2>;
    };
    // Render error state
    if (error) {
        return <h2>Something went wrong...</h2>;
    };
    // Render if no tours are available
    if (tours.length === 0) {
        return (
            <>
                <h2>No tours left</h2>
                <button onClick={fetchTours}>Refresh</button>
            </>
        );
    };

    // Render the list of tours
    return (
        <section className="tours-list">
            {tours.map((tour) => {
                return <TourCard key={tour.id} {...tour} onRemove={onRemove} />;
            })}
        </section>
    );

};

export default Gallery;