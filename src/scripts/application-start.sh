#!/bin/bash

# Navigate to the application directory
cd /home/ec2-user/swagger-api-2

# Start the TypeScript Node.js application using ts-node
# npx ts-node index.ts


# commented out the following code that was working by callum bir 

# npx pm2 start --interpreter npx -- ts-node index.ts

#following code is not working --- need to fix  

# pm2 start swagger-api-2

npx pm2 start swagger-api-2