# Topic-wise Questions

A comprehensive collection of questions from past examinations, organized by cryptographic topics. This gives you a great overview of the most commonly asked questions for each concept!

## 1. Fundamentals of Security

**(a)** What is computer security? 

**(b)** Discuss the **C.I.A property**. Why are these properties necessary for data to be transferred? 

**(c)** Explain the **CIA triad** in information security with suitable examples.
> The CIA triad is a model designed to guide policies for information security:
> 1. **Confidentiality:** Ensuring data is accessed only by authorized individuals.
>    * *Example:* Encrypting a database of student grades so only teachers and administrators can read it.
> 2. **Integrity:** Assuring that data is accurate and has not been improperly modified.
>    * *Example:* Using SHA-256 hashes on downloaded software to verify it wasn't tampered with by hackers.
> 3. **Availability:** Ensuring that systems, networks, and data are accessible when needed.
>    * *Example:* Employing load balancers and DDoS mitigation services to keep a university website online during high traffic.

**(d)** What is cryptography? Describe three network security goals.

**(e)** Briefly explain four security design principles.

**(f)** State Kerckhoff's principle about open design.

**(g)** What do you understand by **system integrity**? Mention **two tools** used to support integrity.
> **System Integrity:** It is the assurance that information and systems have not been altered or destroyed in an unauthorized manner. It ensures that data remains accurate and complete throughout its lifecycle.
>
> **Two Tools:**
> 1. **Cryptographic Hash Functions:** Algorithms like SHA-256 that generate a unique fixed-size string for data; any change in data changes the hash drastically.
> 2. **Digital Signatures:** Cryptographic mechanisms that prove the authenticity and integrity of a message or document.

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
> **Caesar Cipher Decryption:**
> * Assuming a standard shift key of **$K = 3$** (commonly used for Caesar), we shift each letter back by 3 positions:
> * J $\rightarrow$ G | R $\rightarrow$ O | R $\rightarrow$ O | G $\rightarrow$ D | O $\rightarrow$ L | X $\rightarrow$ U | F $\rightarrow$ C | N $\rightarrow$ K
> * **Plaintext:** **GOODLUCK**

**(b)** What is the encryption of the following string using Caesar cipher: **IAMNOTAHACKER**

**(c)** Solve the below math using Rail-fence Cipher technique? <br>**Plain Text:** a new semester begins with football and moving vans <br>**Given key value 5.** What is the chipper text?

**(d)** Perform encryption using the Rail Fence Cipher with 3 rails where **Plaintext: SHERLOCKHOMES**.

**(e)** What is the transposition technique? Apply the Rail Fence technique for the plaintext **"Computer Science and Engineering"** using depth 3.

**(f)** Encrypt the message **"successive"** using Playfair Cipher technique where the keyword is **"summary"**.

**(g)** Encrypt the message **"summary"** using Playfair Cipher technique where keyword is **"monarchy"**.

**(h)** Solve the below math using Polyalphabetic cipher technique<br>**Plain Text:** Engineering College<br>**Given key:** Sylhet. What is cipher text?

