/** @format */

import { Card, Col, DatePicker, Row, Select, Space, Typography } from 'antd';
import {
  FilterOutlined,
  ClockCircleOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import { useOPD } from '../../../hooks/useOPD';

const Filters = () => {
  const {
    fromDate,
    toDate,
    setFromDate,
    setToDate,
    selectedDoctor,
    setSelectedDoctor,
    uniqueDoctors,
    setIsFilterActive,
  } = useOPD();

  return (
    <Row gutter={[16, 16]}>
      <Col
        xs={24}
        md={12}
        lg={8}>
        <Card
          size="small"
          title={
            <Space>
              <ClockCircleOutlined />
              <span>Time Period</span>
            </Space>
          }>
          <Space
            direction="horizontal"
            style={{ width: '100%' }}>
            <DatePicker
              placeholder="From Date"
              onChange={(date) => setFromDate(date)}
              value={fromDate}
            />
            <DatePicker
              placeholder="To Date"
              onChange={(date) => setToDate(date)}
              value={toDate}
            />
          </Space>
        </Card>
      </Col>

      <Col
        xs={24}
        md={12}
        lg={8}>
        <Card
          size="small"
          title={
            <Space>
              <TeamOutlined />
              <span>Doctor Filter</span>
            </Space>
          }>
          <Space
            direction="vertical"
            style={{ width: '100%' }}>
            <Select
              placeholder="Select Doctor"
              style={{ width: '100%' }}
              value={selectedDoctor}
              onChange={(value) => {
                setSelectedDoctor(value);
                setIsFilterActive(true);
              }}
              allowClear
              showSearch
              optionFilterProp="children">
              <Select.Option value="">All Doctors</Select.Option>
              {uniqueDoctors.map((doctor) => (
                <Select.Option
                  key={doctor}
                  value={doctor}>
                  {doctor}
                </Select.Option>
              ))}
            </Select>

            {selectedDoctor && (
              <Typography.Text type="secondary">
                Showing patients for {selectedDoctor}
              </Typography.Text>
            )}
          </Space>
        </Card>
      </Col>

      <Col
        xs={24}
        md={12}
        lg={8}>
        <Card
          size="small"
          title={
            <Space>
              <FilterOutlined />
              <span>Active Filters</span>
            </Space>
          }>
          <Space
            direction="vertical"
            style={{ width: '100%' }}>
            {!fromDate && !toDate && !selectedDoctor ? (
              <Typography.Text type="secondary">
                No filters applied
              </Typography.Text>
            ) : (
              <>
                {fromDate && toDate && (
                  <Typography.Text>
                    Period: {dayjs(fromDate).format('DD/MM/YYYY')} -{' '}
                    {dayjs(toDate).format('DD/MM/YYYY')}
                  </Typography.Text>
                )}
                {selectedDoctor && (
                  <Typography.Text>Doctor: {selectedDoctor}</Typography.Text>
                )}
              </>
            )}
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default Filters;
