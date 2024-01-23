// This is an auto-generated file, do not edit manually
import type { RuntimeCompositeDefinition } from '@composedb/types'
export const definition: RuntimeCompositeDefinition = {"models":{"GitcoinAttestation":{"interface":true,"implements":[],"id":"kjzl6hvfrbw6c5nawcon8xmqyh270olex7ggbdrpam6w0rpewkn5jyybmkyc5rw","accountRelation":{"type":"none"}},"VerifiableCredentialProof":{"interface":true,"implements":[],"id":"kjzl6hvfrbw6c73j1f2hikvr9fq31m1erw4ngur4g0ila46x2kbgx7g76xeom1w","accountRelation":{"type":"none"}},"VerifiableCredential":{"interface":true,"implements":["kjzl6hvfrbw6c5nawcon8xmqyh270olex7ggbdrpam6w0rpewkn5jyybmkyc5rw"],"id":"kjzl6hvfrbw6c9rm2lhkk2mv5v8ytatv6br7uy4ugewmf0zivk8xle3qmpbkzgd","accountRelation":{"type":"none"}},"GitcoinPassportStampWrapperInterface":{"interface":true,"implements":[],"id":"kjzl6hvfrbw6c7f142kob3ps523tpf5dk49qwuritwwkinmqm5hk05lcmqm4zpz","accountRelation":{"type":"none"}},"GitcoinPassportStamp":{"interface":false,"implements":["kjzl6hvfrbw6c9rm2lhkk2mv5v8ytatv6br7uy4ugewmf0zivk8xle3qmpbkzgd","kjzl6hvfrbw6c5nawcon8xmqyh270olex7ggbdrpam6w0rpewkn5jyybmkyc5rw"],"id":"kjzl6hvfrbw6c9x0b2jmkiuhwejywo1oi5ngz1jxzi61ydsoqq1hic6k382smsu","accountRelation":{"type":"list"}},"GitcoinPassportStampWrapper":{"interface":false,"implements":["kjzl6hvfrbw6c7f142kob3ps523tpf5dk49qwuritwwkinmqm5hk05lcmqm4zpz"],"id":"kjzl6hvfrbw6ca5ea8vya01k59zeeyetyqbl5ke2xwj83ztl1h0smyq5jkjzb7j","accountRelation":{"type":"list"}}},"objects":{"GitcoinAttestation":{"type":{"type":"list","required":true,"item":{"type":"string","required":true}}},"VerifiableCredentialProof":{"type":{"type":"string","required":true}},"VerifiableCredential":{"type":{"type":"list","required":true,"item":{"type":"string","required":true}},"issuer":{"type":"string","required":true},"issuanceDate":{"type":"datetime","required":true},"expirationDate":{"type":"datetime","required":false}},"GitcoinPassportStampWrapperInterface":{"vcID":{"type":"streamid","required":true},"isDeleted":{"type":"boolean","required":false},"isRevoked":{"type":"boolean","required":false},"vc":{"type":"view","viewType":"relation","relation":{"source":"document","model":"kjzl6hvfrbw6c9rm2lhkk2mv5v8ytatv6br7uy4ugewmf0zivk8xle3qmpbkzgd","property":"vcID"}}},"EIP712ValueType":{"name":{"type":"string","required":true},"type":{"type":"string","required":true}},"EIP712DomainTypes":{"Proof":{"type":"list","required":false,"item":{"type":"reference","refType":"object","refName":"EIP712ValueType","required":false}},"Document":{"type":"list","required":false,"item":{"type":"reference","refType":"object","refName":"EIP712ValueType","required":false}},"_context":{"type":"list","required":false,"item":{"type":"reference","refType":"object","refName":"EIP712ValueType","required":false}},"EIP712Domain":{"type":"list","required":false,"item":{"type":"reference","refType":"object","refName":"EIP712ValueType","required":false}},"CredentialStatus":{"type":"list","required":false,"item":{"type":"reference","refType":"object","refName":"EIP712ValueType","required":false}},"CredentialSubject":{"type":"list","required":false,"item":{"type":"reference","refType":"object","refName":"EIP712ValueType","required":false}}},"EIP712DomainDomain":{"name":{"type":"string","required":true}},"EIP712Domain":{"types":{"type":"reference","refType":"object","refName":"EIP712DomainTypes","required":true},"domain":{"type":"reference","refType":"object","refName":"EIP712DomainDomain","required":true},"primaryType":{"type":"string","required":true}},"GitcoinPassportVcProof":{"type":{"type":"string","required":true},"created":{"type":"datetime","required":true},"_context":{"type":"string","required":true},"proofValue":{"type":"string","required":true},"eip712Domain":{"type":"reference","refType":"object","refName":"EIP712Domain","required":true},"proofPurpose":{"type":"string","required":true},"verificationMethod":{"type":"string","required":true}},"GitcoinPassportVcCredentialSubjectContext":{"hash":{"type":"string","required":true},"provider":{"type":"string","required":true}},"GitcoinPassportVcCredentialSubject":{"id":{"type":"string","required":true},"hash":{"type":"string","required":true},"_context":{"type":"reference","refType":"object","refName":"GitcoinPassportVcCredentialSubjectContext","required":false},"provider":{"type":"string","required":true}},"GitcoinPassportStamp":{"type":{"type":"list","required":true,"item":{"type":"string","required":true}},"proof":{"type":"reference","refType":"object","refName":"GitcoinPassportVcProof","required":true},"issuer":{"type":"string","required":true,"indexed":true},"_context":{"type":"list","required":true,"item":{"type":"string","required":true}},"issuanceDate":{"type":"datetime","required":true,"indexed":true},"expirationDate":{"type":"datetime","required":false,"indexed":true},"credentialSubject":{"type":"reference","refType":"object","refName":"GitcoinPassportVcCredentialSubject","required":true}},"GitcoinPassportStampWrapper":{"vcID":{"type":"streamid","required":true,"indexed":true},"isDeleted":{"type":"boolean","required":false,"indexed":true},"isRevoked":{"type":"boolean","required":false,"indexed":true},"vc":{"type":"view","viewType":"relation","relation":{"source":"document","model":"kjzl6hvfrbw6c9rm2lhkk2mv5v8ytatv6br7uy4ugewmf0zivk8xle3qmpbkzgd","property":"vcID"}}}},"enums":{},"accountData":{"gitcoinAttestationList":{"type":"connection","name":"GitcoinAttestation"},"verifiableCredentialProofList":{"type":"connection","name":"VerifiableCredentialProof"},"verifiableCredentialList":{"type":"connection","name":"VerifiableCredential"},"gitcoinPassportStampWrapperInterfaceList":{"type":"connection","name":"GitcoinPassportStampWrapperInterface"},"gitcoinPassportStampList":{"type":"connection","name":"GitcoinPassportStamp"},"gitcoinPassportStampWrapperList":{"type":"connection","name":"GitcoinPassportStampWrapper"}}}