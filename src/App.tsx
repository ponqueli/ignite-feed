import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      name: "José Contó",
      avatarUrl: "https://github.com/ponqueli.png",
      role: "Web Developer",
    },
    publishedAt: "2022-10-22 08:13:44",
    content: [
      {
        id: 1,
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        id: 2,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é IgniteFeed 🚀",
      },
      {
        id: 3,
        type: "link",
        content: "jane.design/doctorcare",
        url: "https://jane.design/doctorcare",
      },
      {
        id: 4,
        type: "hashtag",
        content: "novoprojeto",
      },
      {
        id: 5,
        type: "hashtag",
        content: "nlw",
      },
      {
        id: 6,
        type: "hashtag",
        content: "rocketseat",
      },
    ],
  },
  {
    id: 2,
    author: {
      name: "Gabriel Bucsan",
      avatarUrl: "https://github.com/gabrielbucsan.png",
      role: "Architect",
    },
    publishedAt: "2022-10-21 08:13:44",
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é IgniteFeed 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
        url: "https://jane.design/doctorcare",
      },
      {
        type: "hashtag",
        content: "novoprojeto",
      },
      {
        type: "hashtag",
        content: "nlw",
      },
      {
        type: "hashtag",
        content: "rocketseat",
      },
    ],
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
