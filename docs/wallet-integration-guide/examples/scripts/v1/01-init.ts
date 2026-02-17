import {
    localNetAuthDefault,
    localNetStaticConfig,
    Sdk,
    AuthTokenProvider,
} from '@canton-network/wallet-sdk'

const sdk = await Sdk.create({
    authTokenProvider: new AuthTokenProvider(localNetAuthDefault()),
    ledgerClientUrl: localNetStaticConfig.LOCALNET_APP_USER_LEDGER_URL,
    validatorUrl: localNetStaticConfig.LOCALNET_SCAN_PROXY_API_URL,
    tokenStandardUrl: localNetStaticConfig.LOCALNET_TOKEN_STANDARD_URL,
    registries: [localNetStaticConfig.LOCALNET_REGISTRY_API_URL],
    logAdapter: 'pino',
})

sdk.keys.generate()

//TODO: add external party creation (#1294)
