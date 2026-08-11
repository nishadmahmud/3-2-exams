# Topic-wise Questions

A comprehensive collection of questions from past examinations, organized by cryptographic topics. This gives you a great overview of the most commonly asked questions for each concept!

## 1. Fundamentals of Security

**(a)** What is computer security? 
> **Computer Security:** It is the protection of computer systems, networks, and data from theft, damage, or unauthorized access. It ensures the confidentiality, integrity, and availability of information.

**(b)** Discuss the **C.I.A property**. Why are these properties necessary for data to be transferred? 
> **C.I.A Property (CIA Triad):**
> 1.  **Confidentiality:** Ensures data is accessible only to authorized entities.
> 2.  **Integrity:** Ensures data remains accurate, complete, and unaltered during storage and transmission.
> 3.  **Availability:** Ensures systems, networks, and data are accessible to authorized users when needed.
> 
> **Why necessary:** When data is transferred over an insecure network, it is highly vulnerable to interception or tampering. Confidentiality prevents eavesdropping, integrity prevents malicious alterations, and availability ensures the legitimate recipient can access the transmitted data.

**(c)** Explain the **CIA triad** in information security with suitable examples.
> The CIA triad is a model designed to guide policies for information security:
> 1. **Confidentiality:** Ensuring data is accessed only by authorized individuals.
>    * *Example:* Encrypting a database of student grades so only teachers and administrators can read it.
> 2. **Integrity:** Assuring that data is accurate and has not been improperly modified.
>    * *Example:* Using SHA-256 hashes on downloaded software to verify it wasn't tampered with by hackers.
> 3. **Availability:** Ensuring that systems, networks, and data are accessible when needed.
>    * *Example:* Employing load balancers and DDoS mitigation services to keep a university website online during high traffic.

**(d)** What is cryptography? Describe three network security goals.
> **Cryptography:** The science and art of writing codes and ciphers to protect information and communications from unauthorized access.
> **Three Network Security Goals (CIA Triad):**
> 1.  **Confidentiality:** Ensuring data is accessible only to authorized entities.
> 2.  **Integrity:** Ensuring data remains accurate and unaltered during storage and transmission.
> 3.  **Availability:** Ensuring systems and data are accessible to authorized users when needed.

**(e)** Briefly explain four security design principles.
> **Four Security Design Principles:**
> 1.  **Least Privilege:** Every program and every user of the system should operate using the least set of privileges necessary to complete the job.
> 2.  **Fail-Safe Defaults:** The default situation is lack of access (i.e., access is based on permission rather than exclusion).
> 3.  **Economy of Mechanism:** Keep the design as simple and small as possible. Complex designs are harder to inspect and secure.
> 4.  **Open Design (Kerckhoff's Principle):** The design of the security mechanism should not be secret; security should rely only on the secrecy of the keys.

**(f)** State Kerckhoff's principle about open design.
> **Kerckhoff's Principle:** A cryptographic system should be secure even if everything about the system, except the cryptographic key, is public knowledge. The security must solely rely on the secrecy of the key, not the obscurity of the algorithm.

**(g)** What do you understand by **system integrity**? Mention **two tools** used to support integrity.
> **System Integrity:** It is the assurance that information and systems have not been altered or destroyed in an unauthorized manner. It ensures that data remains accurate and complete throughout its lifecycle.
>
> **Two Tools:**
> 1. **Cryptographic Hash Functions:** Algorithms like SHA-256 that generate a unique fixed-size string for data; any change in data changes the hash drastically.
> 2. **Digital Signatures:** Cryptographic mechanisms that prove the authenticity and integrity of a message or document.

**(h)** How does Role-Based Access Control (RBAC) work and what are its benefits?
> **How it works:** Access rights are assigned to structural "roles" (e.g., Admin, Viewer) rather than directly to users. Users are assigned to these roles.
> **Benefits:** Simplifies administrative overhead when users change jobs, naturally enforces the Principle of Least Privilege, and allows for highly scalable and auditable access management.

**(i)** How does RBAC enhance security in an organization?
> RBAC structurally enforces the Principle of Least Privilege. By abstracting permissions into distinct roles, organizations prevent "privilege creep". It mitigates the risk of insider threats and lateral movement because a compromised user account only exposes the permissions restricted to their specific role, rather than entire systems.

**(j)** Consider a computer system with three users: Alice, Bob and Cyndy. Alice owns the file **"Secret"**... Create the corresponding access control matrix.
> **Access Control Matrix:**
> 
> | Subject | Secret (Owner: Alice) | Cipher (Owner: Bob) | Magic (Owner: Cyndy) |
> | :--- | :--- | :--- | :--- |
> | **Alice** | Own, Read, Write, Execute | Read | - |
> | **Bob** | Read | Own, Read, Write, Execute | - |
> | **Cyndy** | Read | Read, Write | Own, Read, Write, Execute |

**(k)** Differentiate between Authentication and Authorization.
> *   **Authentication:** The process of verifying *who* you are (e.g., logging in with a username and password).
> *   **Authorization:** The process of verifying *what* you are allowed to do (e.g., determining if the authenticated user has permission to read, write, or delete a specific file).

**(l)** Classify the following proposed passwords as good choices or poor choices, and justify your reasoning: `cat&dog`, `3.1515pi`.
> 1.  **cat&dog:** **Poor choice.** It consists of two common dictionary words joined by a single special character. It is highly susceptible to dictionary attacks.
> 2.  **3.1515pi:** **Poor choice.** While it contains numbers and letters, it follows a highly predictable mathematical pattern (Pi). Predictable patterns are easily guessed by password cracking algorithms.

**(m)** What is virtual memory? Why is the virtual memory concept used?
> **Virtual Memory:** A memory management capability that creates an illusion for users of a very large, contiguous memory space, hiding the physical reality of fragmented RAM and disk space.
> **Why it's used:** It allows a computer to run programs that are larger than the available physical RAM by temporarily swapping data between RAM and disk storage. It also isolates processes from each other for security and stability.

**(n)** Define **system integrity** in computer security. Explain how integrity differs from confidentiality with an example.
> **System Integrity:** The assurance that data and systems remain accurate, complete, and uncorrupted, meaning they haven't been modified by an unauthorized party.
> **Difference from Confidentiality:** Confidentiality prevents unauthorized *viewing* of data, while integrity prevents unauthorized *modification* of data.
> *Example:* In a medical system, confidentiality ensures a patient's health records cannot be read by strangers. Integrity ensures that the recorded dosage of medication cannot be secretly altered from 10mg to 100mg.

**(o)** Explain the **CIA Triad** with a real-world banking system example showing how each component is protected.
> The CIA Triad consists of Confidentiality, Integrity, and Availability.
> *   **Confidentiality:** Ensuring only the account owner can view their balance. *Protection:* The bank uses SSL/TLS encryption for the online portal and requires a password and 2FA.
> *   **Integrity:** Ensuring the account balance is not arbitrarily changed (e.g., adding extra zeros). *Protection:* The bank uses database transaction logs, cryptographic checksums, and strict RBAC so only authorized tellers or the core system can update ledgers.
> *   **Availability:** Ensuring customers can access their funds and the online banking system 24/7. *Protection:* The bank uses redundant servers, failover data centers, and DDoS protection to keep the app online.

**(p)** A hospital system was hacked and patient data was modified without authorization.
> *   **Violated component:** Integrity.
> *   **Two preventive measures:**
>     1. Implement strict Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA).
>     2. Use cryptographic hashes and digital signatures for data records to detect any tampering.
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
> **Caesar Cipher Encryption:**
> Assuming the standard shift key of **$K = 3$**:
> *   I(8)+3=11(L), A(0)+3=3(D), M(12)+3=15(P), N(13)+3=16(Q), O(14)+3=17(R), T(19)+3=22(W), A(0)+3=3(D), H(7)+3=10(K), A(0)+3=3(D), C(2)+3=5(F), K(10)+3=13(N), E(4)+3=7(H), R(17)+3=20(U)
> *   **Ciphertext:** **LDPQRWDKDFNHU**

