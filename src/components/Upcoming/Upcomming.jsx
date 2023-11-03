import React from 'react'

const Upcoming = ({items}) => {
    return (
        <>
            <section className="upcome">
                <div className="container">
                    <div className="heading flexSB">
                        <h1>{Title}</h1>
                        <Link to='/'>View All</Link>
                    </div>
                    <div className="content">
                        {items.map((item) => (
                            <Ucard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Upcoming