**(i)** Decrypt the ciphertext **"FKMFIO"** using Hill Cipher with the key matrix below:<br>$$ \begin{aligned} K = \begin{bmatrix} 2 & 3 \\ 3 & 6 \end{bmatrix} \end{aligned} $$
> **Step 1: Find the determinant of K**
> $|K| = (2 \times 6) - (3 \times 3) = 12 - 9 = \mathbf{3}$
>
> **Step 2: Find the multiplicative inverse of the determinant modulo 26**
> We need $d$ such that $3 \times d \equiv 1 \pmod{26}$.
> $3 \times 9 = 27 \equiv 1 \pmod{26}$. So, $|K|^{-1} = \mathbf{9}$.
>
> **Step 3: Find the inverse key matrix $K^{-1}$**
> Swap $a$ and $d$, negate $b$ and $c$:
> $$ \text{adj}(K) = \begin{bmatrix} 6 & -3 \\ -3 & 2 \end{bmatrix} \equiv \begin{bmatrix} 6 & 23 \\ 23 & 2 \end{bmatrix} \pmod{26} $$
> Multiply by $|K|^{-1} = 9$:
> $$ K^{-1} \equiv 9 \begin{bmatrix} 6 & 23 \\ 23 & 2 \end{bmatrix} = \begin{bmatrix} 54 & 207 \\ 207 & 18 \end{bmatrix} \equiv \mathbf{\begin{bmatrix} 2 & 25 \\ 25 & 18 \end{bmatrix}} \pmod{26} $$
>
> **Step 4: Decrypt the ciphertext blocks**
> Map A=0, B=1 ... Z=25. Ciphertext: **"FK"**, **"MF"**, **"IO"**
> 
> * **Block 1: FK** (F=5, K=10)
> $$ \begin{bmatrix} 2 & 25 \\ 25 & 18 \end{bmatrix} \begin{bmatrix} 5 \\ 10 \end{bmatrix} = \begin{bmatrix} (10 + 250) \\ (125 + 180) \end{bmatrix} = \begin{bmatrix} 260 \\ 305 \end{bmatrix} \equiv \begin{bmatrix} 0 \\ 19 \end{bmatrix} \pmod{26} $$
> 0 $\rightarrow$ A, 19 $\rightarrow$ T. (Plaintext: **AT**)
> 
> * **Block 2: MF** (M=12, F=5)
> $$ \begin{bmatrix} 2 & 25 \\ 25 & 18 \end{bmatrix} \begin{bmatrix} 12 \\ 5 \end{bmatrix} = \begin{bmatrix} (24 + 125) \\ (300 + 90) \end{bmatrix} = \begin{bmatrix} 149 \\ 390 \end{bmatrix} \equiv \begin{bmatrix} 19 \\ 0 \end{bmatrix} \pmod{26} $$
> 19 $\rightarrow$ T, 0 $\rightarrow$ A. (Plaintext: **TA**)
> 
> * **Block 3: IO** (I=8, O=14)
> $$ \begin{bmatrix} 2 & 25 \\ 25 & 18 \end{bmatrix} \begin{bmatrix} 8 \\ 14 \end{bmatrix} = \begin{bmatrix} (16 + 350) \\ (200 + 252) \end{bmatrix} = \begin{bmatrix} 366 \\ 452 \end{bmatrix} \equiv \begin{bmatrix} 2 \\ 10 \end{bmatrix} \pmod{26} $$
> 2 $\rightarrow$ C, 10 $\rightarrow$ K. (Plaintext: **CK**)
>
> **Final Plaintext:** **ATTACK**

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
> **PKCS#5 Padding:**
> * Block size $b = 128$ bits = **16 bytes**.
> * Plaintext "NETWORK" length = **7 bytes**.
> * Padding required = $16 - 7$ = **9 bytes**.
> * Each padded byte takes the value of the number of padded bytes (i.e., `0x09`).
> * **Padded Plaintext:** `NETWORK\x09\x09\x09\x09\x09\x09\x09\x09\x09`

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
> We need to find $d$ such that $15 \times d \equiv 1 \pmod{26}$.
> Trying values for $d$:
> * $15 \times 7 = 105$
> * $105 \pmod{26} = 105 - (26 \times 4) = 105 - 104 = \mathbf{1}$.
> 
> Therefore, the multiplicative inverse of 15 in $Z_{26}$ is **7**.

**(n)** Find the value of **$Z^*_{56}$**.
> $Z^*_{56}$ represents the set of all integers $x$ such that $1 \le x < 56$ and $\gcd(x, 56) = 1$.
> Since $56 = 2^3 \times 7$, the numbers must be odd and not divisible by 7.
> **Elements:** {1, 3, 5, 9, 11, 13, 15, 17, 19, 23, 25, 27, 29, 31, 33, 37, 39, 41, 43, 45, 47, 51, 53, 55}
> The total count is $\varphi(56) = 56 \times (1 - 1/2) \times (1 - 1/7) = \mathbf{24}$.

