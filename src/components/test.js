import React from "react";
import {Link} from "gatsby";
import {useState, useEffect} from "react";

const menu = require('../contents/urls.json');

const HeroSection = () => {
    const [isSafari, setSafari] = useState(false);
    useEffect(() => {
    setSafari(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)));
    });
    return (
        <section className={'hero-section'}>
            <div className={'video-container'}>
            </div>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-12 col-xl-5'}>
                        <h1 data-sal="fade"
                            data-sal-delay="200"
                            data-sal-duration="1000">Smart <br/>
                            Contracts <br/>
                            Evolved
                        </h1>

                        <div className={'text-box'} data-sal="fade"
                             data-sal-delay="400"
                             data-sal-duration="1000">
                            Use & create interoperable applications on Juno. <br/>
                            A decentralized, public, permission-less network for cross-chain smart contracts.
                        </div>

                        <div className={'row'} data-sal="fade"
                             data-sal-delay="600"
                             data-sal-duration="1000">
                            <div className={'col-auto'}>
                                <a href={menu["get-started"]}>
                                    <button type={'button'}>Get Started</button>
                                </a>
                            </div>
                            <div className={'col-auto'}>
                                <Link to={menu.ecosystem}>
                                    <div className={'link'}><i className={'icon-arrow-right'}></i> Ecosystem </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;