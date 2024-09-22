import style from "./style.module.css";

import {
  Avatar,
  Button,
  Caption,
  Text,
  Cell,
  Section,
  Subheadline,
} from "@telegram-apps/telegram-ui";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";
import ProfileCell from "./ProfileCell/ProfileCell";

export default function BestProfiles() {
  return (
    <div style={{ borderRadius: 18, overflow: "hidden" }}>
      <Section>
        <SectionHeader large>
          <div
            style={{
              display: "flex",
              fontSize: "1.2em",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              style={{
                width: 50,
                height: 40,
                objectFit: "contain",
                objectPosition: 0,
              }}
              src="https://em-content.zobj.net/source/telegram/358/calendar_1f4c5.webp"
              alt="click"
            />
            Daily loggin
            <Button
              style={{ alignSelf: "end", marginLeft: "auto" }}
              mode="plain"
              size="s"
            >
              See all ↗
            </Button>
          </div>
        </SectionHeader>
        <div className={style.container}>
          <ProfileCell />
          <ProfileCell />
          <ProfileCell />
          <ProfileCell />
          <ProfileCell />
          <ProfileCell />
          <ProfileCell />
          <ProfileCell />
          <ProfileCell />
        </div>
      </Section>
    </div>
  );
}
