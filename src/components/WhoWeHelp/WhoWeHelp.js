import React from 'react';
import '../WhoWeHelp/whoWeHelp.scss';

function WhoWeHelp() {
    return (
        <section className="who-help">
        <h2 className="who-help-title">Komu pomagamy?</h2>
        <div className="decor"></div>
        <div className="who-help-info">
            <button className="who-help-btn">Fundacjom</button>
            <button className="who-help-btn">Organizacjom pozarządowym</button>
            <button className="who-help-btn">Lokalnym zbiórkom</button>
        </div>
        <div className="who-help-description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</div>
        <div className="who-help-list"></div>
        <div className="who-help-pagination"></div>
    </section>
    )
}

export default WhoWeHelp
