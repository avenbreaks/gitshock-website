import React from "react";
import {Link} from "gatsby";
import HeroVideoMov from "../videos/hero.mp4";
import HeroVideo from "../videos/hero.webm";
import HeroVideoPoster from "../videos/hero.png"
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
            <div className={'row pt-md-5 align-items-top'}>
                <div className={'col-12 col-md-6'}>
                    <img src={'/videos/hero.png'} alt={'Gitshock Finance'} className={'logo'} />
                    </div>
            </div>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-50 col-xl-50'}>
                        <h2 data-sal="fade"
                            data-sal-delay="200"
                            data-sal-duration="1000">The New Pioneer <br/>
                            Of Future Web3<br/>
                            Environment
                        </h2>

                        <div className={'text-box'} data-sal="fade"
                             data-sal-delay="400"
                             data-sal-duration="1000">
                            Gitshock is bringing EVM based chains<br/>
                            to the interoperable networks of the Cosmos ecosystem. Gitshock is aiming to involve any possible business to the network while providing easiness for the ecosystem.
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
