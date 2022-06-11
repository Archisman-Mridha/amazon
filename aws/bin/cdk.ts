#!/usr/bin/env node
import "source-map-support/register"
import { MicrofrontendDeploymentStack } from "../stacks/microfrontend.stack"
import { App } from "aws-cdk-lib"
import { AuthenticationResourcesManagementStack } from '../stacks/authentication.stack';
import { AppsyncStack } from "../stacks/appsync.stack";

const app = new App( )

// new MicrofrontendDeploymentStack(app, "MicrofrontendDeploymentStack", { })

const { userPool, userPoolClient, identityPool }=
    new AuthenticationResourcesManagementStack(app, "AuthenticationResourcesManagementStack", { })

new AppsyncStack(app, "AppsyncStack", {

    userPoolConfig: userPool,
    userPoolClient: userPoolClient,
    identityPool: identityPool
})