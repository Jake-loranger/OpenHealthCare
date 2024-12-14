# OpenHealthCare Protocol Documentaion v1.0

OpenHealthCare is a Decentralized Healthcare Insurance Protocol (DHIP) designed to create a transparent universal care funding protocol for patients' healthcare costs. This is the code documentation for the smart contracts that power the protocol.

## Documentation

### 1. Account Creation
Handles the creation of accounts for the various participants in the ecosystem.

**Method**: `createAccount`

- **Description**: Creates accounts for participants in the system.

- **Parameters**:

  - `accountType` (String): Specifies the type of account to create. Options: "UniversalFund", "InsuredMember", "HealthcareProvider".
  - `accountDetails` (Object): Contains additional details specific to the account type, such as name, address, and contact information.
  - `initialDeposit` (Uint256, optional): The initial deposit amount (required for UniversalFund accounts).

- **Returns**:

  - accountId (String): A unique identifier for the created account.

- **Events**:

  - `AccountCreated`: Emitted when a new account is successfully created.

- **Example Usage**: 
  ```typescript
  createAccount({
    accountType: "InsuredMember",
    accountDetails: {
      name: "John Doe",
      address: "0x123...",
      contact: "john.doe@example.com"
    }
  })
  ```


### 2. Premium Payment Calculation
Calculates the premium amount per month based on various factors.

**Method**: `calculatePremium`

- **Description**: Computes a fair and sustainable premium amount for healthcare coverage.

- **Parameters**:

  - `income` (Uint256): The annual income of the participant.
  - `location` (String): The geographical location of the participant.
  - `age` (Uint256): The age of the participant.
  - `healthRiskFactors` (Object): Key-value pairs for various health risk indicators (e.g., smoker: true, BMI: 25).

- **Returns**:

  - `premiumAmount` (Uint256): The calculated monthly premium amount.

- **Example Usage**: 
  ```typescript
  calculatePremium({
    income: 50000,
    location: "NY",
    age: 35,
    healthRiskFactors: { smoker: false, BMI: 22 }
  })
  ```

### 3. Premium Payment
Handles the processing of premium payments from users to the universal fund.

**Method**: `payPremium`

- **Description**: Enables users to pay their monthly healthcare premiums.

- **Parameters**:

  - `userAddress` (Address): The address of the user making the payment.
  - `amount` (Uint256): The premium amount to be paid.
  - `policyId` (String): The identifier for the healthcare policy.

- **Returns**:

  - `PremiumPaid`: Emitted when a premium payment is successfully processed.

- **Example Usage**: 
  ```typescript
  payPremium({
    userAddress: "0x123...",
    amount: 100,
    policyId: "POL12345"
  })
  ```

### 4. Claims Processing
Automates the validation and settlement of healthcare claims.

**Method**: `processClaim`

- **Description**:  Validates and processes a claim submitted by an InsuredMember. Both the InsuredMember and the HealthcareProvider must opt-in prior to processing. Payments are made from the UniversalFund account to the HealthcareProvider account.

- **Parameters**:

  - `insuredMemberAddress` (Address): The address of the insured member submitting the claim.
  - `healthcareProviderAddress` (Address): The address of the healthcare provider offering the service.
  - `hcpcsCode` (String): The HCPCS code representing the healthcare service.
  - `amount` (Uint256): The claimed amount based on the open-sourced HCPCS market.
  - `supportingDocs` (String[]): Array of URIs pointing to supporting documents.

- **Returns**:

  - `status` (String): Status of the claim (e.g., "Approved", "Rejected").
  - `transactionId` (String): A unique identifier for the claim transaction.

Events:

  - `ClaimProcessed`: Emitted when a claim is validated and processed.

- **Example Usage**: 
  ```typescript
  processClaim({
    insuredMemberAddress: "0x456...",
    healthcareProviderAddress: "0x789...",
    hcpcsCode: "99213",
    amount: 500,
    supportingDocs: ["https://docs.example.com/doc1", "https://docs.example.com/doc2"]
  })
  ```
