# Metro Examination

**1. Answer any FIVE** **(5×2=10)**

**(a)** What is computer security?
> **Computer Security:** It is the protection of computer systems, networks, and data from theft, damage, or unauthorized access. It ensures the confidentiality, integrity, and availability of information.

**(b)** What is the encryption of the following string using Caesar cipher:<br>
**IAMNOTAHACKER**
> **Caesar Cipher Encryption:**
> Assuming the standard shift key of **$K = 3$**:
> *   I(8)+3=11(L), A(0)+3=3(D), M(12)+3=15(P), N(13)+3=16(Q), O(14)+3=17(R), T(19)+3=22(W), A(0)+3=3(D), H(7)+3=10(K), A(0)+3=3(D), C(2)+3=5(F), K(10)+3=13(N), E(4)+3=7(H), R(17)+3=20(U)
> *   **Ciphertext:** **LDPQRWDKDFNHU**

**(c)** State Kerckhoff's principle about open design.
> **Kerckhoff's Principle:** A cryptographic system should be secure even if everything about the system, except the cryptographic key, is public knowledge. The security must solely rely on the secrecy of the key, not the obscurity of the algorithm.

**(d)** State Fermat's Little Theorem.
> **Fermat's Little Theorem:** If $p$ is a prime number and $a$ is an integer not divisible by $p$ (i.e., $\gcd(a, p) = 1$), then $a^{p-1} \equiv 1 \pmod p$.

**(e)** How many different keys are needed for a symmetric encryption system and public key encryption system for 10 parties?
> *   **Symmetric Encryption System:** Requires $\frac{n(n-1)}{2}$ keys. For $n = 10$, $\frac{10 \times 9}{2} = \mathbf{45}$ **keys**.
> *   **Public Key Encryption System:** Requires 2 keys (1 public, 1 private) per party. For $n = 10$, $10 \times 2 = \mathbf{20}$ **keys**.

**(f)** What is unicity distance for a cryptosystem?
> **Unicity Distance:** It is the minimum amount of ciphertext required to uniquely identify the correct encryption key in a brute-force attack, leaving no spurious (false positive) keys.

**(g)** Which block cipher mode is not suitable for data having repeated patterns? Why?
> **Electronic Codebook (ECB) Mode.**
> **Why:** ECB encrypts identical plaintext blocks into identical ciphertext blocks. As a result, it does not hide data patterns well, which can reveal the structure of the underlying plaintext (e.g., the ECB Penguin image).

**(h)** How many numbers are coprime with a prime number **p**? **gcd(0,20) = ?**
> *   Numbers coprime with a prime number $p$ is exactly **$p - 1$**.
> *   **$\gcd(0, 20) = \mathbf{20}$** (since the greatest integer that divides both 0 and 20 without a remainder is 20).

---

**2. Answer any FOUR** **(4×5=20)**

**(a)** Discuss the **C.I.A property**. Why are these properties necessary for data to be transferred? **(3+2)**
> **C.I.A Property:**
> 1.  **Confidentiality:** Ensures data is not disclosed to unauthorized parties.
> 2.  **Integrity:** Ensures data is not altered or tampered with during transit.
> 3.  **Availability:** Ensures data and network resources are accessible to authorized users when needed.
> 
> **Why they are necessary:** Without these properties, transferred data could be intercepted by attackers (loss of confidentiality), manipulated leading to incorrect operations (loss of integrity), or deliberately blocked, disrupting business and services (loss of availability).

**(b)** In AES, what are the basic sequential steps in both encryption and decryption rounds? What is the value of **RC[j]**, in the key expansion step where **j = 5**. **(4+1)**
> **Basic sequential steps in AES:**
> *   **Encryption Round:** SubBytes $\rightarrow$ ShiftRows $\rightarrow$ MixColumns $\rightarrow$ AddRoundKey
> *   **Decryption Round:** InvShiftRows $\rightarrow$ InvSubBytes $\rightarrow$ AddRoundKey $\rightarrow$ InvMixColumns
> 
> **Value of RC[5]:**
> The round constants (RC) for AES are powers of $x \pmod{x^8 + x^4 + x^3 + x + 1}$:
> RC[1] = `01`, RC[2] = `02`, RC[3] = `04`, RC[4] = `08`, RC[5] = `10`
> *   **RC[5] = $\mathbf{10_{16}}$** (or 16 in decimal).

