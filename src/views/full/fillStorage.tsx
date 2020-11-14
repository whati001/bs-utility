import React from 'react'
// @ts-ignore
import Select from 'react-select'
// @ts-ignore
import { Row, Col, Alert, Label, Input } from 'reactstrap'
// @ts-ignore
import { BotpressTooltip } from 'botpress/tooltip'

import { StorageOption, STORAGES } from './../../lib/storage'
import { parseVarName } from './../../lib/input'
import { SkillProps } from './../../lib/typing'

const MAX_RETRIES: number = 10;

interface FillStorageState {
  storage: StorageOption,
  varName: string,
  maxRetry: number,
  error: string
}

type FillStorageProps = SkillProps<FillStorageState>

export class FillStorage extends React.Component<FillStorageProps, FillStorageState> {
  state: FillStorageState = {
    storage: undefined,
    varName: '',
    maxRetry: 3,
    error: undefined
  }

  componentDidMount(): void {
    if (this.props.initialData) {
      this.setStateFromProps(this.props.initialData)
    }
  }

  setStateFromProps(initProps: FillStorageState): void {
    const getPropOrDefault = (key: string): any => initProps[key] ? initProps[key] : this.state[key]

    this.setState({
      storage: getPropOrDefault('storage'),
      varName: getPropOrDefault('varName'),
      maxRetry: getPropOrDefault('maxRetry'),
      error: getPropOrDefault('error')
    })
  }

  hasValidForm(): boolean {
    return this.state.storage
      && (this.state.varName != '')
  }

  componentDidUpdate = (prevProps: FillStorageProps, prevState: FillStorageState): void => {
    if (this.state != prevState && this.hasValidForm()) {
      this.updateParent()
    }
  }

  updateParent(): void {
    this.props.onDataChanged && this.props.onDataChanged(this.state)
    this.props.onValidChanged && this.props.onValidChanged(true)
  }


  handleStorageChange = (selection: StorageOption): void => {
    if (STORAGES.includes(selection))
      this.setState({ 'storage': selection })
    else
      this.setState({ 'error': 'Please select a storage from the selection' })
  }

  handleVarnameChange = (input: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ 'varName': parseVarName(input.target.value) })
  }

  render() {
    return (
      <div className="something">
        {this.state.error && <Alert color="danger">{this.state.error}</Alert>}
        <Row style={{ marginBottom: 10 }}>
          <Col md={6}>
            <BotpressTooltip message="Select the traget storage type" />
            <Label for="storage">Choose an storage</Label>
            <Select
              id="storage"
              name="storage"
              placeholder="Choose an storage to use"
              className="something more"
              onChange={this.handleStorageChange}
              value={this.state.storage}
              options={STORAGES}
            />
          </Col>
          <Col md={6}>
            <BotpressTooltip message="Define the variable name, only letters and numbers are allowed" />
            <Label for="varName">Choose a variable name</Label>
            <Input
              id="varName"
              name="varName"
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
