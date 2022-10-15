import styles from "./Header.module.scss";
import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logoSpin} src={igniteLogo} alt="Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
