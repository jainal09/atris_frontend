import React, { useState, useContext } from "react";
import { Link } from "@reach/router";
import UserContext from "../context/index";
import useAddRmvStyle from '../hooks/useAddRmvStyle';

export default function LoginPage() {
  useAddRmvStyle("/lpage/css/style.css", "landing");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useContext(UserContext);

  const handleSubmit = evt => {
    evt.preventDefault();
    // alert(`Submitting Name ${name}`)
    if (email !== "" && password !== "") {
      let setUser = userContext.setUser;
      setTimeout(setUser({ user: "admin" }, "/home"), 1000);
      // setUser({ user: "admin" })
      console.log("handle qq");
    }
    console.log("handle submit");
  };

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
                    <form onSubmit={handleSubmit}>
                      <fieldset>
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
                            onChange={e => setEmail(e.target.value)}
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
                            onChange={e => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="oc oy">
                          <button className="tbuttonn fbuttonl pbuttond">
                            Sign in
                          </button>
                        </div>
                        <div className="ir oy">
                          <label className="j">
                            <input
                              type="checkbox"
                              id="remember"
                              
                            />
                            Remember me
                          </label>
                          <a className="p c" href="#">
                            Forgot password?
                          </a>
                        </div>
                      </fieldset>
                    </form>
                    <div className="signin-bottom il">
                      <div className="uj c sf ij">
                        Don't you have an account?
                        <Link to="/signup">
                          <div className="p">Sign up</div>
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
