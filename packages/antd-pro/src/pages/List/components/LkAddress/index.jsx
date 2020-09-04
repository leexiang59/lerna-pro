import React from 'react';
import { Cascader } from 'antd';
import address from './address';

export default (props) => <Cascader {...props} options={address} />;
