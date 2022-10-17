import styles from "./Avatar.module.css";

interface IAvatarProps {
  src: string;
  alt: string;
  hasBorder?: boolean;
}

export function Avatar({ src, alt, hasBorder = true }: IAvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}
