import React from 'react';
import { Modal, Space, Typography, Card, Row, Col, Tag } from 'antd';
import { 
  UserOutlined, 
  IdcardOutlined, 
  CalendarOutlined, 
  MedicineBoxOutlined,
  TeamOutlined,
  NumberOutlined
} from '@ant-design/icons';
import { useOPD } from '../../../hooks/useOPD';

interface InfoProps { 
    icon: React.ReactNode; 
    label: string; 
    value: string 
} 

const PatientModal = () => {
  const { selectedPatient, isModalVisible, setIsModalVisible } = useOPD();

  const InfoItem: React.FC<InfoProps> = ({ 
    icon, 
    label, 
    value 
  }) => (
    <Space>
      {icon}
      <Typography.Text type="secondary">{label}:</Typography.Text>
      <Typography.Text strong>{value}</Typography.Text>
    </Space>
  );

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      'Follow Up': 'blue',
      'New': 'orange',
      'Free': 'green'
    };
    return colors[status] || 'default';
  };

  return (
    <Modal
      title={
        <Space>
          <UserOutlined />
          <Typography.Text strong>Patient Details</Typography.Text>
        </Space>
      }
      open={isModalVisible}
      onCancel={() => setIsModalVisible(false)}
      footer={null}
      width={600}
    >
      {selectedPatient && (
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          <Card>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Space size="large">
                  <Typography.Title level={4} style={{ margin: 0 }}>
                    {selectedPatient.patientName}
                  </Typography.Title>
                  <Tag color={getStatusColor(selectedPatient.status)}>
                    {selectedPatient.status}
                  </Tag>
                </Space>
              </Col>
              
              <Col span={12}>
                <InfoItem 
                  icon={<IdcardOutlined />}
                  label="UHID"
                  value={selectedPatient.uhid}
                />
              </Col>
              
              <Col span={12}>
                <InfoItem 
                  icon={<UserOutlined />}
                  label="Age/Gender"
                  value={selectedPatient.ageGender}
                />
              </Col>
              
              <Col span={12}>
                <InfoItem 
                  icon={<MedicineBoxOutlined />}
                  label="Department"
                  value={selectedPatient.department}
                />
              </Col>
              
              <Col span={12}>
                <InfoItem 
                  icon={<TeamOutlined />}
                  label="Doctor"
                  value={selectedPatient.doctorName}
                />
              </Col>
              
              <Col span={12}>
                <InfoItem 
                  icon={<NumberOutlined />}
                  label="Queue No"
                  value={selectedPatient.queueNo}
                />
              </Col>
              
              <Col span={12}>
                <InfoItem 
                  icon={<CalendarOutlined />}
                  label="Billing Date"
                  value={selectedPatient.billingDateTime}
                />
              </Col>
            </Row>
          </Card>

          <Card title="Previous Visit History" size="small">
            <Typography.Text type="secondary">
              Previous Record: {selectedPatient.previousRecord} visits
            </Typography.Text>
          </Card>
        </Space>
      )}
    </Modal>
  );
};

export default PatientModal;