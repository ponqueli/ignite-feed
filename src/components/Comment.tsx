import { Trash, ThumbsUp } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface ICommentProps {
  content: {
    content: string;
  };
  onDeleteComment: (commentContent: string) => any;
}

export function Comment({ content, onDeleteComment }: ICommentProps) {
  const { content: commentContent } = content;
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(commentContent);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/ponqueli.png" hasBorder={false} alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>José Antonio</strong>
              <time
                title="16 de Outubro às 08:13"
                dateTime="2022-10-16 08:13:44"
              >
                Cerca de 1 hora atrás
              </time>
            </div>

            <button
              type="button"
              title="Deletar comentário"
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{commentContent}</p>
        </div>
        <footer>
          <button
            type="button"
            title="Curtir comentário"
            onClick={() => setLikeCount(likeCount + 1)}
          >
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
