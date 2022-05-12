import { PhysicalName, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib"
import { CachePolicy, Distribution, OriginAccessIdentity } from "aws-cdk-lib/aws-cloudfront"
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins"
import { Bucket, BucketEncryption } from "aws-cdk-lib/aws-s3"
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment"
import { Construct } from "constructs"
import { readdir } from "fs"

const microfrontends= [ ]

export class FrontendInfrastuctureStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props)

        readdir("web", (error, folders) => {
            if(! error)
                folders.forEach(microfrontendName => microfrontends.push(microfrontendName))

            else throw new Error(error.message)
        })

        const hostingBucket= new Bucket(this, "hosting-bucket", {

            bucketName: PhysicalName.GENERATE_IF_NEEDED,
            publicReadAccess: false,
            removalPolicy: RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
            encryption: BucketEncryption.S3_MANAGED
        })

        new BucketDeployment(this, "microfrontends-deployment", {

            sources: [Source.asset("dist/web")],
            destinationBucket: hostingBucket
        })

        // TODO: put firewall layer before CloudFront using WAF

        const oai= new OriginAccessIdentity(this, "cloudFront-distribution-oai")

        hostingBucket.grantRead(oai)

        const cloudFrontDistribution= new Distribution(this, "cloudFront-distribution", {

            defaultRootObject: "container/index.html",
            defaultBehavior: {

                origin: new S3Origin(hostingBucket, {

                    originAccessIdentity: oai
                }),
                cachePolicy: CachePolicy.CACHING_OPTIMIZED
            }
        })
    }
}