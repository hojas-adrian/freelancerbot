import {
  Avatar,
  ButtonCell,
  Cell,
  Chip,
  Headline,
  IconButton,
  Image,
  Subheadline,
} from "@telegram-apps/telegram-ui";
import { Icon28Chat } from "@telegram-apps/telegram-ui/dist/icons/28/chat";
import Score from "../Score";

export default function ProfileSearch() {
  return (
    <div
      style={{
        margin: 9,
        background: " var(--tgui--bg_color)   ",
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <Cell
        interactiveAnimation="background"
        before={
          <Image
            alt=""
            size={48}
            src="https://avatars.githubusercontent.com/u/84640980?v=4"
          />
        }
        subtitle={<Score />}
        after={
          <IconButton size="l" mode="bezeled">
            <div
              style={{
                width: 38,
                height: 38,
                fontSize: "1.5em",
                alignContent: "center",
              }}
            >
              🎮
            </div>
          </IconButton>
        }
      >
        <Headline weight="1">ross96D</Headline>
      </Cell>
      <ButtonCell
        style={{
          display: "flex",
          overflow: "scroll",
          scrollBehavior: "smooth",
          flexWrap: "nowrap",
          paddingBlock: 2,
          alignItems: "flex-start",
          height: 60,
        }}
      >
        <div style={{ display: "flex", gap: 8 }}>
          <Chip mode="outline" style={{ minWidth: "max-content" }}>
            🫵 <span style={{ marginLeft: 10 }}>Clicker</span>
          </Chip>
          <Chip mode="outline" style={{ minWidth: "max-content" }}>
            ⏲️ <span style={{ marginLeft: 10 }}>Timer</span>
          </Chip>
          <Chip mode="outline" style={{ minWidth: "max-content" }}>
            📈 <span style={{ marginLeft: 10 }}>update pph</span>
          </Chip>
        </div>
      </ButtonCell>
    </div>
  );
}
