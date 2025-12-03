import { useEffect, useState } from "react";

const UTM_KEYS = new Set([
  "utm_source","utm_medium","utm_campaign","utm_term","utm_content",
  "gclid","fbclid"
]);

function getLastUtm() {
  const url = new URL(window.location.href);
  const out = {};
  url.searchParams.forEach((v, k) => { 
    if (UTM_KEYS.has(k)) out[k] = v; 
  });
  return {
    ...out,
    referrer: document.referrer || "",
    landing_page: window.location.origin + window.location.pathname
  };
}

export function useUTM() {
  const [utm, setUtm] = useState({});

  useEffect(() => {
    const data = getLastUtm();
    sessionStorage.setItem("utm_last_touch", JSON.stringify(data));
    setUtm(data);
  }, []);

  return utm;
}