**(c)** Solve the below math using Rail-fence Cipher technique? <br>**Plain Text:** a new semester begins with football and moving vans <br>**Given key value 5.** What is the chipper text?
> *Assuming we remove spaces to format the continuous rail-fence correctly.*
> Plaintext without spaces: `anewsemesterbeginswithfootballandmovingvans`
> Writing the letters in a zig-zag pattern over 5 rails yields:
> **Ciphertext:** **`asnodanetisotnmvnemegwfbaogswereihalvnsbtli`**
> *(If spaces are preserved, the ciphertext would be: `ametama eebgihbl ovnnss iw tldv se trn fo nigwesoan`)*

**(d)** Perform encryption using the Rail Fence Cipher with 3 rails where **Plaintext: SHERLOCKHOMES**.
> Plaintext: `SHERLOCKHOMES` (13 chars).
> Rails = 3.
> Zig-Zag pattern:
> R1: S . . . L . . . H . . . S
> R2: . H . R . O . K . O . E .
> R3: . . E . . . C . . . M . .
> **Ciphertext:** **SLHSHROKOEECM**

**(e)** What is the transposition technique? Apply the Rail Fence technique for the plaintext **"Computer Science and Engineering"** using depth 3.
> **Transposition Technique:** A method where the characters of the plaintext are not altered, but permuted into a different order based on an algorithm.
> **Rail Fence Cipher (Depth 3):**
> Writing `ComputerScienceandEngineering` in a 3-rail zig-zag:
> **Ciphertext:** **`CuSnngegoptrcecadniernmeieEni`**

**(f)** Encrypt the message **"successive"** using Playfair Cipher technique where the keyword is **"summary"**.
> **Step 1: Matrix Generation**
> S U M A R
> Y B C D E
> F G H I K
> L N O P Q
> T V W X Z
> *(Note: I/J are combined)*
> 
> **Step 2: Digraphs**
> Split `successive` into pairs and insert filler `X` between repeating letters:
> `SU` `CX` `CE` `SX` `SI` `VE`
> 
> **Step 3: Encryption**
> * `SU`: Same row $\rightarrow$ **UM**
> * `CX`: Rectangle $\rightarrow$ **DW**
> * `CE`: Same row $\rightarrow$ **DY**
> * `SX`: Rectangle $\rightarrow$ **AT**
> * `SI`: Rectangle $\rightarrow$ **AF**
> * `VE`: Rectangle $\rightarrow$ **ZB**
> 
> **Ciphertext:** **UMDWDYATAFZB**

**(g)** Encrypt the message **"summary"** using Playfair Cipher technique where keyword is **"monarchy"**.
> **1. Construct 5x5 Matrix (Keyword: "monarchy"):**
> M O N A R
> C H Y B D
> E F G I K
> L P Q S T
> U V W X Z
> *(Note: I/J are combined)*
> 
> **2. Prepare Message:** "summary" 
> Split into digraphs: `su` -> `m` `m` (insert 'x') -> `mx` -> `ma` -> `ry`
> Digraphs: `su`, `mx`, `ma`, `ry`
> 
> **3. Encrypt:**
> *   `su` -> forms a rectangle -> **`LX`**
> *   `mx` -> forms a rectangle -> **`AU`**
> *   `ma` -> same row -> **`OR`**
> *   `ry` -> forms a rectangle -> **`ND`**
> **Ciphertext:** **`LXAUORND`**

**(h)** Solve the below math using Polyalphabetic cipher technique<br>**Plain Text:** Engineering College<br>**Given key:** Sylhet. What is cipher text?
> A Polyalphabetic cipher with a keyword implies the **Vigenère Cipher**. We align the key with the plaintext (ignoring spaces) and add their values modulo 26.
> 
> Plaintext: E N G I N E E R I N G C O L L E G E
> Key text:  S Y L H E T S Y L H E T S Y L H E T
> 
> Adding the values (A=0, B=1...) modulo 26 yields:
> **Ciphertext:** **WLRPRXWPTUKVGJWLKX**

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
> **Encryption:**
> The plaintext block is "AB". A=0, B=1. Vector $P = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$.
> $C = K \cdot P = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \end{bmatrix} \pmod{26}$.
> 0 $\rightarrow$ A, 1 $\rightarrow$ B. **Ciphertext = "AB"**.
> 
> **Decryption:**
> The inverse of the Identity matrix is the Identity matrix ($K^{-1} = K$).
> $P = K^{-1} \cdot C = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \end{bmatrix} \pmod{26}$.
> 0 $\rightarrow$ A, 1 $\rightarrow$ B. **Plaintext = "AB"**. Decryption successfully returns the given block string.

**(k)** Explain - "Though the possible substitution ciphers of English text are huge, ...
> **Explanation:** Even though the key space for a monoalphabetic substitution cipher is enormous ($26! \approx 4 \times 10^{26}$ possible keys), it does not hide the underlying statistical structure of the language. English text has distinct letter frequencies (e.g., 'E' is the most common), common digraphs (e.g., 'TH'), and word patterns. A cryptanalyst can easily break the cipher by performing **Frequency Analysis**, matching the frequency of characters in the ciphertext with the known frequencies of English letters, rendering the huge key space irrelevant.

**(l)** Explain how the **Vigenère cipher** improves security over the Caesar cipher.
> While the Caesar cipher is a monoalphabetic substitution (every 'A' maps to the exact same ciphertext letter depending on a single shift), the **Vigenère cipher** is a polyalphabetic substitution. It uses a keyword to apply a different Caesar shift for each letter of the plaintext. This flattens the frequency distribution of the ciphertext characters, making standard frequency analysis significantly harder to apply.

**(m)** Describe the **Playfair cipher** encryption technique. Why is it considered stronger than simple substitution ciphers?
> **Technique:** The Playfair cipher uses a 5x5 matrix filled with a keyword (omitting duplicate letters, and combining I/J) and the remaining letters of the alphabet. The plaintext is split into digraphs (pairs of letters).
> Encryption rules:
> 1. If both letters are in the same row, replace them with the letters immediately to their right.
> 2. If both letters are in the same column, replace them with the letters immediately below them.
> 3. If they form a rectangle, replace them with the letters on the same row but at the opposite corners.
> 
> **Why it's stronger:** It encrypts pairs of letters (digraphs) instead of single letters. This increases the total possible "characters" from 26 to $26 \times 26 = 676$, drastically flattening single-letter frequency distributions and making it highly resistant to simple frequency analysis.

**(n)** Encrypt the plaintext **"SECURITY"** using the Vigenère Cipher with key **"KEY"**. Show full steps.
> **Step 1: Align the plaintext and the key**
> Plaintext: S E C U R I T Y
> Key:       K E Y K E Y K E
> 
> **Step 2: Convert letters to numerical values (A=0, B=1, ... Z=25)**
> Plaintext: 18  4  2 20 17  8 19 24
> Key:       10  4 24 10  4 24 10  4
> 
> **Step 3: Add the values modulo 26**
> S + K = 18 + 10 = 28 $\equiv$ 2 (C)
> E + E = 4 + 4 = 8 (I)
> C + Y = 2 + 24 = 26 $\equiv$ 0 (A)
> U + K = 20 + 10 = 30 $\equiv$ 4 (E)
> R + E = 17 + 4 = 21 (V)
> I + Y = 8 + 24 = 32 $\equiv$ 6 (G)
> T + K = 19 + 10 = 29 $\equiv$ 3 (D)
> Y + E = 24 + 4 = 28 $\equiv$ 2 (C)
> 
> **Ciphertext:** **CIAEVGDC**

**(o)** Encrypt the plaintext **"HIDE MONEY"** using the Playfair Cipher with the key **"MONARCHY"**. Construct the 5×5 matrix and show steps.
> **Step 1: Construct the 5x5 Key Matrix**
> Keyword: MONARCHY
> M O N A R
> C H Y B D
> E F G I/J K
> L P Q S T
> U V W X Z
> 
> **Step 2: Prepare the Message**
> Message: HIDE MONEY
> Digraphs: `HI` `DE` `MO` `NE` `YX` (added filler 'X' to complete the last pair).
> 
> **Step 3: Encrypt Digraphs**
> *   `HI`: Rectangle $\rightarrow$ (1,1) and (2,3) $\rightarrow$ Replace with (1,3) and (2,1) $\rightarrow$ **BF**
> *   `DE`: Rectangle $\rightarrow$ (1,4) and (2,0) $\rightarrow$ Replace with (1,0) and (2,4) $\rightarrow$ **CK**
> *   `MO`: Same row $\rightarrow$ Shift right $\rightarrow$ **ON**
> *   `NE`: Rectangle $\rightarrow$ (0,2) and (2,0) $\rightarrow$ Replace with (0,0) and (2,2) $\rightarrow$ **MG**
> *   `YX`: Rectangle $\rightarrow$ (1,2) and (4,3) $\rightarrow$ Replace with (1,3) and (4,2) $\rightarrow$ **BW**
> 
> **Ciphertext:** **BFCKONMGBW**

