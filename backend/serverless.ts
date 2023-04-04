import type { AWS } from "@serverless/typescript";
import {
  registers,
  logins,
  addcompanies,
  addclients,

  getclients,
  getcompanydata,
  invoicefunction,
  getinvoicedatas,
  getuserdatas,
  updatecompanydatas,
  deleteclientdatas,
  authorizationfunctions,
  updateclientdatas,
  deletecompanydatas,
  updateinvoicedatas,
  deleteinvoicedatas,
} from "@functions/index";

const serverlessConfiguration: AWS = {
  service: "invi",
  configValidationMode: "error",
  frameworkVersion: "3",
  useDotenv: true,
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    deploymentMethod: "direct",
    region: "us-east-1",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      SECRETKEY: "${env:SECRETKEY}",
      MONGO_URI: "${env:MONGO_URI}",
      accessKeyId : "${env:accessKeyId}",
      secretKeyId : "${env:secretKeyId}",
      region : "${env:region}",
      SALTROUNDS : "${env:SALTROUNDS}",
      bucketName : "${env:bucketName}",
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  // import the function via paths
  functions: {
    registers,
    logins,
    addcompanies,
    addclients,

    getclients,
    getcompanydata,
    invoicefunction,
    getinvoicedatas,
    getuserdatas,
    updatecompanydatas,
    deleteclientdatas,
    authorizationfunctions,
    updateclientdatas,
    deletecompanydatas,
    updateinvoicedatas,
    deleteinvoicedatas,
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },

};

module.exports = serverlessConfiguration;