**(o)** Briefly explain how Fermat's primality test works.
> Fermat's primality test is a probabilistic algorithm based on **Fermat's Little Theorem**, which states that if $p$ is prime and $a$ is an integer not divisible by $p$, then $a^{p-1} \equiv 1 \pmod p$.
> 
> **How it works:**
> 1. To test if a number $n$ is prime, select random integers $a$ such that $1 < a < n-1$.
> 2. Compute $a^{n-1} \pmod n$.
> 3. If the result is **not 1**, then $n$ is definitely a composite number.
> 4. If the result is **1**, $n$ is *probably* prime. Running the test for multiple random values of $a$ increases the confidence that $n$ is indeed prime.

**(p)** Calculate **$5^{21} \pmod{13}$** using repeated squaring.
> We write 21 as a sum of powers of 2: $21 = 16 + 4 + 1$.
> 
> **Step 1: Repeatedly square the base 5 modulo 13**
> *   $5^1 \equiv \mathbf{5} \pmod{13}$
> *   $5^2 = 25 \equiv \mathbf{12} \pmod{13}$
> *   $5^4 \equiv 12^2 = 144 \equiv \mathbf{1} \pmod{13}$
> *   $5^8 \equiv 1^2 = \mathbf{1} \pmod{13}$
> *   $5^{16} \equiv 1^2 = \mathbf{1} \pmod{13}$
> 
> **Step 2: Multiply the required powers**
> *   $5^{21} = 5^{16} \times 5^4 \times 5^1$
> *   $5^{21} \equiv 1 \times 1 \times 5 \pmod{13}$
> *   $5^{21} \equiv \mathbf{5} \pmod{13}$

**(q)** Find one primitive root modulo 11.
> A number $g$ is a primitive root modulo 11 if its order is $\varphi(11) = 10$.
> This means $g^{10} \equiv 1 \pmod{11}$ and $g^d \not\equiv 1 \pmod{11}$ for any proper divisor $d$ of 10. The divisors of 10 are 1, 2, and 5.
> 
> Let's test $g = 2$:
> *   $2^1 \equiv 2 \pmod{11}$
> *   $2^2 = 4 \pmod{11} \quad (4 \neq 1)$
> *   $2^5 = 32 \equiv 10 \pmod{11} \quad (10 \neq 1)$
> 
> Since neither $2^2$ nor $2^5$ is congruent to 1 modulo 11, **2 is a primitive root modulo 11**.

---

## 5. Public Key Cryptography

**(a)** What is a trap door one-way function?

**(b)** How many different keys are needed for a symmetric encryption system and public key encryption system for 10 parties?

**(c)** Provide mathematical correctness of the **RSA algorithm**.
> To prove correctness, we must show that decrypting a ciphertext gives back the original message: $D(E(M)) = M \pmod n$.
> 
> **1. Encryption & Decryption:**
> *   $C \equiv M^e \pmod n$
> *   $M' \equiv C^d \pmod n \equiv (M^e)^d \pmod n \equiv M^{ed} \pmod n$
> 
> **2. The Property of ed:**
> *   We know $e \cdot d \equiv 1 \pmod{\varphi(n)}$.
> *   This means $ed = k \cdot \varphi(n) + 1$ for some integer $k$.
> *   Substitute this back: $M^{ed} = M^{k \cdot \varphi(n) + 1} = (M^{\varphi(n)})^k \cdot M \pmod n$.
> 
> **3. Applying Euler's Theorem:**
> *   Euler's Theorem states that if $\gcd(M, n) = 1$, then $M^{\varphi(n)} \equiv 1 \pmod n$.
> *   So, $(M^{\varphi(n)})^k \cdot M \equiv (1)^k \cdot M \equiv \mathbf{M \pmod n}$.
> *   *(Note: By the Chinese Remainder Theorem, this also holds true even if $\gcd(M, n) \neq 1$.)*
> 
> Thus, the decryption successfully retrieves the original message $M$.

**(d)** How does RSA encryption ensure security? Which attacks are possible on the RSA cryptosystem?

**(e)** Given two prime numbers p and q are 5 and 17 respectively, generate public key and private key pair using RSA algorithm where e = 13. Encrypt the message M = 150212.

**(f)** Perform the complete RSA algorithm on: p=17, q=19, M=9 and show all steps of n, φ(n), d, encryption, decryption.

**(g)** RSA system uses P = 7, Q = 13, if Alice decided to send a message M = 9 to the Bob what should be the public and private key and show that Bob is able to decrypt the message.

