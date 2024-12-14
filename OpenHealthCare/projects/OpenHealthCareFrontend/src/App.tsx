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
import ConnectWallet from './components/ConnectWallet';

const App: React.FC = () => {
  const [show, setShow] = useState(false);

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
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid className="mx-3">
            <Navbar.Brand>OpenHealthCare</Navbar.Brand>
            <Nav className="me-auto">
              <Row>
                <Col>
                  <Nav.Link as={Link} to="/home">Home</Nav.Link>
                </Col>
              </Row>
            </Nav>
            <Button onClick={() => setShow(true)}>Connect Wallet</Button>
          </Container>
        </Navbar>

        {/* Modal for Wallet Connection */}
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Connect Wallet</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ConnectWallet /> {/* Render WalletConnectView here */}
          </Modal.Body>
        </Modal>

        <Container className="mt-4">
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </Container>
      </Router>
    </WalletProvider>
  );
};

export default App;
