import React, { useEffect, useMemo, useState } from "react";

const API_URL =
  "https://script.google.com/macros/s/AKfycbxXRv-lv1Ip4-Xio-uTrlzwUgRiXTjOILKTUzlwbtkCDWAB9IxJDjkGNTl6XlJeSkT1/exec";

const LEVELS = [
  { value: "intermediate", label: "INTERMEDIATE" },
  { value: "advanced", label: "ADVANCED" },
  { value: "pro", label: "PRO" },
  { value: "master", label: "MASTER" },
];

const GENDERS = [
  { value: "Nam", label: "NAM" },
  { value: "Nữ", label: "NỮ" },
];

export default function Athletes() {
  const [rows, setRows] = useState([]);
  const [level, setLevel] = useState("intermediate");
  const [gender, setGender] = useState("Nam");
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL, { cache: "no-store" });
        const json = await res.json();
        setRows(Array.isArray(json?.data) ? json.data : []);
      } catch (e) {
        console.error(e);
        setRows([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const norm = (s) => String(s || "").trim().toLowerCase();

  // Map level từ nhiều kiểu nhập (Intermediate / intermediate / ADVANCED...)
  const normLevel = (lv) => {
    const x = norm(lv);
    if (x.includes("inter")) return "intermediate";
    if (x.includes("adv")) return "advanced";
    if (x === "pro" || x.includes("pro")) return "pro";
    if (x.includes("master")) return "master";
    return x;
  };
const toDirect = (url) => {
  url = String(url || "").trim();
  if (!url) return "";

  // /file/d/FILEID/
  let m = url.match(/\/d\/([a-zA-Z0-9_-]+)\//);
  if (m && m[1]) {
    return `https://drive.google.com/thumbnail?id=${m[1]}&sz=w400`;
  }

  // ?id=FILEID
  m = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (m && m[1]) {
    return `https://drive.google.com/thumbnail?id=${m[1]}&sz=w400`;
  }

  return url;
};
  const filtered = useMemo(() => {
    const query = norm(q);

    const base = rows.map((r) => ({
      ...r,
      _name: norm(r.full_name),
      _gender: String(r.gender || "").trim(),
      _level: normLevel(r.level),
      _rating: Number(r.rating || 0),
    }));

    // Search theo tên: không ép level/gender để thấy họ thuộc hạng nào
    if (query) {
      return base
        .filter((r) => r._name.includes(query))
        .sort((a, b) => b._rating - a._rating);
    }

    return base
      .filter((r) => r._level === level)
      .filter((r) => r._gender === gender)
      .sort((a, b) => b._rating - a._rating);
  }, [rows, level, gender, q]);

  return (
    <div className="ath">
      <div className="wrap">
        <header className="hero">
          <div className="title">VẬN ĐỘNG VIÊN</div>
          
          <div className="controls">
            <div className="group">
              
              <div className="row">
                {LEVELS.map((x) => (
                  <button
                    key={x.value}
                    type="button"
                    className={`btn ${level === x.value ? "active" : ""}`}
onClick={() => setLevel(x.value)}
                  >
                    {x.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="group">
              
              <div className="row">
                {GENDERS.map((x) => (
                  <button
                    key={x.value}
                    type="button"
                    className={`btn ${gender === x.value ? "active" : ""}`}
                    onClick={() => setGender(x.value)}
                  >
                    {x.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="group searchGroup">
              <div className="label">TÌM KIẾM</div>
              <input
                className="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="NHẬP HỌ VÀ TÊN VẬN ĐỘNG VIÊN…"
              />
              
            </div>
          </div>
        </header>

        <section className="panel">
          <div className="panelHead">
            <div className="phLeft">
              {q ? "KẾT QUẢ" : "DANH SÁCH"}{" "}
              <span className="badgeGold">
                {q ? "SEARCH" : `${level.toUpperCase()} • ${gender.toUpperCase()}`}
              </span>
            </div>
            <div className="phRight">
              {loading ? "ĐANG TẢI…" : `${filtered.length} VĐV`}
            </div>
          </div>

          {loading ? (
            <TableSkeleton />
          ) : filtered.length === 0 ? (
            <div className="empty">
              Không có vận động viên phù hợp. Thử đổi Level/Nam-Nữ hoặc dùng tìm
              kiếm.
            </div>
          ) : (
            <div className="tableWrap">
              <table className="tbl">
                <thead>
                  <tr>
                    <th className="cRank">STT</th>
                    <th className="cAth">VẬN ĐỘNG VIÊN</th>
                    <th className="cRating">ĐIỂM TRÌNH</th>
                    <th className="cTrend">PHONG ĐỘ</th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.map((r, idx) => (
                    <tr key={r.id || idx} className={idx < 3 ? "top" : ""}>
                      <td className="cRank">
                        <span className={`rankBox ${idx < 3 ? "rankTop" : ""}`}>
                          {String(idx + 1).padStart(2, "0")}
                        </span>
</td>

                      <td className="cAth">
                        <div className="athCell">
                          <div className="avatarWrap">
                            <img
  className="avatar"
  src={toDirect(r.photo_url) || "/placeholder-avatar.png"}
  alt={r.full_name || "athlete"}
  onError={(e) => {
    e.currentTarget.src = "/placeholder-avatar.png";
  }}
/>
                          </div>
                          <div className="athText">
                            <div className="athName">{r.full_name}</div>
                            <div className="athSub">
                              
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="cRating">
                        <span className="rating">{Number(r.rating || 0).toFixed(1)}</span>
                      </td>

                      <td className="cTrend">
                        <TrendBadge trend={r.trend} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>

      
    </div>
  );
}

function TrendBadge({ trend }) {
  const t = String(trend || "neutral").toLowerCase();
  const isUp = t === "up";
  const isDown = t === "down";

  return (
    <span className={`trend ${isUp ? "up" : isDown ? "down" : "neu"}`}>
      {isUp ? "▲ UP" : isDown ? "▼ DOWN" : "—"}
    </span>
  );
}

function TableSkeleton() {
  return (
    <div className="tableWrap">
      <div className="skTable">
        {Array.from({ length: 7 }).map((_, i) => (
          <div className="skRow" key={i}>
            <div className="sk sk1" />
            <div className="sk sk2" />
            <div className="sk sk3" />
            <div className="sk sk4" />
            <div className="sk sk5" />
            <div className="sk sk6" />
          </div>
        ))}
      </div>
    </div>
  );
}

