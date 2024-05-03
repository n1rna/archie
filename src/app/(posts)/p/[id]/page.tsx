"use client";

import * as React from "react";

import { Authenticated } from "@refinedev/core";
import { NavigateToResource } from "@refinedev/nextjs-router";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import Sidebar from "@components/sidebar";
import FilesList from "@components/files-list";
import DiagramViewer from "@components/diagram-viewer";
import ArticleViewer from "@components/article-viewer";

export default function PostsPage() {
  // const [state, dispatch] = React.useReducer(reducer, initialState);

  // const { currentFileIndex, fileListCollapsed, openFiles } = state;

  // const currentFile = openFiles[currentFileIndex] ?? null;

  // const closeFile = (file: File) => {
  //   dispatch({ type: "close", file });
  // };

  // const openFile = (file: File) => {
  //   dispatch({ type: "open", file });
  // };

  // const onCollapse = () => {
  //   dispatch({ type: "toggleCollapsed", collapsed: false });
  // };

  // const onExpand = () => {
  //   dispatch({ type: "toggleCollapsed", collapsed: true });
  // };

  return (
    <div>
      <PanelGroup className="bg-cyan-950 min-h-screen" direction="horizontal">
        <Sidebar />
        <Panel
          className="flex"
          collapsedSize={5}
          collapsible={true}
          defaultSize={15}
          maxSize={20}
          minSize={15}
        >
          <FilesList />
        </Panel>
        <PanelResizeHandle className="bg-black w-1" />
        <Panel
          className="flex"
          collapsedSize={5}
          collapsible={true}
          defaultSize={15}
          maxSize={40}
          minSize={15}
        >
          <ArticleViewer />
        </Panel>
        <PanelResizeHandle className="bg-black w-1" />
        <Panel className="flex" minSize={20}>
          <DiagramViewer />
        </Panel>
      </PanelGroup>
    </div>
  );
}
