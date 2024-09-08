"use client";

import {
  Section,
  Cell,
  List,
  Avatar,
  ButtonCell,
  Caption,
  Subheadline,
  Chip,
  IconButton,
} from "@telegram-apps/telegram-ui";

// import { Icon32ProfileColoredSquare } from "@telegram-apps/telegram-ui/dist/icons/28/chat";
import { Icon28Chat } from "@telegram-apps/telegram-ui/dist/icons/28/chat";
import { Link } from "@/components/Link/Link";

import tonSvg from "./_assets/ton.svg";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <List>
      <SearchBar />
      <Section header="yvyt">
        <div
          style={{
            margin: 9,
            background: "var(--tgui--secondary_bg_color)",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <Cell
            before={
              <Avatar
                size={48}
                src="https://avatars.githubusercontent.com/u/84640980?v=4"
              />
            }
            subtitle=<Subheadline level="2">
              Fullstack Developer & Backend Developer
            </Subheadline>
            after={
              <div style={{ width: 45 }}>
                <IconButton size="l" mode="bezeled">
                  <Icon28Chat />
                </IconButton>
              </div>
            }
          >
            <Caption weight="1" level="1">
              ross96D
            </Caption>
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
        <div
          style={{
            margin: 9,
            background: "var(--tgui--secondary_bg_color)",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <Cell
            before={
              <Avatar
                size={48}
                src="https://avatars.githubusercontent.com/u/84640980?v=4"
              />
            }
            subtitle=<Subheadline level="2">
              Fullstack Developer & Backend Developer
            </Subheadline>
            after={
              <div style={{ width: 45 }}>
                <IconButton size="l" mode="bezeled">
                  <Icon28Chat />
                </IconButton>
              </div>
            }
          >
            <Caption weight="1" level="1">
              ross96D
            </Caption>
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
        <div
          style={{
            margin: 9,
            background: "var(--tgui--secondary_bg_color)",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <Cell
            before={
              <Avatar
                size={48}
                src="https://avatars.githubusercontent.com/u/84640980?v=4"
              />
            }
            subtitle=<Subheadline level="2">
              Fullstack Developer & Backend Developer
            </Subheadline>
            after={
              <div style={{ width: 45 }}>
                <IconButton size="l" mode="bezeled">
                  <Icon28Chat />
                </IconButton>
              </div>
            }
          >
            <Caption weight="1" level="1">
              ross96D
            </Caption>
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
        <div
          style={{
            margin: 9,
            background: "var(--tgui--secondary_bg_color)",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <Cell
            before={
              <Avatar
                size={48}
                src="https://avatars.githubusercontent.com/u/84640980?v=4"
              />
            }
            subtitle=<Subheadline level="2">
              Fullstack Developer & Backend Developer
            </Subheadline>
            after={
              <div style={{ width: 45 }}>
                <IconButton size="l" mode="bezeled">
                  <Icon28Chat />
                </IconButton>
              </div>
            }
          >
            <Caption weight="1" level="1">
              ross96D
            </Caption>
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
      </Section>
    </List>
  );
}
