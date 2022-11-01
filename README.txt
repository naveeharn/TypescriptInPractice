yarn init -y
yarn add typescript -D
yarn add ts-node -D
npx tsc --init

#CMD + Shift + P
TypeScript: Restart TS server

#run js file
node <<filename>>.js
npx ts-node <<filename>>.js

#run ts file
npx ts-node <<filename>>.ts
npx tsc <<filename>>.ts         (create js file)
tsc <<filename>>.ts
