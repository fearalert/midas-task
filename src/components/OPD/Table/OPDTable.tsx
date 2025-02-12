import { Table, Row, Col, Input, Select, Space, Typography } from 'antd';
import { useOPD } from '../../../hooks/useOPD';
import {TableColumns}  from './TableColumns';

const OPDTable = () => {
  const {
    paginatedData,
    filteredData,
    currentPage,
    pageSize,
    setCurrentPage,
    setPageSize,
    searchQuery,
    setSearchQuery,
  } = useOPD();

  const columns = TableColumns();

  const handleTableChange = (pagination: any) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  return (
    <>
      <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
        <Col xs={24} md={12}>
          <Input.Search
            prefix
            placeholder="Search for modules, submodules, settings, etc"
            style={{ width: "100%", maxWidth: 400 }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Col>
        <Col xs={24} md={12} style={{ textAlign: "right" }}>
          <Space>
            <Typography.Text>Show</Typography.Text>
            <Select 
              value={pageSize} 
              onChange={(value) => setPageSize(value)} 
              style={{ width: 70 }}
            >
              <Select.Option value={10}>10</Select.Option>
              <Select.Option value={15}>15</Select.Option>
              <Select.Option value={30}>30</Select.Option>
              <Select.Option value={50}>50</Select.Option>
            </Select>
          </Space>
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={paginatedData}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: filteredData.length,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        }}
        onChange={handleTableChange}
        scroll={{ x: "max-content" }}
        size="small"
      />
    </>
  );
};

export default OPDTable;