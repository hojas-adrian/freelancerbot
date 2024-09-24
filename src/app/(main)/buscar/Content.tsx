"use client";

import { useInitData } from "@telegram-apps/sdk-react";
import ProfileSearch from "@/components/search/ProfileSearch";

export default function Content() {
  const initData = useInitData();

  return (
    <>
      <h1>
        {initData?.hash} <br />
        {initData?.queryId} <br />
        {initData?.startParam}
      </h1>
      <ProfileSearch />
      <ProfileSearch />
      <ProfileSearch />
      <ProfileSearch />
      <ProfileSearch />
      <ProfileSearch />
      <ProfileSearch />
      <ProfileSearch />
    </>
  );
}
