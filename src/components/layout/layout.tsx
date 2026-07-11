import { MotionConfig } from "motion/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { FloatingChatWidget } from "@/components/floating-chat-widget";
import { ScrollToHash } from "@/lib/scroll-to-hash";

export function Layout() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <ScrollToHash />
      <Outlet />
      <Footer />
      <FloatingChatWidget />
    </MotionConfig>
  );
}
