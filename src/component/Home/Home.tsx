import { FC } from "react";
import "./Home.css"

const Home: FC = () => {
  return (
    <div className="Home">
      <header className="Home-header">
        <div className="Home-header-avatar">
          <span className="Home-header-avatar_span">Name</span>
          <button className="Home-header-avatar_btn exit">Вийти</button>
          <button className="Home-header-avatar_btn remove">Удалить</button>
        </div>
      </header>
      <label>Добро пожаловать</label>
    </div>
  );
};

export default Home;
