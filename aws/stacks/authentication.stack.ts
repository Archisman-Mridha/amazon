import { Duration, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib"
import { AccountRecovery, CfnIdentityPool, UserPool, UserPoolClient } from "aws-cdk-lib/aws-cognito"
import { Construct } from "constructs"

export class AuthenticationResourcesManagementStack extends Stack {

    public userPool: UserPool
    public userPoolClient: UserPoolClient
    public identityPool: CfnIdentityPool

    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props)

        //* used for managing authentication workflow

        this.userPool= new UserPool(this, "amazonUserpool", {

            selfSignUpEnabled: true,
            removalPolicy: RemovalPolicy.DESTROY,
            accountRecovery: AccountRecovery.PHONE_AND_EMAIL,
            autoVerify: { email: true, phone: true },

            signInAliases: { email: true, phone: true },

            standardAttributes: {

                email: { mutable: true, required: true },
                phoneNumber: { mutable: true, required: true },
                address: { mutable: true, required: true },
                fullname: { mutable: true, required: true }
            },

            customAttributes: { }
        })

        this.userPoolClient= new UserPoolClient(this, "amazonUserpoolClient", {

            userPool: this.userPool,
            accessTokenValidity: Duration.days(1),
            refreshTokenValidity: Duration.days(365)
        })

        this.identityPool= new CfnIdentityPool(this, "amazonIdentityPool", {

            allowUnauthenticatedIdentities: false,
            cognitoIdentityProviders: [{

                clientId: this.userPoolClient.userPoolClientId,
                providerName: this.userPool.userPoolProviderName
            }]
        })
    }
}