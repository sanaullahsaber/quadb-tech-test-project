import React from 'react';
import Navbar from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;