---

## 3. Symmetric Key Cryptography & Block Ciphers

**(a)** Distinguish Stream Cipher and Block Cipher.
> *   **Block Cipher:** Processes the plaintext input in fixed-size blocks (e.g., 64 or 128 bits) and produces a block of ciphertext of equal size for each block. Example: AES, DES.
> *   **Stream Cipher:** Processes the plaintext input continuously, encrypting it one bit or one byte at a time by XORing it with a continuously generated pseudorandom keystream. Example: RC4.

**(b)** Why is it important to use padding in block ciphers? How does the size of the key affect the security of a symmetric cipher?
> **Padding:** Block ciphers require plaintext input to perfectly align with their fixed block sizes (e.g., 64/128 bits). Padding fills the final block if the message is too short.
> **Key Size:** A larger key increases the key space exponentially ($2^{128}$ vs $2^{256}$), making brute-force attacks computationally infeasible and directly increasing security.

**(c)** Apply PKCS#5 padding to the plaintext "NETWORK" assuming block size $b = 128$ bits.
> **PKCS#5 Padding:**
> * Block size $b = 128$ bits = **16 bytes**.
> * Plaintext "NETWORK" length = **7 bytes**.
> * Padding required = $16 - 7$ = **9 bytes**.
> * Each padded byte takes the value of the number of padded bytes (i.e., `0x09`).
> * **Padded Plaintext:** `NETWORK\x09\x09\x09\x09\x09\x09\x09\x09\x09`

**(d)** What is the padded plaintext of **"SECURITYCSE477"** using PKCS5 when block size is 16 bytes.
> *   **Block size:** 16 bytes.
> *   **Plaintext:** "SECURITYCSE477" (length = 14 bytes).
> *   **Padding needed:** $16 - 14 = 2$ bytes.
> *   In PKCS#5, the padding value is the number of bytes added, which is `0x02`.
> *   **Padded Plaintext:** `SECURITYCSE477\x02\x02`

**(e)** Draw the block diagram of Feistel Cipher.
> *(Since standard diagrams cannot be rendered perfectly, here is the text representation of a single Feistel round)*
> The input block is split into two halves: Left ($L_{i-1}$) and Right ($R_{i-1}$).
> 1. The Right half is passed through a round function $F$ along with a subkey $K_i$. 
> 2. The output of $F$ is XORed with the Left half. 
> 3. Then, the two halves are swapped for the next round: the new Left half becomes the old Right half, and the new Right half becomes the XOR result.

**(f)** Draw the Diagram of S-DES key generation.
> *(Text representation of S-DES Key Generation Diagram)*
> ```mermaid
> graph TD
>     Key[10-bit Key] --> P10[Permutation P10]
>     P10 --> Split[Split into L0: 5 bits, R0: 5 bits]
>     Split --> LS1[Left Shift 1]
>     LS1 --> P8_1[Permutation P8]
>     P8_1 --> K1[Subkey K1 - 8 bits]
>     LS1 --> LS2[Left Shift 2]
>     LS2 --> P8_2[Permutation P8]
>     P8_2 --> K2[Subkey K2 - 8 bits]
> ```

**(g)** Given an 8-bit plaintext 10110101 and a 10-bit key 1010100010, perform the key generation step of the S-DES algorithm and calculate the subkeys K1 and K2. Using:<br>**Permutation for p10:** 3,5,7,2,10,1,6,8,9,4<br>**Permutation for p8:** 7,3,6,5,9,4,10,1
> **Given Key:** `1010100010`
> **P10 Permutation:** `1100010010`
> Split into L0 (`11000`) and R0 (`10010`).
> 
> **LS-1 (Left Shift by 1):**
> L1 = `10001`, R1 = `00101` (Combined: `1000100101`)
> **P8 Permutation:**
> **Subkey K1:** **`00010011`**
> 
> **LS-2 (Left Shift L1 and R1 by 2):**
> L2 = `00110`, R2 = `10100` (Combined: `0011010100`)
> **P8 Permutation:**
> **Subkey K2:** **`01100100`**

**(h)** Shortly explain the 4 steps involved in every round of Advanced Encryption Standard (AES).
> 1.  **SubBytes:** A non-linear substitution step where each byte is replaced with another according to a lookup table (S-box), providing *confusion*.
> 2.  **ShiftRows:** A transposition step where the last three rows of the state matrix are shifted cyclically a certain number of steps, providing *diffusion*.
> 3.  **MixColumns:** A mixing operation that operates on the columns of the state, combining the four bytes in each column using a mathematical transformation, providing further *diffusion*.
> 4.  **AddRoundKey:** Each byte of the state is combined with a block of the round key using bitwise XOR.

**(i)** Describe the step-by-step encryption process of AES including the initialization, rounds, and final transformation.
> **AES Encryption Process:**
> 1.  **Initialization:** The 128-bit plaintext block is converted into a 4x4 state matrix. The initial **AddRoundKey** step is performed, XORing the state matrix with the 128-bit initial Round Key.
> 2.  **Rounds (Iterated 9, 11, or 13 times):**
>     *   **SubBytes:** A non-linear byte substitution using a fixed lookup table (S-box).
>     *   **ShiftRows:** A cyclical left shift of the last three rows of the state matrix.
>     *   **MixColumns:** A mathematical mixing of each column using matrix multiplication in a Galois Field.
>     *   **AddRoundKey:** The state matrix is XORed with the subkey for the current round.
> 3.  **Final Transformation:** Executes **SubBytes**, **ShiftRows**, and **AddRoundKey** (MixColumns is intentionally omitted to allow decryption to use the exact reverse structure).

**(j)** In AES, what are the basic sequential steps in both encryption and decryption rounds? What is the value of **RC[j]**, in the key expansion step where **j = 5**.
> **Basic sequential steps in AES:**
> *   **Encryption Round:** SubBytes $\rightarrow$ ShiftRows $\rightarrow$ MixColumns $\rightarrow$ AddRoundKey
> *   **Decryption Round:** InvShiftRows $\rightarrow$ InvSubBytes $\rightarrow$ AddRoundKey $\rightarrow$ InvMixColumns
> 
> **Value of RC[5]:**
> The round constants (RC) for AES are powers of $x \pmod{x^8 + x^4 + x^3 + x + 1}$:
> RC[1] = `01`, RC[2] = `02`, RC[3] = `04`, RC[4] = `08`, RC[5] = `10`
> *   **RC[5] = $\mathbf{10_{16}}$** (or 16 in decimal).

**(k)** Describe advantages and limitations of different AES operation modes.
> *   **ECB:** *Advantages:* Simple, highly parallelizable. *Limitations:* Identical blocks encrypt to identical ciphertext, leaking data patterns. Insecure for large files.
> *   **CBC:** *Advantages:* Hides patterns, highly secure. *Limitations:* Encryption cannot be parallelized; requires an unpredictable IV.
> *   **CTR:** *Advantages:* Converts block cipher to stream cipher, fully parallelizable, efficient. *Limitations:* Catastrophic failure if a nonce/counter is ever reused with the same key.

**(l)** Differentiate between ECB and CBC mode along with their usability.
> *   **Electronic Codebook (ECB):** Each block of plaintext is encrypted independently. Identical plaintext blocks produce identical ciphertext blocks.
>     *   *Usability:* Only suitable for encrypting very short amounts of data, like a single encryption key.
> *   **Cipher Block Chaining (CBC):** Each plaintext block is XORed with the previous ciphertext block before encryption (using an IV for the first block). This obscures patterns.
>     *   *Usability:* Widely used for general-purpose bulk encryption of files and messages.

**(m)** Which block cipher mode is not suitable for data having repeated patterns? Why?
> **Electronic Codebook (ECB) Mode.**
> **Why:** ECB encrypts identical plaintext blocks into identical ciphertext blocks. As a result, it does not hide data patterns well, which can reveal the structure of the underlying plaintext (e.g., the ECB Penguin image).

