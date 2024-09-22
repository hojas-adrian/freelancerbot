"use client";

import { useRouter, usePathname } from "next/navigation";
import { TabbarItem } from "@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/components/TabbarItem/TabbarItem";
import { Icon28Devices } from "@telegram-apps/telegram-ui/dist/icons/28/devices";

interface props {
  name: string;
  href: string;
  label: string;
}

export default function TabItem({ name, href, label }: props) {
  const router = useRouter();
  const path = usePathname();

  return (
    <TabbarItem
      selected={path === `/${href}`}
      style={{ paddingInline: 10 }}
      text={name}
      onClick={() => router.push(`/${href}`)}
    >
      {label}
    </TabbarItem>
  );
}
