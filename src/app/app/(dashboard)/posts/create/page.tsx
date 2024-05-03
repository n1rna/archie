"use client";

import { Autocomplete, Box, MenuItem, Button, TextField } from "@mui/material";
import { Create, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Sidebar from "@components/sidebar";
import FilesList from "@components/files-list";
import DiagramViewer from "@components/diagram-viewer";
import ArticleViewer from "@components/article-viewer";
import dynamic from "next/dynamic";
import Select from "react-select";
import PostCreateForm from "@components/post-create-form";

const MDEditor = dynamic(() => import("@components/md-editor"), { ssr: false });

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function PostCreate() {
  const {
    saveButtonProps,
    refineCore: { formLoading, onFinish },
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({});

  return (
    <div>
      <PanelGroup
        className="bg-zinc-850 min-h-screen fixed"
        direction="horizontal"
      >
        <Panel
          className="flex !overflow-auto bg-zinc-900"
          collapsedSize={5}
          collapsible={true}
          maxSize={50}
          minSize={30}
        >
          <MDEditor />
        </Panel>
        <PanelResizeHandle className="bg-black w-1" />
        <Panel className="flex" minSize={50} defaultSize={50}>
          <Box className="flex justify-center relative left-32 top-32">
            <PostCreateForm />
          </Box>
        </Panel>
      </PanelGroup>
    </div>
  );
}
