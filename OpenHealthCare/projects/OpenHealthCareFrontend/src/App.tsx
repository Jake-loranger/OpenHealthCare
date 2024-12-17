import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Nav, Navbar, Row, Col, Button, Modal, Stack } from 'react-bootstrap';
import {
  NetworkId,
  WalletId,
  WalletManager,
  WalletProvider,
  useWallet
} from '@txnlab/use-wallet-react';
import Home from './Home';
import Profile from './Profile';
import SideNavBar from './components/views/SideNavBar';
import "./App.css";

const App: React.FC = () => {

  const walletManager = new WalletManager({
    wallets: [
      WalletId.DEFLY,
      WalletId.PERA
    ],
    network: NetworkId.TESTNET
  });


  return (
    <WalletProvider manager={walletManager}>
      <Router>
        <div className="d-flex bg-dark">
          {/* Sidebar */}
          <SideNavBar />

          {/* Main Content */}
          <Container fluid className="p-4" >
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Container>
        </div>
      </Router>
    </WalletProvider>
  );
};

export default App;
