import React, { Component } from 'react';
import Dialog from '@youzan/zent-dialog';

import Popover from '../src';

import '@youzan/zent-dialog/lib/index.css';
import '../assets/index.scss';
import '../assets/01-simple.scss';

/*
 Popover在其他弹层中时位置是对的。
 */
export default class DialogDemo extends Component {
  state = {
    value: '',
    dialogVisible: false
  };

  closeDialog = () => {
    this.setState({
      dialogVisible: false
    });
  };

  openDialog = () => {
    this.setState({
      dialogVisible: true
    });
  };

  onInputChange = (evt) => {
    this.setState({
      value: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.openDialog}>open dialog</button>
        <Dialog visible={this.state.dialogVisible} title="dialog" onClose={this.closeDialog}>
          <div>
            <p>dialog content</p>

            <Popover position={Popover.Position.TopCenter}>
              <Popover.Trigger.Click>
                <button>click me</button>
              </Popover.Trigger.Click>
              <Popover.Content>
                <div>popover content</div>
                <input value={this.state.value} onChange={this.onInputChange} placeholder="type here..." />
              </Popover.Content>
            </Popover>
          </div>
        </Dialog>
      </div>
    );
  }
}