**(c)** Consider a computer system with three users: Alice, Bob and Cyndy. Alice owns the file **"Secret"**, and Bob and Cyndy can read it. Cyndy can read and write the file **"Cipher"**, which Bob owns, but Alice can only read it. Only Cyndy can read and write the file **"Magic"**, which she owns. Assume that the owner of each of these files can execute it.<br>
Now create the corresponding access control matrix. **(5)**
> **Access Control Matrix:**
> 
> | Subject | Secret (Owner: Alice) | Cipher (Owner: Bob) | Magic (Owner: Cyndy) |
> | :--- | :--- | :--- | :--- |
> | **Alice** | Own, Read, Write, Execute | Read | - |
> | **Bob** | Read | Own, Read, Write, Execute | - |
> | **Cyndy** | Read | Read, Write | Own, Read, Write, Execute |

**(d)** Differentiate between digital signature and MAC. Which of the following properties are ensured by digital signature and MAC?<br>
**Integrity, Authenticity, Non-repudiation** **(3+2)**
> **Difference:**
> *   **MAC (Message Authentication Code):** Uses a *symmetric/shared key*. Any party with the key can both create and verify the MAC. It cannot prove *who* originated the message among the key holders.
> *   **Digital Signature:** Uses *asymmetric keys*. Only the sender can create the signature using their private key, but anyone can verify it using the sender's public key.
> 
> **Properties Ensured:**
> *   **MAC:** Integrity, Authenticity.
> *   **Digital Signature:** Integrity, Authenticity, **Non-repudiation**.

**(e)** How does RSA encryption ensure security? Which attacks are possible on the RSA cryptosystem? **(3+2)**
> **How RSA ensures security:** RSA's security fundamentally relies on the **Integer Factorization Problem**—it is computationally easy to multiply two large prime numbers ($p$ and $q$) to get $n$, but it is computationally infeasible to derive $p$ and $q$ when only $n$ is given.
> 
> **Possible attacks:**
> 1.  **Brute-Force Attack:** Trying all possible private keys.
> 2.  **Mathematical Attacks:** Factoring the modulus $n$ into its primes.
> 3.  **Timing Attacks:** Exploiting the time taken by the CPU to compute the decryption.
> 4.  **Chosen Ciphertext Attacks:** Exploiting properties of RSA (mitigated by Optimal Asymmetric Encryption Padding - OAEP).

**(f)** Explain - "Though the possible substitution ciphers of English text are huge, ... **(3+2)**
> **Explanation:** Even though the key space for a monoalphabetic substitution cipher is enormous ($26! \approx 4 \times 10^{26}$ possible keys), it does not hide the underlying statistical structure of the language. English text has distinct letter frequencies (e.g., 'E' is the most common), common digraphs (e.g., 'TH'), and word patterns. A cryptanalyst can easily break the cipher by performing **Frequency Analysis**, matching the frequency of characters in the ciphertext with the known frequencies of English letters, rendering the huge key space irrelevant.

---

**3. Answer any TWO** **(2×10=20)**

**(a)**
1. How does digital signature work? Provide derivation of its correctness. **(4+3+3)**
> **How it works:**
> 1.  The sender calculates the hash of the message and encrypts the hash using their **private key** to create the signature.
> 2.  The sender sends the message and the signature.
> 3.  The receiver calculates the hash of the received message independently.
> 4.  The receiver decrypts the signature using the sender's **public key**.
> 5.  If the decrypted hash matches the calculated hash, the signature is verified.
> 
> **Derivation of Correctness (RSA based):**
> *   Signature Generation: $S \equiv H(M)^d \pmod n$
> *   Verification: $V \equiv S^e \pmod n \equiv (H(M)^d)^e \pmod n \equiv H(M)^{de} \pmod n$
> *   By Euler's Theorem, $H(M)^{de} \equiv H(M) \pmod n$. Thus, verification correctly yields the original Hash.

2. How does hashing ensure integrity? Where can hashing be used?
> **How it ensures integrity:** Hashing creates a unique, fixed-size digest for an arbitrary input. Due to the **Avalanche Effect**, changing even a single bit in the message completely changes the resulting hash. A receiver can hash the received data; if it matches the provided hash, the data was not altered.
> 
> **Where it can be used:** Digital signatures, password storage, verifying downloaded files (checksums), and blockchain.