**(h)** Let's assume for using RSA encryption, **n = 221**, and private key, **d = 61**. We've hashed our plaintext and want to encrypt the hash value. The hash value of the plaintext is **$M_H = 37$**. Find the public key component, **e**, and the encrypted hash value **$C_H$**.
> **Step 1: Factor $n$ and find $\varphi(n)$**
> *   $n = 221$. The prime factors are $p=13$ and $q=17$ ($13 \times 17 = 221$).
> *   $\varphi(n) = (p-1)(q-1) = 12 \times 16 = \mathbf{192}$.
> 
> **Step 2: Find $e$ using the Extended Euclidean Algorithm**
> *   We need $e$ such that $e \cdot 61 \equiv 1 \pmod{192}$.
> *   $192 = 3(61) + 9$
> *   $61 = 6(9) + 7$
> *   $9 = 1(7) + 2$
> *   $7 = 3(2) + 1$
> *   Substituting back:
>     $1 = 7 - 3(2)$
>     $= 7 - 3(9 - 7) = 4(7) - 3(9)$
>     $= 4(61 - 6(9)) - 3(9) = 4(61) - 27(9)$
>     $= 4(61) - 27(192 - 3(61)) = \mathbf{85}(61) - 27(192)$.
> 
> Thus, the modular inverse of 61 modulo 192 is **85**.
> **Answer:** $e = \mathbf{85}$.
> 
> **Step 3: Find the encrypted hash value of the plaintext $C_H$ using RSA encryption.**
> *Note: While "encrypting a hash" functionally implies digitally signing it with the private key ($C_H = M_H^d \pmod n$), the question explicitly asks to use "RSA encryption", which dictates applying the public key $e$. We calculate $C_H = M_H^e \pmod n$.*
> 
> $C_H = 37^{85} \pmod{221}$
> 
> Using repeated squaring:
> *   $37^1 \equiv 37$
> *   $37^2 = 1369 \equiv 43 \pmod{221}$
> *   $37^4 \equiv 43^2 = 1849 \equiv 81 \pmod{221}$
> *   $37^8 \equiv 81^2 = 6561 \equiv 152 \pmod{221}$
> *   $37^{16} \equiv 152^2 = 23104 \equiv 120 \pmod{221}$
> *   $37^{32} \equiv 120^2 = 14400 \equiv 35 \pmod{221}$
> *   $37^{64} \equiv 35^2 = 1225 \equiv 120 \pmod{221}$
> 
> Since $85 = 64 + 16 + 4 + 1$:
> $37^{85} \equiv 37^{64} \times 37^{16} \times 37^4 \times 37^1 \pmod{221}$
> $37^{85} \equiv 120 \times 120 \times 81 \times 37 \pmod{221}$
> 
> *   $120 \times 120 = 14400 \equiv \mathbf{35} \pmod{221}$
> *   $35 \times 81 = 2835 \equiv \mathbf{183} \pmod{221}$
> *   $183 \times 37 = 6771 \equiv \mathbf{141} \pmod{221}$
> 
> **Answer:** $C_H = \mathbf{141}$.

**(i)** In RSA, two prime numbers are picked in the setup phase, **p = 131, q = 163 and e = 127**. Find the private key **d**. Let's assume message **M = 37**. Find the cipher **C**.

**(j)** From the given values answer the following questions:<br>**Prime Modulus p = 23, Primitive Root g = 5, Private Key Xa = 6, Private key Xb = 15**<br>Explain the philosophy behind Diffie-Hellman key exchange protocol. Generate public keys (Ya, Yb) and shared secret key.

**(k)** Discuss the vulnerability of Diffie-Hellman to man-in-the-middle attacks and how modern network protocols mitigate it.

**(l)** **P = 23, g = 5, e = 8, d = 6**, choose a Message M, random number K and perform the ELGamal encryption and decryption.

**(m)** RSA security depends on the discrete logarithm problem. (True/False)
> **False.** RSA security depends on the **Integer Factorization Problem** (the difficulty of factoring the product of two large prime numbers). The discrete logarithm problem is the basis for ElGamal and Diffie-Hellman.

