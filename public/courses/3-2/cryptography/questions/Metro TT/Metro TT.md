# Metro TT Examination

**1. Give short answers to the following questions:** **(2 * 3 = 6)**

**(a)** What is the **unicity distance**?
> **Unicity Distance:** It is the minimum amount of ciphertext required to uniquely identify the correct encryption key in a brute-force attack.

**(b)** Differentiate between **asymmetric key cryptography** and **digital signature**.
> **Asymmetric Key Cryptography:** Focuses on *Confidentiality*. The sender encrypts the message using the receiver's public key, and only the receiver can decrypt it using their own private key.
> 
> **Digital Signature:** Focuses on *Authentication and Non-repudiation*. The sender "signs" the message (usually by encrypting a hash of it) using their own private key, and the receiver verifies the signature using the sender's public key.

**(c)** Find the ensurity for **Hash, MAC and Digital Signature** of the following properties: Authenticity, Integrity, and Non-repudiation.
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

---

**2. Brief discussion** **(4 * 1 = 4)**

**(a)** Provide mathematical correctness of the **RSA algorithm**.
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

---

**3. Answer the following question:** **(5 + 5)**

Let's assume for using RSA encryption, **n = 221**, and private key, **d = 61**.<br>
We've hashed our plaintext and want to encrypt the hash value. The hash value of the plaintext is **$M_H = 37$**.

**(a)** Find the public key component, **e**.
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

**(b)** Find the encrypted hash value of the plaintext **$C_H$** using RSA encryption.
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
