import React from 'react'
import TextScrambler from 'react-scramble-text'
import constants from '../constants.js'

export default function Banner() {
    return (
        <section className="site-banner" id="home">
            <div className="banner-area text-center ">
                <div className="author  text-center ">
                    <div className="author-img  text-center"></div>
                    <div>
                        <h1>
                            <div className="title_loader">
                                <span>
                                    Mursal Furqan
                                </span>
                            </div>
                        </h1>

                        <h5 className="text-black font-size-15 text-center">
                            <TextScrambler
                                phrases={constants.scrambled_phrases}
                                speed={50}
                                pauseTime={1000}
                                delay={0}
                                scramble={true}
                            />
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    )
}
