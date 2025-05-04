"use client";
import { useState } from "react";

const uniforms = [
  {
    team: "Inter Milan",
    season: "24/25",
    type: "Authentic",
    price: 127.49,
    site: "WeGotSoccer",
    link: "https://www.wegotsoccer.com/item/nike-inter-milan-24-25-away-auth-jersey/w35876/wiw"
  },
  {
    team: "Inter Milan",
    season: "24/25",
    type: "Authentic",
    price: 167900,
    site: "크로켓",
    link: "https://www.croket.co.kr/seller/product/670219121c10d053c3a262b3"
  }
];

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = uniforms.filter(
    (u) =>
      u.team.toLowerCase().includes(query.toLowerCase()) ||
      u.season.includes(query)
  );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">유니폼 가격 비교</h1>
      <input
        placeholder="팀 이름 또는 시즌 검색 (예: Inter, 24/25)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-4 border p-2 w-full"
      />
      <div className="space-y-4">
        {filtered.map((u, i) => (
          <div key={i} className="border rounded p-4">
            <div className="font-semibold text-lg">{u.team} ({u.season})</div>
            <div className="text-sm">버전: {u.type}</div>
            <div className="text-sm">가격: {typeof u.price === "number" ? `${u.price} ${u.site === "크로켓" ? "원" : "USD"}` : u.price}</div>
            <a
              href={u.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm underline mt-2 inline-block"
            >
              {u.site}에서 보기
            </a>
          </div>
        ))}
        {filtered.length === 0 && <div>검색 결과가 없습니다.</div>}
      </div>
    </div>
  );
}
