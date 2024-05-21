pwd
ls -lrt 
echo home is set to $HOME 

npm config set proxy http://dojproxy.atf.gov:8080
npm config set http_proxy http://dojproxy.atf.gov:8080
npm config set https_proxy http://dojproxy.atf.gov:8080

npm run build 
ls -lrt 
ls -lrt node_modules