**(n)** Prove the correctness of the ElGamal cryptosystem.
> The decryption formula is: $M = b \cdot K^{-1} \pmod p$.
> We must prove that this successfully retrieves the original message $M$.
> 
> *   The encryption pair is $(a, b)$, where $a \equiv g^k \pmod p$ and $b \equiv y^k \cdot M \pmod p$.
> *   The public key $y \equiv g^x \pmod p$, where $x$ is the private key.
> *   In decryption, we first compute $K$: 
>     $K \equiv a^x \pmod p \equiv (g^k)^x \pmod p \equiv g^{kx} \pmod p$.
> *   We know $y^k \equiv (g^x)^k \pmod p \equiv g^{xk} \pmod p$, so $K \equiv y^k \pmod p$.
> *   Substitute $K$ back into the decryption equation:
>     $b \cdot K^{-1} \equiv (y^k \cdot M) \cdot (y^k)^{-1} \pmod p$
>     $\equiv M \cdot (y^k \cdot y^{-k}) \pmod p \equiv M \cdot 1 \pmod p \equiv \mathbf{M \pmod p}$.
>     
> The correctness is proven.

**(o)** Show the result of an ElGamal encryption of the message **M = 9** using **k = 4** for the public key **(p, g, y) = (59, 2, 25)**.
> **Step 1: Calculate $a$**
> $a = g^k \pmod p$
> $a = 2^4 \pmod{59} = 16 \pmod{59} = \mathbf{16}$
> 
> **Step 2: Calculate the one-time key $K$**
> $K = y^k \pmod p$
> $K = 25^4 \pmod{59}$
> *   $25^2 = 625 \equiv 35 \pmod{59}$
> *   $25^4 \equiv 35^2 = 1225 \pmod{59}$
> *   $1225 = 59 \times 20 + 45$, so $1225 \equiv \mathbf{45} \pmod{59}$.
> $K = 45$
> 
> **Step 3: Calculate $b$**
> $b = K \cdot M \pmod p$
> $b = 45 \times 9 \pmod{59}$
> $b = 405 \pmod{59}$
> *   $405 = 59 \times 6 + 51$, so $405 \equiv \mathbf{51} \pmod{59}$.
> 
> **Result:** The ciphertext is the pair $(a, b) = \mathbf{(16, 51)}$.

**(p)** Let us assume for RSA encryption, our public key is **n = 391**, **e = 63** and our private key is **d = 95**. We have hashed our plaintext and want to encrypt the hash value. The hash value of the plaintext is **M = 37**.
* Find **$\varphi(n)$**.
> First, we need to factor $n = 391$.
> Testing prime numbers, we find that $391 \div 17 = 23$. So, the prime factors are $p=17$ and $q=23$.
> $\varphi(n) = (p-1)(q-1)$
> $\varphi(n) = (17-1)(23-1) = 16 \times 22 = \mathbf{352}$

* Find the encrypted hash value of the plaintext **$C_H$** using RSA encryption.
> *Note: In standard cryptographic practice, "encrypting a hash" usually implies signing the hash with the private key ($d$). However, as the question strictly asks to use "RSA encryption", we will apply the standard public key encryption formula ($C = M^e \pmod n$).*
> 
> $C_H = M^e \pmod n$
> $C_H = 37^{63} \pmod{391}$
> 
> Using repeated squaring:
> *   $37^1 \equiv 37$
> *   $37^2 = 1369 \equiv 196 \pmod{391}$
> *   $37^4 \equiv 196^2 = 38416 \equiv 98 \pmod{391}$
> *   $37^8 \equiv 98^2 = 9604 \equiv 220 \pmod{391}$
> *   $37^{16} \equiv 220^2 = 48400 \equiv 307 \pmod{391}$
> *   $37^{32} \equiv 307^2 = 94249 \equiv 15 \pmod{391}$
> *   $37^{64} \equiv 15^2 = 225 \pmod{391}$
> 
> Notice that $37^{64} = 37^{63} \times 37$. Therefore:
> $37^{63} \times 37 \equiv 225 \pmod{391}$
> 
> To isolate $37^{63}$, multiply both sides by the modular inverse of 37 modulo 391, which is 74:
> $37^{63} \equiv 225 \times 74 \pmod{391}$
> $37^{63} \equiv 16650 \pmod{391}$
> $16650 \equiv \mathbf{228} \pmod{391}$
> 
> **Answer:** $C_H = \mathbf{228}$

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
> **Asymmetric Key Cryptography:** Focuses on *Confidentiality*. The sender encrypts the message using the receiver's public key, and only the receiver can decrypt it using their own private key.
> 
> **Digital Signature:** Focuses on *Authentication and Non-repudiation*. The sender "signs" the message (usually by encrypting a hash of it) using their own private key, and the receiver verifies the signature using the sender's public key.

