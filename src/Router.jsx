import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./component/Home";
import { UserProvider } from "./contexts/userContext";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ChatLayout } from "./layouts/ChatLayout";
import About from "./component/About";
import Projetos from "./component/Projetos";
import Chat from "./component/Chat";


export function Router() {
    return (
        <UserProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projetos" element={<Projetos />} />
      </Route>

          <Route path="/chat" element={<ChatLayout />} />

      </Routes>
    </UserProvider>
    )
}