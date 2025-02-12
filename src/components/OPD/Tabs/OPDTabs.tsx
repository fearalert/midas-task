import { useMemo } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import OPDTable from '../Table/OPDTable';
import { useOPD } from '../../../hooks/useOPD';
import './OPDTabs.css';

const OPDTabs = () => {
  const { activeTab, setActiveTab, filteredData } = useOPD();

  const counts = useMemo(() => {
    return {
      new: filteredData.filter(patient => patient.status === 'New').length,
      nurseSeenCount: filteredData.filter(patient => patient.status === 'Follow Up').length,
      doctorVisitedCount: filteredData.filter(patient => patient.status === 'Free').length,
      total: filteredData.length
    };
  }, [filteredData]);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `New Patients (${counts.new}/${filteredData.length})`,
      children: <OPDTable />,
    },
    {
      key: '2',
      label: `Nurse Seen (${counts.nurseSeenCount}/${filteredData.length})`,
      children: <OPDTable />,
    },
    {
      key: '3',
      label: `Doctor Visited (${counts.doctorVisitedCount}/${filteredData.length})`,
      children: <OPDTable />,
    },
    {
      key: '4',
      label: `All Appointments (${counts.total}/${filteredData.length})`,
      children: <OPDTable />,
    },
  ];

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <Tabs 
      activeKey={activeTab}
      items={items}
      onChange={handleTabChange}
      type="card"
      size="small"
      style={{ marginBottom: '16px' }}
      className="opd-tabs"
    />
  );
};

export default OPDTabs;
