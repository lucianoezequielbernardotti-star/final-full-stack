import React from "react";
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack";

export function ComponentTest() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
    <Stack spacing={2} direction="row">
        <Button variant="outlined">Hello World</Button>
        <Button variant="contained">Hello World</Button>
        <Button variant="text">Hello World</Button>
      </Stack>
    </div>
  );
}