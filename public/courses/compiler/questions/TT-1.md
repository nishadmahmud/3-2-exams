# TT-1

**1. What do you mean by Token, Symbol Table? Write the functions of lexical analyzer.** [2+3]

> **Answer:**
> *   **Token:** A lexical token is a sequence of characters that can be treated as a unit in the grammar of the programming language. Examples include identifiers, numbers, keywords, and operators.
> *   **Symbol Table:** A data structure used by the compiler to keep track of semantics of variables. It stores information about variables, functions, data types, scope, etc., to facilitate the compilation phases.
> *   **Functions of Lexical Analyzer:**
>     1. Converts the high-level input source program into a sequence of tokens.
>     2. Strips out white spaces and comments from the source program.
>     3. Sends the sequence of tokens to the parser for syntax analysis.
>     4. Correlates error messages with the source program.

**2. Convert the NFA to DFA where $M=(\{q_1,q_2,q_3,q_4\},\{0,1\},\delta,q_1,\{q_4\})$ and $\delta$ is given below:** [5]

| State | 0 | 1 |
| :---: | :---: | :---: |
| $\rightarrow q_1$ | $\{q_1, q_2\}$ | $\{q_1\}$ |
| $q_2$ | $\{q_3\}$ | $\{q_2\}$ |
| $q_3$ | $\{q_4\}$ | $\{q_4\}$ |
| $*q_4$ | $\emptyset$ | $\{q_3\}$ |

> **Answer:**
> When converting an NFA to a DFA, we map combinations of NFA states to single DFA states.
> 
> **Derived DFA Transition Table:**
> 
> | DFA State | Input `0` | Input `1` |
> | :---: | :---: | :---: |
> | $[q_1]$ | $[q_1, q_2]$ | $[q_1]$ |
> | $[q_1, q_2]$ | $[q_1, q_2, q_3]$ | $[q_1, q_2]$ |
> | $[q_1, q_2, q_3]$ | $[q_1, q_2, q_3, q_4]$ | $[q_1, q_2, q_4]$ |
> | $*[q_1, q_2, q_3, q_4]$ | $[q_1, q_2, q_3, q_4]$ | $[q_1, q_2, q_3, q_4]$ |
> | $*[q_1, q_2, q_4]$ | $[q_1, q_2, q_3]$ | $[q_1, q_2, q_3]$ |

**3. Graphically depict a language-processing system.** [5]

> **Answer:**
> ```mermaid
> flowchart TD
>     SP[Source Program] --> Preprocessor
>     
>     Preprocessor --> |Modified Source Program| Compiler
>     
>     Compiler --> |Target Assembly Program| Assembler
>     
>     Assembler --> |Relocatable Machine Code| LinkerLoader[Linker / Loader]
>     
>     LinkerLoader --> |Target Machine Code| Final[ ]
>     
>     style Final height:0px, width:0px, opacity:0
> ```
