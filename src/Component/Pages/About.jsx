export default function About({ full, barClicked }) {
    let aboutStyle = full ? "section section-full about" : "section about";
    let barStyle = full ? "add-side" : "add-side d-none";
    return (
        <>
            <section className={aboutStyle}>
                <div className="section-mainbox">
                    <div className={barStyle} onClick={barClicked}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <h1 className="section-head">About Me</h1>
                    <h2 className="main-head">I'm Samir A <span>Web Developer</span></h2>
                    <p className="para">I have completed Advanced Full Stack Web Devlopment Course from Tecnosters.</p>
                    <div className="container-fluid my-5">
                        <div className="row">
                            <div className="col-md-7 personal-details">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p><b>Birthday :</b> <span className="para">22 July 2002</span></p>
                                        <p><b>Website :</b> <span className="para">www.domain.com</span></p>
                                        <p><b>Degree :</b> <span className="para">BSc in CS</span></p>
                                        <p><b>City :</b> <span className="para">Mathura</span></p>
                                    </div>
                                    <div className="col-md-6">
                                        <p><b>Age :</b> <span className="para">22</span></p>
                                        <p><b>Email :</b> <span className="para">samirsiddique98581@gmail.com</span></p>
                                        <p><b>Phone :</b> <span className="para">+91 6397992899</span></p>
                                        <p><b>Freelance :</b> <span className="para">Available</span></p>
                                    </div>
                                    <button className="btn1" style={{width:"fit-content"}}>Download CV</button>
                                    <button className="btn1 ms-4" style={{width:"fit-content"}}>Hire Me</button>
                                </div>
                            </div>
                            <div className="col-md-5 mt-5 mt-md-3">
                                <div className="skills" style={{height:"100%"}}>
                                    <div className="skill">
                                        <p><span><b>HTML</b></span> <span>95%</span></p>
                                        <div className="skill-bar"></div>
                                    </div>
                                    <div className="skill">
                                        <p><span><b>CSS</b></span> <span>95%</span></p>
                                        <div className="skill-bar"></div>
                                    </div>
                                    <div className="skill">
                                        <p><span><b>Bootstrap</b></span> <span>95%</span></p>
                                        <div className="skill-bar"></div>
                                    </div>
                                    <div className="skill">
                                        <p><span><b>JavaScript</b></span> <span>95%</span></p>
                                        <div className="skill-bar"></div>
                                    </div>
                                    <div className="skill">
                                        <p><span><b>JQuery</b></span> <span>95%</span></p>
                                        <div className="skill-bar"></div>
                                    </div>
                                    <div className="skill">
                                        <p><span><b>SQL</b></span> <span>95%</span></p>
                                        <div className="skill-bar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid py-5">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="main-head">Education</h2>
                                <div className="achieve-box">
                                    <p className="para dot">2021-2024</p>
                                    <div className="sec-head">Bachelor of Science</div>
                                    <p className="para mb-5">I have completed my bachelor degree in Computer Science with first division.</p>

                                    <p className="para dot">2020-2021</p>
                                    <div className="sec-head">Intermediate</div>
                                    <p className="para mb-5">I have completed my Intermediate (PCM) with first division.</p>

                                    {/* <p className="para dot">2013-2015</p>
                                    <div className="sec-head">Master in Computer Science</div>
                                    <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, illum aliquam? Tenetur perspiciatis velit similique temporibus nemo quia dignissimos magni amet, ad rerum voluptatum ipsam, eligendi saepe? Neque repudiandae veritatis culpa eius in accusantium commodi porro modi eveniet architecto, omnis quod accusamus rerum perspiciatis sint! Cumque, nemo! Nulla, inventore dolores.</p> */}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2 className="main-head">Experience</h2>
                                <div className="achieve-box">
                                    <p className="para dot">2023-2024</p>
                                    <div className="sec-head">Front-end Developer</div>
                                    <p className="para mb-5">I have six month experience as a font-end developer and have a experience of working real time projects.</p>

                                    {/* <p className="para dot">2013-2015</p>
                                    <div className="sec-head">Master in Computer Science</div>
                                    <p className="para mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, illum aliquam? Tenetur perspiciatis velit similique temporibus nemo quia dignissimos magni amet, ad rerum voluptatum ipsam, eligendi saepe? Neque repudiandae veritatis culpa eius in accusantium commodi porro modi eveniet architecto, omnis quod accusamus rerum perspiciatis sint! Cumque, nemo! Nulla, inventore dolores.</p>

                                    <p className="para dot">2013-2015</p>
                                    <div className="sec-head">Master in Computer Science</div>
                                    <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, illum aliquam? Tenetur perspiciatis velit similique temporibus nemo quia dignissimos magni amet, ad rerum voluptatum ipsam, eligendi saepe? Neque repudiandae veritatis culpa eius in accusantium commodi porro modi eveniet architecto, omnis quod accusamus rerum perspiciatis sint! Cumque, nemo! Nulla, inventore dolores.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}