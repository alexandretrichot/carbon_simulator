import React from 'react';

import Button from './Button';

type Props = {
  title: string,
  description: string,
  value: number,
  unit: string,
  step: number,
  onUpdate: (value: number) => void,

}

export default class Counter extends React.Component<Props> {
  static defaultProps = {
    unit: '',

  }

  updateHandler(value: number) {
    this.props.onUpdate(this.props.value + value);
  }

  render() {
    return <div className="counter">
      <div className="title">{this.props.title}</div>
      <div className="description">{this.props.description}</div>
      <div className="screen">
        <div className="value">{this.props.value}</div>
      </div>
      <div className="buttons">
        <Button color="white" bg="#FFDD2D" shadow="#E6B300" onClick={() => this.updateHandler(this.props.step)}>+{this.props.step}<span className="unit">{this.props.unit}</span></Button>
        <Button color="white" bg="#FFDD2D" shadow="#E6B300" onClick={() => this.updateHandler(-this.props.step)}>-{this.props.step}<span className="unit">{this.props.unit}</span></Button>
      </div>
    </div>;
  }
}
