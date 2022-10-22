import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

interface IContentProps {
  id: number;
  type: string;
  content: string;
  url?: string;
}

interface IAuthorProps {
  name: string;
  avatarUrl: string;
  role: string;
}

interface ICommentProps {
  content: string;
}

interface IPostContentProps {
  post: {
    id: number;
    publishedAt: string;
    content: Array<IContentProps>;
    author: IAuthorProps;
  };
}

export function Post({ post }: IPostContentProps) {
  const { author, publishedAt, content } = post;
  const { name, avatarUrl, role } = author;
  const [newCommentText, setNewCommentText] = useState("");
  const [comments, setComments] = useState([
    {
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
      content: newCommentText,
    };
    setComments([...comments, newComment]);
    setNewCommentText("");
  }

  function handleNewComment() {
    setNewCommentText(event?.target.value);
  }

  const deleteComment = (comment: ICommentProps) => {
    const newComments = comments.filter((c) => c !== comment);
    setComments(newComments);
  };

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
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.id}>{item.content}</p>;
          }
          if (item.type === "link") {
            return (
              <a key={item.id} href={item.url} target="_blank" rel="noreferrer">
                {item.content}
              </a>
            );
          }
          if (item.type === "hashtag") {
            return <span key={item.id}>#{item.content} </span>;
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
          <Comment
            key={comment.content}
            content={comment}
            deleteComment={() => deleteComment(comment)}
          />
        ))}
      </div>
    </article>
  );
}
