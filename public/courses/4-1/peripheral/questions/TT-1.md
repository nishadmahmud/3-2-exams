# TT-1 Questions & Solutions

**1. Explain the key functions of an Input-Output Interface in computer systems.** [3]

> **Answer:**
> An **Input-Output (I/O) Interface** acts as a mediator or communication bridge between the central processing unit (CPU)/memory and external peripheral devices.
> 
> Key functions include:
> 1. **Control and Timing:** Coordinates the execution and flow of data between internal system units (CPU, system buses) and external devices.
> 2. **CPU Communication:**
>    * Accepts and decodes commands issued by the CPU (e.g., READ, WRITE, CONTROL).
>    * Transfers data across the system data bus.
>    * Provides status reporting (e.g., BUSY, READY, ERROR) and issues interrupt requests (`INTR`).
> 3. **Device Communication:** Transfers commands, data, and handshaking/status signals (e.g., $\overline{\text{STB}}$, $\text{IBF}$, $\overline{\text{OBF}}$, $\overline{\text{ACK}}$) directly to/from peripheral hardware.
> 4. **Data Buffering & Latching:** Temporarily stores data to reconcile the vast speed mismatch between high-speed CPU operations and slower electro-mechanical peripheral devices.
> 5. **Signal & Format Conversion:** Converts signal levels (e.g., voltage translation) and data formats (such as parallel-to-serial conversion) where necessary.
> 6. **Error Detection:** Detects transmission or device-level errors (parity errors, communication timeouts) and informs the CPU.

---

**2. Illustrate the architectural diagram of the Intel 8255A Input/Output Interface chip, highlighting its key components and connections.** [10]

> **Answer:**
> 
> ![Architecture of Intel 8255A](/courses/4-1/peripheral/lecture/architecture.png)
> 
> ### Key Functional Components & Connections:
> 
> 1. **Data Bus Buffer:**
>    * An 8-bit bidirectional, tri-state buffer interfacing the 8255A to the system data bus ($D_7 - D_0$).
>    * Transmits data, control words, and status information between the MPU and the 8255A.
> 
> 2. **Read/Write and Control Logic:**
>    * Manages internal operations and routes data/control words based on control bus signals:
>      * $\overline{\mathbf{CS}}$ **(Chip Select):** Enables communication with the 8255A when low (`0`).
>      * $\overline{\mathbf{RD}}$ **(Read):** Allows the MPU to read data or status from the internal ports when low (`0`).
>      * $\overline{\mathbf{WR}}$ **(Write):** Enables the MPU to write data or control words to the ports/control register when low (`0`).
>      * $\mathbf{A_1, A_0}$ **(Port Select Lines):** Decodes the target internal register/port:
>        * `00` $\rightarrow$ Port A
>        * `01` $\rightarrow$ Port B
>        * `10` $\rightarrow$ Port C
>        * `11` $\rightarrow$ Control Register
>      * $\mathbf{Reset:}$ Active-high signal that clears the control register and resets all ports (A, B, C) to input mode.
> 
> 3. **Group A and Group B Control Blocks:**
>    * Receives control words from the MPU and configures operating modes for respective ports:
>      * **Group A Control:** Governs **Port A** ($PA_7 - PA_0$) and **Port C Upper** ($PC_7 - PC_4$).
>      * **Group B Control:** Governs **Port B** ($PB_7 - PB_0$) and **Port C Lower** ($PC_3 - PC_0$).
> 
> 4. **I/O Ports:**
>    * **Port A (8-bit):** Features an 8-bit data output latch/buffer and an 8-bit data input latch.
>    * **Port B (8-bit):** Contains an 8-bit data output latch/buffer and an 8-bit data input buffer.
>    * **Port C (8-bit):** Can be split into two 4-bit ports (Upper $PC_7-PC_4$ and Lower $PC_3-PC_0$). Can be used as simple I/O or for handshaking control signals (strobe, acknowledge, interrupt request) in Mode 1 and Mode 2.

---

**3. Explain the operational modes and functionalities of the Intel 8255A chip.** [3]

