# Topic-wise Questions

A comprehensive collection of questions from past examinations, organized by cryptographic topics. This gives you a great overview of the most commonly asked questions for each concept!

## 1. Fundamentals of Security

**(a)** What is computer security? 

**(b)** Discuss the **C.I.A property**. Why are these properties necessary for data to be transferred? 

**(c)** Explain the **CIA triad** in information security with suitable examples.

**(d)** What is cryptography? Describe three network security goals.

**(e)** Briefly explain four security design principles.

**(f)** State Kerckhoff's principle about open design.

**(g)** What do you understand by **system integrity**? Mention **two tools** used to support integrity.

**(h)** How does Role-Based Access Control (RBAC) work and what are its benefits?

**(i)** How does RBAC enhance security in an organization?

**(j)** Consider a computer system with three users: Alice, Bob and Cyndy. Alice owns the file **"Secret"**... Create the corresponding access control matrix.

**(k)** Differentiate between Authentication and Authorization.

**(l)** Classify the following proposed passwords as good choices or poor choices, and justify your reasoning: `cat&dog`, `3.1515pi`.

**(m)** What is virtual memory? Why is the virtual memory concept used?

**(n)** Define **system integrity** in computer security. Explain how integrity differs from confidentiality with an example.

**(o)** Explain the **CIA Triad** with a real-world banking system example showing how each component is protected.

**(p)** A hospital system was hacked and patient data was modified without authorization.
* Which component of the CIA triad was violated?
* Suggest two preventive measures.

---

## 2. Classical Cryptography

**(a)** Using the **Caesar cipher**, the encrypted message is: **JRRGOXFN**. Find the plaintext.

**(b)** What is the encryption of the following string using Caesar cipher: **IAMNOTAHACKER**

**(c)** Solve the below math using Rail-fence Cipher technique? <br>**Plain Text:** a new semester begins with football and moving vans <br>**Given key value 5.** What is the chipper text?

**(d)** Perform encryption using the Rail Fence Cipher with 3 rails where **Plaintext: SHERLOCKHOMES**.

**(e)** What is the transposition technique? Apply the Rail Fence technique for the plaintext **"Computer Science and Engineering"** using depth 3.

**(f)** Encrypt the message **"successive"** using Playfair Cipher technique where the keyword is **"summary"**.

**(g)** Encrypt the message **"summary"** using Playfair Cipher technique where keyword is **"monarchy"**.

**(h)** Solve the below math using Polyalphabetic cipher technique<br>**Plain Text:** Engineering College<br>**Given key:** Sylhet. What is cipher text?

**(i)** Decrypt the ciphertext **"FKMFIO"** using Hill Cipher with the key matrix below:<br>$$ \begin{aligned} K = \begin{bmatrix} 2 & 3 \\ 3 & 6 \end{bmatrix} \end{aligned} $$

**(j)** In Hill cipher, let the length of the blocks, **m = 2** and a block is the string **"AB"**. $$ \begin{aligned} k = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \end{aligned} $$<br>Find the cipher text. Also show that decryption returns the given block string.

**(k)** Explain - "Though the possible substitution ciphers of English text are huge, ...

**(l)** Explain how the **Vigenère cipher** improves security over the Caesar cipher.

**(m)** Describe the **Playfair cipher** encryption technique. Why is it considered stronger than simple substitution ciphers?

**(n)** Encrypt the plaintext **"SECURITY"** using the Vigenère Cipher with key **"KEY"**. Show full steps.

**(o)** Encrypt the plaintext **"HIDE MONEY"** using the Playfair Cipher with the key **"MONARCHY"**. Construct the 5×5 matrix and show steps.

---

## 3. Symmetric Key Cryptography & Block Ciphers

**(a)** Distinguish Stream Cipher and Block Cipher.

**(b)** Why is it important to use padding in block ciphers? How does the size of the key affect the security of a symmetric cipher?

**(c)** Apply PKCS#5 padding to the plaintext "NETWORK" assuming block size $b = 128$ bits.

**(d)** What is the padded plaintext of **"SECURITYCSE477"** using PKCS5 when block size is 16 bytes.

**(e)** Draw the block diagram of Feistel Cipher.

**(f)** Draw the Diagram of S-DES key generation.

**(g)** Given an 8-bit plaintext 10110101 and a 10-bit key 1010100010, perform the key generation step of the S-DES algorithm and calculate the subkeys K1 and K2. Using:<br>**Permutation for p10:** 3,5,7,2,10,1,6,8,9,4<br>**Permutation for p8:** 7,3,6,5,9,4,10,1

**(h)** Shortly explain the 4 steps involved in every round of Advanced Encryption Standard (AES).

**(i)** Describe the step-by-step encryption process of AES including the initialization, rounds, and final transformation.

