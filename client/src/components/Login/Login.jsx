import "./Login.css";

const Login = () => {
  return (
    <div className="login__container">
      <form className="login__form">
        <div className="login__inputField">
          <label>Username</label>
          <input placeholder="Enter your username" />
        </div>

        <div className="login__inputField">
          <label>Password</label>
          <input placeholder="Enter your password" />
        </div>

        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
