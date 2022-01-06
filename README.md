# whatsapp-verifier
Check if a phone number(s) exists on Whatsapp

### What

Tool to verify the existence of a phone number on Whatsapp.

### How

Uses Whatsapp Web to verify if the number has an associated Whatsapp account without sending a message.

### Why

Built for personal use. It can be extended to check phone numbers in bulk.

### How To Use

Install Dependencies:

```
npm install
```

Initiate login on Whatsapp:

```
npm run login
```

Run check for a Phone Number

```
npm run check 919898989898
```

Run bulk check for a Phone Numbers

```
npm run check 919898989898 919898989899
```

***Caution:*** Using this method to verify numbers in bulk can result in the logged in number being banned by WhatsApp!

***Note:*** Phone Number format is (**Country Prefix without**)(Phone Number Digits)
