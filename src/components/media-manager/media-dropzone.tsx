import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export default function MediaDropzone() {
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      <div className="flex flex-col items-center justify-center">
        <div className="w-full border-2 border-gray-300 border-dashed rounded-lg p-8 flex flex-col items-center justify-center" style={{
        }}>
          {isDragActive ? (
            <>
              <CloudDownloadIcon className="w-12 h-12 text-gray-400" />
              <p className="text-gray-500 text-center">
                Drop the files here
              </p>
            </>
          ) : (
            <>
              <CloudUploadIcon className="w-12 h-12 text-gray-400" />
              <p className="text-gray-500 text-center">
                Upload new file
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
