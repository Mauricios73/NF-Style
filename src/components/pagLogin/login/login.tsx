import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';
import PagUser from './pagUsers/pagUser';
import './login2.scss';

interface User {
  name: string;
}

function Login(): JSX.Element {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [, setError] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  // const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email, password);

    try {
      // const response = await axios.post<User>('http://localhost:5000/users',
      const response = await axios.post<User>('https://backend-production-ca94.up.railway.app/users',
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      console.log(response.data);
      setUser(response.data);

    } catch (error) {
      const AxiosError = error as AxiosError;

      if (!AxiosError.response) {
        setError('Erro ao acessar o servidor');
      } else if (AxiosError.response.status === 401) {
        setError('Usuário ou senha inválidos');
      }
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(name, email, password);

    try {
      // const response = await axios.post<User>('http://localhost:5000/newusers',
      const response = await axios.post<User>('https://backend-production-ca94.up.railway.app/newusers/',
        JSON.stringify({ name, email, password }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      console.log(response.data);
      setUser(response.data);

    } catch (error) {
      const AxiosError = error as AxiosError;

      if (!AxiosError.response) {
        setError('Erro ao acessar o servidor');
      } else if (AxiosError.response.status === 401) {
        setError('Usuário ou senha inválidos');
      }
    }
  };

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setUser(null);
    setError('');
  };

  return (
    <div className="container-login">
      {user == null ? (
        <div className="wrapper">
          <div className="card-switch">
            <span className="login-form-title"> Bem vindo </span>
            <label className="switch">
              <input className="toggle" type="checkbox" />
              <span className="slider"></span>
              <span className="card-side"></span>
              <div className="flip-card__inner">
                <div className="flip-card__front">
                  <div className="title">Log in</div>
                  <form action="" className="flip-card__form" onSubmit={(e) => handleLogin(e)}>
                    <input
                      // className={email !== "" ? "has-val input" : "flip-card__input"}
                      className="flip-card__input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      name="email"
                    />
                    <input
                      // className={password !== "" ? "has-val input" : "flip-card__input"}
                      className="flip-card__input"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      name="password"
                    />
                    <button type="submit" className="flip-card__btn">Login</button>
                    {/* <button className="flip-card__btn">Let`s go!</button> */}
                  </form>
                </div>
                <div className="flip-card__back">
                  <div className="title">Sign up</div>
                  <form action="" className="flip-card__form" onSubmit={(e) => handleSignUp(e)}>
                    <input
                      // className={name !== "" ? "has-val input" : "flip-card__input" }
                      className="flip-card__input"
                      type="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      name='name'
                      placeholder="Name"
                    />
                    <input
                      // className={email !== "" ? "has-val input" : "flip-card__input"}
                      className="flip-card__input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      name="email"
                    />
                    <input
                      // className={password !== "" ? "has-val input" : "flip-card__input"}
                      className="flip-card__input"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      name="password"
                    />
                    
                    <button className="flip-card__btn">Confirm!</button>
                  </form>
                </div>
              </div>
            </label>
          </div>
        </div>
      ) : (
        <div id='user-form'>
          <h2>Olá, {user.name}</h2>
          <PagUser />
          <div className="container-login-form-btn">
            <button type="button" className='login-form-btn' onClick={(e) => handleLogout(e)}>Logout</button>
          </div>
        </div>
      )
      }
    </div >

  );
}
export default Login;
