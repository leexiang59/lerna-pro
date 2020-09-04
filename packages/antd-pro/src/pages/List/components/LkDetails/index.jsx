import React from 'react';
import { Drawer } from 'antd';
import LkDetailsContent from './LkDetailsContent';

class LkDetails extends React.Component {
  state = {
    visible: false,
  };

  open = () => {
    this.setState({ visible: true });
  };

  close = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    return (
      <Drawer
        className="lk-details"
        width={940}
        title="详细信息"
        placement="right"
        visible={visible}
        destroyOnClose
        onClose={this.close}
      >
        <LkDetailsContent {...this.props} />
      </Drawer>
    );
  }
}
export default LkDetails;
