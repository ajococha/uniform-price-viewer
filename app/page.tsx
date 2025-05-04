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
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        유니폼 가격 비교
      </h1>
      <input
        placeholder="팀 이름 또는 시즌 검색 (예: Inter, 24/25)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
      />
      <div>
        {filtered.map((u, i) => (
          <div key={i} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>{u.team} ({u.season})</div>
            <div style={{ fontSize: '0.9rem' }}>버전: {u.type}</div>
            <div style={{ fontSize: '0.9rem' }}>
              가격: {typeof u.price === "number" ? `${u.price} ${u.site === "크로켓" ? "원" : "USD"}` : u.price}
            </div>
            <a
              href={u.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'blue', fontSize: '0.9rem', textDecoration: 'underline', display: 'inline-block', marginTop: '0.5rem' }}
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
