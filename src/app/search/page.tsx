import {
  Avatar,
  ButtonCell,
  Cell,
  Chip,
  Headline,
  IconButton,
  Subheadline,
} from "@telegram-apps/telegram-ui";
import { Icon28Chat } from "@telegram-apps/telegram-ui/dist/icons/28/chat";

export default function search() {
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
          <Avatar
            size={48}
            src="https://avatars.githubusercontent.com/u/84640980?v=4"
          />
        }
        subtitle={
          <Subheadline level="2">
            Fullstack Developer & Backend Developer
          </Subheadline>
        }
        after={
          <div style={{ width: 45 }}>
            <IconButton size="l" mode="bezeled">
              <Icon28Chat />
            </IconButton>
          </div>
        }
      >
        <Headline weight="1">ross96D</Headline>
      </Cell>
      <ButtonCell
        style={{
          display: "flex",
          overflow: "scroll",
          flexWrap: "nowrap",
          paddingBlock: 2,
          alignItems: "flex-start",
          height: 60,
        }}
      >
        <div style={{ display: "flex", gap: 8 }}>
          <Chip mode="outline">JavaScript</Chip>
          <Chip mode="outline">Go</Chip>
          <Chip mode="outline">Dart</Chip>
          <Chip mode="outline">Python</Chip>
          <Chip mode="outline">Lua</Chip>
          <Chip mode="outline">Rust</Chip>
          <Chip mode="outline">Action</Chip>
          <Chip mode="outline">Action</Chip>
        </div>
      </ButtonCell>
    </div>
  );
}
