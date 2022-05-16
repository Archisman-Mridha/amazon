import * as cdk from "@aws-cdk/core"
import { AuthenticationStack } from "./stacks/authentication.stack"

const app = new cdk.App( )

new AuthenticationStack(app, "authenticationStack")