import * as cdk from 'aws-cdk-lib'
import * as apigw from 'aws-cdk-lib/aws-apigateway'
import * as lambda from 'aws-cdk-lib/aws-lambda'
export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id:string, props?:
    cdk.StackProps) {
      super(scope, id, props);
      // defines an AWS lambda resource
      const hello = new lambda.Function(this, 'HelloHandler', {
        runtime: lambda.Runtime.NODEJS_14_X, // Execution env
        code: lambda.Code.fromAsset('lambda'), // Loaded from directory called lambda
        handler: 'hello.handler'
      });
      // Defining API gateway REST API resource 
      new apigw.LambdaRestApi(this, "Endpoint", {handler: hello});
    }
}