3. What is certificate authority (CA)? Why is the digital certificate necessary?
> **Certificate Authority (CA):** A trusted third-party entity that issues digital certificates and manages public keys and certificates.
> **Why it's necessary:** A digital certificate cryptographically binds a public key to the identity of its owner. It is necessary to prevent **Man-in-the-Middle (MitM) attacks** where an attacker substitutes their own public key, tricking parties into communicating with the attacker instead of each other.

**(b)**
1. In Hill cipher, let, length of the blocks, **m = 2** and a block is the string **"AB"**.<br>
$$ \begin{aligned} k = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \end{aligned} $$<br>
Find the cipher text. Also show that decryption returns the given block string. **(5+3+2)**
> **Encryption:**
> The plaintext block is "AB". A=0, B=1. Vector $P = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$.
> $C = K \cdot P = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \end{bmatrix} \pmod{26}$.
> 0 $\rightarrow$ A, 1 $\rightarrow$ B. **Ciphertext = "AB"**.
> 
> **Decryption:**
> The inverse of the Identity matrix is the Identity matrix ($K^{-1} = K$).
> $P = K^{-1} \cdot C = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \end{bmatrix} \pmod{26}$.
> 0 $\rightarrow$ A, 1 $\rightarrow$ B. **Plaintext = "AB"**. Decryption successfully returns the given block string.

2. Differentiate between ECB and CBC mode along with their usability.
> *   **Electronic Codebook (ECB):** Each block of plaintext is encrypted independently. Identical plaintext blocks produce identical ciphertext blocks.
>     *   *Usability:* Only suitable for encrypting very short amounts of data, like a single encryption key.
> *   **Cipher Block Chaining (CBC):** Each plaintext block is XORed with the previous ciphertext block before encryption (using an IV for the first block). This obscures patterns.
>     *   *Usability:* Widely used for general-purpose bulk encryption of files and messages.

3. What is the padded plaintext of **"SECURITYCSE477"** using PKCS5 when block size is 16 bytes.
> *   **Block size:** 16 bytes.
> *   **Plaintext:** "SECURITYCSE477" (length = 14 bytes).
> *   **Padding needed:** $16 - 14 = 2$ bytes.
> *   In PKCS#5, the padding value is the number of bytes added, which is `0x02`.
> *   **Padded Plaintext:** `SECURITYCSE477\x02\x02`

**(c)** In RSA, two prime numbers are picked in the setup phase, **p = 131, q = 163 and e = 127**. **(4+6)**
1. Find the private key **d**.
> *   $n = p \times q = 131 \times 163 = 21353$.
> *   $\varphi(n) = (p-1)(q-1) = 130 \times 162 = 21060$.
> *   We need $d$ such that $127d \equiv 1 \pmod{21060}$.
> *   Using the Extended Euclidean Algorithm:
>     $21060 = 165(127) + 105$
>     $127 = 1(105) + 22$
>     $105 = 4(22) + 17$
>     $22 = 1(17) + 5$
>     $17 = 3(5) + 2$
>     $5 = 2(2) + 1$
> *   Working backwards, we find $1 = 8623(127) - 52(21060)$.
> *   Therefore, **$d = \mathbf{8623}$**.

2. Let's assume, message **M = 37**. Find the cipher, **C** of the message M.
> *   $C \equiv M^e \pmod n$
> *   $C \equiv 37^{127} \pmod{21353}$
> *   Using modular exponentiation, **$C = \mathbf{6547}$**.

---

**4. Answer any FIVE** **(5×2=10)**

**(a)** What is primitive root modulo a prime number **p**? How many primitive roots are there in $Z_p$?
> *   **Primitive Root:** An integer $g$ is a primitive root modulo a prime $p$ if every number coprime to $p$ is congruent to a power of $g$ modulo $p$. Essentially, $g$ is a generator of the multiplicative group $Z_p^*$.
> *   **How many:** There are exactly **$\varphi(p-1)$** primitive roots modulo $p$.

**(b)** What is a key exchange protocol? Name one such protocol.
> **Key Exchange Protocol:** A cryptographic method by which two parties securely exchange cryptographic keys over an insecure channel, allowing them to use a symmetric encryption algorithm thereafter.
> **Example:** Diffie-Hellman Key Exchange.

