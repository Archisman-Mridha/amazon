import { Duration, Expiration, SecretValue, Stack, StackProps } from "aws-cdk-lib"
import { Construct } from "constructs"
import { CfnIdentityPool, UserPool, UserPoolClient } from "aws-cdk-lib/aws-cognito";
import { App, GitHubSourceCodeProvider } from "@aws-cdk/aws-amplify-alpha"
import { AppSyncTransformer } from "cdk-appsync-transformer"
import { AuthorizationType, FieldLogLevel, UserPoolDefaultAction } from "@aws-cdk/aws-appsync-alpha"

interface AppsyncStackProps extends StackProps {

    userPoolConfig: UserPool
    userPoolClient: UserPoolClient
    identityPool: CfnIdentityPool
}

export class AppsyncStack extends Stack {
    constructor(scope: Construct, id: string, props: AppsyncStackProps) {
        super(scope, id, props)

        //* used for managing appsync apis

        const graphQLProductApi= new AppSyncTransformer(this, "amazonGraphQLProductApi", {

            fieldLogLevel: FieldLogLevel.ALL,
            schemaPath: "graphql/schema.graphql",
            outputPath: "generated",
            authorizationConfig: {

                defaultAuthorization: {

                    authorizationType: AuthorizationType.API_KEY,
                    apiKeyConfig: { expires: Expiration.after(Duration.days(365)) }
                },

                additionalAuthorizationModes: [{

                    authorizationType: AuthorizationType.USER_POOL,
                    userPoolConfig: {

                        defaultAction: UserPoolDefaultAction.ALLOW,
                        userPool: props.userPoolConfig
                    }
                }]
            }
        })

        const amplifyApp= new App(this, "amazonAmplifyProject", {
            sourceCodeProvider: new GitHubSourceCodeProvider({

                owner: "Archisman-Mridha",
                repository: "amazon",
                oauthToken: SecretValue.secretsManager("githubAccessToken")
            }),

            environmentVariables: {

                "identityPoolID": props.identityPool.ref,
                "userPoolID": props.userPoolConfig.userPoolId,
                "userPoolClientID": props.userPoolClient.userPoolClientId,
                "region": this.region,
                "appsyncApi": graphQLProductApi.appsyncAPI.graphqlUrl
            }
        })

        amplifyApp.addBranch("main")
    }
}