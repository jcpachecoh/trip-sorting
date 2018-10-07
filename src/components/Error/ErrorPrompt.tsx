import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';
import * as _ from 'lodash';

export interface IErrorPromptProps {
  error: string;
  handleErrorPrompt: Function;
}

export class ErrorPrompt extends React.Component<IErrorPromptProps, {}> {
  constructor(props: IErrorPromptProps) {
    super(props);
  }

  render() {
    const { error, handleErrorPrompt } = this.props;
    return (
      <div className="modal-container" style={{ height: 200 }}>
        <Modal show={!_.isEmpty(error)} onHide={() => handleErrorPrompt('')} container={this} aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Error Prompt</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => handleErrorPrompt('')}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
