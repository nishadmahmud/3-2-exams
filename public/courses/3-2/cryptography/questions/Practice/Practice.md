# PRACTICE SAMPLE QUESTIONS

## Part A

**1.** Define **system integrity** in computer security. Explain how integrity differs from confidentiality with an example.
> **System Integrity:** The assurance that data and systems remain accurate, complete, and uncorrupted, meaning they haven't been modified by an unauthorized party.
> **Difference from Confidentiality:** Confidentiality prevents unauthorized *viewing* of data, while integrity prevents unauthorized *modification* of data.
> *Example:* In a medical system, confidentiality ensures a patient's health records cannot be read by strangers. Integrity ensures that the recorded dosage of medication cannot be secretly altered from 10mg to 100mg.

**2.** Explain the **CIA Triad** with a real-world banking system example showing how each component is protected.
> The CIA Triad consists of Confidentiality, Integrity, and Availability.
> *   **Confidentiality:** Ensuring only the account owner can view their balance. *Protection:* The bank uses SSL/TLS encryption for the online portal and requires a password and 2FA.
> *   **Integrity:** Ensuring the account balance is not arbitrarily changed (e.g., adding extra zeros). *Protection:* The bank uses database transaction logs, cryptographic checksums, and strict RBAC so only authorized tellers or the core system can update ledgers.
> *   **Availability:** Ensuring customers can access their funds and the online banking system 24/7. *Protection:* The bank uses redundant servers, failover data centers, and DDoS protection to keep the app online.

**3.** Describe different types of cryptanalysis attacks. Briefly explain ciphertext-only and chosen-plaintext attacks.
> Types of cryptanalysis attacks rely on the amount of information available to the attacker:
> 1.  **Ciphertext-only Attack:** The attacker only has access to a set of ciphertexts. This is the hardest attack to execute because the attacker has the least amount of information. They typically use statistical analysis (like letter frequencies) to guess the plaintext or key.
> 2.  **Known-Plaintext Attack:** The attacker has access to some ciphertext and its corresponding plaintext.
> 3.  **Chosen-Plaintext Attack:** The attacker can choose arbitrary plaintexts to be encrypted and obtain the corresponding ciphertexts. This allows them to feed specific patterns into the encryption algorithm to deduce the key structure.
> 4.  **Chosen-Ciphertext Attack:** The attacker can choose different ciphertexts to be decrypted and obtain the corresponding plaintexts.

**4.** What is a brute force attack? Under what conditions does brute force become practical?
> **Brute Force Attack:** A systematic attempt to break a cryptographic system by trying every possible key in the key space until the correct one is found.
> **When it becomes practical:**
> *   The key space is small (e.g., a 4-digit PIN, or an old 56-bit DES key).
> *   The password used to derive the key is weak or common (susceptible to dictionary brute-forcing).
> *   The attacker has massive computational power (like a botnet or GPU cluster) to run through permutations quickly.

**5.** Explain the concept of a block cipher. Discuss different types of block cipher modes of operation (**ECB, CBC, CFB, OFB**). Mention one advantage and one disadvantage of any one mode.
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

**6.** What is the **PKCS#5** padding method? Why is padding necessary in block cipher encryption?
> **PKCS#5 Padding Method:** A technique to pad plaintext so its length is a multiple of the block size (specifically for 8-byte blocks). The value of each added byte is the total number of bytes added. (e.g., if 3 bytes are needed, the padding is `0x03, 0x03, 0x03`).
> **Why padding is necessary:** Block ciphers require inputs to be an exact multiple of the block length (like 64 or 128 bits). If a message doesn't perfectly align with these boundaries, padding is added to complete the final block.

**7.** Explain how the **Vigenère cipher** improves security over the Caesar cipher.
> While the Caesar cipher is a monoalphabetic substitution (every 'A' maps to the exact same ciphertext letter depending on a single shift), the **Vigenère cipher** is a polyalphabetic substitution. It uses a keyword to apply a different Caesar shift for each letter of the plaintext. This flattens the frequency distribution of the ciphertext characters, making standard frequency analysis significantly harder to apply.

