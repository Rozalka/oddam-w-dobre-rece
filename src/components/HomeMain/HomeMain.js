import React from 'react';

function HomeMain() {
    return (
        <section className="container-main">
            <div className="main-info">
                <div className="main-info-header">
                    <h2>Zacznij pomagać!</h2>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                </div>
                <div className="decor"></div>
                <div className="main-info-btns">
                    <button>oddaj rzeczy</button>
                    <button>zorganizuj zbiórkę</button>
                </div>
            </div>
        </section>
    )
}

export default HomeMain;