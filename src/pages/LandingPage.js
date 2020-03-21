import React from "react";
import { Link } from "@reach/router";
// import "./LandingPage.scoped.css";
import useScript from "../hooks/useScript";
import useAddRmvStyle from "../hooks/useAddRmvStyle";

export default function LandingPage() {
  useScript("/lpage/js/landing.js");
  useAddRmvStyle("/lpage/css/style.css", "landing");
  return (
    <div className="nx">
      <header className="nc reveal-from-bottom">
        <div className="tcontainern">
          <div className="nv">
            <div className="nd">
              <h1 className="sh">
                <Link to="/">
                  <div>
                    <img
                      src="/lpage/assets/atrislogo.png"
                      className="logo_atris"
                      alt="atris"
                      width={32}
                      height={32}
                    />
                  </div>{" "}
                </Link>
              </h1>
            </div>
            <button
              id="tc"
              className="tc"
              aria-controls="primary-menu"
              aria-expanded="false"
            >
              <span className="ip">Menu</span>
              <span className="th">
                <span className="tp" />
              </span>
            </button>
            <nav id="nm" className="nm">
              <div className="ng">
                {/* <ul className="id h nb">
                  <li>
                    <a href="additional.html">ABOUT</a>
                  </li>
                </ul> */}
                <ul className="id nb">
                  <li>
                    <Link to="signup">
                      {" "}
                      <div className="tbuttonn fbuttonl sbuttono">
                        Sign up
                      </div>{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main className="nh">
        <section className="rc np sf tillustration-section-n">
          <div className="rcontaineri">
            <div className="ra ro">
              <div className="rf">
                <h1
                  className="sp oa reveal-from-bottom"
                  data-reveal-delay={200}
                />
                <div className="scontainero">
                  <div
                    className="rl reveal-from-bottom tillustration-element-n"
                    data-reveal-value="20px"
                    data-reveal-delay={800}
                  >
                    <img
                      src="/lpage/images/LOGO.png"
                      alt="Hero image"
                      width={896}
                      height={504}
                    />
                  </div>
                  <h3>
                    <p
                      className="sp oy reveal-from-bottom"
                      data-reveal-delay={400}
                    />
                  </h3>
                  <div className="reveal-from-bottom" data-reveal-delay={600}>
                    <Link to="/">
                      <div className="tbuttonn fbuttonl gbuttony">
                        Try It Now
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="rl reveal-from-bottom tillustration-element-n"
                data-reveal-value="20px"
                data-reveal-delay={800}
              >
                <img
                  className="su"
                  src="/lpage/assets/laptop.svg"
                  alt="Hero image"
                  width={896}
                  height={504}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="rc np sf tillustration-section-n">
          <div className="rcontaineri">
            <div className="ra ro">
              <div className="rf">
                <h1
                  className="sp oa reveal-from-bottom"
                  data-reveal-delay={200}
                >
                  Problem
                </h1>
                <div className="scontainero">
                  <h3>
                    <p
                      className="sp oy reveal-from-bottom"
                      data-reveal-delay={400}
                    >
                      Problems that our company observes and wants to solve.
                    </p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rp np">
          <div className="tcontainern">
            <div className="features-tiles-inner ro">
              <div className="tiles-wrap">
                <div className="nf reveal-from-bottom">
                  <div className="nl">
                    <div className="features-tiles-item-header">
                      <div className="ii oa">
                        <img
                          src="/lpage/images//feature-tile-icon-01.svg"
                          alt="Feature tile icon 01"
                          width={64}
                          height={64}
                        />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="sp sq">Limited Customization</h4>
                      <p className="sh l">
                        Text is clutter and there is no feature to describe who
                        speak the statement.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="nf reveal-from-bottom" data-reveal-delay={400}>
                  <div className="nl">
                    <div className="features-tiles-item-header">
                      <div className="ii oa">
                        <img
                          src="/lpage/images//feature-tile-icon-02.svg"
                          alt="Feature tile icon 02"
                          width={64}
                          height={64}
                        />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="sp sq">Not Smart Enough</h4>
                      <p className="sh l">
                        Existing solutions don't effectively handel the data
                        post transcribe.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="nf reveal-from-bottom" data-reveal-delay={400}>
                  <div className="nl">
                    <div className="features-tiles-item-header">
                      <div className="ii oa">
                        <img
                          src="/lpage/images//feature-tile-icon-03.svg"
                          alt="Feature tile icon 03"
                          width={64}
                          height={64}
                        />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="sp sq">Lack Of Integration</h4>
                      <p className="sh l">
                        It's difficult to sync task between the transcribe
                        platform to todo's and notes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rh np">
          <div className="tcontainern">
            <div className="features-split-inner ro il">
              <div className="ru sf">
                <div className="scontainero">
                  <h2 className="sp oa">
                    Built for your awesome productivity{" "}
                  </h2>
                  <p className="sh">
                    What makes ATRIS a state of the art and top notch markey
                    changing product.
                  </p>
                </div>
              </div>
              <div className="nt ns">
                <div className="split-item">
                  <div
                    className="ni ah reveal-from-left"
                    data-reveal-container=".split-item"
                  >
                    <h3 className="sp or">Recording Made Easy</h3>
                    <p className="sh">
                      With ATRIS you can get super focussed audio recording
                      functionality for your meetings from our easy to use UI.
                    </p>
                  </div>
                  <div
                    className="nn nr reveal-from-bottom"
                    data-reveal-container=".split-item"
                  >
                    <img
                      className="su"
                      src="/lpage/assets/recording.svg"
                      alt="Features split image 01"
                      width={528}
                      height={396}
                    />
                  </div>
                </div>
                <div className="split-item">
                  <div
                    className="ni ah reveal-from-right"
                    data-reveal-container=".split-item"
                  >
                    <h3 className="sp or">Easy Note Taking</h3>
                    <p className="sh">
                      Customize the transcribe of your audio from our intiutive
                      UI by collabrating with your colleagues and friends while
                      receiving real time suggestions and analysis.{" "}
                    </p>
                  </div>
                  <div
                    className="nn nr reveal-from-left"
                    data-reveal-container=".split-item"
                  >
                    <img
                      className="su"
                      src="/lpage/assets/note_taking_made_easy.png"
                      alt="Features split image 02"
                      width={528}
                      height={396}
                    />
                  </div>
                </div>
                <div className="split-item">
                  <div
                    className="ni ah reveal-from-left"
                    data-reveal-container=".split-item"
                  >
                    <h3 className="sp or">Diarisation</h3>
                    <p className="sh">
                      Get the presence of each and every member in your meeting
                      and the sentences they spoke in a scripted visualization
                      format.
                    </p>
                  </div>
                  <div
                    className="nn nr reveal-from-bottom"
                    data-reveal-container=".split-item"
                  >
                    <img
                      className="su"
                      src="/lpage/assets/diarilization.svg"
                      alt="Features split image 03"
                      width={528}
                      height={396}
                    />
                  </div>
                </div>
                <div className="split-item">
                  <div
                    className="ni ah reveal-from-right"
                    data-reveal-container=".split-item"
                  >
                    <h3 className="sp or">Text Annotation</h3>
                    <p className="sh">
                      We assist you in annotating you keyword entities to you
                      that is most important to you during whole conversation,
                      to which you can further customize the entities according
                      to your likings.
                    </p>
                  </div>
                  <div
                    className="nn nr reveal-from-left"
                    data-reveal-container=".split-item"
                  >
                    <img
                      className="su"
                      src="/lpage/assets/annote.png"
                      alt="Features split image 02"
                      width={528}
                      height={396}
                    />
                  </div>
                </div>
                <div className="split-item">
                  <div
                    className="ni ah reveal-from-left"
                    data-reveal-container=".split-item"
                  >
                    <h3 className="sp or">Get Sentiments Of Your Meeting</h3>
                    <p className="sh">
                      We process your entire conversation to give you
                      visualization of how did the entire meeting went through.
                    </p>
                  </div>
                  <div
                    className="nn nr reveal-from-bottom"
                    data-reveal-container=".split-item"
                  >
                    <img
                      className="su"
                      src="/lpage/assets/16.png"
                      alt="Features split image 03"
                      width={528}
                      height={396}
                    />
                  </div>
                </div>
                <div className="split-item">
                  <div
                    className="ni ah reveal-from-right"
                    data-reveal-container=".split-item"
                  >
                    <h3 className="sp or">
                      Search Through Your Voice Meetings
                    </h3>
                    <p className="sh">
                      We know how important is your each and every conversation
                      is, so we taimport useScript from '../hooks/useScript'; ke
                      utmost priorimport useAddRmvStyle from
                      '../hooks/useAddRmvStyle'; ity to index them so that you
                      can search them when you need it.
                    </p>
                  </div>
                  <div
                    className="nn nr reveal-from-left"
                    data-reveal-container=".split-item"
                  >
                    <img
                      className="su"
                      src="/lpage/assets/search.png"
                      alt="Features split image 02"
                      width={650}
                      height={450}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rd np">
          <div className="tcontainern">
            <div className="pricing-inner ro il">
              <div className="ru sf">
                <div className="scontainero">
                  <h2 className="sp oa">Simple, transarent pricing</h2>
                  <p className="sh">
                    ATRIS provides a very dynamic prizing model for all types of
                    requirements, select what you want and pay for what you use.
                  </p>
                </div>
              </div>
              <div className="rg sf">
                <div className="ry">
                  <span className="rb ib">Billed Monthly</span>
                  <label className="to">
                    <input
                      id="pricing-toggle"
                      type="checkbox"
                      name="pricing-toggle"
                      defaultChecked
                    />
                    <span className="tu" />
                    <span className="ip">Billing period</span>
                  </label>
                  <span className="rb ib">Billed Annually</span>
                </div>
              </div>
              <div className="tiles-wrap">
                <div className="nf reveal-from-bottom">
                  <div className="nl su">
                    <div className="rv">
                      <div className="is ux op">
                        <div className="pricing-item-price sw">
                          <span className="io s">₹</span>
                          <span
                            className="pricing-item-price-amount i pricing-switchable"
                            data-pricing-monthly={100}
                            data-pricing-yearly={960}
                          >
                            960
                          </span>
                        </div>
                        <div className="c ij">Basic Plan</div>
                      </div>
                      <div className="pricing-item-features mb-40">
                        <div className="pricing-item-features-title f c ik op">
                          With 5GB Storage
                        </div>
                        <ul className="rm id c oy">
                          <li className="iu">
                            Audio Transcribe for 720 minute.
                          </li>
                          <li className="iu">Keyword Detection</li>
                          <li className="iu">Text Summarization</li>
                          <li className="iu">Advance Export (PDF, DOCX)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="pricing-item-cta sq">
                      <Link to="/">
                        {" "}
                        <div className="tbuttonn fbuttonl pbuttond">
                          Start free trial
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="nf reveal-from-bottom" data-reveal-delay={200}>
                  <div className="nl su">
                    <div className="rv">
                      <div className="is ux op">
                        <div className="pricing-item-price sw">
                          <span className="io s">₹</span>
                          <span
                            className="pricing-item-price-amount i pricing-switchable"
                            data-pricing-monthly={300}
                            data-pricing-yearly={3360}
                          >
                            3360
                          </span>
                        </div>
                        <div className="c ij">Premium</div>
                      </div>
                      <div className="pricing-item-features mb-40">
                        <div className="pricing-item-features-title f c ik op">
                          With 10GB Storage
                        </div>
                        <ul className="rm id c oy">
                          <li className="iu">
                            Audio Transcribe for 2500 minute.
                          </li>
                          <li className="iu">Sentiment Analysis</li>
                          <li className="iu">Text Summarization</li>
                          <li className="iu">Sound Classification</li>
                          <li className="iu">Advance Export (PDF, DOCX)</li>
                          <li className="iu">Speaker Diarization</li>
                          <li className="iu">Custom Vocabulary Training</li>
                        </ul>
                      </div>
                    </div>
                    <div className="pricing-item-cta sq">
                      <div className="tbuttonn fbuttonl pbuttond">
                        Start free trial
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nf reveal-from-bottom" data-reveal-delay={400}>
                  <div className="nl su">
                    <div className="rv">
                      <div className="is ux op">
                        <div className="pricing-item-price sw">
                          <span className="io s">₹</span>
                          <span
                            className="pricing-item-price-amount i pricing-switchable"
                            data-pricing-monthly="35-750"
                            data-pricing-yearly="400-8500"
                          >
                            400-8500
                          </span>
                        </div>
                        <div className="c ij">Custom and Economy</div>
                      </div>
                      <div className="pricing-item-features mb-40">
                        <div className="pricing-item-features-title f c ik op">
                          upto 20GB Storage
                        </div>
                        <ul className="rm id c oy">
                          <li className="iu">
                            Audio Transcribe for 6000 minute.
                          </li>
                          <li className="iu">Sentiment Analysis</li>
                          <li className="iu">
                            Text Summarization + Keyword + Entity Detection
                          </li>
                          <li className="iu">Sound Classification</li>
                          <li className="iu">Speaker Diarization</li>
                          <li className="iu">Custom Vocabulary Training</li>
                        </ul>
                      </div>
                    </div>
                    <div className="pricing-item-cta sq">
                      <a className="tbuttonn fbuttonl pbuttond" href="#">
                        Start free trial
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rj np ah reveal-from-bottom">
          <div className="tcontainern">
            <div className="ih ro rz">
              <div className="rq">
                <h3 className="sh">
                  Qwick Start your journey with ATRIS here.
                </h3>
              </div>
              <div className="cta-action">
                <div className="tbuttonn gbuttony">Get started now</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="nk ah">
        <div className="tcontainern">
          <div className="n_">
            <div className="nj ri h">
              <div className="nd">
                <Link to="/">
                  <div>
                    <img
                      src="/lpage/assets/atrislogo.png"
                      className="logo_atris"
                      alt="atris"
                      width={32}
                      height={32}
                    />
                  </div>
                </Link>
              </div>
              <div className="rn">
                <ul className="id">
                  <li>
                    <a href="#">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Facebook</title>
                        <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Atris_AI">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Twitter</title>
                        <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Instagram</title>
                        <g>
                          <circle cx="12.145" cy="3.892" r={1} />
                          <path d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                          <path d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z" />
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nq ri h rs">
              <nav className="rr">
                <ul className="id">
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">FAQ's</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </nav>
              <div className="footer-copyright">
                © 2019 ATRIS, all rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
