import { useMemo } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import OPDTable from './OPDTable';
import { mockData } from '../../data/mockData';
import { useOPD } from '../../hooks/useOPD';

const OPDTabs = () => {
  const { activeTab, setActiveTab } = useOPD();

  const counts = useMemo(() => {
    return {
      new: mockData.filter(patient => patient.status === 'New').length,
      nurseSeenCount: mockData.filter(patient => patient.status === 'Follow Up').length,
      doctorVisitedCount: mockData.filter(patient => patient.status === 'Free').length,
      total: mockData.length
    };
  }, []);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `New Patients (${counts.new})`,
      children: <OPDTable />,
    },
    {
      key: '2',
      label: `Nurse Seen (${counts.nurseSeenCount})`,
      children: <OPDTable />,
    },
    {
      key: '3',
      label: `Doctor Visited (${counts.doctorVisitedCount})`,
      children: <OPDTable />,
    },
    {
      key: '4',
      label: `All Appointments (${counts.total})`,
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
    />
  );
};

export default OPDTabs;