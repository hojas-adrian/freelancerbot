"use client";

import {
  Button,
  Banner,
  Image,
  CompactPagination,
} from "@telegram-apps/telegram-ui";

import { SectionFooter } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionFooter/SectionFooter";
import { CompactPaginationItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/CompactPagination/components/CompactPaginationItem/CompactPaginationItem";
import BestProfiles from "@/components/home/BestProfiles";
import NewProfiles from "@/components/home/NewProfiles";

export default function Home() {
  return (
    <div>
      <SectionFooter centered>footer</SectionFooter>
      <div
        style={{
          alignItems: "center",
          background: "var(--tgui--secondary_bg_color)",
          display: "flex",
          flexDirection: "column",
          alignContent: "stretch",
          padding: 8,
        }}
      >
        <Banner
          style={{
            // marginInline: 8,
            width: "100%",
            alignContent: "flex-end",
            flexWrap: "wrap",
            aspectRatio: 1,
          }}
          background={<Image size={96} alt="add" />}
          // callout="Urgent notification"
          description="Start exploring TON in a new, better way"
          header="Introducing TON Space"
          // onCloseIcon={function noRefCheck() {}}
          type="inline"
        >
          <>
            <Button size="s">Try it out</Button>
            <Button mode="plain" size="s">
              Maybe later
            </Button>
          </>
        </Banner>
        <CompactPagination mode="white">
          <CompactPaginationItem onClick={function noRefCheck() {}} selected>
            1
          </CompactPaginationItem>
          <CompactPaginationItem onClick={function noRefCheck() {}}>
            2
          </CompactPaginationItem>
          <CompactPaginationItem onClick={function noRefCheck() {}}>
            3
          </CompactPaginationItem>
        </CompactPagination>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
          padding: 8,
        }}
      >
        <NewProfiles />
        <BestProfiles />
        <BestProfiles />
        <BestProfiles />
      </div>
    </div>
  );
}
