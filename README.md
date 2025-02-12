<!-- @format -->

# OPD Dashboard

## Description

The OPD (Outpatient Department) Dashboard is a comprehensive React-based web application designed to streamline patient management in outpatient settings. It provides an intuitive interface for healthcare professionals to manage patient data, appointments, and various statistics efficiently.

## Technologies Used

- React
- TypeScript
- Ant Design (UI Framework)
- Context API (for state management)
- Day.js (for date manipulation)
- XLSX (for Excel export)

## Features

### Patient Management

- Track patient status (New, Nurse Seen, Doctor Visited)
- View patient details and history
- Real-time queue management
- Previous visit records

### Filtering & Search

- Advanced filtering system
- Doctor-specific views
- Date range selection
- Real-time search with debouncing (300ms)
- Custom filter visibility toggle

### Data Display

- Tabulated view with customizable columns
- Pagination with adjustable page sizes
- Status indicators with color coding
- Excel export functionality

### Dashboard Components

- Statistical cards showing key metrics
- Custom breadcrumb navigation
- Responsive layout design
- Modal views for detailed information

## Project Structure

```
src/
├── components/
│   └── OPD/
│       ├── BeadCumbNav/      # Breadcumb Navigation component
│       ├── Card/             # Statistical cards
│       ├── Filters/          # Filtering component
│       ├── Header/           # Header components
│       ├── PatientModal/     # Patient details modal
│       ├── Table/            # Data table components
│       └── Tabs/             # Tab navigation
├── context/
│   └── OPDContext.tsx       # Global state management
├── data/
│   └── mockData.ts          # Sample data generator
├── hooks/
│   ├── useDebounce.ts       # Search debouncing
│   └── useOPD.ts            # Custom OPD context hook
├── pages/
│   └── OPD/
│       ├── Content.tsx      # Main content layout
│       └── OPDDashboard.tsx # Dashboard wrapper
└── types/
    └── types.ts             # TypeScript definitions
```

## Technical Implementation

### State Management

- Uses React Context API via `OPDContext`
- Custom hook `useOPD` for accessing global state
- Memoized computations for performance

### Key Components

#### OPDContext Provider

```typescript
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
```

#### Patient Interface

```typescript
interface Patient {
  key: string;
  sno: string;
  uhid: string;
  patientName: string;
  ageGender: string;
  billingDateTime: string;
  department: string;
  doctorName: string;
  queueNo: string;
  previousRecord: string;
  status: string;
}
```

### Features Implementation

#### Search & Filtering

- Debounced search implementation
- Multiple filter criteria support
- Memoized filter results

#### Data Table

- Customizable columns
- Status-based styling
- Action buttons
- Pagination support

#### Modal View

- Detailed patient information
- Visit history
- Status indicators

## 🔧 Dependencies

- `react` - UI framework
- `antd` - Component library
- `dayjs` - Date manipulation
- `xlsx` - Excel export functionality

## 💻 Usage

### Context Setup

```tsx
const OPDDashboard = () => {
  return (
    <ConfigProvider>
      <OPDProvider>
        <OPDContent />
      </OPDProvider>
    </ConfigProvider>
  );
};
```

### Using OPD Hook

```tsx
const Component = () => {
  const {
    filteredData,
    setSearchQuery,
    // ... other state and methods as required
  } = useOPD();
  // Component logic further
};
```

## Styling

### CSS Modules

- Custom styling for tabs (`OPDTabs.css`)
- Ant Design theme customization
- Responsive design implementation

## Data Flow

1. Global state managed by OPDContext
2. Components subscribe via useOPD hook
3. Actions trigger state updates
4. Memoized computations update filtered data
5. UI updates reflect state changes

## Performance Optimizations

- Debounced search queries
- Memoized computations with useMemo
- Pagination for large datasets
- Conditional rendering
- Optimized table rendering

## Development Guidelines

### State Management

- Use context for global state
- Local state for component-specific data
- Memoize expensive computations

### Component Structure

- Functional components with hooks
- Props typing with TypeScript
- Separation of concerns

### Code Style

- TypeScript for type safety
- Consistent file structure
- Component composition

## Contributing

1. Fork the repository
2. Create your new branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
