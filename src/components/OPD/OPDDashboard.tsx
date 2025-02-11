import { Layout, Space, Card, ConfigProvider } from 'antd';
import { useOPD } from '../../hooks/useOPD';
import Filters from './OPDFilters';
import ModalComponent from './PatientModal';
import BreadcrumbNav from './OPDBreadCumbNav';
import Header from './OPDHeader';
import StatsCards from './StatsCard';
import OPDTabs from './OPDTabs';
import { OPDProvider } from '../../context/OPDContext';

const OPDContent = () => {
  const { isFilterVisible } = useOPD();

  return (
    <Layout style={{ minHeight: "100vh", padding: 24, background: "#f5f5f5" }}>
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <BreadcrumbNav />
        <Header />
        {isFilterVisible && <Filters />}
        <StatsCards />
        <Card>
          <OPDTabs />
        </Card>
      </Space>
      <ModalComponent />
    </Layout>
  );
};

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