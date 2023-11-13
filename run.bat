@echo off

echo Starting backend...
cd Vidly-Backend
:: call command returns control back to this batch file
:: call npm install
call start cmd /k "cd OneDrive/CODE/WEB/Vidly-Docker-Compose/Vidly-Backend & nodemon index.js"

echo Staring frontend...
cd ../Vidly-Frontend
:: call command returns control back to this batch file
:: call npm install
npm start

start "" http://localhost:3000/