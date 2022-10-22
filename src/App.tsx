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
        id: 66,
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        id: 65,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é IgniteFeed 🚀",
      },
      {
        id: 64,
        type: "link",
        content: "jane.design/doctorcare",
        url: "https://jane.design/doctorcare",
      },
      {
        id: 63,
        type: "hashtag",
        content: "novoprojeto",
      },
      {
        id: 62,
        type: "hashtag",
        content: "nlw",
      },
      {
        id: 61,
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
        id: 7,
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        id: 8,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é IgniteFeed 🚀",
      },
      {
        id: 9,
        type: "link",
        content: "jane.design/doctorcare",
        url: "https://jane.design/doctorcare",
      },
      {
        id: 10,
        type: "hashtag",
        content: "novoprojeto",
      },
      {
        id: 11,
        type: "hashtag",
        content: "nlw",
      },
      {
        id: 12,
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