**(j)** What is nonrepudiation? Describe how RSA digital signatures provide non-repudiation.

**(k)** How to generate a digital signature and verify it?

**(l)** How does a digital signature work? Provide derivation of its correctness.

**(m)** Which attack can be imposed on the RSA signature? What can be used to mitigate this attack?

**(n)** Find the ensurity for Hash, MAC and Digital Signature of the following properties: Authenticity, Integrity, and Non-repudiation.
> *   **Hash Function:** 
>     *   Integrity: **Yes**
>     *   Authenticity: **No**
>     *   Non-repudiation: **No**
> *   **MAC (Message Authentication Code):** 
>     *   Integrity: **Yes**
>     *   Authenticity: **Yes**
>     *   Non-repudiation: **No** (Because the key is shared between both parties)
> *   **Digital Signature:** 
>     *   Integrity: **Yes**
>     *   Authenticity: **Yes**
>     *   Non-repudiation: **Yes** (Because the private key is uniquely held by the sender)

**(o)** What is the non-forgeability property of a digital signature?
> **Non-forgeability** means that it should be computationally infeasible for an attacker to create a valid digital signature for a new message without possessing the signer's private key.

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
> The purpose of the Needham-Schroeder protocol is to provide mutual authentication and securely establish a shared session key between two parties over an insecure network, using a trusted Key Distribution Center (KDC) while preventing replay attacks.

---

## 8. Cryptanalysis & Miscellaneous

**(a)** Explain steganography with appropriate example.

**(b)** Which encryption scheme is unconditionally secure and why?

**(c)** Differentiate between Cryptanalysis and Brute-force attack.

**(d)** Explain how you could reduce the amount of time required to perform a brute force attack.

**(e)** What is the **unicity distance**? What would happen if the ciphertext length is less than the unicity distance?
> **Unicity Distance:** It is the minimum amount of ciphertext required to uniquely identify the correct encryption key in a brute-force attack.
>
> **If ciphertext length < unicity distance:** There will be multiple "spurious keys" that decrypt the ciphertext into meaningful (but incorrect) plaintext. Because of these plausible alternatives, it becomes theoretically impossible to pinpoint the actual key, even with infinite computational power.

**(f)** Eve has an antenna that can pick up Alice's encrypted cell phone conversations. What type of attack is Eve employing? Justify your answer.
> **Type of Attack:** Passive Attack (specifically, Eavesdropping or Traffic Analysis).
>
> **Justification:** Eve is only intercepting and monitoring the transmission to obtain information. She is not modifying the data stream, interfering with the communication, or altering system resources, which are the defining characteristics of an active attack.

**(g)** Doug's laptop computer was infected with malicious software that uses the built-in camera to record video whenever movement is detected and uploads it to a video-sharing website. What type of attack does this involve? Which concepts of computer security are violated?
> **Type of Attack:** Active Attack (specifically, Malware/Spyware installation and unauthorized data exfiltration).
>
> **Concepts Violated:** 
> * **Confidentiality:** Unauthorized viewing and extraction of Doug's private video feed.
> * **Privacy:** Covert surveillance of a person without their consent.

**(h)** Describe different types of cryptanalysis attacks. Briefly explain ciphertext-only and chosen-plaintext attacks.

**(i)** What is a brute force attack? Under what conditions does brute force become practical?

**(j)** An attacker intercepts encrypted messages and tries every possible key until meaningful text appears.
* Identify the attack.
* Which security principle is being challenged?

**(k)** An organization uses weak passwords for encrypted archives. Attackers successfully guess passwords using automated tools.
* What type of attack is this?
* How can it be prevented?
