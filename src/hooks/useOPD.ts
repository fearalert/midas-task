import { useContext } from "react"
import { OPDContext } from "../context/OPDContext"

export const useOPD = () => {
  const context = useContext(OPDContext)
  if (!context) {
    throw new Error("useOPD must be used within an OPDProvider")
  }
  return context
}