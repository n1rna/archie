"use client";

import { Suspense } from "react";
import { ThemedLayout } from "@components/themed-layout";

import { Authenticated } from "@refinedev/core";
import { NavigateToResource } from "@refinedev/nextjs-router";

export default function IndexPage() {
  return (
    <ThemedLayout>
        <NavigateToResource />
    </ThemedLayout>
  );
}
