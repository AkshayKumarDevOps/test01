source /home/ec2-user/.bash_profile
#!/bin/bash
cd /opt/codedeploy-agent/deployment-root/$DEPLOYMENT_GROUP_ID/$DEPLOYMENT_ID/deployment-archive/
npm install
npm start
