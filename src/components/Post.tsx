import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

interface IAuthorProps {
  name: string;
  avatarUrl: string;
  role: string;
}
interface IContentProps {
  id: number;
  type: string | "paragraph" | "link" | "hashtag";
  content: string;
  url?: string;
}

interface IPostProps {
  publishedAt: string;
  content: IContentProps[];
  author: IAuthorProps;
}

export function Post({ author, publishedAt, content }: IPostProps) {
  const { name, avatarUrl, role } = author;
  const [newCommentText, setNewCommentText] = useState("");
  const [comments, setComments] = useState(["Muito bom! 👏👏👏"]);

  const publishedAtFormatted = format(
    new Date(publishedAt),
    `d 'de' LLLL 'às' HH:mm'h'`,
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(
    new Date(publishedAt),
    { locale: ptBR, addSuffix: true }
  );

  function handleCreateNewComment(event: FormEvent) {
    event?.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event?.target.setCustomValidity("");
    setNewCommentText(event?.target.value);
  }

  const handleNewCommentValid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event?.target.setCustomValidity("Campo obrigatório!");
  };

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentsWithoutDeletedOne);
  };

  const isNewCommentEmpty = newCommentText?.trim().length === 0;

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
          onInvalid={handleNewCommentValid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
