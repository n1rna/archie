import { DevtoolsProvider } from "@providers/devtools";
import { GitHubBanner, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { notificationProvider, RefineSnackbarProvider } from "@refinedev/mui";
import routerProvider from "@refinedev/nextjs-router";
import { Metadata } from "next";
import { cookies } from "next/headers";
import React, { Suspense } from "react";

import { ColorModeContextProvider } from "@contexts/color-mode";
import { authProvider } from "@providers/auth-provider";
import { dataProvider } from "@providers/data-provider";

import { Authenticated } from "@refinedev/core";
import DescriptionIcon from "@mui/icons-material/Description";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

export const metadata: Metadata = {
  title: "Archie",
  description: "Share Software Architecture Ideas with the World",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  const defaultMode = theme?.value === "dark" ? "dark" : "light";

  return (
    <Suspense>
      <RefineKbarProvider>
        <ColorModeContextProvider defaultMode={defaultMode}>
          <RefineSnackbarProvider>
            <DevtoolsProvider>
              <Refine
                routerProvider={routerProvider}
                authProvider={authProvider}
                dataProvider={dataProvider}
                notificationProvider={notificationProvider}
                resources={[
                  {
                    name: "posts",
                    list: "/app/posts",
                    create: "/app/posts/create",
                    edit: "/app/posts/edit/:id",
                    show: "/app/posts/show/:id",
                    meta: {
                      canDelete: true,
                      icon: <DescriptionIcon />,
                    },
                  },
                  {
                    name: "designs",
                    list: "/app/designs",
                    create: "/app/designs/create",
                    edit: "/app/designs/edit/:id",
                    show: "/app/designs/show/:id",
                    meta: {
                      canDelete: true,
                      icon: <DesignServicesIcon />,
                    },
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                }}
              >
                <Authenticated key="dashboard">{children}</Authenticated>
                <RefineKbar />
              </Refine>
            </DevtoolsProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </Suspense>
  );
}
