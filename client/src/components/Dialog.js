import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

const DialogProp = (props) => {
  const { maxWidth, open, handleClose, title, content } = props;
  return (
    <Dialog
        fullWidth
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
      { title &&
        <DialogTitle id="max-width-dialog-title">{title}</DialogTitle>
      }
        <DialogContent>
          {content}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  )
};

export default DialogProp;
