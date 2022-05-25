import React from 'react';

function Footer() {
    return (
        <footer className="bd-footer py-5">
            <div className="container py-5">
                <div className="row">

                    <div className="col-lg-4 mb-3">
                        <h5 id="contact">Contact Me</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="mailto: christianle21@yahoo.com" target="_blank" rel="noopener noreferrer">Email</a></li>
                            <li className="mb-2"><a href="https://www.linkedin.com/in/thechristianle/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 mb-3">
                        <h5 id="contact">Follow Me on GitHub</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="https://github.com/christianle21/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 mb-3">
                        <a href="#about">
                            <h2 className="fs-5">Christian Le</h2>
                        </a>
                        <ul className="list-unstyled">
                            <li className="mb-2" style={{ color: 'white' }}>Designed and built by Christian Le.</li>
                            <li class="mb-2">© 2022 Christian Le</li>

                        </ul>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;