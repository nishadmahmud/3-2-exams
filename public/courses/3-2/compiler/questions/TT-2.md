# TT-2

**1. Consider the context free grammar.** [3x2]<br>
$E \rightarrow E+T \mid T$<br>
$T \rightarrow T*F \mid F$<br>
$F \rightarrow (E) \mid id$<br>
**Eliminate the left recursion.**

> **Answer:**
> *   $E \rightarrow TE'$
> *   $E' \rightarrow +TE' \mid \epsilon$
> *   $T \rightarrow FT'$
> *   $T' \rightarrow *FT' \mid \epsilon$
> *   $F \rightarrow (E) \mid id$

**2. Consider the following grammar G:** [3x3]<br>
(i) $S \rightarrow aAS$<br>
(ii) $S \rightarrow a$<br>
(iii) $A \rightarrow SbA$<br>
(iv) $A \rightarrow SS$<br>
(v) $A \rightarrow ba$<br>

**For input string "aabbaa" find i) Left most derivation ii) Right most derivation iii) Derivation tree.**

> **Answer:**
> **i) Leftmost Derivation:**
> *   $S \Rightarrow \textbf{aAS}$
> *   $\Rightarrow a\textbf{SbA}S$
> *   $\Rightarrow aa\textbf{bA}S$
> *   $\Rightarrow aab\textbf{ba}S$
> *   $\Rightarrow aabba\textbf{a}$
> 
> **ii) Rightmost Derivation:**
> *   $S \Rightarrow aA\textbf{S}$
> *   $\Rightarrow a\textbf{A}a$
> *   $\Rightarrow a\textbf{SbA}a$
> *   $\Rightarrow aSb\textbf{ba}a$
> *   $\Rightarrow a\textbf{a}bbaa$
> 
> **iii) Derivation Tree:**
> ```mermaid
> flowchart TD
>     S1[S] --> a1[a]
>     S1 --> A1[A]
>     S1 --> S2[S]
>     
>     A1 --> S3[S]
>     A1 --> b1[b]
>     A1 --> A2[A]
>     
>     S3 --> a2[a]
>     
>     A2 --> b2[b]
>     A2 --> a3[a]
>     
>     S2 --> a4[a]
> ```
