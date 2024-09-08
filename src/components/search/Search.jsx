import Input from "./Input";
import Button from "../Button";
import style from "./Search.module.css";
// import { useInitData, useLaunchParams } from "@telegram-apps/sdk-react";
import FilterMenu from "./FilterMenu";

export default function Search() {
  // const initData = useInitData();

  // const profile =
  //   initData.user.photoUrl ||
  //   "https://th.bing.com/th/id/R.6c20b7dda5d777931a11933345eb5126?rik=l5bfKaSb63Vp8A&pid=ImgRaw&r=0";

  // console.log(initData.user);

  return (
    <div className={style.search}>
      <FilterMenu />
      <Input />
      <Button className={style.avatar}>
        <img className={style.avatarImage} src={"/user.svg"} alt="avatar" />
      </Button>
    </div>
  );
}
