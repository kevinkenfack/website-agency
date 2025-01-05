import React from 'react'

const HeroBusiness = ({ data }) => {
    return (
        <div className="bg-image parallax" style={{ backgroundImage: `url(${data.backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center 0px' }}>
            <div className="section-spacing-xl bg-black-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-10 offset-xl-1">
                            <h1 className="display-1 fw-semi-bold uppercase display-xl">
                                <span className="d-block">{data.text1}</span>
                                <span className="d-block font-family-poppins fw-bold stroke-text text-center">{data.text2}</span>
                                <span className="d-block text-end">{data.text3}</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBusiness