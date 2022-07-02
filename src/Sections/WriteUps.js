import React, { useEffect } from 'react'
import { useState } from 'react';

export default function WriteUps() {
    const [writeUps, setWriteUps] = useState([]);
    useEffect(() => {
        // Function to fetch all articles from Dev.to API
        async function fetchArticles() {
            const response = await fetch(
                'https://dev.to/api/articles?username=mursalfk'
            );
            const data = await response.json();
            data?.map((article) => {
                const needed_data = {
                    title: article.title,
                    description: article.description,
                    url: article.url,
                    image: article.social_image,
                    date: article.published_at,
                    tags: article.tag_list,
                }
                setWriteUps(prevState => [...prevState, needed_data])
            })
        }
        fetchArticles();
    }, [])
    return (
        <section className="news py-5 px-4 bg-light" id="publications">
            <div className="py-3">
                <h5 className="text-uppercase font-os font-size-16 text-muted">Blogs &</h5>
                <h1 className="text-uppercase font-staat font-size-34">Publications</h1>
            </div>
            <div className="row">
                {writeUps?.map((writeUp, index) => {
                    return (
                        <div className="col-md-4" key={index}>
                            <div className="card mb-4">
                                <img src={writeUp.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="font-ram font-size-16 text-black-50">Technical Blog</p>
                                    {/* Show Tags */}
                                    <div className="d-flex flex-wrap">
                                        {writeUp.tags.map((tag, index) => {
                                            return (
                                                // 
                                                <span className="badge font-size-8 badge-pill badge-secondary mr-1 mb-1" key={index}>
                                                    #{tag}
                                                </span>
                                            )
                                        }
                                        )}
                                    </div>
                                    <h5 className="card-title">{writeUp.title}</h5>
                                    <p className="card-text">{writeUp.description}</p>
                                    <a target="_blank" rel="noopener" href={writeUp.url} className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    )
                })}

                {/* <div className="col-sm-4 my-3">
                    <div className="card border-0">
                        <a href="https://ieeexplore.ieee.org/document/8673426" rel="noreferrer" target="_blank">
                            <img src="src\assets\news\01.jpg" alt="news1" className="card-img-top" />
                        </a>
                        <div className="card-body">
                            <p className="font-ram font-size-16 text-black-50">Research Paper</p>
                            <b className="text-uppercase text-dark">Industrial Robotic Claw for Cottage
                                Industries</b>
                            <p className="cart-text text-black-50 text-secondary">
                                International Conference of Mathematics, Engineeering and Technology (iCoMET)
                                2019 <br />
                                <i>Sukkur IBA University, Sukkur, Pakistan</i>
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}