**(n)** Explain the concept of a block cipher. Discuss different types of block cipher modes of operation (**ECB, CBC, CFB, OFB**). Mention one advantage and one disadvantage of any one mode.
> **Block Cipher Concept:** A deterministic algorithm operating on fixed-length groups of bits, called blocks. It takes a block of plaintext (e.g., 128 bits) and a symmetric key, and outputs a block of ciphertext of the same size.
> **Modes of Operation:**
> *   **ECB (Electronic Codebook):** The simplest mode. Each block is encrypted independently. Identical plaintexts yield identical ciphertexts.
> *   **CBC (Cipher Block Chaining):** Each plaintext block is XORed with the previous ciphertext block before encryption. Requires an IV (Initialization Vector).
> *   **CFB (Cipher Feedback):** Turns a block cipher into a self-synchronizing stream cipher.
> *   **OFB (Output Feedback):** Turns a block cipher into a synchronous stream cipher by generating a keystream block from the previous keystream block.
> 
> **Advantage and Disadvantage of CBC:**
> *   *Advantage:* It obscures patterns in the plaintext because identical blocks encrypt differently depending on their position.
> *   *Disadvantage:* Encryption cannot be parallelized because each block depends on the previous block's output.

**(o)** What is the **PKCS#5** padding method? Why is padding necessary in block cipher encryption?
> **PKCS#5 Padding Method:** A technique to pad plaintext so its length is a multiple of the block size (specifically for 8-byte blocks). The value of each added byte is the total number of bytes added. (e.g., if 3 bytes are needed, the padding is `0x03, 0x03, 0x03`).
> **Why padding is necessary:** Block ciphers require inputs to be an exact multiple of the block length (like 64 or 128 bits). If a message doesn't perfectly align with these boundaries, padding is added to complete the final block.

**(p)** A block cipher uses **8-byte** blocks. The plaintext length is **22 bytes**.
> *   **Apply PKCS5 padding:**
>     Since the block size is 8 bytes, the next multiple of 8 after 22 is 24.
>     Padding required = $24 - 22 = 2$ bytes.
>     The padding byte value is the number of bytes added, so two bytes of `0x02` are appended.
> *   **Final padded length:** $24$ bytes.
> *   **Padding bytes added:** `0x02, 0x02`.
* Apply PKCS5 padding.
* Show the final padded length and padding bytes added.

---

## 4. Mathematics & Number Theory

**(a)** Why is a prime number important in cryptography?
> **Importance:** Prime numbers are fundamental because finding the prime factors of a very large composite number is a computationally hard problem. This one-way mathematical difficulty forms the bedrock of security for asymmetric cryptographic algorithms like RSA and Diffie-Hellman.

**(b)** Define Euler's theorem and its alternative form.
> **Euler's Theorem:** If $n$ and $a$ are coprime positive integers ($\gcd(a, n) = 1$), then $a^{\varphi(n)} \equiv 1 \pmod n$, where $\varphi(n)$ is Euler's totient function.
> **Alternative Form:** For any integer $a$ and any positive integer $n$ (under certain conditions or strictly if $a$ and $n$ are coprime), $a^{\varphi(n)+1} \equiv a \pmod n$. In RSA, this generalizes to $a^{k\cdot \varphi(n) + 1} \equiv a \pmod n$.

**(c)** State Fermat's Little Theorem.
> **Fermat's Little Theorem:** If $p$ is a prime number and $a$ is an integer not divisible by $p$ (i.e., $\gcd(a, p) = 1$), then $a^{p-1} \equiv 1 \pmod p$.

**(d)** Using **Fermat's Theorem**, examine whether the number **43** is a prime number or not.
> **Fermat's Little Theorem:** If $p$ is prime and $a$ is an integer where $\gcd(a, p) = 1$, then $a^{p-1} \equiv 1 \pmod p$.
> Let $p = 43$. Let's test with $a = 2$. We need to compute $2^{42} \pmod{43}$.
> *   $2^5 = 32 \equiv -11 \pmod{43}$
> *   $2^{10} \equiv (-11)^2 = 121 \equiv -8 \pmod{43}$
> *   $2^{20} \equiv (-8)^2 = 64 \equiv 21 \pmod{43}$
> *   $2^{40} \equiv 21^2 = 441 = 43 \times 10 + 11 \equiv 11 \pmod{43}$
> *   $2^{42} = 2^{40} \times 2^2 \equiv 11 \times 4 \equiv 44 \equiv \mathbf{1} \pmod{43}$
> Since $2^{42} \equiv 1 \pmod{43}$, the number 43 satisfies Fermat's Little Theorem, making it highly likely to be a prime number (which it is).

**(e)** Using the **Extended Euclidean algorithm**, determine the **GCD of 305 and 85** as well as the value of **x and y**.
> Equation: $305x + 85y = \gcd(305, 85)$
> **Step 1: Standard Euclidean (Find GCD)**
> $305 = 85 \times 3 + 50$
> $85 = 50 \times 1 + 35$
> $50 = 35 \times 1 + 15$
> $35 = 15 \times 2 + 5$
> $15 = 5 \times 3 + 0$
> **GCD is 5**.
> 
> **Step 2: Extended Euclidean (Backwards substitution)**
> $5 = 35 - 15 \times 2$
> $5 = 35 - (50 - 35) \times 2 = 35 \times 3 - 50 \times 2$
> $5 = (85 - 50) \times 3 - 50 \times 2 = 85 \times 3 - 50 \times 5$
> $5 = 85 \times 3 - (305 - 85 \times 3) \times 5 = 85 \times 18 - 305 \times 5$
> So, $305(-5) + 85(18) = 5$.
> **x = -5, y = 18**.

**(f)** How many numbers are coprime with a prime number **p**? **gcd(0,20) = ?**
> *   Numbers coprime with a prime number $p$ is exactly **$p - 1$**.
> *   **$\gcd(0, 20) = \mathbf{20}$** (since the greatest integer that divides both 0 and 20 without a remainder is 20).

**(g)** Employ Miller Robin primality test to check whether 97 is a prime number or not.
> We want to test $n = 97$.
> 1. Find $k$ and $q$, with $q$ odd, such that $n - 1 = 2^k \cdot q$.
>    $96 = 2^5 \cdot 3$. So $k = 5$ and $q = 3$.
> 2. Select a random integer $a$ such that $1 < a < 96$. Let's choose $a = 2$.
> 3. Compute $a^q \pmod n$:
>    $2^3 \pmod{97} = 8$. Since $8 \neq 1$ and $8 \neq 96$, we continue.
> 4. We compute $a^{2^j \cdot q} \pmod n$ for $j = 1, 2, 3, 4$:
>    * $j=1: 8^2 \pmod{97} = 64$
>    * $j=2: 64^2 = 4096 \equiv 22 \pmod{97}$
>    * $j=3: 22^2 = 484 \equiv 96 \pmod{97} \equiv -1 \pmod{97}$
>    Since we reached $-1$ (which is $n-1$), the test returns **"Inconclusive"**, meaning 97 is probably prime. (It is indeed a prime).

**(h)** Show the Prime Factorization of two numbers 360 and 600. Discuss mathematically why in cryptographic systems (like RSA), it is important that two numbers used for key generation do not share the same prime factors.
> **i) Prime Factorization:**
> *   **360** = $2^3 \times 3^2 \times 5^1$
> *   **600** = $2^3 \times 3^1 \times 5^2$
> 
> **ii) Why cryptographic systems must not share prime factors:**
> If two RSA moduli ($n_1, n_2$) share a prime factor, an attacker can trivially compute their Greatest Common Divisor using the Euclidean algorithm. The GCD will instantly reveal the shared prime factor, instantly compromising both moduli, allowing the attacker to derive the private keys for both systems.

**(i)** Explain how the distributive property works in GF(5) Field.
> The distributive property states $a \cdot (b + c) \equiv (a \cdot b) + (a \cdot c) \pmod 5$.
> **Example:** Let $a = 2, b = 3, c = 4$ in $GF(5)$.
> *   Left: $2 \cdot (3 + 4) \equiv 2 \cdot 7 \equiv 14 \equiv \mathbf{4} \pmod 5$.
> *   Right: $(2 \cdot 3) + (2 \cdot 4) \equiv 6 + 8 \equiv 14 \equiv \mathbf{4} \pmod 5$.

