"use client";

import { useRouter, usePathname } from "next/navigation";
import { TabbarItem } from "@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/components/TabbarItem/TabbarItem";
import { TabsItemProps } from "@telegram-apps/telegram-ui/dist/components/Navigation/TabsList/components/TabsItem/TabsItem";

interface props {
  text: string;
  href: string;
  icon: string;
}

export default function TabItem({ text, href, icon }: props): TabsItemProps {
  const router = useRouter();
  const path = usePathname();

  return (
    <TabbarItem
      selected={path === `/${href}`}
      style={{ paddingInline: 10 }}
      text={text}
      onClick={() => router.push(`/${href}`)}
    >
      {icon}
    </TabbarItem>
  );
}
