import { Card, Col, Row, Tooltip, Typography } from "antd";
import { UserOutlined, ClockCircleOutlined, TeamOutlined, AlertOutlined, DisconnectOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

const OPDStats = () => {
  const stats = [
    { title: "New Patients", icon: <UserOutlined />, value: 20 },
    { title: "Average Wait Time", icon: <ClockCircleOutlined />, value: "25 min", tooltip: "This is the average time patients wait before seeing a doctor" },
    { title: "Patients in Queue", icon: <TeamOutlined />, value: 10 },
    { title: "Cancellations", icon: <DisconnectOutlined />, value: 2 },
    { title: "Urgent Cases", icon: <AlertOutlined />, value: 10 },
  ];

  return (
    <Row gutter={[16, 16]}>
      {stats.map(({ title, icon, value, tooltip }) => (
        <Col key={title} xs={24} sm={12} md={8} lg={4}>
          <Card>
            <Typography.Text>{title}</Typography.Text>
            <Typography.Title level={4}>
              {icon} {value} {tooltip && <Tooltip title={tooltip}><ExclamationCircleOutlined /></Tooltip>}
            </Typography.Title>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default OPDStats;
