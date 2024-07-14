import "../assets/css/soft-ui-dashboard.css";
import "../assets/css/nucleo-icons.css";
import imageUrl from "../assets/img/hotel/hotel12.jpg";
import SignNav from "../layouts/SignNav";
import { useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useMutation } from "react-query";
import {signin} from "../api";

function SignIn() {
  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useLocalStorage("token", null);

  const loginMutation = useMutation((data) => signin(data), {
    onSuccess: (data) => {
      setToken(data.token);
    },
    onError: (error) => {
        if (!!error.status && error.status == 401)
            return setError("Identifiants incorrectes!");
          return setError(
            "Une érreur est survenu, veillez vérrifier votre accès au réseau"
          );
    },
   
  });



  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    await loginMutation.mutateAsync({ email, password });
    

  };

  return (
    <>
      <SignNav link="/signUp" message="Rejoignez nous" />
      <main className="main-content mt-0">
        <section>
          <div className="page-header min-vh-75">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                  <div className="card card-plain mt-8">
                    <div className="card-header pb-0 text-left bg-transparent">
                      <h3 className="font-weight-bolder text-info text-gradient">
                        Welcome back
                      </h3>
                      <p className="mb-0">
                        Entrer votre email et votre mot de passe pour vous
                        connecter
                      </p>
                    </div>
                    <div className="card-body">
                      <form role="form" onSubmit={handleSubmit}>
                        <label>Email</label>
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="email-addon"
                            name="email"
                            value={email}
                            onChange={({target}) => setEmail(target.value)}
                          />
                        </div>
                        <label>Password</label>
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="password-addon"
                            name="password"
                            value={password}
                            onChange={({target}) => setPassword(target.value)}

                          />
                        </div>

                        <div className="text-center">
                          <button
                            type="button"
                            className="btn bg-gradient-info w-100 mt-4 mb-0"
                            onClick={handleSubmit}
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      <p className="mb-4 text-sm mx-auto">
                        Vous navez pas de compte ?
                        <a
                          href="javascript:;"
                          className="text-info text-gradient font-weight-bold"
                        >
                          Inscrivez vous{" "}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                    <div
                      className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                      style={divStyle}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default SignIn;
