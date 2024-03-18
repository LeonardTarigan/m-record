import { Employee } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  employeeData: Employee | null;
  setEmployeeData: (employee: Employee) => void;
  deleteEmployeeData: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      employeeData: null,
      setEmployeeData: (employee) => set(() => ({ employeeData: employee })),
      deleteEmployeeData: () => set((state) => ({ employeeData: null })),
    }),
    {
      name: "authStore",
    },
  ),
);
