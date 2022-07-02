import React from 'react'

export default function Sidebar() {
    return (
        <header id="header">
            <div className="row m-0 ">
                <div className="col-3 bgcolor-black">
                    <nav className="primary-nav navbar-expand-md ">
                        <div className="site-title text-center text-light py-5">
                            <span className="navbar-brand font-staat font-size-40">
                                <span className='header_title'>
                                    MURSAL
                                </span>
                            </span>

                            {/* <!-- <p className="description text-uppercase font-os">Mursal Furqan</p> --> */}
                        </div>
                        <div className="d-flex flex-column ">
                            <a href="#home"
                                className="nav-item nav-link text-white-50 font-os font-size-16 active">Intro</a>
                            <a href="#about_me"
                                className="nav-item nav-link text-white-50 font-os font-size-16 active">About</a>
                            <a href="#skills"
                                className="nav-item nav-link text-white-50 font-os font-size-16 active">Skills</a>
                            <a href="#education"
                                className="nav-item nav-link text-white-50 font-os font-size-16 active">Education</a>
                            <a href="#experience"
                                className="nav-item nav-link text-white-50 font-os font-size-16 active">Experience</a>
                            <a href="projects.html"
                                className="nav-item nav-link text-white-50 font-os font-size-16 active">Projects</a>

                            {/* <!-- <a href="https://mursalfk.pythonanywhere.com/" className="nav-item nav-link text-white-50 font-os font-size-16 active" target="_blank_">ATM Project</a> --> */}

                            <a href="#certifications"
                                className="nav-item nav-link text-white-50 font-os font-size-16 active">Certifications</a>
                            <a href="#publications"
                                className="nav-item nav-link text-white-50 font-os font-size-16 active">Publications</a>
                            <a href="#footer" className="nav-item nav-link text-white-50 font-os font-size-16 active">Reach
                                Me</a>
                        </div>
                    </nav>
                </div>
            </div>
            <button className="toggle-button">
                <span className="fas fa-bars fa-2x"></span>
            </button>
        </header>
    )
}
