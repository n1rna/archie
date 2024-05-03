"use client";

import { Suspense } from "react";

import { Authenticated } from "@refinedev/core";
import { NavigateToResource } from "@refinedev/nextjs-router";

import "../globals.css";

export default function IndexPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      {/* <NavigateToResource /> */}
      {children}
    </Suspense>
  );
}
