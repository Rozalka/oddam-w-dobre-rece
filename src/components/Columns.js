import React from 'react'

function Columns() {
    return (
        <section className="three-columns">
            <div className="single-column">
                <h2 className="statistics">10</h2>
                <h3 className="statistic-header">oddanych worków</h3>
                <p className="statistic-details">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="single-column">
                <h2 className="statistics">5</h2>
                <h3 className="statistic-header">wspartych organizacji</h3>
                <p className="statistic-details">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="single-column">
                <h2 className="statistics">7</h2>
                <h3 className="statistic-header">zorganizowanych zbiórek</h3>
                <p className="statistic-details">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </section>
    )
}

export default Columns
