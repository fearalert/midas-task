/** @format */

import { Row, Space, Typography, Button, notification } from 'antd';
import {
  MenuUnfoldOutlined,
  AlignCenterOutlined,
  SyncOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  FileExcelOutlined,
} from '@ant-design/icons';
import * as XLSX from 'xlsx';
import { useOPD } from '../../../hooks/useOPD';

const Header = () => {
  const {
    isFilterVisible,
    setIsFilterVisible,
    isFilterActive,
    setIsFilterActive,
    filteredData,
    setSelectedDoctor,
    setFromDate,
    setToDate,
  } = useOPD();

  const toggleFilter = () => setIsFilterVisible(!isFilterVisible);
  const [api, contextHolder] = notification.useNotification();

  const applyFilter = () => {
    setIsFilterActive(true);
  };

  const resetFilter = () => {
    setSelectedDoctor('');
    setFromDate(null);
    setToDate(null);
    setIsFilterActive(false);
    api.success({
      message: 'Filter Reset',
      description: 'All filters have been reset.',
      placement: 'topLeft',
      duration: 10,
    });
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'OPD Data');
    XLSX.writeFile(workbook, 'opd_data.xlsx');

    api.success({
      message: 'Download Successful',
      description: 'The Excel file has been downloaded successfully.',
      placement: 'topLeft',
      duration: 10,
    });
  };

  return (
    <>
      {contextHolder}
      <Row
        justify="space-between"
        align="middle">
        <Space>
          <MenuUnfoldOutlined style={{ color: '#000' }} />
          <Typography.Title
            level={4}
            style={{ margin: 0 }}>
            OPD Department
          </Typography.Title>
          <Button
            icon={<AlignCenterOutlined />}
            onClick={applyFilter}
            type={isFilterActive ? 'primary' : 'default'}>
            Filter
          </Button>
          <Button
            icon={<SyncOutlined />}
            onClick={resetFilter}
          />
        </Space>
        <Space>
          <Button
            icon={isFilterVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            onClick={toggleFilter}>
            {isFilterVisible ? 'Hide Filter' : 'Show Filter'}
          </Button>
          <Button
            icon={<FileExcelOutlined />}
            style={{ color: '#52c41a' }}
            onClick={downloadExcel}>
            Download Excel
          </Button>
        </Space>
      </Row>
    </>
  );
};

export default Header;
