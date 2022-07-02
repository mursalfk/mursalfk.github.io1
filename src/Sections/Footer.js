import React from 'react'

export default function Footer() {
    return (
        <footer id="footer" className="pt-5 px-3">
            <div id="contact_us">
                <div className="py-3 px-2">
                    <h5 className="text-uppercase font-os font-size-16 text-muted">Contact details</h5>
                    <h1 className="text-uppercase font-staat font-size-34">Reach Me</h1>
                </div>
                <div className="row py-5">
                    <div className="col-sm-6">
                        <h6 className="text-uppercase font-ram font-size-16 text-dark">Mursal Furqan Kumbhar</h6>
                        <p className="font-ram w-50 font-size-12 text-black-50">
                            <b>31 A</b><br />
                            <b>Kalhora Colony</b><br />
                            <b><i>Hyderabad Pakistan</i></b>
                        </p>
                    </div>
                </div>
                <div className="row bg-light py-5">
                    <div className="col-sm-4 my-5 text-center">
                        <h6 className="font-ram font-size-16 text-black-50">&copy;2022 Mursal Furqan. All rights
                            reserved</h6>
                    </div>
                    <div className="col-sm-4 my-4 text-center">
                        <div className="footer-title">
                            <a href="https://www.github.com/mursalfk" rel="noreferrer" target="_blank"
                                className="navbar-brand font-staat font-size-40 text-dark">MURSAl</a>
                            <p className="description font-os font-size-16 text-black-50 text-uppercase">Mursal
                                Furqan Kumbhar</p>
                        </div>
                    </div>
                    <div className="col-sm-4 my-5 text-center">
                        <a href="https://www.facebook.com/mursal.furqan" rel="noreferrer" target="_blank"><span className="mr-3"><i
                            className="fab fa-facebook-f"></i></span></a>
                        <a href="https://twitter.com/mursalfurqan" rel="noreferrer" target="_blank"><span className="mr-3"><i
                            className="fab fa-twitter"></i></span></a>
                        <a href="https://www.instagram.com/mursalfk/" rel="noreferrer" target="_blank"><span className="mr-3"><i
                            className="fab fa-instagram"></i></span></a>
                        <a href="https://www.linkedin.com/in/mursalfurqan/" rel="noreferrer" target="_blank"><span
                            className="mr-3"><i className="fab fa-linkedin"></i></span></a>
                        <a href="https://www.github.com/mursalfk/" rel="noreferrer" target="_blank"><span className="mr-3"><i
                            className="fab fa-github"></i></span></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
