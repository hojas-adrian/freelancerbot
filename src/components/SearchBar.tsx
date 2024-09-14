"use client";

import { Tabbar, TabsList } from "@telegram-apps/telegram-ui";
import Search from "./search/Search";
import style from "./SearchBar.module.css";
import { TabsItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/TabsList/components/TabsItem/TabsItem";
import { TabbarItem } from "@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/components/TabbarItem/TabbarItem";
import { Icon28Devices } from "@telegram-apps/telegram-ui/dist/icons/28/devices";

export default function Header() {
  return (
    <>
      <Tabbar className={style.tabbar}>
        <Search />
        <TabbarItem text="Hello" selected>
          <Icon28Devices />
        </TabbarItem>
        <TabbarItem text="Hello">
          <Icon28Devices />
        </TabbarItem>
        <Tabbar.Item text="Hello">
          <Icon28Devices />
        </Tabbar.Item>
      </Tabbar>
    </>
  );
}
