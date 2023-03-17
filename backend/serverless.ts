import type { AWS } from '@serverless/typescript';
import type {Serverless}  from 'serverless/aws';

import { registers, logins, addcompanies, addclients } from '@functions/index';
import { type } from 'os';


const serverlessConfiguration: AWS = {
  service: 'invi',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline' , 'serverless-apigw-binary'],
  provider: {
    name: 'aws',
    runtime: 'nodejs16.x',
    deploymentMethod: 'direct',
    region : 'us-east-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      MY_ENV_VAR:'my-env-value',
      
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  // import the function via paths
  functions: { registers, logins, addcompanies, addclients },
  package: { individually: true },
  custom: {
    
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    apigwBinary:{
      types:['*/*'],
      contentHandling: 'CONVERT_TO_BINARY',
      cors:{
        origins: ['https://invi-frontend.vercel.app'],
        headers : ['Content-Type'],
        allowCredentials:true,

      },
    },
    
    
  },
};

module.exports = serverlessConfiguration;
