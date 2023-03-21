import type { AWS } from '@serverless/typescript';
import { registers, logins, addcompanies, addclients , axiosfunction , getclients , getcompanydata , invoicefunction } from '@functions/index';


const serverlessConfiguration: AWS = {
  service: 'invi',
  configValidationMode: 'error',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline'  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    deploymentMethod: 'direct',
    region : 'us-east-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {  
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  // import the function via paths
  functions: { registers, logins, addcompanies, addclients , axiosfunction , getclients , getcompanydata, invoicefunction},
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
    cors:{
      origin : "https://invi-frontend-ox42.vercel.app",
      headers :[
        'Authorization'
      ],
      allowCredentials: true 
    }
    
  },
};

module.exports = serverlessConfiguration;



