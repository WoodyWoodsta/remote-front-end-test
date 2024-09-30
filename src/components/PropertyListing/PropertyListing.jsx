import React from 'react';
import PropTypes from 'prop-types';

import PropertyCard, { PropertyPropType } from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = ({ properties }) => {
    return (
        <ul className="PropertyListing">
            {properties
                .map((property) => (
                    <li key={property.propertyUrl}>
                        <PropertyCard {...property} />
                    </li>
                ))}
        </ul>
    );
};

export default PropertyListing;
PropertyListing.propTypes = {
    properties: PropTypes.arrayOf(PropTypes.shape(PropertyPropType)),
}
