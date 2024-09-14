import {
  Avatar,
  Caption,
  Cell,
  Subheadline,
  Text,
} from "@telegram-apps/telegram-ui";
import style from "../ProfileCell/style.module.css";

export default function ProfileCell({
  type,
}: {
  type: "popularCell" | "newCell";
}) {
  return (
    <Cell
      className={type === "popularCell" ? style.cell : ""}
      subtitle={
        type === "popularCell" ? (
          <Text className={style.description}>
            Fullstack Developer & Backend Developer
          </Text>
        ) : (
          <Subheadline level="2">
            Fullstack Developer & Backend Developer
          </Subheadline>
        )
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
  );
}
