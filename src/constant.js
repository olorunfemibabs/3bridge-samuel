import { IoHomeOutline } from "react-icons/io5";
import { BsSpeedometer2, BsCloudUploadFill } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";
import { PiStudentFill, PiChalkboardTeacher } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";

export const constant = [
  {
    to: "/",
    name: "Home",
    Icon: IoHomeOutline,
  },
  {
    to: "/dashboard",
    name: "Dashboard",
    Icon: BsSpeedometer2,
  },
  {
    to: "/students",
    name: "Students",
    Icon: PiStudentFill,
  },
  {
    to: "/mentors",
    name: "Mentors",
    Icon: PiChalkboardTeacher,
  },
  {
    to: "/attendance",
    name: "Attendance",
    Icon: SiGoogleclassroom,
  },
  {
    to: "/upload-file",
    name: "Upload File",
    Icon: BsCloudUploadFill,
  },
  {
    to: "/statistics",
    name: "Statistics",
    Icon: AiOutlineBarChart,
  },
];
