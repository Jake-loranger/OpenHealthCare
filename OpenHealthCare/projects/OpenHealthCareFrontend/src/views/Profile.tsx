import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as React from 'react';
import { Button } from 'react-bootstrap';

const Profile: React.FC = () => {
    return (
        <div className='text-white'>
            <h2>Profile</h2>
            <hr />
            <h3>Create an Account</h3>
            <p>
                Our decentralized healthcare system offers three types of accounts to serve various participants. Select the
                account type that best matches your role in the ecosystem:
            </p>
            <Row xs={1} sm={1} md={3} className='g-4'>
                {/* Universal Fund */}
                <Col>
                    <Card bg={'dark'} text={'light'} border='secondary' className='h-100'>
                        <Card.Body>
                            <Card.Title>
                                <h2>
                                    <strong>Universal Fund</strong>
                                </h2>
                            </Card.Title>
                            <Card.Text>
                                <strong>Purpose:</strong>
                                <br />
                                A smart contract that securely holds all participant contributions. It ensures funds are only accessed for
                                verified healthcare expenses.
                            </Card.Text>
                            <Card.Text>
                                <strong>Key Features:</strong>
                                <ul>
                                    <li>Manages the pooled balance for the entire ecosystem.</li>
                                    <li>
                                        Releases funds only when a healthcare claim is submitted with a valid HCPCS code and approved request
                                        from an insured member (individual or organization).
                                    </li>
                                    <li>Provides transparency and accountability by recording all transactions on a public ledger.</li>
                                </ul>
                            </Card.Text>
                            <Card.Text>
                                <strong>Ideal For:</strong>
                                <br />
                                Acts as the backbone of the system, ensuring equitable and efficient distribution of funds for healthcare
                                coverage.
                            </Card.Text>
                        </Card.Body>

                        <Button size="lg" variant="info" className="m-3"><strong>Create Universal Account</strong></Button>
                    </Card>
                </Col>

                {/* Insured Member */}
                <Col>
                    <Card bg={'dark'} text={'light'} border='secondary' className='h-100'>
                        <Card.Body>
                            <Card.Title>
                                <h2>
                                    <strong>Insured Member</strong>
                                </h2>
                            </Card.Title>
                            <Card.Text>
                                <strong>Purpose:</strong>
                                <br />
                                Provides affordable and transparent healthcare coverage for individuals or organizations seeking to insure
                                themselves or their members/employees.
                            </Card.Text>
                            <Card.Text>
                                <strong>Key Features:</strong>
                                <ul>
                                    <li>Manage healthcare contributions and coverage details.</li>
                                    <li>Submit claims for reimbursement or direct payment to healthcare providers.</li>
                                    <li>
                                        Access a network of verified providers with transparent and standardized cost structures.
                                    </li>
                                </ul>
                            </Card.Text>
                            <Card.Text>
                                <strong>Ideal For:</strong>
                                <ul>
                                    <li>Individuals looking for equitable, cost-effective healthcare insurance.</li>
                                    <li>Organizations insuring their employees or members.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>

                        <Button size="lg" variant="info" className="m-3"><strong>Create Member Account</strong></Button>
                    </Card>
                </Col>

                {/* Healthcare Provider */}
                <Col>
                    <Card bg={'dark'} text={'light'} border='secondary' className='h-100'>
                        <Card.Body>
                            <Card.Title>
                                <h2>
                                    <strong>Healthcare Provider</strong>
                                </h2>
                            </Card.Title>
                            <Card.Text>
                                <strong>Purpose:</strong>
                                <br />
                                Empowers healthcare providers to deliver services through the system and ensures transparent, timely
                                payments for claims.
                            </Card.Text>
                            <Card.Text>
                                <strong>Key Features:</strong>
                                <ul>
                                    <li>Submit claims for healthcare services using standardized codes (e.g., HCPCS).</li>
                                    <li>Receive direct payments through secure smart contracts.</li>
                                    <li>Access a growing pool of insured patients and organizations.</li>
                                </ul>
                            </Card.Text>
                            <Card.Text>
                                <strong>Ideal For:</strong>
                                <br />
                                Hospitals, clinics, and medical professionals who want a simplified claims process and guaranteed payouts.
                            </Card.Text>
                        </Card.Body>

                        <Button size="lg" variant="info" className="m-3"><strong>Create Provider Account</strong></Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Profile;
