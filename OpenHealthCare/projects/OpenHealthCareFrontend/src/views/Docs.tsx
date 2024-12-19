import * as React from 'react';

const Docs: React.FC = () => {
    return (
        <div className='text-light'>
            <h1>OpenHealthCare Protocol Documentation v1.0</h1>
            <hr />
            <p>
                OpenHealthCare is a Decentralized Healthcare Insurance Protocol (DHIP) designed to create a transparent universal care funding protocol for patients' healthcare costs. This documentation provides an overview of the protocol's features and functionality for both technical users and healthcare providers.
            </p>

            <br />

            <h3>1. Account Creation</h3>
            <p>Handles the creation of accounts for various participants in the ecosystem.</p>

            <h4><strong>Method:</strong> Create Account</h4>
            <p><strong>Description:</strong> Creates accounts for insured members, healthcare providers, or funding entities. Each account type includes specific details for proper integration into the protocol.</p>

            <h5>Parameters:</h5>
            <ul>
                <li><strong>Account Type:</strong> Specifies whether the account is for an insured member, a healthcare provider, or a funding entity.</li>
                <li><strong>Account Details:</strong> Includes information such as name, address, and contact details, tailored to the selected account type.</li>
                <li><strong>Initial Deposit:</strong> (Optional) The starting balance, applicable for Universal Fund accounts.</li>
            </ul>

            <h5>Returns:</h5>
            <ul>
                <li><strong>Account ID:</strong> A unique identifier assigned to the created account.</li>
            </ul>

            <h5>Events:</h5>
            <ul>
                <li><strong>Account Created:</strong> Emitted upon successful account creation.</li>
            </ul>

            <br />

            <h3>2. Premium Payment Calculation</h3>
            <p>Calculates monthly premiums using an arctangent-based economic model to ensure fairness and sustainability.</p>

            <h4><strong>Method:</strong> Calculate Premium</h4>
            <p><strong>Description:</strong> Computes monthly premiums based on income, healthcare costs, and socioeconomic factors using the following model:</p>

            <p><strong>Premium Equation:</strong></p>
            <ul>
                <li>The equation uses variables such as individual income (Ii), regional healthcare costs (Ci), and adjustment factors (F) to calculate contributions proportionally.</li>
                <li>The model ensures fairness by gradually increasing premiums for lower incomes and capping them for higher incomes.</li>
                <li>Policy parameters, such as steepness and maximum contribution, are adjustable for real-world applicability.</li>
            </ul>

            <h5>Parameters:</h5>
            <ul>
                <li><strong>Income:</strong> Annual income of the individual.</li>
                <li><strong>Location:</strong> Region or area of residence.</li>
                <li><strong>Age:</strong> Participant's age in years.</li>
                <li><strong>Health Risk Factors:</strong> Metrics such as BMI, smoking status, or pre-existing conditions.</li>
            </ul>

            <h5>Returns:</h5>
            <ul>
                <li><strong>Premium Amount:</strong> The calculated monthly payment based on the individual's profile.</li>
            </ul>

            <br />

            <h3>3. Premium Payment</h3>
            <p>Processes monthly premium contributions from participants to the universal healthcare fund.</p>

            <h4><strong>Method:</strong> Pay Premium</h4>
            <p><strong>Description:</strong> Allows participants to pay their calculated premiums to maintain healthcare coverage within the protocol.</p>

            <h5>Parameters:</h5>
            <ul>
                <li><strong>User Address:</strong> The unique wallet or account address of the participant paying the premium.</li>
                <li><strong>Amount:</strong> The specific premium amount to be paid.</li>
                <li><strong>Policy ID:</strong> Identifier for the associated healthcare policy.</li>
            </ul>

            <h5>Events:</h5>
            <ul>
                <li><strong>Premium Paid:</strong> Emitted upon successful payment of the premium.</li>
            </ul>

            <br />

            <h3>4. Claims Processing</h3>
            <p>Manages validation and payment of healthcare claims submitted by insured members.</p>

            <h4><strong>Method:</strong> Process Claim</h4>
            <p><strong>Description:</strong> Processes claims by validating the submitted information and transferring funds to the healthcare provider.</p>

            <h5>Parameters:</h5>
            <ul>
                <li><strong>Insured Member Address:</strong> The address of the member submitting the claim.</li>
                <li><strong>Healthcare Provider Address:</strong> The provider's address where the service was rendered.</li>
                <li><strong>HCPCS Code:</strong> A code that identifies the type of healthcare service provided.</li>
                <li><strong>Amount:</strong> The cost claimed for the healthcare service.</li>
                <li><strong>Supporting Documents:</strong> Evidence or documentation to validate the claim's authenticity.</li>
            </ul>

            <h5>Returns:</h5>
            <ul>
                <li><strong>Status:</strong> Indicates whether the claim is Approved or Rejected.</li>
                <li><strong>Transaction ID:</strong> Unique identifier for the processed claim.</li>
            </ul>

            <h5>Events:</h5>
            <ul>
                <li><strong>ClaimProcessed:</strong> Emitted upon successful processing of a claim.</li>
            </ul>
        </div>
    );
};

export default Docs;
