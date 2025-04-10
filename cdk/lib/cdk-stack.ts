import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  BucketDeployment,
  Source
} from 'aws-cdk-lib/aws-s3-deployment';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { RemovalPolicy } from 'aws-cdk-lib';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
      publicReadAccess: true,
      blockPublicAccess: new s3.BlockPublicAccess({
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false
      }),
      removalPolicy: RemovalPolicy.DESTROY
    });

    new BucketDeployment(this, 'DeployWebsite', {
      sources: [Source.asset('../watercolor-shop-frontend/out')],
      destinationBucket: websiteBucket
    });
  }
}