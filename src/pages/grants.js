import * as React from "react"
import Layout from "../components/layout";
import EcosystemVideoMov from "../videos/ecosystem-small.mp4";
import EcosystemVideo from "../videos/ecosystem-small.webm";
import EcosystemPoster from "../videos/ecosystem.png";
import EcosystemImage from "../videos/flow.png";
import EcosystemImagePoster from "../videos/flow.png";
import {useState, useEffect} from "react";

const menu = require('../contents/urls.json');

const GrantsPage = () => {
    const [isSafari, setSafari] = useState(false)
    useEffect(() => {
        setSafari(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)));
    });
    return (
        <div className={'ecosystem-page'}>
            <Layout>
                <section className={'hero-section'}>
                    <div className={'container-grants'}>
                        <div className={'video-container'}>
                            <div className={'video-wrapper'}>
                                <div className={'video-bg'}/>
                                <video autoPlay={true} loop={true} preload={'none'} playsInline={true} muted={true} poster={EcosystemImagePoster}>
                                    {isSafari &&
                                        <source src={EcosystemImage} type='video/mp4;codecs="hvc1"'/>
                                    }
                                    {!isSafari &&
                                        <source src={EcosystemImage} type="video/webm" />
                                    }
                                </video>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-12 col-sm-30 col-xl-15'}>
                                <h1 data-sal="fade"
                                    data-sal-delay="200"
                                    data-sal-duration="1000">What is <br/>
                                    Gitshøck Finance
                                </h1>

                                <div className={'text-box'} data-sal="fade"
                                     data-sal-delay="400"
                                     data-sal-duration="1000">
                                    Gitshøck Finance is a blockchain project created using Cosmos and Ethereum Virtual Machine which aims to provide a suitable network where developers can build on with affordale fees and fast transaction.  
                                </div>
                                <div className={'text-box'} data-sal="fade"
                                     data-sal-delay="400"
                                     data-sal-duration="1000">
                                    The team intends to build their own native projects on the network such as token builder, blockchain builder, Gitshøck Swap, Gitshøck Wallet, and will allow everyone to build their own projects, govern, operate the network and more.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                        <div className={'row justify-content-center'} style={{minHeight : '1560px'}}>
                            <iframe class="clickup-embed clickup-dynamic-height" style={{background : 'none'}} src="https://forms.clickup.com/20614357/f/kn36n-108/H11M293NZ99MAXACV3"></iframe>
                            <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                            <script async src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"></script>
                        </div>
                </section>
            </Layout>
        </div>
    )
}

export default GrantsPage