**(j)** What is a primitive root modulo a prime number **p**? How many primitive roots are there in $Z_p$?
> **Primitive Root Modulo $p$:** A number $g$ is a primitive root modulo a prime $p$ if every number from $1$ to $p-1$ can be expressed as a power of $g$ modulo $p$. In mathematical terms, $g$ is a generator of the multiplicative group $Z_p^*$. Its powers $g^1, g^2, \dots, g^{p-1} \pmod p$ generate all distinct integers coprime to $p$.
> **How many primitive roots:** The number of primitive roots in $Z_p$ is given by Euler's totient function of $(p-1)$, mathematically expressed as **$\varphi(p-1)$**.

**(k)** Find one primitive root modulo 13. Provide necessary calculations.
> Prime $p = 13$. The order of the group is $p-1 = 12$.
> To be a primitive root, $g^k \not\equiv 1 \pmod{13}$ for all $k < 12$. Specifically, we must check the prime factors of 12 ($q=2$ and $q=3$): $g^{12/2} = g^6 \not\equiv 1$ and $g^{12/3} = g^4 \not\equiv 1$.
> Let's test $g = 2$:
> *   $2^4 = 16 \equiv \mathbf{3} \pmod{13} \neq 1$
> *   $2^6 = 64 \equiv \mathbf{12} \equiv -1 \pmod{13} \neq 1$
> Since $2^4 \not\equiv 1$ and $2^6 \not\equiv 1$, its order must be 12. Therefore, **2 is a primitive root modulo 13**.

**(l)** Find the elements of $Z_{56}^*$.
> $Z^*_{56}$ contains all integers $x$ such that $1 \le x < 56$ and $\gcd(x, 56) = 1$. Since $56 = 2^3 \times 7$, the numbers must be odd and not divisible by 7.
> **Elements:** {1, 3, 5, 9, 11, 13, 15, 17, 19, 23, 25, 27, 29, 31, 33, 37, 39, 41, 43, 45, 47, 51, 53, 55}
> The total count is $\varphi(56) = 56 \times (1 - 1/2) \times (1 - 1/7) = \mathbf{24}$.

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
> A trapdoor one-way function is a mathematical function that is easy to compute in one direction, but extremely difficult to compute in the reverse direction (finding the inverse) *unless* you possess a specific piece of secret information called the "trapdoor". If you have the trapdoor (like a private key), reversing the function becomes easy.

**(b)** How many different keys are needed for a symmetric encryption system and public key encryption system for 10 parties?
> *   **Symmetric Encryption System:** Requires $\frac{n(n-1)}{2}$ keys. For $n = 10$, $\frac{10 \times 9}{2} = \mathbf{45}$ **keys**.
> *   **Public Key Encryption System:** Requires 2 keys (1 public, 1 private) per party. For $n = 10$, $10 \times 2 = \mathbf{20}$ **keys**.

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
> **How RSA ensures security:** RSA's security fundamentally relies on the **Integer Factorization Problem**—it is computationally easy to multiply two large prime numbers ($p$ and $q$) to get $n$, but it is computationally infeasible to derive $p$ and $q$ when only $n$ is given.
> 
> **Possible attacks:**
> 1.  **Brute-Force Attack:** Trying all possible private keys.
> 2.  **Mathematical Attacks:** Factoring the modulus $n$ into its primes.
> 3.  **Timing Attacks:** Exploiting the time taken by the CPU to compute the decryption.
> 4.  **Chosen Ciphertext Attacks:** Exploiting properties of RSA (mitigated by Optimal Asymmetric Encryption Padding - OAEP).

**(e)** Given two prime numbers p and q are 5 and 17 respectively, generate public key and private key pair using RSA algorithm where e = 13. Encrypt the message M = 150212.
> 1. $n = p \times q = 5 \times 17 = 85$
> 2. $\varphi(n) = (p-1)(q-1) = 4 \times 16 = 64$
> 3. We are given $e = 13$. We need to find $d$ such that $d \cdot e \equiv 1 \pmod{\varphi(n)}$.
>    $13d \equiv 1 \pmod{64}$
>    Using Extended Euclidean Algorithm:
>    $64 = 4 \times 13 + 12$
>    $13 = 1 \times 12 + 1$
>    $1 = 13 - 12 = 13 - (64 - 4 \times 13) = 5 \times 13 - 64$
>    So, $d = 5$.
> *   **Public Key:** $(e, n) = \mathbf{(13, 85)}$
> *   **Private Key:** $(d, n) = \mathbf{(5, 85)}$
> 
> **Encryption:**
> Since $M = 150212$ is much larger than $n = 85$, RSA requires $M < n$. Therefore, we must split the message into blocks smaller than $n$. Let's treat each pair of digits as a block: $M_1=15, M_2=02, M_3=12$.
> *   $C_1 \equiv M_1^e \pmod n \equiv 15^{13} \pmod{85} \equiv \mathbf{70}$
> *   $C_2 \equiv M_2^e \pmod n \equiv 2^{13} \pmod{85} \equiv \mathbf{32}$
> *   $C_3 \equiv M_3^e \pmod n \equiv 12^{13} \pmod{85} \equiv \mathbf{82}$
> 
> **Encrypted Message (Ciphertext):** **70 32 82**

**(f)** Perform the complete RSA algorithm on: p=17, q=19, M=9 and show all steps of n, φ(n), d, encryption, decryption.
> **Step 1: Key Generation**
> $n = p \times q = 17 \times 19 = 323$
> $\varphi(n) = (p-1)(q-1) = 16 \times 18 = 288$
> Let's choose $e = 5$ (since $\gcd(5, 288) = 1$).
> To find $d$, we solve $5d \equiv 1 \pmod{288}$. Using Extended Euclidean Algorithm, $d = 173$.
> **Public Key:** $(5, 323)$
> **Private Key:** $(173, 323)$
> 
> **Step 2: Encryption**
> $M = 9$
> $C \equiv M^e \pmod n \equiv 9^5 \pmod{323} \equiv 59049 \pmod{323} \equiv \mathbf{262}$
> 
> **Step 3: Decryption**
> $M \equiv C^d \pmod n \equiv 262^{173} \pmod{323} \equiv \mathbf{9}$

**(g)** RSA system uses P = 7, Q = 13, if Alice decided to send a message M = 9 to the Bob what should be the public and private key and show that Bob is able to decrypt the message.
> **Key Generation (done by Bob):**
> $n = p \times q = 7 \times 13 = 91$
> $\varphi(n) = (p-1)(q-1) = 6 \times 12 = 72$
> Let's choose $e = 5$ ($\gcd(5, 72) = 1$).
> Find $d$ where $5d \equiv 1 \pmod{72}$. Extended Euclidean algorithm gives $d = 29$.
> **Public Key:** $\mathbf{(5, 91)}$
> **Private Key:** $\mathbf{(29, 91)}$
> 
> **Encryption (by Alice):**
> Alice encrypts $M = 9$ using Bob's public key:
> $C \equiv M^e \pmod n \equiv 9^5 \pmod{91} \equiv 59049 \pmod{91} \equiv \mathbf{81}$
> 
> **Decryption (by Bob):**
> Bob decrypts using his private key $d=29$:
> $M \equiv C^d \pmod n \equiv 81^{29} \pmod{91} \equiv \mathbf{9}$

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
> **1. Find the private key d:**
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
> 
> **2. Find the cipher C of the message M=37:**
> *   $C \equiv M^e \pmod n$
> *   $C \equiv 37^{127} \pmod{21353}$
> *   Using modular exponentiation, **$C = \mathbf{6547}$**.

