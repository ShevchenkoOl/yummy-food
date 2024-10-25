import style from './registerPage.module.css';

const RegistrPage = () => {
    return (
        <div className={style.container}>
        <h2 className={style.title}>Registration</h2>
        <form className={style.form}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            // value={formData.name}
            // onChange={handleChange}
            required
          />
        </div>
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
        <button className={style.btn}type="submit">Sing up</button>
      </form>
      </div>
    )
};

export default RegistrPage;