# Class Test - 2 (TT-2)

**Course:** CSE 605 :: Software Engineering and Design Pattern  
**Time:** 30 Minutes  
**Total Marks:** 20  
*Figures in the right margin indicate full marks.*

---

### 1
Draw a sample figure of the Agile model. **(2)**
> **Agile Approach: Iterations & Increments**
> 
> ```mermaid
> graph LR
>     Code["fa:fa-laptop-code Code / Dev"]
>     Iter["fa:fa-file-lines Iterations"]
>     Inc["fa:fa-bug Increments"]
>     
>     Cart1["fa:fa-cart-shopping Release 1"]
>     Cart2["fa:fa-cart-shopping Release 2"]
>     Cart3["fa:fa-gift Final Release"]
> 
>     Code <-->|Continuous| Iter
>     Code -->|Build| Inc
>     
>     Inc --> Cart1
>     Inc --> Cart2
>     Inc --> Cart3
>     
>     Cart1 -->|Feedback| Iter
>     Cart2 -->|Feedback| Iter
>     Cart3 -->|Feedback| Iter
> ```

### 2
Discuss the pillars of SCRUM. **(3)**
> SCRUM is founded on three empirical pillars:
> 
> 1. **Transparency:** All aspects of the process that affect the outcome must be visible to those managing the work. This means having a common standard or definition of "Done" so everyone shares the same understanding of the project's state.
> 2. **Inspection:** Scrum users must frequently inspect the Scrum artifacts and progress toward a Sprint Goal to detect undesirable variances. Inspections shouldn't get in the way of work.
> 3. **Adaptation:** If an inspector determines that one or more aspects of a process deviate outside acceptable limits, the process or the material being processed must be adjusted as soon as possible to minimize further deviation.

### 3
Suppose ABC Bank hired you to develop an android app so that their customers can take the online banking services offered by the bank. What are the possible non-functional requirements? **(2)**
> For an online banking Android app, crucial Non-Functional Requirements (NFRs) include:
> 
> - **Security:** The app must enforce end-to-end encryption, multi-factor authentication (MFA), and secure session management to protect sensitive financial data.
> - **Performance & Scalability:** The app must load within 2-3 seconds and handle thousands of concurrent user transactions (especially during peak times like salary days) without crashing.
> - **Reliability & Availability:** The system should have 99.99% uptime so customers can access their funds 24/7.
> - **Usability:** The interface must be intuitive, accessible, and responsive for users of all technical skill levels.

### 4
Define Efficiency and Interoperability **(2)**
> - **Efficiency:** The amount of computing resources (CPU, memory, bandwidth) and code required by a program to perform its specific functions optimally.
> - **Interoperability:** The effort and ability required to couple or integrate one software system with another independent system (e.g., an app interacting with a third-party payment gateway).

### 5
What do you understand by the term "Estimation management"? **(2)**
> **Estimation Management** is the systematic process of predicting the most realistic amount of effort, resources, budget, and time required to complete a software project or a specific task. It involves techniques (like COCOMO, Function Point Analysis, or Planning Poker in Agile) to set realistic expectations and schedules for stakeholders and development teams.

### 6
Identify the type of risks indicated by the following examples: **(3)**
i. Experienced team members exiting the organization.
ii. When the project is approximately 80% completed, the client changes the specifications.
iii. Developing a product that lacks market demand or becomes obsolete over time.
> **Answers:**
> i. **Personnel Risk / Staff Turnover** (A type of Project Risk)
> ii. **Scope Creep / Requirements Volatility** (A type of Project/Product Risk)
> iii. **Business Risk / Market Risk**

### 7
What are the major differences between Software Testing and Quality Assurance? **(2)**
> | Feature | Quality Assurance (QA) | Software Testing (QC) |
> | :--- | :--- | :--- |
> | **Focus** | Process-oriented. Focuses on preventing defects. | Product-oriented. Focuses on identifying existing defects. |
> | **Nature** | Proactive strategy. | Reactive strategy. |
> | **Scope** | Encompasses the entire software development life cycle (SDLC). | A specific phase within the SDLC (typically after coding). |
> | **Goal** | To improve development and test processes so that defects do not arise. | To verify that the software works as expected and find bugs. |

### 8
Suppose you are tasked with designing DFDs for a library management system. Create a Level 1 DFD detailing the "Borrow Book" process, including data flows and databases **(4)**
> **Level 0 DFD (Context Diagram)**
> ```mermaid
> graph LR
>     User((Student / Member)) -- Book Request --> Process[0.0 Library System]
>     Process -- Issued Book & Receipt --> User
> ```
> 
> **Level 1 DFD: Borrow Book Process**
> 
> ```mermaid
> graph LR
>     User((Student / Member))
>     
>     subgraph "Level 1: Borrow Book Process"
>         Process((1.0 Borrow Book))
>     end
>     
>     DB1[(D1: Members DB)]
>     DB2[(D2: Books DB)]
>     
>     User -- 1. Book Request (Book ID, Member ID) --> Process
>     Process -- 2. Check Member Status --> DB1
>     DB1 -- 3. Member Validity & Limit --> Process
>     Process -- 4. Check Book Availability --> DB2
>     DB2 -- 5. Book Status --> Process
>     Process -- 6. Update Stock & Due Date --> DB2
>     Process -- 7. Issue Receipt / Confirmation --> User
> ```
