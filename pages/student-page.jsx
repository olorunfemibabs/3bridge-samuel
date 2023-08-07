import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChildABI from "../utils/childABI.json";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { toast } from "react-toastify";
import StudentPage from "../src/Pages/StudentPage";

const StudentsPage = () => {
  const [id, setId] = useState(0);

  const { config: config1 } = usePrepareContractWrite({
    //address: contractAddress,
    abi: ChildABI,
    functionName: "signAttendance",
    args: [id],
  });

  const {
    data: signAttendanceData,
    isLoading: signAttendanceIsLoading,
    write: sign,
  } = useContractWrite(config1);

  const {
    data: signAttendanceWaitData,
    isLoading: signAttendanceWaitDataIsLoading,
    isError,
    isSuccess,
  } = useWaitForTransaction({
    hash: signAttendanceData?.hash,

    onSuccess: () => {
      toast.success("Attendance signed successfully");
    },

    onError(error) {
      toast.error("Sign attendance error: ", error);
    },
  });

  return (
    <div className=" h-screen w-screen flex flex-col">
      <div className=" h-[10%]">
        <Navbar />
      </div>

      <div className=" h-[80%]">
        <StudentPage />
      </div>

      <div className=" h-[10%]">
        <Footer />
      </div>
    </div>
  );
};

export default StudentsPage;
