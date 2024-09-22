"use client";

// import { getC } from "@/api/supabase";
import { useClientOnce } from "@/hooks/useClientOnce";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterMenu() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const [value, setValue] = useState("");
  const [c, setC] = useState([{ value: "", option: "🌎", name: "All" }]);

  useClientOnce(() => {
    // const getData = async () => {
    //   const country = await getC();
    //   setC([{ value: "", option: "🌎", name: "All" }, ...country]);
    // };
    // getData();
  });

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (value === (params.get("country") || "")) {
      return;
    }

    if (value) {
      params.set("country", value);
    } else {
      params.delete("country");
    }
    router.push(`${pathName}?${params}`);
  }, [searchParams, value, router, pathName]);

  return (
    <div style={{ position: "relative" }}>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0,
        }}
      >
        {c.map((e) => (
          <option key={e.value} value={e.value}>
            {e.name}
          </option>
        ))}
      </select>

      <select
        value={value}
        style={{
          background: "none",
          border: "none",
          outline: "none",
          color: "var(--tgui--secondary_hint_color)",
          paddingInline: "8px 3px",
          fontSize: "1.5em",
          marginInlineEnd: 8,
        }}
      >
        {c.map((e) => (
          <option key={e.value} value={e.value}>
            {e.option}
          </option>
        ))}
      </select>
    </div>
  );
}
