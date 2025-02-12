import { Row, Space, Typography, Button } from 'antd';
import { MenuUnfoldOutlined, AlignCenterOutlined, SyncOutlined, EyeInvisibleOutlined, EyeOutlined, FileExcelOutlined } from '@ant-design/icons';
import { message } from 'antd';
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

  const applyFilter = () => {
    setIsFilterActive(true);
    message.success('Filter applied successfully');
  };

  const resetFilter = () => {
    setSelectedDoctor('');
    setFromDate(null);
    setToDate(null);
    setIsFilterActive(false);
    message.success('Filter reset successfully');
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'OPD Data');
    XLSX.writeFile(workbook, 'opd_data.xlsx');
    message.success('Excel file downloaded successfully');
  };

  return (
    <Row justify="space-between" align="middle">
      <Space>
        <MenuUnfoldOutlined style={{ color: "#000" }}/>
        <Typography.Title level={4} style={{ margin: 0 }}>
          OPD Department
        </Typography.Title>
        <Button 
          icon={<AlignCenterOutlined />} 
          onClick={applyFilter} 
          type={isFilterActive ? "primary" : "default"}
        >
          Filter
        </Button>
        <Button icon={<SyncOutlined />} onClick={resetFilter} />
      </Space>
      <Space>
        <Button 
          icon={isFilterVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />} 
          onClick={toggleFilter}
        >
          {isFilterVisible ? "Hide Filter" : "Show Filter"}
        </Button>
        <Button 
          icon={<FileExcelOutlined />} 
          style={{ color: "#52c41a" }} 
          onClick={downloadExcel}
        >
          Download Excel
        </Button>
      </Space>
    </Row>
  );
};

export default Header;
