"use client";

import Search from "./search/Search";
import style from "./SearchBar.module.css";

export default function Header() {
  return (
    <>
      <header className={style.headerShadow}>
        <div className={style.header}>
          <Search />
        </div>
      </header>
    </>
  );
}