**(c)** Write down the cryptographic protocol for the situation, "A shares a secret key with B and each party is authenticated to each other".
> A simple challenge-response mutual authentication protocol using a shared secret key ($K$):
> 1.  $A \rightarrow B: R_A$ *(A sends a random challenge)*
> 2.  $B \rightarrow A: E_K[R_A, R_B]$ *(B authenticates by encrypting A's challenge, and sends its own challenge)*
> 3.  $A \rightarrow B: E_K[R_B]$ *(A authenticates by encrypting B's challenge)*

**(d)** Find the elements of $Z_{56}^*$
> $Z^*_{56}$ contains all integers $x$ such that $1 \le x < 56$ and $\gcd(x, 56) = 1$. Since $56 = 2^3 \times 7$, the numbers must be odd and not divisible by 7.
> **Elements:** {1, 3, 5, 9, 11, 13, 15, 17, 19, 23, 25, 27, 29, 31, 33, 37, 39, 41, 43, 45, 47, 51, 53, 55}

**(e)** What is virtual memory? Why is virtual memory concept used?
> **Virtual Memory:** A memory management capability that creates an illusion for users of a very large, contiguous memory space, hiding the physical reality of fragmented RAM and disk space.
> **Why it's used:** It allows a computer to run programs that are larger than the available physical RAM by temporarily swapping data between RAM and disk storage. It also isolates processes from each other for security and stability.

**(f)** What is network scanning? What command would you use to determine the IP address of www.google.com?
> **Network Scanning:** A procedure used by attackers or administrators to identify active hosts, open ports, and running services on a network to discover vulnerabilities.
> **Command:** `ping www.google.com` or `nslookup www.google.com`

**(g)** What is a DoS attack? Name three DoS attacks.
> **DoS (Denial of Service) Attack:** A malicious attempt to disrupt the normal traffic of a targeted server, service, or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic.
> **Three Types:**
> 1. SYN Flood
> 2. Ping of Death
> 3. UDP Flood

**(h)** Classify the following proposed passwords as good choices or poor choices, and justify your reasoning.
1. cat&dog
2. 3.1515pi
> 1.  **cat&dog:** **Poor choice.** It consists of two common dictionary words joined by a single special character. It is highly susceptible to dictionary attacks.
> 2.  **3.1515pi:** **Poor choice.** While it contains numbers and letters, it follows a highly predictable mathematical pattern (Pi). Predictable patterns are easily guessed by password cracking algorithms.

---

**5. Answer any FOUR** **(4×5=20)**

**(a)** Find one primitive root modulo 13. Provide necessary calculations. **(5)**
> We need to find an integer $g$ such that its powers generate all elements from 1 to 12 modulo 13.
> We test $g=2$:
> *   $2^1 \equiv 2 \pmod{13}$
> *   $2^2 = 4 \pmod{13}$
> *   $2^3 = 8 \pmod{13}$
> *   $2^4 = 16 \equiv 3 \pmod{13}$
> *   $2^6 = (2^3)^2 = 64 \equiv 12 \equiv -1 \pmod{13}$
> 
> According to group theory, we only need to check if $g^d \not\equiv 1 \pmod{13}$ for all divisors $d$ of $\varphi(13) = 12$. The divisors are 2, 3, 4, 6.
> *   $2^2 = 4 \neq 1$
> *   $2^3 = 8 \neq 1$
> *   $2^4 = 3 \neq 1$
> *   $2^6 = 12 \neq 1$
> 
> Since none of the powers yield 1 before $2^{12}$, **$2$ is a primitive root modulo 13**.

**(b)** Which attack can be imposed on the RSA signature? What can be used to mitigate this attack? **(3+2)**
> **Attack:** **Existential Forgery Attack** (or chosen-ciphertext attack). Because of the homomorphic properties of RSA, an attacker can mathematically combine two valid signatures $S_1$ and $S_2$ to forge a valid signature for a new message $M = M_1 \times M_2$ ($S = S_1 \times S_2$).
> **Mitigation:** The message must be **Hashed** and properly padded (using schemes like PSS) before signing it. This destroys the mathematical relationship between messages.

**(c)** Explain how you could reduce the amount of time required to perform a brute force attack? **(5)**
> To reduce the time required for a brute-force attack, an attacker can:
> 1.  **Parallel Computing / Distributed Systems:** Distribute the key search space across thousands of compromised computers (botnets) or cloud instances.
> 2.  **Hardware Acceleration:** Use specialized hardware like GPUs or ASICs which are significantly faster at performing repetitive cryptographic calculations than standard CPUs.
> 3.  **Rainbow Tables:** For password cracking, use precomputed tables of hashes to eliminate the need for real-time calculations.
> 4.  **Dictionary Attacks:** Start the brute-force attempt using a list of common passwords or likely patterns rather than purely random permutations.
