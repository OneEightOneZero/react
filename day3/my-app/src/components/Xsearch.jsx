import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';

export default class Xsearch extends Component {
  state = {
    value: '美食',
  };
  componentDidMount() {
    this.autoFocusInst.focus();
  }
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  render() {
    return (<div>
      <SearchBar placeholder="自动获取光标" ref={ref => this.autoFocusInst = ref} />
    </div>);
  }
}