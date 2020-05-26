# Encryption Test NodeJS
NodeJS program for testing public private key pair encryption


### Generate RSA Key
```
openssl genrsa -des3 -out private.pem 2048
```

### Export RSA public key
```
openssl rsa -in private.pem -outform PEM -pubout -out public.pem
```