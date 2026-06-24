# TT 2 Examination

**1. Answer any FOUR questions:** **[4 × 1 = 4]**

**(i)** RSA security depends on the discrete logarithm problem. (True/False)
> **False.** RSA security depends on the **Integer Factorization Problem** (the difficulty of factoring the product of two large prime numbers). The discrete logarithm problem is the basis for ElGamal and Diffie-Hellman.

**(ii)** What is the multiplicative inverse of 15 in **$Z_{26}$**?
> We need to find $d$ such that $15 \times d \equiv 1 \pmod{26}$.
> Trying values for $d$:
> * $15 \times 7 = 105$
> * $105 \pmod{26} = 105 - (26 \times 4) = 105 - 104 = \mathbf{1}$.
> 
> Therefore, the multiplicative inverse of 15 in $Z_{26}$ is **7**.

**(iii)** What is the non-forgeability property of a digital signature?
> **Non-forgeability** means that it should be computationally infeasible for an attacker to create a valid digital signature for a new message without possessing the signer's private key.

**(iv)** What is the purpose of the Needham-Schroeder protocol?
> The purpose of the Needham-Schroeder protocol is to provide mutual authentication and securely establish a shared session key between two parties over an insecure network, using a trusted Key Distribution Center (KDC) while preventing replay attacks.

**(v)** Find the value of **$Z^*_{56}$**.
> $Z^*_{56}$ represents the set of all integers $x$ such that $1 \le x < 56$ and $\gcd(x, 56) = 1$.
> Since $56 = 2^3 \times 7$, the numbers must be odd and not divisible by 7.
> **Elements:** {1, 3, 5, 9, 11, 13, 15, 17, 19, 23, 25, 27, 29, 31, 33, 37, 39, 41, 43, 45, 47, 51, 53, 55}
> The total count is $\varphi(56) = 56 \times (1 - 1/2) \times (1 - 1/7) = \mathbf{24}$.

---

**2. Answer any THREE questions:** **[3 × 3 = 9]**

**(a)** Prove the correctness of the ElGamal cryptosystem.
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

**(b)** Briefly explain how Fermat's primality test works.
> Fermat's primality test is a probabilistic algorithm based on **Fermat's Little Theorem**, which states that if $p$ is prime and $a$ is an integer not divisible by $p$, then $a^{p-1} \equiv 1 \pmod p$.
> 
> **How it works:**
> 1. To test if a number $n$ is prime, select random integers $a$ such that $1 < a < n-1$.
> 2. Compute $a^{n-1} \pmod n$.
> 3. If the result is **not 1**, then $n$ is definitely a composite number.
> 4. If the result is **1**, $n$ is *probably* prime. Running the test for multiple random values of $a$ increases the confidence that $n$ is indeed prime.

**(c)** Calculate **$5^{21} \pmod{13}$** using repeated squaring.
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

**(d)** Find one primitive root modulo 11.
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

**3. Solve the following question:** **[3]**

Show the result of an ElGamal encryption of the message **M = 9** using **k = 4** for the public key **(p, g, y) = (59, 2, 25)**.
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

---

**4. Answer the following question:** **[4]**

Let us assume for RSA encryption, our public key is **n = 391**, **e = 63** and our private key is **d = 95**. We have hashed our plaintext and want to encrypt the hash value. The hash value of the plaintext is **M = 37**.

**(a)** Find **$\varphi(n)$**.
> First, we need to factor $n = 391$.
> Testing prime numbers, we find that $391 \div 17 = 23$. So, the prime factors are $p=17$ and $q=23$.
> $\varphi(n) = (p-1)(q-1)$
> $\varphi(n) = (17-1)(23-1) = 16 \times 22 = \mathbf{352}$

**(b)** Find the encrypted hash value of the plaintext **$C_H$** using RSA encryption.
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
