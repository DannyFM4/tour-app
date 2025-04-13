import React, {useState} from 'react';
import Gallery from './components/Gallery';


// Root component of the app

function App() {
  // Global state to hold the list of tours
  const [tours, setTours] = useState([]);

  // Function to remove a tour from the list by its id
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      <h1>Our Tours</h1>
      {/* Pass tours and removeTour function as props to Gallery */}
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
}

// Export the App component as the default export
export default App;
