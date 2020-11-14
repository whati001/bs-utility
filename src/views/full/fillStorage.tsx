import React from 'react'
// import Select from 'react-select'
// import style from './style.scss'
import { Row, Col, Alert, Label, Input } from 'reactstrap'


/**
 * Supported storage types by this skill
 */
const STORAGE = {
  TEMP: 'temp',
  SESSION: 'session',
  USER: 'user'
};

const DEF_STORAGE = STORAGE.SESSION;

/**
 * Maximum retries count
 */
const MAX_RETRIES = 10;


export class FillStorage extends React.Component {
  state = {
    storage: DEF_STORAGE,
    varName: undefined,
    maxRetry: 3,
    error: undefined
  }

  handleStorageChange = selectedStorageOption => {
    console.log(selectedStorageOption)
    if (Object.keys(STORAGE).includes(selectedStorageOption)) {
      // this.setState({ 'storage': selectedStorageOption })
    }
  }

  handleVarnameChange = selectedVarnameOption => {
    if (selectedVarnameOption && selectedVarnameOption.length <= 10) {
      // this.setState({ 'varName': selectedVarnameOption })
    }
  }

  render() {
    return (
      <div className="something">
        {this.state.error && <Alert color="danger">{this.state.error}</Alert>}
        <Row style={{ marginBottom: 10 }}>
          <Col md={6}>
            <Label for="storage">Choose an storage</Label>
            <Input
              id="storage"
              name="storage"
              isSearchable
              placeholder="Choose an storage to use"
              className="something more"
              onChange={this.handleStorageChange}
              value={this.state.storage}
              options={STORAGE}
            />
          </Col>
          <Col md={6}>
            <Label for="varName">Choose a variable name</Label>
            <Input
              id="varName"
              name="varName"
              isSearchable
              placeholder="Choose a varName to use"
              className="something even more"
              onChange={this.handleVarnameChange}
              value={this.state.varName}
            />
          </Col>
        </Row>
      </div>
    )
  }
}
