import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/ponqueli.png" hasBorder={false} alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>José Antonio</strong>
              <time
                title="16 de Outubro às 08:13 "
                dateTime="2022-10-16 08:13:44"
              >
                Cerca de 1 hora atrás
              </time>
            </div>

            <button type="button" title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom José, parabéns!!! 👏👏</p>
        </div>
        <footer>
          <button type="button" title="Curtir comentário">
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
