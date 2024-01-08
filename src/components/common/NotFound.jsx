import { useEffect } from "react";
import { readCookie } from "./../../utils/cookies";

export default function NotFound() {
  useEffect(() => {
    if (!readCookie("socketAppToken")) {
      document.location = "/login";
    }
  }, []);

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "25%" }}>
        <h1>Not Found | 404</h1>
      </div>
    </>
  );
}
