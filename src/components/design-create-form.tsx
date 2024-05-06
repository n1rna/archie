"use client";

import {
  Autocomplete,
  Box,
  MenuItem,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import CloudUploadIcon from "@mui/icons-material/Save";
import SaveIcon from "@mui/icons-material/Save";
import Input from "@mui/material/Input";
import { Create, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Sidebar from "@components/sidebar";
import FilesList from "@components/files-list";
import DiagramViewer from "@components/diagram-viewer";
import ArticleViewer from "@components/article-viewer";
import dynamic from "next/dynamic";
import * as React from "react";
import Select, { ActionMeta, OnChangeValue, StylesConfig } from "react-select";

import { supabaseClient } from "@utility/supabase-client";
import { styled } from "@mui/material/styles";
import MediaAppButton from "@/components/media-manager/media-button";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function DesignCreateForm({
  formProps,
}: {
  formProps: {
    handleSubmit: any;
    register: any;
  };
}) {
  const [isUploadLoading, setIsUploadLoading] = React.useState(false);

  // Handle file upload event
  const uploadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const file: File = (target.files as FileList)[0];

    const bucket = "designs_xml";

    // Call Storage API to upload file
    setIsUploadLoading(true);

    const { data, error } = await supabaseClient.storage
      .from(bucket)
      .upload(file.name, file);

    setIsUploadLoading(false);

    // Handle error if upload failed
    if (error) {
      alert("Error uploading file.");
      return;
    }

    alert("File uploaded successfully!");
  };

  return (
    <Box className="flex flex-col w-96 gap-6">
      <Box className="flex flex-col gap-1">
        <Typography className="font-bold text-slate-300" variant="subtitle2">
          Choose a file
        </Typography>

        <MediaAppButton />
      </Box>

      <Box className="flex flex-col gap-1">
        <Typography className="font-bold text-slate-300" variant="subtitle2">
          Group
        </Typography>
        <Select options={options} />
      </Box>

      <Box className="flex gap-2">
        <Button variant="contained">Save</Button>
        <Button variant="contained">Save and Publish</Button>
      </Box>
    </Box>
  );
}
