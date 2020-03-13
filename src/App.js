import React from "react";
import "./App.css";
import Image from "./components/image/image.js";
import Menu from "./components/menu/menu.js";
import Search from "./components/search/search.js";
import Navbar from "./components/navbar/navbar.js";
import SidebarRight from "./components/sidebarRight/sidebarRight.js";
import Publication from "./components/publication/publication";
import Asidebar from "./components/asidebar/asidebar.js";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Menu />
      <div className="vertical-menu-side">
        <SidebarRight image="messi.jpg" name="Ahmed Brahim"></SidebarRight>
        <SidebarRight image="messi.jpg" name="Majed Bannouri "></SidebarRight>
        <SidebarRight image="messi.jpg" name="Oussema Darragi"></SidebarRight>
        <SidebarRight image="messi.jpg" name="Ouni Zied"></SidebarRight>
        <SidebarRight image="messi.jpg" name="Ahmed Brahim"></SidebarRight>
        <SidebarRight image="messi.jpg" name="Ahmed Brahim"></SidebarRight>
        <SidebarRight image="messi.jpg" name="Ahmed Brahim"></SidebarRight>
        <SidebarRight image="messi.jpg" name="Ahmed Brahim"></SidebarRight>
        <SidebarRight image="messi.jpg" name="Ahmed Brahim"></SidebarRight>
        <SidebarRight image="messi.jpg" name="Ahmed Brahim"></SidebarRight>
        <SidebarRight image="messi.jpg" name="Ahmed Brahim"></SidebarRight>
        <SidebarRight image="messi.jpg" name="Ahmed Brahim"></SidebarRight>
        <SidebarRight image="messi.jpg" name="Ahmed Brahim"></SidebarRight>
      </div>

      <Image />

      <Search />
      <Publication></Publication>
      <Asidebar></Asidebar>
    </div>
  );
}

export default App;
