import React from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';

const App = () => {
    const [properties, setProperties] = React.useState([]);

    React.useEffect(() => {
        async function fetchProperties() {
            const result = await (await fetch('http://localhost:3000/api/properties')).json();
            setProperties(result);
        }

        fetchProperties();
    }, []);

    return (
        <div className="App">
            <Header />
            <main>
                <SortAndFilter />
                <PropertyListing properties={properties} />
            </main>
        </div>
    );
};

export default App;
