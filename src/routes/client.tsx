import LayoutClient from "@/layouts/LayoutClient";
import HomePage from "@/pages/client/HomePage";
import PrivacyPage from "@/pages/client/PrivacyPage";
import TermsPage from "@/pages/client/TermsPage";
import { RouteObject } from "react-router-dom";

export const clientRoutes: RouteObject[] = [
  {
    element: <LayoutClient />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/privacy", element: <PrivacyPage /> },
      { path: "/terms", element: <TermsPage /> },
      { path: "/about", element: <div>Giới thiệu (Chưa triển khai)</div> },
      { path: "/contact", element: <div>Liên hệ (Chưa triển khai)</div> },
    ],
  },
];
