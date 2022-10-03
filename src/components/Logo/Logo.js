import React from 'react';

import cssClasses from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={cssClasses.Logo}>
            <h1 className={cssClasses.logoText}>Birthday Reminder</h1>
        </div>
    );
}

export default logo;