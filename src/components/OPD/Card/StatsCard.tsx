import { Row, Col } from 'antd';
import { UserOutlined, ClockCircleOutlined, ExclamationCircleOutlined, AlertOutlined, DisconnectOutlined, TeamOutlined } from '@ant-design/icons';
import CardComponent from './CardComponent';
import { Tooltip } from 'antd';

const StatsCards = () => (
  <Row gutter={[16, 16]}>
    <Col xs={24} sm={12} md={8} lg={4}>
              <CardComponent title="New Patients" icon={<UserOutlined style={{ fontSize: 20 }} />} value="20" />
            </Col>
            <Col xs={24} sm={12} md={8} lg={4}>
               <CardComponent
                  title="Average Wait Time"
                  icon={<ClockCircleOutlined style={{ fontSize: 20 }} />}
                  value="25"
                  unit="min"
                  titleSuffix={
                    <Tooltip title="This is the average time patients wait before seeing a doctor">
                      <ExclamationCircleOutlined style={{ cursor: "help" }} />
                    </Tooltip>
                  }
                />
            </Col>
            <Col xs={24} sm={12} md={8} lg={4}>
              <CardComponent
                title="Patients in Queue"
                icon={<TeamOutlined style={{ fontSize: 20 }} />}
                value="10"
                queueValue="11-20"
                titleSuffix="Queue No."
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={4}>
              <CardComponent title="Cancellations" icon={<DisconnectOutlined style={{ fontSize: 20 }} />} value="2" />
            </Col>
            <Col xs={24} sm={12} md={8} lg={4}>
              <CardComponent
                title="Urgent Cases"
                icon={<AlertOutlined style={{ fontSize: 20 }} />}
                value="10"
                queueValue="4,7,12"
                titleSuffix="Queue No."
              />
            </Col>
  </Row>
);

export default StatsCards;
