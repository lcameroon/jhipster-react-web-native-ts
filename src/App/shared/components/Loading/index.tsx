import React from 'react';
import { Progress } from 'reactstrap';

const Loading = () => {
  return (
    <div className="modal-backdrop fade show">
      <div className="d-flex align-items-center justify-content-center">
        <Progress animated color="info" value="100" />
      </div>
    </div>
  );
};

export default Loading;
