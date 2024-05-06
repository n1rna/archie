import AttachFileIcon from "@mui/icons-material/AttachFile";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import * as React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MediaDropzone from "./media-dropzone";
import { useOne, useShow, useMany, HttpError, useList } from "@refinedev/core";

interface IMediaUpload {
  id: number;
  file_name: string;
  file_extension: string;
  unique_ref: string;
  bucket_ref: string;
}

export default function MediaApp() {
  const { data: designsData, isLoading: designsLoading } = useList<
    IMediaUpload,
    HttpError
  >({
    resource: "media_uploads",
  });
  return (
    <div className="flex flex-col">
      <div className="border-b p-4 flex items-center gap-2">
        <TextField
          className="max-w-xs"
          placeholder="Search files..."
          type="search"
        />
        <Button>
          <FilterAltIcon className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>
      <div className="flex p-4 grid gap-4 overflow-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          style={{
            maxHeight: "480px",
          }}
        >
          <div className="group relative rounded-lg overflow-hidden flex justify-between flex-col">
            <MediaDropzone />
          </div>
          <div
            className="group relative rounded-lg overflow-hidden flex justify-between flex-col"
            style={{
              height: "120px",
            }}
          >
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <AttachFileIcon className="w-8 h-8 text-gray-400" />
            </div>
            <div className="p-2">
              <p className="text-sm font-medium line-clamp-1">
                project_requirements.pdf
              </p>
              <p className="text-xs text-gray-500">PDF File</p>
            </div>
          </div>
          <div
            className="group relative rounded-lg overflow-hidden flex justify-between flex-col"
            style={{
              height: "120px",
            }}
          >
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <AttachFileIcon className="w-8 h-8 text-gray-400" />
            </div>
            <div className="p-2">
              <p className="text-sm font-medium line-clamp-1">
                project_requirements.pdf
              </p>
              <p className="text-xs text-gray-500">PDF File</p>
            </div>
          </div>
          <div
            className="group relative rounded-lg overflow-hidden flex justify-between flex-col"
            style={{
              height: "120px",
            }}
          >
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <AttachFileIcon className="w-8 h-8 text-gray-400" />
            </div>
            <div className="p-2">
              <p className="text-sm font-medium line-clamp-1">
                project_requirements.pdf
              </p>
              <p className="text-xs text-gray-500">PDF File</p>
            </div>
          </div>
          <div
            className="group relative rounded-lg overflow-hidden flex justify-between flex-col"
            style={{
              height: "120px",
            }}
          >
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <AttachFileIcon className="w-8 h-8 text-gray-400" />
            </div>
            <div className="p-2">
              <p className="text-sm font-medium line-clamp-1">
                project_requirements.pdf
              </p>
              <p className="text-xs text-gray-500">PDF File</p>
            </div>
          </div>
          <div
            className="group relative rounded-lg overflow-hidden flex justify-between flex-col"
            style={{
              height: "120px",
            }}
          >
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <AttachFileIcon className="w-8 h-8 text-gray-400" />
            </div>
            <div className="p-2">
              <p className="text-sm font-medium line-clamp-1">
                project_requirements.pdf
              </p>
              <p className="text-xs text-gray-500">PDF File</p>
            </div>
          </div>
          <div
            className="group relative rounded-lg overflow-hidden flex justify-between flex-col"
            style={{
              height: "120px",
            }}
          >
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <AttachFileIcon className="w-8 h-8 text-gray-400" />
            </div>
            <div className="p-2">
              <p className="text-sm font-medium line-clamp-1">
                project_requirements.pdf
              </p>
              <p className="text-xs text-gray-500">PDF File</p>
            </div>
          </div>
          <div
            className="group relative rounded-lg overflow-hidden flex justify-between flex-col"
            style={{
              height: "120px",
            }}
          >
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <AttachFileIcon className="w-8 h-8 text-gray-400" />
            </div>
            <div className="p-2">
              <p className="text-sm font-medium line-clamp-1">
                project_requirements.pdf
              </p>
              <p className="text-xs text-gray-500">PDF File</p>
            </div>
          </div>
          <div
            className="group relative rounded-lg overflow-hidden flex justify-between flex-col"
            style={{
              height: "120px",
            }}
          >
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <AttachFileIcon className="w-8 h-8 text-gray-400" />
            </div>
            <div className="p-2">
              <p className="text-sm font-medium line-clamp-1">
                project_requirements.pdf
              </p>
              <p className="text-xs text-gray-500">PDF File</p>
            </div>
          </div>
          <div
            className="group relative rounded-lg overflow-hidden flex justify-between flex-col"
            style={{
              height: "120px",
            }}
          >
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <AttachFileIcon className="w-8 h-8 text-gray-400" />
            </div>
            <div className="p-2">
              <p className="text-sm font-medium line-clamp-1">
                project_requirements.pdf
              </p>
              <p className="text-xs text-gray-500">PDF File</p>
            </div>
          </div>
          <div
            className="group relative rounded-lg overflow-hidden flex justify-between flex-col"
            style={{
              height: "120px",
            }}
          >
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <AttachFileIcon className="w-8 h-8 text-gray-400" />
            </div>
            <div className="p-2">
              <p className="text-sm font-medium line-clamp-1">
                project_requirements.pdf
              </p>
              <p className="text-xs text-gray-500">PDF File</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t p-4 flex items-center gap-2">
        <Button className="ml-auto">Clear Selection</Button>
      </div>
    </div>
  );
}
