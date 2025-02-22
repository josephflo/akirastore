"use client";

import { convertFileToUrl } from "@/lib/utils";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

type FileUploaderProps = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
};

export const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="file-upload">
      <input {...getInputProps()} />
      {files && files.length > 0 ? (
        <div className="uploaded-images-grid">
          {files.length === 1 ? (
            // Si solo hay una imagen, mostrarla grande
            <Image
              src={convertFileToUrl(files[0])}
              width={500}
              height={600}
              alt="uploaded image"
              className="max-h-[600px] overflow-hidden object-cover"
            />
          ) : (
            files.map((file, index) => (
              <div className="flex" key={index}>
                <Image
                  key={index}
                  src={convertFileToUrl(file)}
                  width={200}
                  height={200}
                  alt={`uploaded image ${index}`}
                  className="max-h-[200px] overflow-hidden object-cover"
                />
              </div>
            ))
          )}
        </div>
      ) : (
        <>
          <Image src="/upload.svg" width={40} height={40} alt="upload" />
          <div className="file-upload_label">
            <p className="text-14-regular ">
              <span className="text-green-500">Click to upload </span>
              or drag and drop
            </p>
            <p className="text-12-regular">
              SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
          </div>
        </>
      )}
    </div>
  );
};
