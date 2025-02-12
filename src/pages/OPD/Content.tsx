import { Layout, Space, Card } from 'antd';
import { useOPD } from '../../hooks/useOPD';
import Filters from '../../components/OPD/Filters/OPDFilters';
import ModalComponent from '../../components/OPD/PatientModal/PatientModal';
import BreadcrumbNav from '../../components/OPD/BeadCumbNav/OPDBreadCumbNav';
import Header from '../../components/OPD/Header/OPDHeader';
import StatsCards from '../../components/OPD/Card/StatsCard';
import OPDTabs from '../../components/OPD/Tabs/OPDTabs';

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

export default OPDContent