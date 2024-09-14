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
        <SectionHeader
          large
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          Usual title{" "}
          <Button mode="plain" size="s">
            All
          </Button>
        </SectionHeader>
        <div className={style.container}>
          <ProfileCell type="popularCell" />
          <ProfileCell type="popularCell" />
          <ProfileCell type="popularCell" />
          <ProfileCell type="popularCell" />
          <ProfileCell type="popularCell" />
          <ProfileCell type="popularCell" />
          <ProfileCell type="popularCell" />
          <ProfileCell type="popularCell" />
          <ProfileCell type="popularCell" />
        </div>
      </Section>
    </div>
  );
}
