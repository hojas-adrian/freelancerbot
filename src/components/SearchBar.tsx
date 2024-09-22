import { Tabbar } from "@telegram-apps/telegram-ui";
import Search from "./del_search/Search";
import style from "./SearchBar.module.css";
import TabItem from "./TabItem";

export default function Header() {
  const tabItems = [
    { name: "home", href: "", type: "button", key: "0", label: "🏠" },
    { name: "search", href: "buscar", type: "button", key: "0", label: "🔍" },
    { name: "saved", href: "saved", type: "button", key: "0", label: "🗃️" },
  ];
  return (
    <Tabbar className={style.tabbar}>
      <Search />
      {tabItems.map((e) => (
        <TabItem key={e.name} name={e.name} href={e.href} label={e.label} />
      ))}
    </Tabbar>
  );
}
