# Encryption Test NodeJS
NodeJS program for testing public private key pair encryption


### Generate RSA Key
```
openssl genrsa -des3 -out private.pem 2048
```
It will ask you to input a passphrase as well.
Keep the passphrase and the private key safe.

### Export RSA public key
```
openssl rsa -in private.pem -outform PEM -pubout -out public.pem
```
Export this public key to anyone. Anyone can encrypt the data using this public key.
The private key can decrypt that data.

### Run the code
This example will just load the public key from the current path and do a simple encryption.  
Then it will decrypt it using the private key and the passphrase which we will be setting as an environment variable.  
```
export PASSPHRASE=<your passphrase>
npm start
```
