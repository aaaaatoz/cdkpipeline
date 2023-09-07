#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyPipelineStack } from '../lib/cdkpipeline-stack';

const app = new cdk.App();
new MyPipelineStack(app, 'MyPipelineStack', {
    env: {
        account: '620428855768',
        region: 'ap-southeast-2',
    }
});

app.synth();