"use client";

import {
  Autocomplete,
  Box,
  MenuItem,
  Button,
  TextField,
  Typography,
} from "@mui/material";
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

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function PostCreateForm() {
  return (
    <Box className="flex flex-col w-96 gap-6">
      <Box className="flex flex-col gap-1">
        <Typography className="font-bold text-slate-300" variant="subtitle2">
          Select a fetaured image
        </Typography>
        <TextField
          id="outlined-basic"
          label="Feature image"
          variant="outlined"
        />
      </Box>
      <Box className="flex flex-col gap-1">
        <Typography className="font-bold text-slate-300" variant="subtitle2">
          Add some designs to your post
        </Typography>
        <TextField
          id="outlined-basic"
          label="Designs"
          variant="outlined"
        />
      </Box>

      <Box className="flex flex-col gap-1">
        <Typography className="font-bold text-slate-300" variant="subtitle2">
          Tags
        </Typography>
        <Select
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          options={options}
        />
      </Box>
      <Box className="flex flex-col gap-1">
        <Typography className="font-bold text-slate-300" variant="subtitle2">
          Category
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
