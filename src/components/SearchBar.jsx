import { Tabbar } from "@telegram-apps/telegram-ui";
import Search from "./del_search/Search";
import style from "./SearchBar.module.css";
import TabItem from "./TabItem";

export default function Header() {
  const tabs = [
    {
      text: "home",
      href: "",
      type: "button",
      id: "0",
      icon: "🏠",
      props: {},
    },
    {
      text: "search",
      href: "buscar",
      type: "button",
      id: "0",
      icon: "🔍",
      props: {},
    },
    {
      text: "saved",
      href: "saved",
      type: "button",
      id: "0",
      icon: "🗃️",
      props: {},
    },
  ];

  const Tabs = ["", "", ""];

  return (
    <Tabbar className={style.tabbar}>
      <Search />
      {tabs.map((e) => (
        <TabItem key={e.text} text={e.text} icon={e.icon} href={e.href} />
      ))}
    </Tabbar>
  );
}
