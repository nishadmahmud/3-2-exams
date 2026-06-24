# TT 1 Examination

**1. Answer any FIVE questions.** **(5 × 3 = 15)**

**(a)** What do you understand by **system integrity**? Mention **two tools** used to support integrity.
> **System Integrity:** It is the assurance that information and systems have not been altered or destroyed in an unauthorized manner. It ensures that data remains accurate and complete throughout its lifecycle.
>
> **Two Tools:**
> 1. **Cryptographic Hash Functions:** Algorithms like SHA-256 that generate a unique fixed-size string for data; any change in data changes the hash drastically.
> 2. **Digital Signatures:** Cryptographic mechanisms that prove the authenticity and integrity of a message or document.

**(b)** What is the **unicity distance**? What would happen if the ciphertext length is less than the unicity distance?
> **Unicity Distance:** It is the minimum amount of ciphertext required to uniquely identify the correct encryption key in a brute-force attack.
>
> **If ciphertext length < unicity distance:** There will be multiple "spurious keys" that decrypt the ciphertext into meaningful (but incorrect) plaintext. Because of these plausible alternatives, it becomes theoretically impossible to pinpoint the actual key, even with infinite computational power.

**(c)** Eve has an antenna that can pick up Alice's encrypted cell phone conversations. What type of attack is Eve employing? Justify your answer.
> **Type of Attack:** Passive Attack (specifically, Eavesdropping or Traffic Analysis).
>
> **Justification:** Eve is only intercepting and monitoring the transmission to obtain information. She is not modifying the data stream, interfering with the communication, or altering system resources, which are the defining characteristics of an active attack.

**(d)** Doug's laptop computer was infected with malicious software that uses the built-in camera to record video whenever movement is detected and uploads it to a video-sharing website. What type of attack does this involve? Which concepts of computer security are violated?
> **Type of Attack:** Active Attack (specifically, Malware/Spyware installation and unauthorized data exfiltration).
>
> **Concepts Violated:** 
> * **Confidentiality:** Unauthorized viewing and extraction of Doug's private video feed.
> * **Privacy:** Covert surveillance of a person without their consent.

**(e)** Using the **Caesar cipher**, the encrypted message is: **JRRGOXFN**. Find the plaintext. Apply PKCS#5 padding to the plaintext "NETWORK" assuming block size $b = 128$ bits. Write the padded plaintext.
> **Caesar Cipher Decryption:**
> * Assuming a standard shift key of **$K = 3$** (commonly used for Caesar), we shift each letter back by 3 positions:
> * J $\rightarrow$ G | R $\rightarrow$ O | R $\rightarrow$ O | G $\rightarrow$ D | O $\rightarrow$ L | X $\rightarrow$ U | F $\rightarrow$ C | N $\rightarrow$ K
> * **Plaintext:** **GOODLUCK**
>
> **PKCS#5 Padding:**
> * Block size $b = 128$ bits = **16 bytes**.
> * Plaintext "NETWORK" length = **7 bytes**.
> * Padding required = $16 - 7$ = **9 bytes**.
> * Each padded byte takes the value of the number of padded bytes (i.e., `0x09`).
> * **Padded Plaintext:** `NETWORK\x09\x09\x09\x09\x09\x09\x09\x09\x09`

**(f)** Explain the **CIA triad** in information security with suitable examples.
> The CIA triad is a model designed to guide policies for information security:
> 1. **Confidentiality:** Ensuring data is accessed only by authorized individuals.
>    * *Example:* Encrypting a database of student grades so only teachers and administrators can read it.
> 2. **Integrity:** Assuring that data is accurate and has not been improperly modified.
>    * *Example:* Using SHA-256 hashes on downloaded software to verify it wasn't tampered with by hackers.
> 3. **Availability:** Ensuring that systems, networks, and data are accessible when needed.
>    * *Example:* Employing load balancers and DDoS mitigation services to keep a university website online during high traffic.

---

**2.** Decrypt the ciphertext **"FKMFIO"** using Hill Cipher with the key matrix below: **(5)**

$$ \begin{aligned} K = \begin{bmatrix} 2 & 3 \\ 3 & 6 \end{bmatrix} \end{aligned} $$

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
