import dayjs from "dayjs"
import type { Patient } from "../types/types"

const generateMockData = (count: number): Patient[] => {
  const departments = [
    "BIOCHEMISTRY",
    "HAEMATOLOGY",
    "IMMUNOLOGY",
    "MICROBIOLOGY",
    "GENETICS",
    "NEUROLOGY",
    "PATHOLOGY",
  ]
  const statuses = ["Follow Up", "New", "Free"]
  const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Williams", "Dr. Brown", "Dr. Jones", "Dr. Garcia", "Dr. Miller"]

  return Array.from({ length: count }, (_, i) => ({
    key: (i + 1).toString(),
    sno: (i + 1).toString(),
    uhid: `8100${(Math.random() * 9999 + 1000).toFixed(0)}`,
    patientName: `Patient ${i + 1}`,
    ageGender: `${Math.floor(Math.random() * 80 + 1)} Yrs/${Math.random() > 0.5 ? "M" : "F"}`,
    billingDateTime: dayjs()
      .subtract(Math.floor(Math.random() * 30), "day")
      .format("YYYY-MM-DD HH:mm:ss"),
    department: departments[Math.floor(Math.random() * departments.length)],
    doctorName: doctors[Math.floor(Math.random() * doctors.length)],
    queueNo: (Math.floor(Math.random() * 20) + 1).toString(),
    previousRecord: (Math.floor(Math.random() * 4) + 1).toString(),
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }))
}

export const mockData: Patient[] = generateMockData(100)

