import React from "react";
import { Link } from "@reach/router";
import useAddRmvStyle from "../hooks/useAddRmvStyle";

export default function SignUpPage() {
  useAddRmvStyle("/lpage/css/style.css", "landing");
  return (
    <div className="nx">
      <header className="nc">
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
                  </div>
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </header>
      <main className="nh">
        <section className="in np tillustration-section-n">
          <div className="scontainero">
            <div className="signin-inner ro">
              <div className="ru sf">
                <h1 className="sh">
                  Welcome back. We exist to combine the world of speech and text
                  into productivity superpower.
                </h1>
              </div>
              <div className="tiles-wrap">
                <div className="nf">
                  <div className="nl">
                    <form>
                      <fieldset>
                        <div className="or">
                          <label className="x ip" htmlFor="name">
                            Full name
                          </label>
                          <input
                            id="name"
                            className="k"
                            type="name"
                            placeholder="Full name"
                            required
                          />
                        </div>
                        <div className="or">
                          <label className="x ip" htmlFor="email">
                            Email
                          </label>
                          <input
                            id="email"
                            className="k"
                            type="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="or">
                          <label className="x ip" htmlFor="password">
                            Password
                          </label>
                          <input
                            id="password"
                            className="k"
                            type="password"
                            placeholder="Password"
                            required
                          />
                        </div>
                        <div className="oc oy">
                          <button className="tbuttonn fbuttonl pbuttond">
                            Sign up
                          </button>
                        </div>
                      </fieldset>
                    </form>
                    <div className="signin-bottom il">
                      <div className="uj c sf ij">
                        Already have an account?
                        <Link to="/login">
                          <div className="p">Login</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