**(j)** In AES, what are the basic sequential steps in both encryption and decryption rounds? What is the value of **RC[j]**, in the key expansion step where **j = 5**.

**(k)** Describe advantages and limitations of different AES operation modes.

**(l)** Differentiate between ECB and CBC mode along with their usability.

**(m)** Which block cipher mode is not suitable for data having repeated patterns? Why?

**(n)** Explain the concept of a block cipher. Discuss different types of block cipher modes of operation (**ECB, CBC, CFB, OFB**). Mention one advantage and one disadvantage of any one mode.

**(o)** What is the **PKCS#5** padding method? Why is padding necessary in block cipher encryption?

**(p)** A block cipher uses **8-byte** blocks. The plaintext length is **22 bytes**.
* Apply PKCS5 padding.
* Show the final padded length and padding bytes added.

---

## 4. Mathematics & Number Theory

**(a)** Why is a prime number important in cryptography?

**(b)** Define Euler's theorem and its alternative form.

**(c)** State Fermat's Little Theorem.

**(d)** Using **Fermat's Theorem**, examine whether the number **43** is a prime number or not.

**(e)** Using the **Extended Euclidean algorithm**, determine the **GCD of 305 and 85** as well as the value of **x and y**.

**(f)** How many numbers are coprime with a prime number **p**? **gcd(0,20) = ?**

**(g)** Employ Miller Robin primality test to check whether 97 is a prime number or not.

**(h)** Show the Prime Factorization of two numbers 360 and 600. Discuss mathematically why in cryptographic systems (like RSA), it is important that two numbers used for key generation do not share the same prime factors.

**(i)** Explain how the distributive property works in GF(5) Field.

**(j)** What is a primitive root modulo a prime number **p**? How many primitive roots are there in $Z_p$?

**(k)** Find one primitive root modulo 13. Provide necessary calculations.

**(l)** Find the elements of $Z_{56}^*$.

**(m)** What is the multiplicative inverse of 15 in **$Z_{26}$**?

**(n)** Find the value of **$Z^*_{56}$**.

**(o)** Briefly explain how Fermat's primality test works.

**(p)** Calculate **$5^{21} \pmod{13}$** using repeated squaring.

**(q)** Find one primitive root modulo 11.

---

## 5. Public Key Cryptography

**(a)** What is a trap door one-way function?

**(b)** How many different keys are needed for a symmetric encryption system and public key encryption system for 10 parties?

**(c)** Provide mathematical correctness of the **RSA algorithm**.

**(d)** How does RSA encryption ensure security? Which attacks are possible on the RSA cryptosystem?

**(e)** Given two prime numbers p and q are 5 and 17 respectively, generate public key and private key pair using RSA algorithm where e = 13. Encrypt the message M = 150212.

**(f)** Perform the complete RSA algorithm on: p=17, q=19, M=9 and show all steps of n, φ(n), d, encryption, decryption.

**(g)** RSA system uses P = 7, Q = 13, if Alice decided to send a message M = 9 to the Bob what should be the public and private key and show that Bob is able to decrypt the message.

**(h)** Let's assume for using RSA encryption, **n = 221**, and private key, **d = 61**. We've hashed our plaintext and want to encrypt the hash value. The hash value of the plaintext is **$M_H = 37$**. Find the public key component, **e**, and the encrypted hash value **$C_H$**.

**(i)** In RSA, two prime numbers are picked in the setup phase, **p = 131, q = 163 and e = 127**. Find the private key **d**. Let's assume message **M = 37**. Find the cipher **C**.

**(j)** From the given values answer the following questions:<br>**Prime Modulus p = 23, Primitive Root g = 5, Private Key Xa = 6, Private key Xb = 15**<br>Explain the philosophy behind Diffie-Hellman key exchange protocol. Generate public keys (Ya, Yb) and shared secret key.

**(k)** Discuss the vulnerability of Diffie-Hellman to man-in-the-middle attacks and how modern network protocols mitigate it.

**(l)** **P = 23, g = 5, e = 8, d = 6**, choose a Message M, random number K and perform the ELGamal encryption and decryption.

**(m)** RSA security depends on the discrete logarithm problem. (True/False)

**(n)** Prove the correctness of the ElGamal cryptosystem.

**(o)** Show the result of an ElGamal encryption of the message **M = 9** using **k = 4** for the public key **(p, g, y) = (59, 2, 25)**.

**(p)** Let us assume for RSA encryption, our public key is **n = 391**, **e = 63** and our private key is **d = 95**. We have hashed our plaintext and want to encrypt the hash value. The hash value of the plaintext is **M = 37**.
* Find **$\varphi(n)$**.
* Find the encrypted hash value of the plaintext **$C_H$** using RSA encryption.

