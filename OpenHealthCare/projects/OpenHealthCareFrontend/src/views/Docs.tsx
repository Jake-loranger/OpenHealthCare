import * as React from 'react';
import ReactMarkdown from 'react-markdown';

const Docs: React.FC = () => {
    const markdownContent = `
    # OpenHealthCare Protocol Documentation v1.0
    
    OpenHealthCare is a Decentralized Healthcare Insurance Protocol (DHIP) designed to create a transparent universal care funding protocol for patients' healthcare costs.
    This is the code documentation for the smart contracts that power the protocol.
    
    ## Documentation
    
    ### 1. Account Creation
    Handles the creation of accounts for the various participants in the ecosystem.
    
    **Method**: \`createAccount\`
    
    - **Description**: Creates accounts for participants in the system.
    `;

    return (
        <div>
            <ReactMarkdown className="text-white">
                {markdownContent}
            </ReactMarkdown>
        </div>
    );
}

export default Docs;
