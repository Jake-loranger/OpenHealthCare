import { NetworkId, useWallet, type Wallet } from '@txnlab/use-wallet-react'
import algosdk from 'algosdk'
import * as React from 'react'
import { Button, Form, Modal, Row } from 'react-bootstrap'

const ConnectWalletModal: React.FC = () => {
    const {
        algodClient,
        activeAddress,
        activeNetwork,
        setActiveNetwork,
        transactionSigner,
        wallets,
    } = useWallet()

    const [isSending, setIsSending] = React.useState(false)
    const [showModal, setShowModal] = React.useState(false)

    const isConnectDisabled = (wallet: Wallet) => {
        return wallet.isConnected
    }

    const setActiveAccount = (event: React.ChangeEvent<HTMLSelectElement>, wallet: Wallet) => {
        const target = event.target
        wallet.setActiveAccount(target.value)
    }

    const sendTransaction = async () => {
        try {
            if (!activeAddress) {
                throw new Error('[App] No active account')
            }

            const atc = new algosdk.AtomicTransactionComposer()
            const suggestedParams = await algodClient.getTransactionParams().do()

            const transaction = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
                from: activeAddress,
                to: activeAddress,
                amount: 0,
                suggestedParams,
            })

            atc.addTransaction({ txn: transaction, signer: transactionSigner })

            console.info(`[App] Sending transaction...`, transaction)

            setIsSending(true)

            const result = await atc.execute(algodClient, 4)

            console.info(`[App] ✅ Successfully sent transaction!`, {
                confirmedRound: result.confirmedRound,
                txIDs: result.txIDs,
            })
        } catch (error) {
            console.error('[App] Error signing transaction:', error)
        } finally {
            setIsSending(false)
        }
    }

    return (
        <div>
            <div className='my-4'>
                <h4>
                    Current Network: <span className='active-network'>{activeNetwork}</span>
                </h4>
                <Button
                    variant='secondary'
                    onClick={() => setActiveNetwork(NetworkId.BETANET)}
                    disabled={activeNetwork === NetworkId.BETANET}
                >
                    Set to Betanet
                </Button>
                <Button
                    variant='secondary'
                    className='mx-4'
                    onClick={() => setActiveNetwork(NetworkId.TESTNET)}
                    disabled={activeNetwork === NetworkId.TESTNET}
                >
                    Set to Testnet
                </Button>
                <Button
                    variant='secondary'
                    onClick={() => setActiveNetwork(NetworkId.MAINNET)}
                    disabled={activeNetwork === NetworkId.MAINNET}
                >
                    Set to Mainnet
                </Button>
            </div>

            {wallets.map((wallet) => (
                <div key={wallet.id} className='my-4'>
                    <h4>
                        {wallet.metadata.name} {wallet.isActive ? '[Active]' : ''}
                    </h4>

                    <div className='wallet-buttons'>
                        <Button
                            onClick={() => wallet.connect()}
                            disabled={isConnectDisabled(wallet)}
                        >
                            Connect
                        </Button>
                        <Button
                            className='mx-4'
                            onClick={() => wallet.disconnect()}
                            disabled={!wallet.isConnected}
                        >
                            Disconnect
                        </Button>
                        {wallet.isActive ? (
                            <Button onClick={sendTransaction} disabled={isSending}>
                                {isSending ? 'Sending Transaction...' : 'Send Transaction'}
                            </Button>
                        ) : (
                            <Button
                                onClick={() => wallet.setActive()}
                                disabled={!wallet.isConnected}
                            >
                                Set Active
                            </Button>
                        )}
                    </div>

                    {wallet.isActive && wallet.accounts.length > 0 && (
                        <Form.Select
                            className='my-4'
                            onChange={(e) => setActiveAccount(e, wallet)}
                        >
                            {wallet.accounts.map((account) => (
                                <option key={account.address} value={account.address}>
                                    {account.address}
                                </option>
                            ))}
                        </Form.Select>
                    )}
                </div>
            ))}
        </div>
    )
}

export default ConnectWalletModal