**(q)** Let us assume that GoodBoy wants to send a message **M = 47** to you using the ElGamal cryptosystem. You have chosen a prime number **p = 131** and a primitive root **g = 29** in **$Z_p$**. You also selected a random number **x = 111** as your secret key. GoodBoy picked a random number **k = 37**.
* Find your public key triple which GoodBoy can use to encrypt the message.
* Find the encrypted pair **(a,b)** of the message generated by GoodBoy.
* Write down the equation for the decryption step you took and prove its correctness.

---

## 6. Hashes, MAC & Digital Signatures

**(a)** What are the security requirements of cryptographic hash functions?

**(b)** Explain MD5 algorithm with appropriate figure.

**(c)** How does Hash function provide Integrity? Draw the diagram of a message sending process when hash function ensures both confidentiality and authentication.

**(d)** For given information answer the following question:<br>**block size m** = 4 bits<br>**h(0)** = 1010<br>**padding** = 110<br>**Message M** = 1101110010011<br>Compress the Message M using Merkle Damgard Construction Algorithm.

**(e)** How does hashing ensure integrity? Where can hashing be used?

**(f)** Explain how MAC is used for message authentication.

**(g)** Draw the working Diagram of HMAC and describe each step of generating HMAC.

**(h)** Differentiate between digital signature and MAC. Which of the following properties are ensured by digital signature and MAC? (Integrity, Authenticity, Non-repudiation)

**(i)** Differentiate between asymmetric key cryptography and digital signature.

**(j)** What is nonrepudiation? Describe how RSA digital signatures provide non-repudiation.

**(k)** How to generate a digital signature and verify it?

**(l)** How does a digital signature work? Provide derivation of its correctness.

**(m)** Which attack can be imposed on the RSA signature? What can be used to mitigate this attack?

**(n)** Find the ensurity for Hash, MAC and Digital Signature of the following properties: Authenticity, Integrity, and Non-repudiation.

**(o)** What is the non-forgeability property of a digital signature?

---

## 7. Network Security, Authentication & Protocols

**(a)** What is a key exchange protocol? Name one such protocol.

**(b)** Write down the cryptographic protocol for the situation, "A shares a secret key with B and each party is authenticated to each other".

**(c)** What is certificate authority (CA)? Why is the digital certificate necessary?

**(d)** What are the key differences between CA-signed and self-signed certificates?

**(e)** Explain the work flow of Pretty Good Privacy (PGP) in short.

**(f)** What is Kerberos and what are the advantages of Kerberos?

**(g)** Describe how IPSec Actually Works (Step-by-Step).

**(h)** What are the primary goals of IPSec in network communication?

**(i)** Differentiate between Authentication Header (AH) and Encapsulating Security Payload (ESP).

**(j)** Describe 3 Common TCP attacks, their attack techniques and the defense mechanism against the attacks.

**(k)** What is a DoS attack? Name three DoS attacks.

**(l)** What is network scanning? What command would you use to determine the IP address of www.google.com?

**(m)** What is Honeypot? Describe its types.

**(n)** Explain the base-rate fallacy in IDS.

**(o)** From given values answer the following question:<br>**True Positive Rate (TPR)** = 95%<br>**False Positive Rate (FPR)** = 2%<br>**Total events** = 20,000<br>**Actual attacks** = 50 (base rate = 0.25%)<br>What is the probability of a real attack?

**(p)** What is the purpose of the Needham-Schroeder protocol?

---

## 8. Cryptanalysis & Miscellaneous

**(a)** Explain steganography with appropriate example.

**(b)** Which encryption scheme is unconditionally secure and why?

**(c)** Differentiate between Cryptanalysis and Brute-force attack.

**(d)** Explain how you could reduce the amount of time required to perform a brute force attack.

**(e)** What is the **unicity distance**? What would happen if the ciphertext length is less than the unicity distance?

**(f)** Eve has an antenna that can pick up Alice's encrypted cell phone conversations. What type of attack is Eve employing? Justify your answer.

**(g)** Doug's laptop computer was infected with malicious software that uses the built-in camera to record video whenever movement is detected and uploads it to a video-sharing website. What type of attack does this involve? Which concepts of computer security are violated?

**(h)** Describe different types of cryptanalysis attacks. Briefly explain ciphertext-only and chosen-plaintext attacks.

**(i)** What is a brute force attack? Under what conditions does brute force become practical?

**(j)** An attacker intercepts encrypted messages and tries every possible key until meaningful text appears.
* Identify the attack.
* Which security principle is being challenged?

**(k)** An organization uses weak passwords for encrypted archives. Attackers successfully guess passwords using automated tools.
* What type of attack is this?
* How can it be prevented?
