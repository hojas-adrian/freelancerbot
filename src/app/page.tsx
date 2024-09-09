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
  Headline,
  Title,
  Text,
  LargeTitle,
  Button,
  Banner,
  Image,
  CompactPagination,
  Card,
} from "@telegram-apps/telegram-ui";

import { Icon28AddCircle } from "@telegram-apps/telegram-ui/dist/icons/28/add_circle";
// import { Icon32ProfileColoredSquare } from "@telegram-apps/telegram-ui/dist/icons/28/chat";
import { Icon28Chat } from "@telegram-apps/telegram-ui/dist/icons/28/chat";
import { Link } from "@/components/Link/Link";

import tonSvg from "./_assets/ton.svg";
import SearchBar from "@/components/SearchBar";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";
import { SectionFooter } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionFooter/SectionFooter";
import { CompactPaginationItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/CompactPagination/components/CompactPaginationItem/CompactPaginationItem";
import { CardChip } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import { CardCell } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";

export default function Home() {
  return (
    <div>
      <SearchBar />

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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxHeight: 267,
                flexWrap: "wrap",
                maxWidth: "100%",
                overflow: "scroll",
              }}
            >
              <Cell
                width={"80"}
                multiline={false}
                subtitle={
                  <Text
                    style={{ fontSize: "var(--tgui--subheadline2--font_size)" }}
                  >
                    Fullstack Developer & Backend Developer
                  </Text>
                }
                before={
                  <Avatar
                    size={40}
                    src="https://avatars.githubusercontent.com/u/84640980?v=4"
                  />
                }
              >
                <Caption weight="1">ross96D</Caption>
              </Cell>
              <Cell
                width={"80"}
                subtitle=<Subheadline level="2" weight="3">
                  Subheadline 1 · Regular
                </Subheadline>
                before={
                  <Avatar
                    size={40}
                    src="https://avatars.githubusercontent.com/u/84640980?v=4"
                  />
                }
              >
                <Caption weight="1">ross96D</Caption>
              </Cell>
              <Cell
                width={"80"}
                subtitle={
                  <Subheadline level="2">
                    Fullstack Developer & Backend Developer
                  </Subheadline>
                }
                before={
                  <Avatar
                    size={40}
                    src="https://avatars.githubusercontent.com/u/84640980?v=4"
                  />
                }
              >
                <Caption weight="1">ross96D</Caption>
              </Cell>
              <Cell
                subtitle={
                  <Subheadline level="2">
                    Fullstack Developer & Backend Developer
                  </Subheadline>
                }
                before={
                  <Avatar
                    size={40}
                    src="https://avatars.githubusercontent.com/u/84640980?v=4"
                  />
                }
              >
                <Caption weight="1">ross96D</Caption>
              </Cell>
            </div>
          </Section>
        </div>
        <div style={{ borderRadius: 18, overflow: "hidden" }}>
          <Section>
            <SectionHeader large>Usual title</SectionHeader>

            <Cell
              subtitle={
                <Subheadline level="2">
                  Fullstack Developer & Backend Developer
                </Subheadline>
              }
              before={
                <Avatar
                  size={40}
                  src="https://avatars.githubusercontent.com/u/84640980?v=4"
                />
              }
            >
              <Caption weight="1">ross96D</Caption>
            </Cell>
            <Cell
              subtitle={
                <Subheadline level="2">
                  Fullstack Developer & Backend Developer
                </Subheadline>
              }
              before={
                <Avatar
                  size={40}
                  src="https://avatars.githubusercontent.com/u/84640980?v=4"
                />
              }
            >
              <Caption weight="1">ross96D</Caption>
            </Cell>
            <Cell
              subtitle={
                <Subheadline level="2">
                  Fullstack Developer & Backend Developer
                </Subheadline>
              }
              before={
                <Avatar
                  size={40}
                  src="https://avatars.githubusercontent.com/u/84640980?v=4"
                />
              }
            >
              <Caption weight="1">ross96D</Caption>
            </Cell>
            <SectionFooter>
              <ButtonCell
                style={{ paddingLeft: 0 }}
                before={<Icon28AddCircle />}
              >
                ver mas
              </ButtonCell>
            </SectionFooter>
          </Section>
        </div>

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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxHeight: 267,
                flexWrap: "wrap",
                maxWidth: "100%",
                overflow: "scroll",
              }}
            >
              <Cell
                width={"80"}
                multiline={false}
                subtitle={
                  <Text
                    style={{ fontSize: "var(--tgui--subheadline2--font_size)" }}
                  >
                    Fullstack Developer & Backend Developer
                  </Text>
                }
                before={
                  <Avatar
                    size={40}
                    src="https://avatars.githubusercontent.com/u/84640980?v=4"
                  />
                }
              >
                <Caption weight="1">ross96D</Caption>
              </Cell>
              <Cell
                width={"80"}
                subtitle=<Subheadline level="2" weight="3">
                  Subheadline 1 · Regular
                </Subheadline>
                before={
                  <Avatar
                    size={40}
                    src="https://avatars.githubusercontent.com/u/84640980?v=4"
                  />
                }
              >
                <Caption weight="1">ross96D</Caption>
              </Cell>
              <Cell
                width={"80"}
                subtitle={
                  <Subheadline level="2">
                    Fullstack Developer & Backend Developer
                  </Subheadline>
                }
                before={
                  <Avatar
                    size={40}
                    src="https://avatars.githubusercontent.com/u/84640980?v=4"
                  />
                }
              >
                <Caption weight="1">ross96D</Caption>
              </Cell>
              <Cell
                subtitle={
                  <Subheadline level="2">
                    Fullstack Developer & Backend Developer
                  </Subheadline>
                }
                before={
                  <Avatar
                    size={40}
                    src="https://avatars.githubusercontent.com/u/84640980?v=4"
                  />
                }
              >
                <Caption weight="1">ross96D</Caption>
              </Cell>
            </div>
          </Section>
        </div>
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxHeight: 267,
                flexWrap: "wrap",
                maxWidth: "100%",
                overflow: "scroll",
              }}
            >
              <Cell
                width={"80"}
                multiline={false}
                subtitle={
                  <Text
                    style={{ fontSize: "var(--tgui--subheadline2--font_size)" }}
                  >
                    Fullstack Developer & Backend Developer
                  </Text>
                }
                before={
                  <Avatar
                    size={40}
                    src="https://avatars.githubusercontent.com/u/84640980?v=4"
                  />
                }
              >
                <Caption weight="1">ross96D</Caption>
              </Cell>
              <Cell
                width={"80"}
                subtitle=<Subheadline level="2" weight="3">
                  Subheadline 1 · Regular
                </Subheadline>
                before={
                  <Avatar
                    size={40}
                    src="https://avatars.githubusercontent.com/u/84640980?v=4"
                  />
                }
              >
                <Caption weight="1">ross96D</Caption>
              </Cell>
              <Cell
                width={"80"}
                subtitle={
                  <Subheadline level="2">
                    Fullstack Developer & Backend Developer
                  </Subheadline>
                }
                before={
                  <Avatar
                    size={40}
                    src="https://avatars.githubusercontent.com/u/84640980?v=4"
                  />
                }
              >
                <Caption weight="1">ross96D</Caption>
              </Cell>
              <Cell
                subtitle={
                  <Subheadline level="2">
                    Fullstack Developer & Backend Developer
                  </Subheadline>
                }
                before={
                  <Avatar
                    size={40}
                    src="https://avatars.githubusercontent.com/u/84640980?v=4"
                  />
                }
              >
                <Caption weight="1">ross96D</Caption>
              </Cell>
            </div>
          </Section>
        </div>
      </div>
      <SectionFooter centered>footer</SectionFooter>
    </div>
  );
}
