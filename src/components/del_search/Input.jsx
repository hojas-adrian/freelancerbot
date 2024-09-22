"use client";

import { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import useDebounce from "@/hooks/useDebounce";
import style from "./Input.module.css";

export default function Input() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const [name, setName] = useState(searchParams.get("name"));

  useDebounce(() => {
    const params = new URLSearchParams(searchParams);

    if ((name?.trim() || "") === (params.get("name") || "")) {
      return;
    }

    if (name?.trim()) {
      params.set("name", name.trim());
    } else {
      params.delete("name");
    }
    router.push(`${pathName}?${params}`);
  }, 1000);

  return (
    <input
      style={{
        background: "none",
        color: "var(--tgui--hint_color)",
        outline: "none",
      }}
      onChange={(event) => setName(event.target.value)}
      className={style.input}
      type="text"
      name="search"
      id="search"
      placeholder="Search by role"
      defaultValue={name}
    />
  );
}
