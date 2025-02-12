/** @format */

import { Typography, Select, Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import { Patient } from '../../../types/types';
import { useOPD } from '../../../hooks/useOPD';

export function TableColumns() {
  const { setSelectedPatient, setIsModalVisible } = useOPD();

  const showPatientDetails = (record: Patient) => {
    setSelectedPatient(record);
    setIsModalVisible(true);
  };

  const columns: ColumnsType<Patient> = [
    {
      title: 'S.No',
      dataIndex: 'sno',
      key: 'sno',
      width: 70,
    },
    {
      title: 'UHID',
      dataIndex: 'uhid',
      key: 'uhid',
      width: 100,
    },
    {
      title: 'Patient Name',
      dataIndex: 'patientName',
      key: 'patientName',
      width: 200,
    },
    {
      title: 'Age/Gender',
      dataIndex: 'ageGender',
      key: 'ageGender',
      width: 100,
    },
    {
      title: 'Billing Date & Time',
      dataIndex: 'billingDateTime',
      key: 'billingDateTime',
      width: 150,
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      width: 150,
    },
    {
      title: 'Doctor Name',
      dataIndex: 'doctorName',
      key: 'doctorName',
      width: 150,
    },
    {
      title: 'Queue No.',
      dataIndex: 'queueNo',
      key: 'queueNo',
      width: 100,
    },
    {
      title: 'Previous Rec.',
      dataIndex: 'previousRecord',
      key: 'previousRecord',
      width: 120,
      render: (text: string) => (
        <Select
          defaultValue={text}
          style={{ width: 70 }}>
          <Select.Option value="1">1</Select.Option>
          <Select.Option value="2">2</Select.Option>
          <Select.Option value="3">3</Select.Option>
          <Select.Option value="4">4</Select.Option>
          <Select.Option value="5">5</Select.Option>
          <Select.Option value="6">6</Select.Option>
        </Select>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      render: (status: string) => {
        const colors: { [key: string]: { color: string; background: string } } =
          {
            'Follow Up': { color: '#1890ff', background: '#e6f7ff' },
            New: { color: '#fa8c16', background: '#fff7e6' },
            Free: { color: '#52c41a', background: '#f6ffed' },
          };
        return (
          <Typography.Text
            style={{
              color: colors[status].color,
              background: colors[status].background,
              padding: '4px 8px',
              borderRadius: '2px',
              display: 'inline-block',
              width: '100%',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            {status}
          </Typography.Text>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      width: 80,
      render: (_, record) => (
        <Button
          type="text"
          icon={<EyeOutlined />}
          onClick={() => showPatientDetails(record)}
        />
      ),
    },
  ];

  return columns;
}
