import { Breadcrumb } from 'antd';
import { HomeOutlined, RightOutlined } from '@ant-design/icons';

const BreadcrumbNav = () => (
  <Breadcrumb
    separator={<RightOutlined />}
    items={[
      { title: <HomeOutlined /> },
      { title: "Clinical Management" },
      { title: "OPD" },
      { title: "New Patients" },
    ]}
  />
);

export default BreadcrumbNav;