# TT-2 Questions & Solutions

**1. What is Handshaking? Draw the diagram of Handshaking.** [2]

> **Answer:**
> 
> ### Definition of Handshaking:
> **Handshaking** is an asynchronous data transfer protocol used between two independent, non-synchronized systems (e.g., a Microprocessor and a Peripheral Device). Since the sender and receiver do not share a common clock signal, handshaking uses dedicated control signals (such as Strobe, Buffer Full, and Acknowledge) to establish mutual synchronization and ensure reliable data exchange without data loss.
> 
> ### Types of Handshaking:
> 1. **Source-Initiated Handshaking:** The data transfer is initiated by the transmitting/sending unit.
> 2. **Destination-Initiated Handshaking:** The data transfer is initiated by the receiving unit.
> 
> ---
> 
> ### Handshaking Concept & Sequence:
> 
> ```mermaid
> sequenceDiagram
>     participant Sender as Sender (Transmitter)
>     participant Receiver as Receiver (Device / MPU)
>     
>     Sender->>Receiver: 1. Places Data on Data Bus
>     Sender->>Receiver: 2. Asserts STB / Data Valid Signal
>     Note over Receiver: Latches data into input register
>     Receiver->>Sender: 3. Asserts ACK (Acknowledge) / IBF (Buffer Full)
>     Sender->>Receiver: 4. Deactivates STB
>     Receiver->>Sender: 5. Deactivates ACK (Ready for next data)
> ```
> 
> ---
> 
> ### Input & Output Handshaking Block Diagrams:
> 
> #### 1. Input Handshaking Operation
> ```mermaid
> graph LR
>     MPU[MPU]
>     PID[Intel 8255 PID]
>     INPUT[Input Device]
>     
>     %% MPU to PID
>     MPU <-->|Data Bus| PID
>     MPU -->|RD| PID
>     PID -->|INTR| MPU
>     
>     %% PID to Input
>     INPUT -->|Data lines| PID
>     INPUT -->|STB| PID
>     PID -->|IBF| INPUT
>     
>     %% Status
>     PID -->|Pin for Status check| Status(( ))
>     style Status fill:transparent,stroke:transparent,color:transparent;
> ```
> 
> #### 2. Output Handshaking Operation
> ```mermaid
> graph LR
>     MPU[MPU]
>     PID[Intel 8255 PID]
>     OUTPUT[Input Device]
>     
>     %% MPU to PID
>     MPU <-->|Data Bus| PID
>     MPU -->|WR'| PID
>     PID -->|INTR| MPU
>     
>     %% PID to Output
>     PID -->|Data lines| OUTPUT
>     PID -->|OBF| OUTPUT
>     OUTPUT -->|ACK| PID
>     
>     %% Status
>     PID -->|Pin for Status check| Status(( ))
>     style Status fill:transparent,stroke:transparent,color:transparent;
> ```

---

**2. Define Priority Interrupt Controller.** [2]

---

**3. Draw the Internal Block Diagram of Priority Interrupt Controller 8259A.** [6]

---

**4. Draw the Internal Block Diagram of DMA controller 8237 and describe the pins and signals.** [10]
