import { PhysicalName, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib"
import { Construct } from "constructs"
import { Bucket, BucketEncryption, HttpMethods } from "aws-cdk-lib/aws-s3"
import { OriginAccessIdentity, Distribution, CachePolicy } from "aws-cdk-lib/aws-cloudfront"
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins"
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment"

export class MicrofrontendDeploymentStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props)

        //* used for deploying microfrontends

        const hostingBucket= new Bucket(this, "hostingBucket", {

            bucketName: PhysicalName.GENERATE_IF_NEEDED,
            publicReadAccess: false,
            removalPolicy: RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
            encryption: BucketEncryption.S3_MANAGED,
            versioned: true,
            cors: [{

                maxAge: 3000,
                allowedHeaders: ["Authorization", "Content-Length"],
                allowedMethods: [HttpMethods.GET],
                allowedOrigins: ["*"]
            }]
        })

        new BucketDeployment(this, "microfrontendsS3Deployment", {

            sources: [ Source.asset("dist/web") ],
            destinationBucket: hostingBucket
        })

        const oai= new OriginAccessIdentity(this, "oai")

        hostingBucket.grantRead(oai)

        const cloudfrontDistribution= new Distribution(this, "cloudFrontDistribution", {

            defaultRootObject: "container/index.html",
            defaultBehavior: {

                origin: new S3Origin(hostingBucket, { originAccessIdentity: oai }),
                cachePolicy: CachePolicy.CACHING_OPTIMIZED,
                edgeLambdas: [ ]
            }
        })
    }
}