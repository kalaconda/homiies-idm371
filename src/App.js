import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import fire from "./components/fire";
import { v4 as uuidv4 } from 'uuid';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Form from "./pages/Form";
import TodoItem from "./pages/TodoItem";
import "./App.css";


function App() {

  /*** TODO LIST  ***/

  /* input value */
  const [inputValue, setInputValue] = useState("");
  /* todos */
  const [todos, setTodos] = useState([]);
  /* submit */
  const handleSubmit = e => {
    e.preventDefault();
    setTodos([...todos, { todoText: inputValue, todoId: uuidv4() }]);
  };

  /*** LOGIN SYSTEM  ***/
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
        }
      });
  };

  function handleLogOut() {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      clearInputs();
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  /*** REACT ROUTER / NAVIGATION  ***/
  return (
    <div className="App">
      <Router>
        {user ? (
          <>
            <Route exact path="/">
              <Home handleLogOut={handleLogOut} />
            </Route>
            <Route exact path="/home">
              <Home handleLogOut={handleLogOut} />
            </Route>
            <Route exact path="/tasks">
              <Tasks handleSubmit={handleSubmit} todos={todos} />
            </Route>
            <Route exact path="/payment">
              <Home handleLogOut={handleLogOut} />
            </Route>
            <Route exact path="/notifications">
              <Home handleLogOut={handleLogOut} />
            </Route>
          </>
        ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
