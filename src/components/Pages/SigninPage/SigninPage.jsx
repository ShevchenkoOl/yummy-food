import style from './signinPage.module.css';

const SigninPage = () => {
    return (
        <div className={style.container}>
        <h2 className={style.title}>Sign In</h2>
        <form className={style.form}>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            // value={formData.email}
            // onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            // value={formData.password}
            // onChange={handleChange}
            required
          />
        </div>
        <button className={style.btn}type="submit">Sing In</button>
      </form>
      </div>
    )
};

export default SigninPage;