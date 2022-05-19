#!/usr/bin/env node
import "source-map-support/register"
import { MicrofrontendDeploymentStack } from "../stacks/microfrontend.stack"
import { App } from "aws-cdk-lib"

const app = new App( )

new MicrofrontendDeploymentStack(app, "MicrofrontendDeploymentStack", { })