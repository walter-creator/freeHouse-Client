import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Button, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DragAndDropFileUpload = ({ onFilesAdded }) => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    const newFiles = acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));
    setFiles([...files, ...newFiles]);
    onFilesAdded([...files, ...newFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*'
  });

  const removeFile = (file) => () => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
    onFilesAdded(newFiles);
  };

  const thumbs = files.map(file => (
    <Box key={file.name} sx={{ display: 'inline-flex', borderRadius: 2, border: 1, borderColor: 'grey.300', m: 1, p: 1, boxSizing: 'border-box' }}>
      <Box sx={{ display: 'flex', minWidth: 0, overflow: 'hidden' }}>
        <img
          src={file.preview}
          alt={file.name}
          style={{ display: 'block', width: '100px', height: '100%' }}
        />
      </Box>
      <Button onClick={removeFile(file)} startIcon={<DeleteIcon />} />
    </Box>
  ));

  return (
    <Box>
      <Box {...getRootProps({ className: 'dropzone' })} sx={{ border: '2px dashed grey', borderRadius: 2, p: 2, textAlign: 'center' }}>
        <input {...getInputProps()} />
        <Typography>Drag 'n' drop some files here, or click to select files</Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Grid container>
          {thumbs}
        </Grid>
      </Box>
    </Box>
  );
};

export default DragAndDropFileUpload;
