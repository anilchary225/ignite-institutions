import { useEffect, useState } from "react";
import { Navigate } from "../router/BrowserRouter";
import { adminRequest } from "../lib/enquiryApi";

export default function ProtectedRoute({ children }) {
  const [state, setState] = useState("checking");

  useEffect(() => {
    adminRequest("/admin/me")
      .then(() => setState("authenticated"))
      .catch(() => setState("unauthenticated"));
  }, []);

  if (state === "checking") return null;
  if (state === "unauthenticated") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
