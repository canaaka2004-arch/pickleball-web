import React, { useEffect, useMemo, useState } from "react";
import { getTranslations } from "../translations";

const LEVELS = [
  { value: "intermediate", label: "Intermediate (<2.5)", min: 0, max: 2.4 },
  { value: "advanced", label: "Advanced (2.5-3.1)", min: 2.5, max: 3.1 },
  { value: "pro", label: "Pro (3.2-3.9)", min: 3.2, max: 3.9 },
  { value: "master", label: "Master (>3.9)", min: 4.0, max: 99 },
];

export default function RegisterPage({ language = "vi" }) {
  const t = getTranslations(language).register;

  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    phone: "",
    email: "",
    gender: "",
    level: "",
    rating: "",
    countryCode:"",
    photo: null,
    photoBase64: "",
    photoName: "",
  });

  const [countries, setCountries] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const levelRule = useMemo(
    () => LEVELS.find((l) => l.value === form.level),
    [form.level]
  );
  useEffect(() => {
  (async () => {
    try {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,cca2"
      );
      const data = await res.json();

      const list = (Array.isArray(data) ? data : [])
        .filter((c) => c?.cca2 && c?.name?.common)
        .map((c) => ({
          code: c.cca2,
          name: c.name.common,
        }))
        .sort((a, b) => a.name.localeCompare(b.name));

      setCountries(list);
    } catch (e) {
      console.error("Load countries failed:", e);
      setCountries([]);
    }
  })();
}, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
    setSuccessMsg("");
  };

  const onFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setForm((p) => ({ ...p, photo: file }));
    setErrors((p) => ({ ...p, photo: "" }));
    setSuccessMsg("");
  };

  const validate = () => {
    const next = {};

    if (!form.fullName.trim()) next.fullName = t.errFullName;
    if (!form.dob) next.dob = t.errDob;
    if (!form.phone.trim()) next.phone = t.errPhone;
    if (!form.gender) next.gender = t.errGender;
    if (!form.level) next.level = t.errLevel;
    if (!form.rating.toString().trim()) next.rating = t.errRating;
    if (!form.countryCode) next.countryCode = t.errCountry;

    const ratingNum = Number(form.rating);
    if (form.rating && (Number.isNaN(ratingNum) || ratingNum < 0)) {
      next.rating = t.errRatingNum;
    }

    if (form.level && form.rating && !Number.isNaN(ratingNum)) {
      const rule = LEVELS.find((l) => l.value === form.level);
      if (rule) {
        const ok = ratingNum >= rule.min && ratingNum <= rule.max;
        if (!ok) {
          next.rating = t.errRatingRange
            .replace('{label}', rule.label)
            .replace('{min}', rule.min)
            .replace('{max}', rule.max);
        }
      }
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxXRv-lv1Ip4-Xio-uTrlzwUgRiXTjOILKTUzlwbtkCDWAB9IxJDjkGNTl6XlJeSkT1/exec";

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    if (!validate()) return;

    setSubmitting(true);
    try {
      let photoBase64 = "";
      let photoName = "";

      if (form.photo) {
        photoBase64 = await toBase64(form.photo);
        photoName = form.photo.name;
      }

      const payload = {
        fullName: form.fullName.trim(),
        dob: form.dob,
        phone: form.phone.trim(),
        email: form.email.trim(),
        countryCode: form.countryCode, 
        gender: form.gender,
        level: form.level,
        rating: Number(form.rating),
        photoBase64,
        photoName,
      };

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Submit failed");

      setSuccessMsg(t.successMsg);
      setForm({
        fullName: "",
        dob: "",
        phone: "",
        email: "",
        gender: "",
        level: "",
        rating: "",
        countryCode: "",
        photo: null,
        photoBase64: "",
        photoName: "",
      });
      setErrors({});
    } catch (err) {
      alert(`${t.errorSubmit}: ${err?.message || t.unknownError}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="register-wrap">
      <h1 className="register-title">{t.title}</h1>
<form className="register-form" onSubmit={onSubmit}>
        <div className="field">
          <label>{t.fullName} *</label>
          <input name="fullName" value={form.fullName} onChange={onChange} />
          {errors.fullName && <div className="err">{errors.fullName}</div>}
        </div>

        <div className="field">
          <label>{t.dob} *</label>
          <input type="date" name="dob" value={form.dob} onChange={onChange} />
          {errors.dob && <div className="err">{errors.dob}</div>}
        </div>

        <div className="field">
          <label>{t.phone} *</label>
          <input name="phone" value={form.phone} onChange={onChange} />
          {errors.phone && <div className="err">{errors.phone}</div>}
        </div>

        <div className="field">
          <label>{t.email}</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
          />
        </div>
        {}
<div className="field">
  <label>{t.country} *</label>
  <select name="countryCode" value={form.countryCode} onChange={onChange}>
    <option value="">{t.chooseCountry}</option>
    {countries.map((c) => (
      <option key={c.code} value={c.code}>
        {c.name} ({c.code})
      </option>
    ))}
  </select>
  {errors.countryCode && <div className="err">{errors.countryCode}</div>}
</div>

        {}
        <div className="field">
          <label>{t.gender} *</label>
          <select name="gender" value={form.gender} onChange={onChange}>
            <option value="">{t.chooseGender}</option>
            <option value="Nam">{t.male}</option>
            <option value="Nữ">{t.female}</option>
          </select>
          {errors.gender && <div className="err">{errors.gender}</div>}
        </div>

        <div className="field">
          <label>{t.level} *</label>
          <select name="level" value={form.level} onChange={onChange}>
            <option value="">{t.chooseLevel}</option>
            {LEVELS.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>
          {errors.level && <div className="err">{errors.level}</div>}
        </div>

        <div className="field">
          <label>{t.rating} *</label>
          <input
            name="rating"
            value={form.rating}
            onChange={onChange}
            inputMode="decimal"
            placeholder={
              levelRule ? `${levelRule.min} - ${levelRule.max}` : t.ratingPlaceholder
            }
          />
          {errors.rating && <div className="err">{errors.rating}</div>}
        </div>

        <div className="field">
          <label>{t.upload}</label>
          <input type="file" accept="image/*" onChange={onFileChange} />
          {errors.photo && <div className="err">{errors.photo}</div>}
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? t.sending : t.submit}
        </button>

        {successMsg && <div className="success">{successMsg}</div>}
      </form>
    </div>
  );
}