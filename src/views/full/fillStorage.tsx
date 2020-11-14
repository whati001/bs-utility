import React from 'react'
// @ts-ignore
import Select from 'react-select'
// @ts-ignore
import { Container, Row, Col, Alert, Label, Input } from 'reactstrap'
// @ts-ignore
import { BotpressTooltip } from 'botpress/tooltip'
// @ts-ignore
import style from './style.scss'

import { StorageOption, STORAGES } from './../../lib/storage'
import { parseVarName, parseText, parseNumber } from './../../lib/input'
import { SkillProps } from './../../lib/typing'

interface FillStorageState {
  storage: StorageOption
  varName: string
  maxRetry: number
  qText: string
  qOnFailure: string
  validator: string
  error: string
}

type FillStorageProps = SkillProps<FillStorageState>

export class FillStorage extends React.Component<FillStorageProps, FillStorageState> {
  state: FillStorageState = {
    storage: undefined,
    varName: '',
    maxRetry: 3,
    qText: '',
    qOnFailure: '',
    validator: '',
    error: undefined
  }

  componentDidMount = (): void => {
    if (this.props.initialData) {
      this.setStateFromProps(this.props.initialData)
    }
  }

  setStateFromProps = (initProps: FillStorageState): void => {
    const getPropOrDefault = (key: string): any => initProps[key] ? initProps[key] : this.state[key]

    this.setState({
      storage: getPropOrDefault('storage'),
      varName: getPropOrDefault('varName'),
      maxRetry: getPropOrDefault('maxRetry'),
      qText: getPropOrDefault('qText'),
      qOnFailure: getPropOrDefault('qOnFailure'),
      validator: getPropOrDefault('validator'),
      error: getPropOrDefault('error')
    })
  }

  hasValidForm = (): boolean => {
    return this.state.storage
      && (this.state.varName != '')
      && this.state.maxRetry
      && (this.state.qText != '')
      && (this.state.qOnFailure != '')
      && (this.state.validator != '')
  }

  componentDidUpdate = (prevProps: FillStorageProps, prevState: FillStorageState): void => {
    if (this.state != prevState) {
      this.updateParent(this.hasValidForm())
    }
  }

  updateParent = (valid: boolean): void => {
    if (valid) {
      this.props.onDataChanged && this.props.onDataChanged(this.state)
      this.props.onValidChanged && this.props.onValidChanged(true)
    } else {
      this.props.onValidChanged && this.props.onValidChanged(false)
    }
  }


  handleStorageChange = (selection: StorageOption): void => {
    if (STORAGES.includes(selection))
      this.setState({ 'storage': selection })
    else
      this.setState({ error: 'Please select a storage from the selection' })
  }

  handleVarnameChange = (input: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ varName: parseVarName(input.target.value) })
  }

  handleRetryCount = (input: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ maxRetry: parseNumber(input.target.value) })
  }

  handleQuestionChange = (input: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ qText: parseText(input.target.value) })
  }

  handleQuestionOnFailureChange = (input: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ qOnFailure: parseText(input.target.value) })
  }

  handleValidatorChange = (input: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ validator: parseText(input.target.value) })
  }

  render() {
    return (
      <Container className={style.skillContainer}>
        {this.state.error && <Alert color="danger">{this.state.error}</Alert>}
        <Row className={style.skillInput}>
          <Col md={4}>
            <BotpressTooltip message="Select the traget storage type" />
            <Label for="storage">Choose an storage</Label>
            <Select
              id="storage"
              name="storage"
              placeholder="Choose an storage to use"
              onChange={this.handleStorageChange}
              value={this.state.storage}
              options={STORAGES}
            />
          </Col>
          <Col md={4}>
            <BotpressTooltip message="Define the variable name, only letters and numbers are allowed" />
            <Label for="varName">Choose a variable name</Label>
            <Input
              id="varName"
              name="varName"
              placeholder="Choose a varName to use"
              onChange={this.handleVarnameChange}
              value={this.state.varName}
            />
          </Col>
          <Col md={4}>
            <BotpressTooltip message="Define maximal retry count" />
            <Label for="maxRetry">Choose a retry count</Label>
            <Input
              id="maxRetry"
              name="maxRetry"
              placeholder="Choose a retry count"
              onChange={this.handleRetryCount}
              value={this.state.maxRetry}
            />
          </Col>
        </Row>
        <Row className={style.skillInput}>
          <Col md={12}>
            <BotpressTooltip message="Please enter quesiton to ask" />
            <Label for="qText">Define question to ask the user</Label>
            <Input
              id="qText"
              name="qText"
              placeholder="Define some quesition text"
              onChange={this.handleQuestionChange}
              value={this.state.qText}
            />
          </Col>
        </Row>
        <Row className={style.skillInput}>
          <Col md={12}>
            <BotpressTooltip message="Please enter quesiton on failure to ask" />
            <Label for="qText">Define question on failure to ask the user</Label>
            <Input
              id="qOnFailure"
              name="qOnFailure"
              placeholder="Define some quesition on failure text"
              onChange={this.handleQuestionOnFailureChange}
              value={this.state.qOnFailure}
            />
          </Col>
        </Row>
        <Row className={style.skillInput}>
          <Col md={12}>
            <BotpressTooltip message="Please enter validator to verify user input" />
            <Label for="validator">Define validator action to verify users input</Label>
            <Input
              id="validator"
              name="validator"
              placeholder="Define some quesition on failure text"
              onChange={this.handleValidatorChange}
              value={this.state.validator}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}
