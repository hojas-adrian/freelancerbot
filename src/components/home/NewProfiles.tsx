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
        <SectionHeader large>Usual title</SectionHeader>
        <ProfileCell type="newCell" />
        <ProfileCell type="newCell" />
        <ProfileCell type="newCell" />
        <SectionFooter>
          <ButtonCell style={{ paddingLeft: 0 }} before={<Icon28AddCircle />}>
            ver mas
          </ButtonCell>
        </SectionFooter>
      </Section>
    </div>
  );
}
