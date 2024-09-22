import {
  Avatar,
  Caption,
  Cell,
  Image,
  Subheadline,
  Text,
} from "@telegram-apps/telegram-ui";
import style from "../ProfileCell/style.module.css";
import Score from "@/components/Score";

export default function ProfileCell() {
  return (
    <Cell
      className={style.cell}
      subtitle={<Score />}
      before={
        <Image
          alt="sd"
          size={48}
          src="https://avatars.githubusercontent.com/u/84640980?v=4"
        />
      }
    >
      <Caption weight="1">Hamster Kombat</Caption>
    </Cell>
  );
}
