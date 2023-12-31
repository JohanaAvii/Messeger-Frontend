import './Login.css'; 
import React, { useState } from "react"

export const Login = (props) => {

    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin")
    }
  
    if (authMode === "signin") {
      return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Iniciar sesión</h3>
              <div className="text-center">
              Todavía no estas registrado?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                 Iniciar sesión
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Correo</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Contraseña</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Ingresar
                </button>
              </div>
             
            
            </div>
          </form>
        </div>
      )
    }

    return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
              ¿Ya registrado?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  iniciar sesion
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Nombre Completo</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="e.g Jane Doe"
                />
              </div>
              <div className="form-group mt-3">
                <label>correo</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group mt-3">
                <label>Correo</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Ingresar
                </button>
              </div>
              
            </div>
          </form>
        </div>
      )
         

}