**(j)** From the given values answer the following questions:<br>**Prime Modulus p = 23, Primitive Root g = 5, Private Key Xa = 6, Private key Xb = 15**<br>Explain the philosophy behind Diffie-Hellman key exchange protocol. Generate public keys (Ya, Yb) and shared secret key.
> **i. Philosophy behind Diffie-Hellman:** It allows two parties who have no prior knowledge of each other to jointly establish a shared, secret cryptographic key over an insecure communication channel, relying on the computational difficulty of the discrete logarithm problem.
> 
> **ii. Generate public keys and shared secret key:**
> *   $Y_A = g^{X_A} \pmod p \equiv 5^6 \pmod{23} \equiv \mathbf{8}$
> *   $Y_B = g^{X_B} \pmod p \equiv 5^{15} \pmod{23} \equiv \mathbf{19}$
> *   User A computes $K \equiv (Y_B)^{X_A} \pmod p \equiv 19^6 \pmod{23} \equiv \mathbf{2}$
> *   User B computes $K \equiv (Y_A)^{X_B} \pmod p \equiv 8^{15} \pmod{23} \equiv \mathbf{2}$
> *   **Shared Secret Key ($K$) = 2**

**(k)** Discuss the vulnerability of Diffie-Hellman to man-in-the-middle attacks and how modern network protocols mitigate it.
> **Vulnerability:** Standard DH lacks authentication. An attacker (Mallory) can intercept and replace public keys, establishing two separate secure sessions. Alice and Bob think they are communicating directly, but Mallory is decrypting and re-encrypting everything in the middle.
> **Mitigation:** Protocols like TLS/IPSec mitigate this by combining DH with Digital Certificates (RSA/ECDSA). Before accepting a DH public key, the receiver verifies its cryptographic signature against a trusted Certificate Authority (CA) to prove the sender's identity.

**(l)** **P = 23, g = 5, e = 8, d = 6**, choose a Message M, random number K and perform the ELGamal encryption and decryption.
> Assume $d = 6$ is the private key (meaning $x = 6$). The public key component $e = g^d \pmod p = 5^6 \pmod{23} = 8$ (matches given $e$).
> Let's arbitrarily choose **Message $M = 10$** and random **$K = 3$**.
> 
> **Encryption:**
> *   $a \equiv g^K \pmod P \equiv 5^3 \pmod{23} \equiv \mathbf{10}$
> *   $b \equiv e^K \cdot M \pmod P \equiv 8^3 \cdot 10 \pmod{23} \equiv 512 \cdot 10 \pmod{23} \equiv 6 \cdot 10 \pmod{23} \equiv 60 \pmod{23} \equiv \mathbf{14}$
> *   **Ciphertext pair (a, b) = (10, 14)**
> 
> **Decryption:**
> *   $M \equiv b \cdot (a^x)^{-1} \pmod P$
> *   First, find $a^x \pmod{23} \equiv 10^6 \pmod{23} \equiv 6$.
> *   Next, find modular inverse of 6 modulo 23, which is 4 (since $6 \times 4 = 24 \equiv 1 \pmod{23}$).
> *   $M \equiv 14 \cdot 4 \pmod{23} \equiv 56 \pmod{23} \equiv \mathbf{10}$. (Successfully decrypted).

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
> **(a) Public Key Triple**
> Public key is $(p, g, y)$.
> $y \equiv g^x \pmod p \equiv 29^{111} \pmod{131} \equiv 67$.
> The public key triple is **(131, 29, 67)**.
> 
> **(b) Encrypted Pair (a,b)**
> The encrypted pair is $(a, b)$.
> $a \equiv g^k \pmod p \equiv 29^{37} \pmod{131} \equiv \mathbf{127}$.
> $K \equiv y^k \pmod p \equiv 67^{37} \pmod{131} \equiv 106$.
> $b \equiv K \cdot M \pmod p \equiv 106 \cdot 47 \pmod{131} \equiv 4982 \pmod{131} \equiv \mathbf{4}$.
> The encrypted pair is **(127, 4)**.
> 
> **(c) Decryption step and proof of correctness**
> **Decryption step:** $M \equiv b \cdot (a^x)^{-1} \pmod p$
> 
> **Proof of correctness:**
> $b \cdot (a^x)^{-1} \equiv (K \cdot M) \cdot (a^x)^{-1} \pmod p$
> We know $K \equiv y^k \equiv (g^x)^k \equiv g^{xk} \pmod p$
> And $a \equiv g^k \pmod p$, so $a^x \equiv (g^k)^x \equiv g^{kx} \equiv g^{xk} \equiv K \pmod p$
> Therefore, $b \cdot (a^x)^{-1} \equiv (K \cdot M) \cdot K^{-1} \equiv M \cdot (K \cdot K^{-1}) \equiv M \pmod p$.
> Thus, the decryption correctly recovers $M$.
* Find your public key triple which GoodBoy can use to encrypt the message.
* Find the encrypted pair **(a,b)** of the message generated by GoodBoy.
* Write down the equation for the decryption step you took and prove its correctness.

---

## 6. Hashes, MAC & Digital Signatures

**(a)** What are the security requirements of cryptographic hash functions?
> **Security Requirements of a Cryptographic Hash Function:**
> 1.  **Pre-image Resistance (One-way property):** Given a hash value $h$, it is computationally infeasible to find the original message $m$ such that $H(m) = h$.
> 2.  **Second Pre-image Resistance (Weak Collision Resistance):** Given a specific message $m_1$, it is computationally infeasible to find another different message $m_2$ such that $H(m_1) = H(m_2)$.
> 3.  **Collision Resistance (Strong Collision Resistance):** It is computationally infeasible to find *any* two distinct messages $m_1$ and $m_2$ such that $H(m_1) = H(m_2)$.

**(b)** Explain MD5 algorithm with appropriate figure.
> **MD5 Algorithm:** MD5 processes a variable-length message into a fixed-length output of 128 bits.
> *   **Step 1: Append Padding Bits:** The message is padded so that its length is congruent to 448 modulo 512. Padding always occurs, even if the message is already the correct length.
> *   **Step 2: Append Length:** A 64-bit representation of the original message length is appended to the padded message, making the total length an exact multiple of 512 bits.
> *   **Step 3: Initialize MD Buffer:** A 128-bit buffer (divided into four 32-bit registers A, B, C, D) is initialized with specific hex values.
> *   **Step 4: Process Message in 512-bit Blocks:** Each block is processed through 4 rounds. Each round has 16 steps using non-linear functions (F, G, H, I), modular addition, and left rotations.
> *   **Step 5: Output:** After all 512-bit blocks are processed, the final state of the A, B, C, D registers concatenated forms the 128-bit message digest.

**(c)** How does Hash function provide Integrity? Draw the diagram of a message sending process when hash function ensures both confidentiality and authentication.
> **Integrity:** A hash function produces a unique, fixed-size digest. Even a single bit change alters the hash completely (avalanche effect). Comparing hashes proves the message wasn't modified.
> 
> ```mermaid
> graph TD
>     M[Message] --> H[Hash Function]
>     H --> Digest[Digest]
>     Digest --> EncPriv[Encrypt with Sender's Private Key]
>     EncPriv --> Signature[Signature]
>     M --> Concat[Append]
>     Signature --> Concat
>     Concat --> Package[Message + Signature]
>     Package --> EncSym[Encrypt with Shared Symmetric Key K]
>     EncSym --> Ciphertext[Ciphertext to Network]
> ```

**(d)** For given information answer the following question:<br>**block size m** = 4 bits<br>**h(0)** = 1010<br>**padding** = 110<br>**Message M** = 1101110010011<br>Compress the Message M using Merkle Damgard Construction Algorithm.
> 1.  **Padding:** $M = 1101110010011$. Pad with $110 \rightarrow M' = 1101110010011110$.
> 2.  **Block Division:** $M_1=1101, M_2=1100, M_3=1001, M_4=1110$.
> 3.  **Compression Function (XOR):**
>     *   $H_1 = 1010 \oplus 1101 = 0111$
>     *   $H_2 = 0111 \oplus 1100 = 1011$
>     *   $H_3 = 1011 \oplus 1001 = 0010$
>     *   $H_4 = 0010 \oplus 1110 = 1100$
> 4.  **Final Hash:** **1100**

**(e)** How does hashing ensure integrity? Where can hashing be used?
> **How it ensures integrity:** Hashing creates a unique, fixed-size digest for an arbitrary input. Due to the **Avalanche Effect**, changing even a single bit in the message completely changes the resulting hash. A receiver can hash the received data; if it matches the provided hash, the data was not altered.
> 
> **Where it can be used:** Digital signatures, password storage, verifying downloaded files (checksums), and blockchain.

