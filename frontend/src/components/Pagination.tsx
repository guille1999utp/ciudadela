import React, { FC } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

interface PaginationProps {
  onNext: () => void;
  onPrev: () => void;
}

const Pagination: FC<PaginationProps> = ({ onNext, onPrev }) => {
  return (
    <ButtonGroup variant="contained" color="primary" aria-label="pagination" fullWidth style={{margin:"50px 0"}}>
      <Button onClick={onPrev} style={{marginRight:"20px"}}>Anterior</Button>
      <Button onClick={onNext}>Siguiente</Button>
    </ButtonGroup>
  );
};

export default Pagination;