import './SeasonDisplay.css';  // webpack takes the conents and stick into index.html
import React from 'react';

/* defautlt file to export the loagic to index.js
const SeasonDisplay = (props) => {
    return <div>SeasonDisplay</div>;

};

export default SeasonDisplay; */

//----------------------------------------------------------------------

/* const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    }
    else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'Winter' ? 'Its Cold!' : 'Its Hot';
    const icon = season === 'Winter' ? 'snowflake' : 'sun';
    return (
        <div>
            <i className={`massive icon ${icon}`}></i>
            <h1>{text}</h1>
            <i className={`massive icon ${icon}`}></i>
        </div>
    );
}; */

// Adding a config------------------------------------------------------------------------

const seasonConfig = {
    Summer: {
        text: "Its Hot",
        icon: 'sun'
    },
    Winter: {
        text: "Its COld",
        icon: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    }
    else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    /* const text = season === 'Winter' ? 'Its Cold!' : 'Its Hot';
    const icon = season === 'Winter' ? 'snowflake' : 'sun'; */
    const { text, icon } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}> {/* ClassName is updated DYnamically from season FOrmat : `${CLASSNAME}` */}
            <i className={`massive icon ${icon} left`}></i> {/* Massive icon class is defined in the External CSS. left is defined in custom css (SeasonDispaly.css) */}
            <h1>{text}</h1>
            <i className={`massive icon ${icon} right`}></i>
        </div>
    );
};

export default SeasonDisplay;