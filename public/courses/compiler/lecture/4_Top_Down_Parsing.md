# 4. Top-Down Parsing

## Lecture 08: Predictive Parsing Preparation

To build a Predictive Parser, the grammar must be completely unambiguous. Two major issues must be resolved before creating the parsing table:
1.  **Left Recursion** must be eliminated.
2.  **Left Factoring** must be performed.

### Eliminating Left Recursion
A grammar is left-recursive if it has a non-terminal $A$ such that there is a derivation $A \Rightarrow^+ A\alpha$ for some string $\alpha$.

**Formula to remove Left Recursion:**
If you have a production: **$A \rightarrow A\alpha \mid \beta$**
It is converted to:
**$A \rightarrow \beta A'$**
**$A' \rightarrow \alpha A' \mid \epsilon$**
*(Where $A'$ is a new production).*

**Example:**
*   Problem: $A \rightarrow Aa \mid b$
*   Solution: $A \rightarrow bA'$, $A' \rightarrow aA' \mid \epsilon$

*(Note: There is also indirect left recursion, e.g., $S \rightarrow Aa \mid b, A \rightarrow Sd \mid \epsilon$, which must also be eliminated by substitution).*

### Left Factoring
Left factoring is required when two or more productions of a non-terminal share a common prefix.
**Example:**
$S \rightarrow iEts \mid iEtSeS$
Both start with `iEts`. This is solved by extracting the common part:
$S \rightarrow iEtsS'$
$S' \rightarrow eS \mid \epsilon$

---

### Calculation of FIRST Set
1.  If $X$ is terminal, then $FIRST(X)$ is $\{X\}$.
2.  If $X \rightarrow \epsilon$ is a production, then add $\epsilon$ to $FIRST(X)$.
3.  If $X$ is a non-terminal and $X \rightarrow Y_1 Y_2 \dots Y_k$ is a production, then place $a$ in $FIRST(X)$ if for some $i$, $a$ is in $FIRST(Y_i)$ and $\epsilon$ is in all of $FIRST(Y_1) \dots FIRST(Y_{i-1})$. If $\epsilon$ is in $FIRST(Y_j)$ for all $j=1,2,3 \dots k$, then add $\epsilon$ to $FIRST(X)$.

### Calculation of FOLLOW Set
1.  Place `$` in $FOLLOW(S)$, where $S$ is the start symbol and `$` is the input right end marker.
2.  If there is a production $A \rightarrow \alpha B \beta$, then everything in $FIRST(\beta)$ except for $\epsilon$ is placed in $FOLLOW(B)$.
3.  If there is a production $A \rightarrow \alpha B$, or a production $A \rightarrow \alpha B \beta$ where $FIRST(\beta)$ contains $\epsilon$, then everything in $FOLLOW(A)$ is in $FOLLOW(B)$.

---

### Problem 5: FIRST and FOLLOW Sets
**Question:** Calculate the FIRST and FOLLOW sets for the grammar:
1. $E \rightarrow E+T \mid T$
2. $T \rightarrow T*F \mid F$
3. $F \rightarrow (E) \mid id$

**Solution:**
First, we must remove the left recursion:
*   $E \rightarrow TE'$
*   $E' \rightarrow +TE' \mid \epsilon$
*   $T \rightarrow FT'$
*   $T' \rightarrow *FT' \mid \epsilon$
*   $F \rightarrow (E) \mid id$

**FIRST and FOLLOW Sets Table:**

| Grammar Symbol | FIRST Set | FOLLOW Set |
| :--- | :--- | :--- |
| **$E$** | `{id, (}` | `{$, )}` |
| **$E'$** | `{+, ε}` | `{$, )}` |
| **$T$** | `{id, (}` | `{+, $, )}` |
| **$T'$** | `{*, ε}` | `{+, $, )}` |
| **$F$** | `{id, (}` | `{*, +, $, )}` |

---

## Lecture 09: Construction of Predictive Parsing Table

**Input:** Grammar $G$
**Output:** Parsing table $M$

**Method:**
For each production $A \rightarrow \alpha$ of the grammar, do steps 2 and 3:
2.  For each terminal $a$ in $FIRST(\alpha)$, add $A \rightarrow \alpha$ to $M[A, a]$.
3.  If $\epsilon$ is in $FIRST(\alpha)$, add $A \rightarrow \alpha$ to $M[A, b]$ for each terminal $b$ in $FOLLOW(A)$. If $\epsilon$ is in $FIRST(\alpha)$ and `$` is in $FOLLOW(A)$, add $A \rightarrow \alpha$ to `M[A, $]`.
4.  Make each undefined entry of $M$ be an `error`.

### Problem 6: Predictive Parsing Table
**Question:** Construct a predictive parsing table for the left-recursion-removed grammar from Problem 5.

**Solution:**

| Non-Terminal | `id` | `+` | `*` | `(` | `)` | `$` |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **$E$** | $E \rightarrow TE'$ | | | $E \rightarrow TE'$ | | |
| **$E'$** | | $E' \rightarrow +TE'$ | | | $E' \rightarrow \epsilon$ | $E' \rightarrow \epsilon$ |
| **$T$** | $T \rightarrow FT'$ | | | $T \rightarrow FT'$ | | |
| **$T'$** | | $T' \rightarrow \epsilon$ | $T' \rightarrow *FT'$ | | $T' \rightarrow \epsilon$ | $T' \rightarrow \epsilon$ |
| **$F$** | $F \rightarrow id$ | | | $F \rightarrow (E)$ | | |

---

## Lecture 10: Predictive Parser Implementation

### Predictive Parser Algorithm
```pascal
Set ip to point to the first symbol of w$
repeat
begin
    Let X be the top stack symbol and a the symbol pointed to by ip;
    if X is a terminal or $ then
        if X = a then
            pop X from the stack and advance ip
        else 
            ERROR();
    else /* X is a non-terminal */
        if M[X, a] = X -> Y1 Y2 Y3 ... Yk then
        begin
            pop X from the stack
            push Yk, Yk-1, ... Y1 onto the stack (with Y1 on top)
            output the production X -> Y1 Y2 ... Yk
        end
        else ERROR();
end
until X = $
```

### Trace Table for Input `id + id * id $`

| STACK | INPUT | OUTPUT |
| :--- | :--- | :--- |
| `$ E` | `id + id * id $` | |
| `$ E' T` | `id + id * id $` | $E \rightarrow TE'$ |
| `$ E' T' F` | `id + id * id $` | $T \rightarrow FT'$ |
| `$ E' T' id` | `id + id * id $` | $F \rightarrow id$ |
| `$ E' T'` | `+ id * id $` | *(pop `id`)* |
| `$ E'` | `+ id * id $` | $T' \rightarrow \epsilon$ |
| `$ E' T +` | `+ id * id $` | $E' \rightarrow +TE'$ |
| `$ E' T` | `id * id $` | *(pop `+`)* |
| `$ E' T' F` | `id * id $` | $T \rightarrow FT'$ |
| `$ E' T' id` | `id * id $` | $F \rightarrow id$ |
| `$ E' T'` | `* id $` | *(pop `id`)* |
| `$ E' T' F *` | `* id $` | $T' \rightarrow *FT'$ |
| `$ E' T' F` | `id $` | *(pop `*`)* |
| `$ E' T' id` | `id $` | $F \rightarrow id$ |
| `$ E' T'` | `$` | *(pop `id`)* |
| `$ E'` | `$` | $T' \rightarrow \epsilon$ |
| `$` | `$` | $E' \rightarrow \epsilon$ |
