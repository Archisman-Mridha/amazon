import "source-map-support/register"
import * as cdk from "aws-cdk-lib"
import { AmazonStack } from "../stacks/aws-stack"

const app = new cdk.App( )

new AmazonStack(app, "AmazonStack", { })