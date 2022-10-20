import styles from './header.module.css'

function Header () {
    return (
        <header>
            <div className={styles.NavigationTopContainer}>
                <div className={styles.NavbarContainer}>
                    <a className={styles.NavbarLogo} href='#'>
                        <svg height="700" viewBox="0 0 700 700" width="700" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h700v700h-700z" fill="#000"/><path d="m60.379 568.75h262.5v43.75h-262.5z" fill="#fff"/><path d="m57.428 184.315 20.372-19.232c5.542 6.682 10.758 10.594 17.929 10.594 7.823 0 12.877-5.378 12.877-15.972v-72.205h31.457v72.367c0 14.343-3.586 24.448-11.246 32.109-7.5 7.5-18.254 11.572-31.294 11.572-19.885 0-31.946-8.312-40.095-19.233z" fill="#fff"/><path d="m147.394 87.5h91.762v26.73h-60.468v17.44h54.763v24.937h-54.763v18.092h61.283v26.893h-92.577z" fill="#fff"/><path d="m280.491 115.208h-34.064v-27.708h99.911v27.708h-34.227v86.384h-31.62z" fill="#fff"/><path d="m139.736 282.7c10.106-4.4 17.6-12.224 17.6-25.426v-.326a25.675 25.675 0 0 0 -7.336-18.584c-6.682-6.52-16.788-10.106-31.131-10.106h-58.507v114.092h58.838c27.218 0 43.191-11.9 43.191-31.457v-.326c.001-15.484-8.8-23.307-22.655-27.867zm-48.57-29.011h20.7c9.29 0 14.343 3.422 14.343 9.779v.326c0 6.682-5.542 9.942-15.158 9.942h-19.885v-20.051zm39.607 52.808c0 6.682-5.379 10.431-15.158 10.431h-24.449v-21.028h24.123c10.594 0 15.484 4.075 15.484 10.269v.326z" fill="#fff"/><path d="m335.8 227.444h-30.475l-42.63 101.193-17.833-26.056c14.18-6.031 23.469-17.6 23.469-35.205v-.326c0-11.246-3.422-19.885-10.1-26.567-7.661-7.661-19.722-12.224-37.162-12.224h-53.953v114.091h31.619v-34.55h14.017l22.981 34.553h54.267l8.15-20.536h44.169l8.149 20.536h33.9zm-99.093 42.05c0 8.312-6.357 13.529-16.951 13.529h-21.02v-27.546h20.864c10.432 0 17.114 4.564 17.114 13.692v.325zm70.737 27.706 12.877-32.271 12.712 32.271z" fill="#fff"/><path d="m388.119 228.258h31.619v114.092h-31.619z" fill="#fff"/><path d="m427.56 228.258h29.501l46.94 60.306v-60.306h31.294v114.092h-27.545l-48.896-62.587v62.587h-31.294z" fill="#fff"/><path d="m537.277 325.4 17.6-21.025c11.409 8.964 23.8 13.691 37 13.691 8.638 0 13.2-2.934 13.2-7.824v-.325c0-4.89-3.749-7.335-19.4-11.084-24.286-5.541-43.03-12.387-43.03-35.694v-.326c0-21.188 16.788-36.509 44.17-36.509 19.4 0 34.553 5.216 46.94 15.158l-15.801 22.328c-10.431-7.5-21.84-11.246-31.946-11.246-7.66 0-11.409 3.1-11.409 7.334v.322c0 5.216 3.912 7.5 19.885 11.083 26.078 5.7 42.377 14.18 42.377 35.531v.326c0 23.307-18.418 37.161-46.126 37.161-20.211.005-39.28-6.351-53.46-18.901z" fill="#fff"/></svg>
                    </a>
                    <div className={styles.NavigationWrapper}>
                        <div className={styles.NavigationFlex}>
                            <nav className={styles.NavItemsContainer}>
                                <div className={styles.NavItem}><button className={styles.NavButton}>Developer Tools</button></div>
                                <div className={styles.NavItem}><button className={styles.NavButton}>Team Tools</button></div>
                                <div className={styles.NavItem}><button className={styles.NavButton}>Learning Tools</button></div>
                                <div className={styles.NavItem}><button className={styles.NavButton}>Solutions</button></div>
                                <div className={styles.NavItem}><button className={styles.NavButton}>Support</button></div>
                                <div className={styles.NavItem}><button className={styles.NavButton}>Store</button></div>
                            </nav>
                            <div className={styles.NavIcons}>
                                <div className={styles.NavIconsFlex}>
                                    <div className={styles.IconItem}>
                                        <button><svg viewBox="0 0 24 24"><path d="M2.293 10a6.99 6.99 0 0 0 11.187 5.6l6.106 6.107L21 20.293l-6.106-6.106A6.997 6.997 0 1 0 2.293 10zm2 0a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path></svg>
                                        </button>
                                    </div>
                                    <div className={styles.IconItem}>
                                        <button><svg viewBox="0 0 24 24" ><circle cx="12" cy="5.5" r="2.5"></circle><path d="M15 10H9a4 4 0 0 0-4 4v7h14v-7a4 4 0 0 0-4-4z"></path></svg>
                                        </button>
                                    </div>
                                    <div className={styles.IconItem}>
                                        <button><svg viewBox="0 0 24 24" ><circle cx="6" cy="19" r="2"></circle><circle cx="16" cy="19" r="2"></circle><path d="M19.997 7H7.13l-.885-2.352A1 1 0 0 0 5.308 4H2v2h2.628L5 7l2.368 7.103a2 2 0 0 0 2.53 1.265l8.734-2.912A2 2 0 0 0 20 10.557z"></path></svg>
                                        </button>
                                    </div>
                                    <div className={styles.IconItem}>
                                        <button><svg viewBox="0 0 24 24" ><path d="m11.62965 16.61452c-1.13922-.692-3.111-2.36313-3.153-2.32718a28.32942 28.32942 0 0 1 -3.30095 2.26177c-.68823.39708-1.38892.49615-1.82064-.09139a.992.992 0 0 1 .26656-1.40406c.00852-.00391 2.44665-1.594 3.25973-2.29678a11.64387 11.64387 0 0 1 -2.23281-3.53521 1.07774 1.07774 0 0 1 .52716-1.36835c.52715-.22205 1.049-.12664 1.48663.61989a10.33341 10.33341 0 0 0 1.8143 2.89517 10.853 10.853 0 0 0 2.1563-4.3469l-7.63293-.02148v-2.00685h4.8124v-.99406a.98574.98574 0 1 1 1.9713 0v.99406h5.1703v2.00685h-2.08646a17.03869 17.03869 0 0 1 -2.64065 5.75689 15.88157 15.88157 0 0 0 2.30149 1.66068l2.3092-5.66617a1.162 1.162 0 0 1 2.1802.01591l3.01041 7.389 1.85638 4.385h-2.47393l-1.08252-2.53924h-4.84082l-.888 2.53924h-2.5993l.287-.69166zm4.31307-5.16715-1.67531 4.55419h3.35059z"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            </div> 
                            <div className={`${styles.NavItemsContainer} ${styles.DisplayNone}`}>
                            <div className={styles.NavItem}><button className={styles.NavButton}>WebStorm</button></div>
                            <div className={styles.IconItem}>
                                <button><svg viewBox="0 0 24 24"><path d="M2.293 10a6.99 6.99 0 0 0 11.187 5.6l6.106 6.107L21 20.293l-6.106-6.106A6.997 6.997 0 1 0 2.293 10zm2 0a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path></svg>
                                </button>
                            </div>
                            <div className={styles.IconItem}>
                                <button><svg viewBox="0 0 24 24"><path d="M4 5h16v2H4zm0 6h16v2H4zm0 6h16v2H4z"></path></svg>
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header