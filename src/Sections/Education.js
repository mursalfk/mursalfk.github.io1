import React from 'react'

export default function Education() {
    return (
        <section className="services-area px-4 py-5" id="education">
            <div className="do py-5">
                <h5 className="text-uppercase font-os font-size-16 text-muted">Where have I</h5>
                <h1 className="text-uppercase font-staat font-size-34">Studied</h1>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-6 mb-4 text-center">
                    <div className="panel border p-4">
                        <span className="icon text-secondary"><i className="fas fa-university fa-3x sk"></i></span>
                        <h4 className="font-ram py-4">Masters of Science in Artificial Intelligence</h4>
                        <p className="font-ram font-size-16 text-black-50">
                            NED University of Engineering and Technology, Karachi <br />
                            Batch of Spring - 2021
                        </p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-4 text-center">
                    <div className="panel border p-4">
                        <span className="icon text-secondary"><i className="fas fa-brain fa-3x sk"></i></span>
                        <h4 className="font-ram py-4">Artificial Intelligence</h4>
                        <p className="font-ram font-size-16 text-black-50">
                            Presidential Initiative for Artificial Intelligence & Computing
                            <i><b>(PIAIC)</b></i> <br />
                            Batch - I
                        </p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-4 text-center">
                    <div className="panel border p-4">
                        <span className="icon text-secondary"><i className="fas fa-university fa-3x sk"></i></span>
                        <h4 className="font-ram py-4">Computer System Engineering</h4>
                        <p className="font-ram font-size-16 text-black-50">
                            Mehran University of Engineering and Technology, Jamshoro <br />
                            Batch of Fall-2016
                        </p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-4 text-center">
                    <div className="panel border p-4">
                        <span className="icon text-secondary"><i className="far fa-lightbulb fa-3x sk"></i></span>
                        <h4 className="font-ram py-4">Intermediate</h4>
                        <p className="font-ram font-size-16 text-black-50">
                            Cadet College Petaro <br />
                            Batch of 2011
                        </p>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6 mb-4 text-center">
                    <div className="panel border p-4">
                        <span className="icon text-secondary"><i className="fas fa-school fa-3x sk"></i></span>
                        <h4 className="font-ram py-4">High School</h4>
                        <p className="font-ram font-size-16 text-black-50">
                            St. Bonaventure's High School, Qasimabad
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
