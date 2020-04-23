import React from 'react';
import { Button } from '@material-ui/core';

const ActionButton = (props) => {
  const { text, action } = props;
  console.log(action);

  return (
    <Button onClick={action}>{text}</Button>
  );
};

export default ActionButton;
