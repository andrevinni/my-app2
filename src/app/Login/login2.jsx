import React from 'react';

function Login2() {
  return <div>
    <section className="ftco-section">
      <div className="container">
        {/* <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Login #04</h2>
          </div>
        </div> */}
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <div className="img" style={{ backgroundImage: "url(Images/1920x1080_px_video_games-710175.jpg)" }}>
              </div>
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Entrar SSGN</h3>
                  </div>
                  <div className="w-100">
                    <p className="social-media d-flex justify-content-end">
                      <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a>
                      <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a>
                    </p>
                  </div>
                </div>
                <form action="#" className="signin-form">
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="name">Login / Força</label>
                    <input type="text" className="form-control" placeholder="Digite seu login" required />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="password">Senha</label>
                    <input type="password" className="form-control" placeholder="Digite sua senha" required />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="form-control btn btn-primary rounded submit px-3">Entrar</button>
                  </div>
                  <div className="form-group d-md-flex">
                    <div className="w-50 text-left">
                      {/* <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                        <input type="checkbox" checked />
                        <span className="checkmark"></span>
                      </label> */}
                    </div>
                    <div className="w-50 text-md-right">
                      <a href="#">Esqueceu a senha?</a>
                    </div>
                  </div>
                </form>
                <p className="text-center">Não tem um Login? <a data-toggle="tab" href="#signup">Cadastre-se</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
}

export default Login2;