**(f)** Explain how MAC is used for message authentication.
> **How MAC works:**
> 1.  The sender and receiver share a secret symmetric key $K$.
> 2.  The sender uses a MAC algorithm (like HMAC) taking the message $M$ and the key $K$ as inputs to generate a fixed-size tag (the MAC).
> 3.  The sender transmits both the message $M$ and the generated MAC to the receiver.
> 4.  The receiver, possessing the same key $K$, uses the MAC algorithm on the received message $M$ to compute their own MAC.
> 5.  If the receiver's computed MAC matches the received MAC, the message is authenticated (it came from someone who holds the key, and it hasn't been altered).

**(g)** Draw the working Diagram of HMAC and describe each step of generating HMAC.
> *(Text representation of HMAC Diagram)*
> ```mermaid
> graph TD
>     Key[Secret Key K] --> Pad1[XOR with ipad]
>     Key --> Pad2[XOR with opad]
>     Pad1 --> Concat1[Append Message M]
>     Concat1 --> Hash1[Hash Function H]
>     Hash1 --> Concat2[Append to padded opad]
>     Pad2 --> Concat2
>     Concat2 --> Hash2[Hash Function H]
>     Hash2 --> HMAC[Final HMAC]
> ```
> **Steps:** Append zeros to Key $K$ to make it block-sized ($K^+$). XOR $K^+$ with `ipad`. Append the Message $M$ and hash the result. XOR $K^+$ with `opad`. Append the previous hash result to this, and hash the entire combined string again to produce the final HMAC.

