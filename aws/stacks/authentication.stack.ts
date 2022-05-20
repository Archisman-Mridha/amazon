import { Duration, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib"
import { CfnIdentityPool, UserPool, UserPoolClient } from "aws-cdk-lib/aws-cognito"
import { Construct } from "constructs"

export class MicrofrontendDeploymentStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props)

        //* used for managing authentication workflow

        const userPool= new UserPool(this, "userpool", {

            selfSignUpEnabled: true,
            removalPolicy: RemovalPolicy.DESTROY,

            standardAttributes: {

                email: { mutable: true, required: true },
                phoneNumber: { mutable: true, required: true },
                address: { mutable: true, required: true },
                fullname: { mutable: true, required: true }
            },

            signInAliases: { email: true, phone: true },

            autoVerify: { email: true, phone: true }
        })

        const userPoolClient= new UserPoolClient(this, "userpool-client", {

            userPool,
            accessTokenValidity: Duration.days(30)
        })

        new CfnIdentityPool(this, "identity-pool", {

            allowUnauthenticatedIdentities: false,
            cognitoIdentityProviders: [{

                clientId: userPoolClient.userPoolClientId,
                providerName: userPool.userPoolProviderName
            }]
        })
    }
}