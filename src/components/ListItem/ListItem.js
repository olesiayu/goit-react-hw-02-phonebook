import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ name, number, onClick }) => {
    return (    
            <li><p>{name}: {number}</p>
                <button type="button"
                    onClick={onClick}
                >Delete</button></li>
        )
}
        
    ListItem.propTypes = {
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,  
}

export default ListItem;