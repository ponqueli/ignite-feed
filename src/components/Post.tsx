import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

interface IPostProps {
  post: {
    author: {
      name: string;
      avatarUrl: string;
      role: string;
    };
    publishedAt: Date;
    content: {
      id: number;
      type: "paragraph" | "link" | "hashtag";
      content: string;
      url?: string;
    }[];
  };
}

export function Post({ post }: IPostProps) {
  const { author, publishedAt, content } = post;
  const { name, avatarUrl, role } = author;
  const [newCommentText, setNewCommentText] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      content: "Muito bom! 👏👏👏",
    },
  ]);
  const publishedAtFormatted = format(
    new Date(publishedAt),
    `d 'de' LLLL 'às' HH:mm'h'`,
    { locale: ptBR }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(
    new Date(publishedAt),
    { locale: ptBR, addSuffix: true }
  );

  function handleCreateNewComment() {
    event?.preventDefault();

    const newComment = {
      id: Math.random(),
      content: newCommentText,
    };
    setComments([...comments, newComment]);
    setNewCommentText("");
  }

  function handleNewComment() {
    setNewCommentText(event?.target.value);
  }

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={avatarUrl} alt={name} hasBorder={false} />
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>
        <time
          title={publishedAtFormatted}
          dateTime={new Date(publishedAt).toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(({ id, content: text, url, type }) => {
          if (type === "paragraph") {
            return <p key={id}>{text}</p>;
          }
          if (type === "link") {
            return (
              <a key={id} href={url} target="_blank" rel="noreferrer">
                {text}
              </a>
            );
          }
          if (type === "hashtag") {
            return <span key={id}>#{text} </span>;
          }

          return null;
        })}
      </div>

      <form className={styles.comentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu comentário</strong>
        <textarea
          name="comment"
          placeholder="Comente aqui"
          value={newCommentText}
          onChange={handleNewComment}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment.id} content={comment} />
        ))}
      </div>
    </article>
  );
}