> **Answer:**
> The Intel 8255A operates in two primary modes selected by bit $D_7$ of the Control Word:
> 
> ### 1. Bit Set/Reset (BSR) Mode ($D_7 = 0$)
> * Used exclusively to set or reset individual pins of **Port C** ($PC_7 - PC_0$) without altering the remaining pins.
> * Commonly used for control and handshaking line manipulation.
> 
> ### 2. I/O Modes ($D_7 = 1$)
> There are three distinct I/O operating modes:
> 
> * **Mode 0 (Basic / Simple I/O):**
>   * Ports A, B, and C (Upper/Lower) function as simple input or output ports.
>   * Outputs are latched; inputs are buffered (not latched).
>   * No handshaking signals or interrupt generation.
> 
> * **Mode 1 (Strobed / Handshake I/O):**
>   * Port A and/or Port B transfer data using dedicated handshaking control signals provided by Port C pins ($\overline{\text{STB}}$, $\text{IBF}$, $\overline{\text{OBF}}$, $\overline{\text{ACK}}$, $\text{INTR}$).
>   * Both input and output data are latched.
>   * Supports interrupt-driven data transfers via internal interrupt enable ($\text{INTE}$) flip-flops.
> 
> * **Mode 2 (Strobed Bidirectional Bus I/O):**
>   * Only **Port A** operates as an 8-bit bidirectional data bus.
>   * Uses 5 pins of Port C ($PC_7 - PC_3$) for status and handshaking signals.
>   * Port B can simultaneously operate in Mode 0 or Mode 1.

---

**4. Draw the Bit Definitions of Control Words and determine the control word configuration for the Intel 8255A chip operating in Mode 0 with Port A and Port C (Upper) set as inputs, and Port B and Port C (Lower) set as outputs.** [4]

> **Answer:**
> 
> ### Bit Definitions of I/O Control Word
> 
> ```mermaid
> graph TD
>     subgraph Control Word
>         D7[D7]
>         D6[D6]
>         D5[D5]
>         D4[D4]
>         D3[D3]
>         D2[D2]
>         D1[D1]
>         D0[D0]
>     end
> 
>     D7 --> V7(1: I/O Mode)
>     
>     D6 --> VM1{Mode Selection Group A<br/>00: Mode 0<br/>01: Mode 1<br/>1X: Mode 2}
>     D5 --> VM1
>     
>     D4 --> VPA{Port A<br/>0: Output<br/>1: Input}
>     
>     D3 --> VPCU{Port C Upper<br/>0: Output<br/>1: Input}
>     
>     D2 --> VM2{Mode Selection Group B<br/>0: Mode 0<br/>1: Mode 1}
>     
>     D1 --> VPB{Port B<br/>0: Output<br/>1: Input}
>     
>     D0 --> VPCL{Port C Lower<br/>0: Output<br/>1: Input}
> ```
> 
> ---
> 
> ### Determination of Control Word Configuration:
> 
> | Bit | Function | Specified Requirement | Assigned Value | Explanation |
> | :---: | :--- | :--- | :---: | :--- |
> | **$D_7$** | Mode Set Flag | I/O Mode | **`1`** | `1` = I/O Mode, `0` = BSR Mode |
> | **$D_6$** | Group A Mode | Mode 0 | **`0`** | `00` selects Mode 0 for Group A |
> | **$D_5$** | Group A Mode | Mode 0 | **`0`** | `00` selects Mode 0 for Group A |
> | **$D_4$** | Port A Direction | Input | **`1`** | `1` = Input, `0` = Output |
> | **$D_3$** | Port C (Upper) Direction | Input | **`1`** | `1` = Input, `0` = Output |
> | **$D_2$** | Group B Mode | Mode 0 | **`0`** | `0` = Mode 0, `1` = Mode 1 |
> | **$D_1$** | Port B Direction | Output | **`0`** | `1` = Input, `0` = Output |
> | **$D_0$** | Port C (Lower) Direction | Output | **`0`** | `1` = Input, `0` = Output |
> 
> ### Resulting Control Word Diagram:
> 
> ```mermaid
> graph TD
>     subgraph Control Word: 10011000
>         D7[D7: 1]
>         D6[D6: 0]
>         D5[D5: 0]
>         D4[D4: 1]
>         D3[D3: 1]
>         D2[D2: 0]
>         D1[D1: 0]
>         D0[D0: 0]
>     end
> 
>     D7 --> V7(1: I/O Mode)
>     
>     D6 --> VM1{00: Mode 0<br/>Group A}
>     D5 --> VM1
>     
>     D4 --> VPA{1: Port A<br/>Input}
>     
>     D3 --> VPCU{1: Port C Upper<br/>Input}
>     
>     D2 --> VM2{0: Mode 0<br/>Group B}
>     
>     D1 --> VPB{0: Port B<br/>Output}
>     
>     D0 --> VPCL{0: Port C Lower<br/>Output}
> ```
> 
> **Binary Control Word:** `10011000` (or `98H` / `0x98`)
