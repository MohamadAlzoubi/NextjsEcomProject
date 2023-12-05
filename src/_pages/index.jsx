import React, { useState } from "react";
import NavBar from "../components/navbar";
import Banner from "../components/banner";
import GalleryRotation from "../components/galleryRotation";
import AppDetails from "../components/AppDetails";
import Footer from "../components/footer";
import Statistics from "../components/Statistics";
import StatisticsDesktop from "../components/StatisticsDesktop";
import QuarterTable from "../components/QuarterTable";
import Employees from "../components/Employees";
import DataSubmit from "../components/DataSubmit";
import Modal from "../components/Modal";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <NavBar />
      {/* <Banner onOpenModal={toggleModal} />
      <GalleryRotation />
      <AppDetails />
      <Statistics />
      <StatisticsDesktop />
      <QuarterTable />
      <Employees />
      <Footer />
      <DataSubmit />
      <Modal isOpen={modalOpen} toggle={toggleModal} /> */}
    </>
  );
};

export default HomePage;
