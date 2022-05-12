import "source-map-support/register"
import * as cdk from "aws-cdk-lib"
import { FrontendInfrastuctureStack } from "../stacks/frontend.stack"

const app = new cdk.App( )

new FrontendInfrastuctureStack(app, "FrontendInfrastuctureStack", { })