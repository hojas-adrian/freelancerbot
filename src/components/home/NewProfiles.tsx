import {
  Section,
  Avatar,
  ButtonCell,
  Caption,
  Cell,
  Subheadline,
} from "@telegram-apps/telegram-ui";
import { SectionFooter } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionFooter/SectionFooter";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";
import { Icon28AddCircle } from "@telegram-apps/telegram-ui/dist/icons/28/add_circle";
import ProfileCell from "./ProfileCell/ProfileCell";

export default function NewProfiles() {
  return (
    <div style={{ borderRadius: 18, overflow: "hidden" }}>
      <Section>
        <SectionHeader large>
          <div
            style={{ display: "flex", fontSize: "1.2em", alignItems: "center" }}
          >
            <img
              style={{
                width: 50,
                height: 40,
                objectFit: "contain",
                objectPosition: 0,
              }}
              src="https://em-content.zobj.net/source/telegram/386/new-button_1f195.webp"
              alt="Top news"
            />
            Top news
          </div>
        </SectionHeader>
        <ProfileCell />
        <ProfileCell />
        <ProfileCell />
        <SectionFooter>
          <ButtonCell style={{ paddingLeft: 0 }} before={<Icon28AddCircle />}>
            view more
          </ButtonCell>
        </SectionFooter>
      </Section>
    </div>
  );
}
