/** @format */

import { ConfigProvider } from 'antd';
import { OPDProvider } from '../../context/OPDContext';
import OPDContent from './Content';

const OPDDashboard = () => {
  return (
    <ConfigProvider>
      <OPDProvider>
        <OPDContent />
      </OPDProvider>
    </ConfigProvider>
  );
};

export default OPDDashboard;
