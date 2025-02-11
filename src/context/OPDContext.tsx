import React, { createContext, useState, useMemo } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { mockData } from '../data/mockData';
import { Patient } from '../types/types';
import dayjs from 'dayjs';

interface OPDContextType {
  selectedDoctor: string;
  setSelectedDoctor: (doctor: string) => void;
  fromDate: Date | null;
  setFromDate: (date: Date | null) => void;
  toDate: Date | null;
  setToDate: (date: Date | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageSize: number;
  setPageSize: (size: number) => void;
  isFilterVisible: boolean;
  setIsFilterVisible: (visible: boolean) => void;
  isFilterActive: boolean;
  setIsFilterActive: (active: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isModalVisible: boolean;
  setIsModalVisible: (visible: boolean) => void;
  selectedPatient: Patient | null;
  setSelectedPatient: (patient: Patient | null) => void;
  filteredData: Patient[];
  paginatedData: Patient[];
  uniqueDoctors: string[];
}

export const OPDContext = createContext<OPDContextType | undefined>(undefined);

export const OPDProvider= ({ children }: { children: React.ReactNode }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(true);
  const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("1");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const filteredData = useMemo(() => {
    return mockData.filter((item) => {
      const matchesSearch = Object.values(item).some(
        (value) => typeof value === "string" && value.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );
      const matchesDoctor = !selectedDoctor || item.doctorName === selectedDoctor;
      const matchesDateRange =
        !fromDate ||
        !toDate ||
        (dayjs(item.billingDateTime).isAfter(fromDate) && dayjs(item.billingDateTime).isBefore(toDate));
      const matchesTab =
        activeTab === "4" ||
        (activeTab === "1" && item.status === "New") ||
        (activeTab === "2" && item.status === "Follow Up") ||
        (activeTab === "3" && item.status === "Free");
      return matchesSearch && matchesDoctor && matchesDateRange && matchesTab;
    });
  }, [debouncedSearchQuery, selectedDoctor, fromDate, toDate, activeTab]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredData.slice(startIndex, startIndex + pageSize);
  }, [filteredData, currentPage, pageSize]);

  const uniqueDoctors = useMemo(() => {
    return Array.from(new Set(mockData.map((item) => item.doctorName)));
  }, []);

  const value = {
    selectedDoctor,
    setSelectedDoctor,
    fromDate,
    setFromDate,
    toDate,
    setToDate,
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    isFilterVisible,
    setIsFilterVisible,
    isFilterActive,
    setIsFilterActive,
    activeTab,
    setActiveTab,
    isModalVisible,
    setIsModalVisible,
    selectedPatient,
    setSelectedPatient,
    filteredData,
    paginatedData,
    uniqueDoctors,
  };

  return <OPDContext.Provider value={value}>{children}</OPDContext.Provider>;
};