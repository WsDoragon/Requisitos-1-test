import React, { Component } from "react";
import "./Login2.css"
class Login2 extends Component {
    handleSubmit = e => {
      e.preventDefault();
      console.log(e.target.email.value);
  
      if (!e.target.email.value) {
        alert("email requerido");
      } else if (!e.target.email.value) {
        alert("email valido requerido");
      } else if (!e.target.password.value) {
        alert("Contraseña requerida");
      } else if (
          //etiquetador
        e.target.email.value === "eti@example.com" &&
        e.target.password.value === "123456"
      ) {
        alert("Acceso concedido");
        window.location.href="/etiNews";
        e.target.email.value = "";
        e.target.password.value = "";
      }else if (
        //user
      e.target.email.value === "user@example.com" &&
      e.target.password.value === "123456"
    ) {
      alert("Acceso concedido");
      window.location.href="/userNews";
      e.target.email.value = "";
      e.target.password.value = ""; }
      else {
        alert("Email o Contraseña erroneas");
      }
    };

    handleClick = e => {
        e.preventDefault();
    
        alert("Goes to registration page");
      };
    
      render() {
        return (
          <div className="Login2">
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="nome@email.com.br" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" />
              </div>
              <button className="primary">Ingresar</button>
            </form>
          </div>
        );
      }
    }
export default Login2;
