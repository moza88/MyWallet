import React, { } from 'react';
import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'




function About() {

    return (
        <>
            <div className="about-one section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="service-img">
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-content m-t-50">
                                <h3>In Brief</h3>
                                <p>Founded in January of 2020, Tradix is a digital currency wallet and platform where
                                    merchants
                                    and consumers can transact with new digital currencies like bitcoin, ethereum, and
                                    litecoin.
                                    We're based in San Francisco, California.</p>
                                <p>Bitcoin is the world's most widely used alternative currency with a total market cap of
                                    over
                                    $100 billion. The bitcoin network is made up of thousands of computers run by
                                    individuals
                                    all over the world.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-ceo py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ceo-content">
                                <div className="media">
                                    <div className="media-body">
                                        <h3>Eric Benz</h3>
                                        <span>CEO of Tradix</span>
                                        <p className="mt-2">John Abraham has over 10 years of experience working in and around
                                            Financial Technology. He has delivered innovative SaaS systems for some of
                                            today's biggest institutions around payments, identity, and banking
                                            infrastructure. John Abraham has been in the Blockchain space since 2012 and is
                                            involved in a number of blockchain and fintech businesses both as an investor,
                                            board director, and founder.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-two section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="service-content my-5">
                                <h3>Working at Tradix</h3>
                                <p>Digital currencies are changing how we use and think about money. Tradix, the most
                                    trusted
                                    company in the space, is looking for you to join our rapidly growing team.</p>
                                <Link to={'#'} className="btn btn-primary">Read more</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;