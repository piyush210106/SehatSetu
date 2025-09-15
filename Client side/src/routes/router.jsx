import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPatient from "../pages/LoginPatient";
import LoginDoctor from "../pages/LoginDoctor";
import LoginPharmacist from "../pages/LoginPharmacist";
import PatientDashboard from "../pages/patient/PatientDashboard";
import Appointments from "../pages/patient/Appointments";
import Reports from "../pages/patient/Reports";
import Profile from "../pages/patient/Profile";
import Pharmacy from "../pages/patient/Pharmacy";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login/patient", element: <LoginPatient /> },
  { path: "/login/doctor", element: <LoginDoctor /> },
  { path: "/login/pharmacist", element: <LoginPharmacist /> },
   {
    path: "/login/patient/dashboard",
    element: <PatientDashboard />,
    children: [
      { path: "appointments", element: <Appointments /> },
      { path: "reports", element: <Reports />},
      { path: "profile", element: <Profile />},
      { path: "pharmacy", element: <Pharmacy />},
    ],
  },
  
]);

export default router;
