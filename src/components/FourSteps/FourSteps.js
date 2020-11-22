import React from 'react';
import '../FourSteps/fourSteps.scss';

function FourSteps() {
    return (
        <section className="steps" id="about">
            <h2 className="steps-header">Wystarczą 4 proste kroki</h2>
            <div className="decor"></div>
            <div className="simple-steps">
                <div className="single-box">
                    <div className="icon icon1"></div>
                    <h4 className="single-box-header">Wybierz rzeczy</h4>
                    <div className="box-decor"></div>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="single-box">
                    <div className="icon icon2"></div>
                    <h4 className="single-box-header">Spakuj je</h4>
                    <div className="box-decor"></div>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="single-box">
                    <div className="icon icon3"></div><h4 className="single-box-header">Zdecyduj komu chcesz pomóc</h4>
                    <div className="box-decor"></div>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="single-box">
                    <div className="icon icon4"></div><h4 className="single-box-header">Zamów kuriera</h4>
                    <div className="box-decor"></div>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="four-footer">
                <button className="four-button">ODDAJ RZECZY</button>
            </div>
        </section>
    )
}

export default FourSteps
