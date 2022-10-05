import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import PiechartSection from "./piechart-section";

import { Parallax } from 'react-scroll-parallax';

const menu = require('../contents/urls.json');

export function ServicesSection() {
        return (
            <section className={'services-section'}>
                <div className={'section-bg'}/>
                <div className={'container'}>
                    <div className={'row'} data-masonry='{"percentPosition": true }'>
                        <div className={'col-12 col-sm-6'}>
                            <div className={'service cosmostation'}
                                 data-sal="slide-up"
                                 data-sal-delay="200"
                                 data-sal-duration="1000">
                                <div className={'inner'}>
                                    <div className={'title'}>Gitshock Wallet Extension</div>
                                    <div className={'text-box'}>
                                    Multichain wallet for storing crypto assets from Various Networks. Available for mobile and chrome extension.
                                        <ul>
                                        </ul>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-auto'}>
                                            <a href={menu.cosmostation} target={'_blank'} rel={'noreferrer'}>
                                                <button type={'button'}>Soon On Chrome</button>
                                            </a>
                                        </div>
                                        <div className={'col-auto'}>
                                            <a href={menu['cosmostation-use']} target={'_blank'} rel={'noreferrer'}>
                                                <div className={'link'}><i className={'icon-arrow-right'}></i>How to use it?</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-sm-6'}>
                            <div className={'service staking-juno'}
                                 data-sal="slide-up"
                                 data-sal-delay="200"
                                 data-sal-duration="1000">
                                <div className={'inner'}>
                                    <div className={'title'}>Gitshock Swap</div>
                                    <div className={'text-box'}>
                                    Gitshock Swap is a multinetwork decentralized exchange (DEX) aggregator powered by GTFX token.
                                        <ul>
                                        </ul>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-auto'}>
                                            <a href={menu['staking-juno']} target={'_blank'} rel={'noreferrer'}>
                                                <button type={'button'}>Swap Now</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-sm-6'}>
                            <div className={'service staking-juno'}
                                 data-sal="slide-up"
                                 data-sal-delay="200"
                                 data-sal-duration="1000">
                                <div className={'inner'}>
                                    <div className={'title'}>Gitshock Scan</div>
                                    <div className={'text-box'}>
                                    <ul>A Simple Blockchain explorer for Gitshock EVM.</ul>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-auto'}>
                                            <a href={menu['staking-juno']} target={'_blank'} rel={'noreferrer'}>
                                                <button type={'button'}>Get Started</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-sm-6'}>
                            <div className={'service keplr-wallet'}
                                 data-sal="slide-up"
                                 data-sal-delay="200"
                                 data-sal-duration="1000">
                                <div className={'inner'}>
                                    <div className={'title'}>Gitshock Edgeware</div>
                                    <div className={'text-box'}>
                                    Deploy your own EVM token in one click using githock edgeware securely.
                                        <ul>
                                        </ul>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-auto'}>
                                            <a href={menu.keplr} target={'_blank'} rel={'noreferrer'}>
                                                <button type={'button'}>Coming Soon</button>
                                            </a>
                                        </div>
                                        <div className={'col-auto'}>
                                            <a href={menu['keplr-use']} target={'_blank'} rel={'noreferrer'}>
                                                <div className={'link'}><i className={'icon-arrow-right'}></i>How to use it?</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PiechartSection/>

                </div>
            </section>
        );
}

export default ServicesSection;