**(h)** Differentiate between digital signature and MAC. Which of the following properties are ensured by digital signature and MAC? (Integrity, Authenticity, Non-repudiation)
> **Differences:**
> *   **Digital Signature:** Uses **asymmetric encryption**. The sender signs with their private key, and anyone can verify with the public key.
> *   **MAC:** Uses **symmetric encryption**. The sender and receiver must both possess the same shared secret key.
> 
> **Properties Ensured:**
> *   **Integrity:** Both ensure integrity (message hasn't been altered).
> *   **Authenticity:** Both ensure authenticity (proving the sender's identity).
> *   **Non-repudiation:** **Only Digital Signatures** provide non-repudiation. Because MAC uses a shared key, either party could have forged it, allowing the sender to deny creating it.

**(i)** Differentiate between asymmetric key cryptography and digital signature.
> **Asymmetric Key Cryptography:** Focuses on *Confidentiality*. The sender encrypts the message using the receiver's public key, and only the receiver can decrypt it using their own private key.
> 
> **Digital Signature:** Focuses on *Authentication and Non-repudiation*. The sender "signs" the message (usually by encrypting a hash of it) using their own private key, and the receiver verifies the signature using the sender's public key.

**(j)** What is nonrepudiation? Describe how RSA digital signatures provide non-repudiation.
> **Non-repudiation** guarantees the sender cannot deny sending the message, because the signature is generated using their *private key*, which only they possess. Anyone can verify it using their *public key*.
> **Mathematical Operations:**
> 1.  Alice's Keys: Public $(e=5, n=91)$, Private $(d=29)$.
> 2.  Alice signs a message hash $H = 9$: $S \equiv H^d \pmod n \equiv 9^{29} \pmod{91} \equiv \mathbf{81}$.
> 3.  Bob verifies using Alice's public key: $H' \equiv S^e \pmod n \equiv 81^5 \pmod{91} \equiv \mathbf{9}$.
> Since hashes match, Bob knows unequivocally that Alice created the signature.
> **Non-repudiation:** A security service that ensures that a party to a communication cannot later deny having sent or received the message. It is usually achieved through digital signatures, which prove the origin and integrity of the data beyond a shadow of a doubt.

**(k)** How to generate a digital signature and verify it?
> **Generation (by Sender):**
> 1. Apply a cryptographic hash function (e.g., SHA-256) to the message to create a message digest.
> 2. Encrypt the digest using the sender's **Private Key**. This encrypted digest is the Digital Signature.
> 3. Transmit the original message and the signature to the receiver.
> 
> **Verification (by Receiver):**
> 1. Apply the exact same hash function to the received message to compute a new digest.
> 2. Decrypt the received Digital Signature using the sender's **Public Key** to retrieve the original digest.
> 3. Compare the new digest with the decrypted digest. If they match perfectly, the signature is valid.

**(l)** How does a digital signature work? Provide derivation of its correctness.
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

**(m)** Which attack can be imposed on the RSA signature? What can be used to mitigate this attack?
> **Attack:** RSA signatures are vulnerable to a **Chosen-Message Attack** due to the multiplicative property of RSA. Because $(m_1^d \times m_2^d) \pmod n \equiv (m_1 \times m_2)^d \pmod n$, an attacker can ask the victim to sign two seemingly harmless messages ($m_1$ and $m_2$) and multiply their signatures to perfectly forge a valid signature for a malicious message ($m_1 \times m_2$).
> **Mitigation:** Mitigated by **never signing the raw message directly**. Instead, always apply a secure cryptographic **Hash Function** to the message and sign the resulting hash. Hash functions destroy the multiplicative property, making forgery impossible.

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
> **Key Exchange Protocol:** A cryptographic method by which two parties securely exchange cryptographic keys over an insecure channel, allowing them to use a symmetric encryption algorithm thereafter.
> **Example:** Diffie-Hellman Key Exchange.

**(b)** Write down the cryptographic protocol for the situation, "A shares a secret key with B and each party is authenticated to each other".
> A simple challenge-response mutual authentication protocol using a shared secret key ($K$):
> 1.  $A \rightarrow B: R_A$ *(A sends a random challenge)*
> 2.  $B \rightarrow A: E_K[R_A, R_B]$ *(B authenticates by encrypting A's challenge, and sends its own challenge)*
> 3.  $A \rightarrow B: E_K[R_B]$ *(A authenticates by encrypting B's challenge)*

**(c)** What is certificate authority (CA)? Why is the digital certificate necessary?
> **Certificate Authority (CA):** A trusted third-party entity that issues digital certificates and manages public keys and certificates.
> **Why it's necessary:** A digital certificate cryptographically binds a public key to the identity of its owner. It is necessary to prevent **Man-in-the-Middle (MitM) attacks** where an attacker substitutes their own public key, tricking parties into communicating with the attacker instead of each other.

**(d)** What are the key differences between CA-signed and self-signed certificates?
> **CA-Signed:** Issued by a trusted third-party Certificate Authority. Automatically trusted by operating systems and browsers.
> **Self-Signed:** Created and cryptographically signed by the server owner themselves. Provides identical encryption, but browsers will throw severe security warnings since the identity cannot be independently verified.

**(e)** Explain the work flow of Pretty Good Privacy (PGP) in short.
> PGP provides confidentiality and authentication for email and file storage.
> **Workflow:**
> 1.  **Authentication (Signature):** The sender creates a hash of the message and signs it with their private key. The signature is appended to the message.
> 2.  **Compression:** The message and signature are compressed to save space and increase security.
> 3.  **Confidentiality (Encryption):** PGP generates a random one-time session key. The compressed data is encrypted symmetrically using this session key.
> 4.  **Key Management:** The session key is encrypted with the receiver's public key and prepended to the ciphertext.
> 5.  **Transmission:** The final package is encoded (e.g., Radix-64) and sent. The receiver decrypts the session key using their private key, decrypts the message, decompresses it, and verifies the signature using the sender's public key.

**(f)** What is Kerberos and what are the advantages of Kerberos?
> **Kerberos:** A computer network authentication protocol that works on the basis of tickets to allow nodes communicating over a non-secure network to prove their identity to one another securely. It uses a trusted third party, the Key Distribution Center (KDC).
> **Advantages:**
> 1.  **Strong Mutual Authentication:** Both the client and the server can verify each other's identity.
> 2.  **No Clear-text Passwords:** Passwords are never sent over the network; they are only used to decrypt initial tickets locally.
> 3.  **Single Sign-On (SSO):** Users authenticate once to the Kerberos server and receive a Ticket-Granting Ticket (TGT), which they use to access multiple services without re-entering passwords.
> 4.  **Limited Window of Vulnerability:** Tickets have a limited lifetime, reducing the risk of replay attacks if a ticket is intercepted.

**(g)** Describe how IPSec Actually Works (Step-by-Step).
> 1.  **Interesting Traffic Recognition:** Router identifies traffic that requires IPSec encryption based on policy.
> 2.  **IKE Phase 1:** Endpoints negotiate a secure, authenticated management tunnel (ISAKMP SA) using Diffie-Hellman.
> 3.  **IKE Phase 2:** Over the Phase 1 tunnel, endpoints negotiate the actual IPSec parameters (AH/ESP) and establish the IPSec SAs for data transfer.
> 4.  **Data Transfer:** Actual data is encrypted via ESP and transmitted.
> 5.  **Termination:** The tunnel is torn down once communication completes or times out.

**(h)** What are the primary goals of IPSec in network communication?
> 1.  **Confidentiality:** Encrypting data to prevent eavesdropping.
> 2.  **Integrity:** Ensuring IP packets are not altered in transit.
> 3.  **Authentication:** Verifying the identity of the communicating endpoints.
> 4.  **Anti-Replay:** Preventing attackers from capturing and re-transmitting valid packets.

**(i)** Differentiate between Authentication Header (AH) and Encapsulating Security Payload (ESP).
> *   **AH:** Provides integrity, authentication, and anti-replay protection. It does **not** encrypt the data (no confidentiality).
> *   **ESP:** Provides integrity, authentication, and **confidentiality** by fully encrypting the IP payload.

**(j)** Describe 3 Common TCP attacks, their attack techniques and the defense mechanism against the attacks.
> 1.  **TCP SYN Flood:** Attacker spams SYN packets but ignores SYN-ACKs, exhausting server connection queues. *Defense:* Use SYN Cookies.
> 2.  **TCP Session Hijacking:** Attacker spoofs an IP and predicts sequence numbers to inject malicious packets into an active session. *Defense:* Use IPSec/TLS for payload authentication and encryption.
> 3.  **TCP RST Spoofing:** Attacker forges an RST packet matching active session parameters, instantly severing the victim's connection. *Defense:* Implement IPSec and use randomized, unpredictable sequence numbers.

**(k)** What is a DoS attack? Name three DoS attacks.
> **DoS (Denial of Service) Attack:** A malicious attempt to disrupt the normal traffic of a targeted server, service, or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic.
> **Three Types:**
> 1. SYN Flood
> 2. Ping of Death
> 3. UDP Flood

**(l)** What is network scanning? What command would you use to determine the IP address of www.google.com?
> **Network Scanning:** A procedure used by attackers or administrators to identify active hosts, open ports, and running services on a network to discover vulnerabilities.
> **Command:** `ping www.google.com` or `nslookup www.google.com`

**(m)** What is Honeypot? Describe its types.
> **Honeypot:** A decoy system designed to attract cyberattackers to gather intelligence on their methodologies and distract them from real systems.
> **Types:**
> 1.  **Low-Interaction:** Simulates basic network services (e.g., fake SSH daemon). Low risk, but easily identified by smart attackers.
> 2.  **High-Interaction:** A full, real operating system. Yields deep intelligence on rootkits/exploits, but carries high risk if attackers weaponize it to pivot onto the real network.

**(n)** Explain the base-rate fallacy in IDS.
> Even if an IDS is highly accurate (e.g., 99%), because the sheer volume of normal background network traffic is so immense compared to the tiny percentage of actual attacks (the base rate), the false positives will generate thousands of false alarms. These false alarms completely drown out true alerts, causing "alert fatigue".

**(o)** From given values answer the following question:<br>**True Positive Rate (TPR)** = 95%<br>**False Positive Rate (FPR)** = 2%<br>**Total events** = 20,000<br>**Actual attacks** = 50 (base rate = 0.25%)<br>What is the probability of a real attack?
> *   Actual Attacks = 50. Normal Events = 19,950.
> *   True Positives (Alarms from attacks): $50 \times 0.95 = \mathbf{47.5}$
> *   False Positives (Alarms from normal traffic): $19,950 \times 0.02 = \mathbf{399}$
> *   Total Alarms: $47.5 + 399 = \mathbf{446.5}$
> *   Probability of real attack given an alarm: $\frac{47.5}{446.5} \approx 0.1064$
> **Probability:** **10.64%**

**(p)** What is the purpose of the Needham-Schroeder protocol?
> The purpose of the Needham-Schroeder protocol is to provide mutual authentication and securely establish a shared session key between two parties over an insecure network, using a trusted Key Distribution Center (KDC) while preventing replay attacks.

---

## 8. Cryptanalysis & Miscellaneous

**(a)** Explain steganography with appropriate example.
> **Steganography:** The practice of concealing a file, message, image, or video within another file, message, image, or video. While cryptography scrambles the message so it cannot be understood, steganography hides the very existence of the message.
> **Example:** Modifying the least significant bits (LSB) of the pixels in a digital image to encode a secret text message. To an observer, the image looks completely normal, but a receiver with the correct algorithm can extract the hidden text from the pixel data.

**(b)** Which encryption scheme is unconditionally secure and why?
> **One-Time Pad (OTP)** is unconditionally secure.
> **Why:** Because it uses a truly random key that is the same length as the message and is never reused. Therefore, the ciphertext contains absolutely no information about the plaintext, and a brute-force attack would yield every possible plaintext of that length with equal probability, making cryptanalysis impossible.

**(c)** Differentiate between Cryptanalysis and Brute-force attack.
> *   **Cryptanalysis:** Relies on analyzing the mathematical properties, statistical frequencies, or structural vulnerabilities of the cryptographic algorithm to deduce the plaintext or the key without checking all possibilities.
> *   **Brute-Force Attack:** Does not rely on vulnerabilities in the algorithm; instead, it simply tries every single possible key in the key space sequentially until the correct key is found that decrypts the message.

**(d)** Explain how you could reduce the amount of time required to perform a brute force attack.
> To reduce the time required for a brute-force attack, an attacker can:
> 1.  **Parallel Computing / Distributed Systems:** Distribute the key search space across thousands of compromised computers (botnets) or cloud instances.
> 2.  **Hardware Acceleration:** Use specialized hardware like GPUs or ASICs which are significantly faster at performing repetitive cryptographic calculations than standard CPUs.
> 3.  **Rainbow Tables:** For password cracking, use precomputed tables of hashes to eliminate the need for real-time calculations.
> 4.  **Dictionary Attacks:** Start the brute-force attempt using a list of common passwords or likely patterns rather than purely random permutations.

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
> Types of cryptanalysis attacks rely on the amount of information available to the attacker:
> 1.  **Ciphertext-only Attack:** The attacker only has access to a set of ciphertexts. This is the hardest attack to execute because the attacker has the least amount of information. They typically use statistical analysis (like letter frequencies) to guess the plaintext or key.
> 2.  **Known-Plaintext Attack:** The attacker has access to some ciphertext and its corresponding plaintext.
> 3.  **Chosen-Plaintext Attack:** The attacker can choose arbitrary plaintexts to be encrypted and obtain the corresponding ciphertexts. This allows them to feed specific patterns into the encryption algorithm to deduce the key structure.
> 4.  **Chosen-Ciphertext Attack:** The attacker can choose different ciphertexts to be decrypted and obtain the corresponding plaintexts.

**(i)** What is a brute force attack? Under what conditions does brute force become practical?
> **Brute Force Attack:** A systematic attempt to break a cryptographic system by trying every possible key in the key space until the correct one is found.
> **When it becomes practical:**
> *   The key space is small (e.g., a 4-digit PIN, or an old 56-bit DES key).
> *   The password used to derive the key is weak or common (susceptible to dictionary brute-forcing).
> *   The attacker has massive computational power (like a botnet or GPU cluster) to run through permutations quickly.

**(j)** An attacker intercepts encrypted messages and tries every possible key until meaningful text appears.
> *   **Attack:** Brute-force attack.
> *   **Principle Challenged:** Confidentiality.
* Identify the attack.
* Which security principle is being challenged?

**(k)** An organization uses weak passwords for encrypted archives. Attackers successfully guess passwords using automated tools.
> *   **Type of attack:** Dictionary attack (a targeted form of brute-force attack).
> *   **Prevention:** Enforce a strong password policy (requiring length, complexity, and unpredictability) and utilize a password-based key derivation function (like PBKDF2 or Argon2) with a high iteration count and salt to slow down automated guessing.
* What type of attack is this?
* How can it be prevented?
