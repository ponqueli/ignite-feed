import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/ponqueli.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>José Contó</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="16 de Outubro às 08:13 " dateTime="2022-10-16 08:13:44">
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉<a href="#1">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#2">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
