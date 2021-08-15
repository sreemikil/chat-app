import React from "react";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";

const filterBySize = (file) => {
  //filter out images larger than 5MB
  return file.size <= 5242880;
};

const App = () => (
  <Uploady
    destination={{ url: "my-server.com/upload" }}
    fileFilter={filterBySize}
    accept="image/*"
  >
    <UploadButton />
    <UploadPreview />   
  </Uploady>
);