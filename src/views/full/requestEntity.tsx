import React from 'react'
// @ts-ignore
import Select from 'react-select'
// @ts-ignore
import ContentPickerWidget from 'botpress/content-picker'
// @ts-ignore
import { Container, Row, Col, Alert, Label, Input } from 'reactstrap'
// @ts-ignore
import { BotpressTooltip } from 'botpress/tooltip'
// @ts-ignore
import style from './style.scss'

import { ContentElement } from 'botpress/sdk'
import { STORAGES } from './../../lib/storage'
import { parseVarName, parseNumber } from './../../lib/input'
import { StorageOption, EntityOption, SkillProps } from './../../lib/typing'

interface RequestEntityConfig {
  storage: StorageOption
  varName: string
  maxRetry: number
  qText: string
  qOnFailure: string
  entity: EntityOption
  error: string
}


type RequestEntityProps = SkillProps<RequestEntityConfig>
type State = RequestEntityConfig & { entities: EntityOption[] };

export class RequestEntity extends React.Component<RequestEntityProps, State> {

  state: State = {
    storage: undefined,
    varName: '',
    maxRetry: 3,
    qText: '',
    qOnFailure: '',
    entity: undefined,
    entities: [],
    error: undefined
  }

  componentDidMount = async () => {
    if (this.props.initialData) {
      this.setStateFromProps(this.props.initialData)
    }
    this.fetchEntities()
  }

  fetchEntities = async () => {
    // this.props.bp.axios.get('/mod/nlu/entities').then(ents => console.log(ents))
    this.setState({
      'entities': [
        { value: 'email', label: 'E-mail' }
      ]
    })
  }

  setStateFromProps = (initProps: RequestEntityConfig): void => {
    const getPropOrDefault = (key: string): any => initProps[key] ? initProps[key] : this.state[key]

    this.setState({
      storage: getPropOrDefault('storage'),
      varName: getPropOrDefault('varName'),
      maxRetry: getPropOrDefault('maxRetry'),
      qText: getPropOrDefault('qText'),
      qOnFailure: getPropOrDefault('qOnFailure'),
      entity: getPropOrDefault('entity'),
      entities: getPropOrDefault('entities'),
      error: getPropOrDefault('error')
    })
  }

  hasValidForm = (): boolean => {
    return this.state.storage
      && (this.state.varName != '')
      && this.state.maxRetry
      && (this.state.qText != '')
      && (this.state.qOnFailure != '')
      && (this.state.entity != undefined)
  }

  componentDidUpdate = (prevProps: RequestEntityProps, prevState: State): void => {
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

  handleQuestionChange = (item: ContentElement): void => {
    this.setState({ qText: item.id })
  }

  handleQuestionOnFailureChange = (item: ContentElement): void => {
    this.setState({ qOnFailure: item.id })
  }

  handleEntityChange = (selection: EntityOption): void => {
    this.setState({ entity: selection })
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
            <ContentPickerWidget
              id="qText"
              name="qText"
              itemId={this.state.qText}
              placeholder="Define some quesition text"
              onChange={this.handleQuestionChange}
            />
          </Col>
        </Row>
        <Row className={style.skillInput}>
          <Col md={12}>
            <BotpressTooltip message="Please enter quesiton on failure to ask" />
            <Label for="qText">Define question on failure to ask the user</Label>
            <ContentPickerWidget
              id="qOnFailure"
              name="qOnFailure"
              placeholder="Define some quesition on failure text"
              itemId={this.state.qOnFailure}
              onChange={this.handleQuestionOnFailureChange}
            />
          </Col>
        </Row>
        <Row className={style.skillInput}>
          <Col md={12}>
            <BotpressTooltip message="Please select an entity type to use" />
            <Label for="entity">Select entity type to use</Label>
            <Select
              id="entity"
              name="entity"
              placeholder="Select entity to use"
              onChange={this.handleEntityChange}
              value={this.state.entity}
              options={this.state.entities}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}
