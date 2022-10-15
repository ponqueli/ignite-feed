import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
      />
      <div className={styles.profile}>
        <strong>José Contó</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#a" target="_blank">
          <span />
          <span />
          <span />
          <span />
          <span>Editar seu perfil </span>
        </a>
      </footer>
    </aside>
  );
}