**8.** Describe the **Playfair cipher** encryption technique. Why is it considered stronger than simple substitution ciphers?
> **Technique:** The Playfair cipher uses a 5x5 matrix filled with a keyword (omitting duplicate letters, and combining I/J) and the remaining letters of the alphabet. The plaintext is split into digraphs (pairs of letters).
> Encryption rules:
> 1. If both letters are in the same row, replace them with the letters immediately to their right.
> 2. If both letters are in the same column, replace them with the letters immediately below them.
> 3. If they form a rectangle, replace them with the letters on the same row but at the opposite corners.
> 
> **Why it's stronger:** It encrypts pairs of letters (digraphs) instead of single letters. This increases the total possible "characters" from 26 to $26 \times 26 = 676$, drastically flattening single-letter frequency distributions and making it highly resistant to simple frequency analysis.

**9.** An attacker intercepts encrypted messages and tries every possible key until meaningful text appears.
* Identify the attack.
* Which security principle is being challenged?
> *   **Attack:** Brute-force attack.
> *   **Principle Challenged:** Confidentiality.

**10.** A hospital system was hacked and patient data was modified without authorization.
* Which component of the CIA triad was violated?
* Suggest two preventive measures.
> *   **Violated component:** Integrity.
> *   **Two preventive measures:**
>     1. Implement strict Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA).
>     2. Use cryptographic hashes and digital signatures for data records to detect any tampering.

**11.** An organization uses weak passwords for encrypted archives. Attackers successfully guess passwords using automated tools.
* What type of attack is this?
* How can it be prevented?
> *   **Type of attack:** Dictionary attack (a targeted form of brute-force attack).
> *   **Prevention:** Enforce a strong password policy (requiring length, complexity, and unpredictability) and utilize a password-based key derivation function (like PBKDF2 or Argon2) with a high iteration count and salt to slow down automated guessing.

---

## Part B

**1.** Encrypt the plaintext **"SECURITY"** using the Vigenère Cipher with key **"KEY"**. Show full steps.
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

**2.** Encrypt the plaintext **"HIDE MONEY"** using the Playfair Cipher with the key **"MONARCHY"**. Construct the 5×5 matrix and show steps.
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

**3.** A block cipher uses **8-byte** blocks. The plaintext length is **22 bytes**.
* Apply PKCS5 padding.
* Show the final padded length and padding bytes added.
> *   **Apply PKCS5 padding:**
>     Since the block size is 8 bytes, the next multiple of 8 after 22 is 24.
>     Padding required = $24 - 22 = 2$ bytes.
>     The padding byte value is the number of bytes added, so two bytes of `0x02` are appended.
> *   **Final padded length:** $24$ bytes.
> *   **Padding bytes added:** `0x02, 0x02`.

---

## Question

**(1)** Let us assume that GoodBoy wants to send a message **M = 47** to you using the ElGamal cryptosystem. You have chosen a prime number **p = 131** and a primitive root **g = 29** in **$Z_p$**. You also selected a random number **x = 111** as your secret key. GoodBoy picked a random number **k = 37**.

**(a)** Find your public key triple which GoodBoy can use to encrypt the message.
> Public key is $(p, g, y)$.
> $y \equiv g^x \pmod p \equiv 29^{111} \pmod{131} \equiv 67$.
> The public key triple is **(131, 29, 67)**.

**(b)** Find the encrypted pair **(a,b)** of the message generated by GoodBoy.
> The encrypted pair is $(a, b)$.
> $a \equiv g^k \pmod p \equiv 29^{37} \pmod{131} \equiv \mathbf{127}$.
> $K \equiv y^k \pmod p \equiv 67^{37} \pmod{131} \equiv 106$.
> $b \equiv K \cdot M \pmod p \equiv 106 \cdot 47 \pmod{131} \equiv 4982 \pmod{131} \equiv \mathbf{4}$.
> The encrypted pair is **(127, 4)**.

**(c)** Write down the equation for the decryption step you took and prove its correctness.
> **Decryption step:** $M \equiv b \cdot (a^x)^{-1} \pmod p$
> 
> **Proof of correctness:**
> $b \cdot (a^x)^{-1} \equiv (K \cdot M) \cdot (a^x)^{-1} \pmod p$
> We know $K \equiv y^k \equiv (g^x)^k \equiv g^{xk} \pmod p$
> And $a \equiv g^k \pmod p$, so $a^x \equiv (g^k)^x \equiv g^{kx} \equiv g^{xk} \equiv K \pmod p$
> Therefore, $b \cdot (a^x)^{-1} \equiv (K \cdot M) \cdot K^{-1} \equiv M \cdot (K \cdot K^{-1}) \equiv M \pmod p$.
> Thus, the decryption correctly recovers $M$.
