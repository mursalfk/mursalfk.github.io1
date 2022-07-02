import React from 'react'
import Images from '../Images.js'
import constants from '../constants.js'

export default function Achievements() {
    return (
        <section className="work py-5 px-4" id="certifications">
            <div className="py-3">
                <h5 className="text-uppercase font-os font-size-16 text-muted">certifications and</h5>
                <h1 className="text-uppercase font-staat font-size-34">Achievements</h1>
            </div>
            <div className="row text-center">
                {
                    constants.Achievements && constants.Achievements.map((item, index) => {
                        return (
                            <>
                                <div className="col-sm-2 pb-1">
                                    <img src={item.image} width="100" height="100" alt={item.title}
                                        className="img-fluid tilt" />
                                    <h4 className="text-uppercase font-os font-size-16 text-muted py-2">{item.title}</h4>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </section>
    )
}
