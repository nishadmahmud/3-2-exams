# Online Exam

**Course:** Software Engineering & Design Patterns  
**Format:** Online Assessment  
*Figures in the right margin indicate full marks.*

---

## PART-A
*(Answer all questions)*

### 1(a)
Suppose, you have developed a software product. Now, you have to test the product for verification. What type of testing is necessary for the verification of the software product? Describe in details of these testing. **(06)**
> **Testing for Verification**
> Verification is the process of evaluating software to determine whether the products of a given development phase satisfy the conditions imposed at the start of that phase ("Are we building the product right?"). 
> 
> The necessary testing types include:
> 
> 1. **Static Testing (Reviews, Walkthroughs, Inspections):** Examining the code, requirements, and design documents manually without executing the program to find defects early.
> 2. **Unit Testing:** Testing individual components or modules of the software in isolation to verify that the internal logic functions correctly. This is usually done by developers.
> 3. **Integration Testing:** Combining individual modules and testing them as a group to expose faults in the interaction and interfaces between integrated components.
> 4. **System Testing:** Testing the complete, integrated system as a whole to verify that it meets the specified requirements.

### 1(b)
What is the main goal of user testing? Distinguish between alpha and beta testing. **(03)**
> **Main Goal of User Testing:**
> To evaluate the software by testing it with representative users to ensure it is intuitive, easy to use, and effectively fulfills the users' actual needs and expectations before final release.
> 
> **Alpha vs. Beta Testing:**
> - **Alpha Testing:** Conducted internally by developers or an internal QA team within a controlled, simulated environment (at the developer's site) before the software is released to external users.
> - **Beta Testing:** Conducted by a limited number of real, external users in a real-world environment (at the client's site) to gather feedback, find edge-case bugs, and assess market readiness before the official launch.

### 1(c)
Consider the following statement-"an entity is stored across multiple tables. When a user clicks the delete button, the entity should be removed from the database." Briefly describe how you would test the delete functionality using Black-box testing and white box testing. **(06)**
> **Black-Box Testing:**
> Focuses entirely on the inputs and outputs without knowing the internal database structure. 
> - **Test Steps:** Log into the application, navigate to the entity's page, click the "Delete" button, and confirm the deletion dialog. 
> - **Verification:** Search for the entity again in the UI to ensure it no longer appears in lists or search results. Try to access the entity via a direct URL to ensure a "404 Not Found" is returned.
> 
> **White-Box Testing:**
> Focuses on the internal logic and database architecture.
> - **Test Steps:** Trigger the delete function from the application. 
> - **Verification:** Connect directly to the database and write SQL `SELECT` queries targeting all the specific tables where the entity's data was spread out. Verify that the rows have been completely removed, checking that database triggers, cascading deletes, and foreign key constraints worked correctly without leaving behind any orphaned records.

---

## PART-B
*(Answer all questions)*

### 2(a)
Show a class diagram for a library management system. **(06)**
> **Library Management System Class Diagram**
> 
> ```mermaid
> classDiagram
>     class Library {
>         +String name
>         +String address
>         +addBook()
>         +registerMember()
>     }
>     class Book {
>         +String title
>         +String author
>         +String ISBN
>         +boolean isAvailable
>     }
>     class Member {
>         +String memberId
>         +String name
>         +int maxBooksAllowed
>         +borrowBook()
>         +returnBook()
>     }
>     class Librarian {
>         +String employeeId
>         +String shift
>         +issueBook()
>         +trackOverdueBooks()
>     }
>     
>     Library "1" *-- "*" Book : houses
>     Library "1" *-- "*" Member : registers
>     Librarian "1" -- "*" Book : manages
>     Member "1" -- "*" Book : borrows
> ```

### 2(b)
Your company developed a software product for a shoe factory. Your manager has given the design and code of that software to you. Now, you are told to develop a software product for a garment in the optimum time. Therefore, show the development process of the software and briefly describe each step. **(05)**
> Since the goal is optimum time and you already have similar source code, the best approach is **Software Reuse** or **Component-Based Software Engineering (CBSE)**. 
> 
> **Development Process:**
> 1. **Requirements Gathering & Analysis:** Understand the specific requirements of the garment factory and map them against the shoe factory's requirements to find commonalities (e.g., inventory tracking, payroll, shipping).
> 2. **Component Analysis & Selection:** Analyze the shoe factory's code and identify which modules can be directly reused or slightly modified (e.g., the billing module might be identical).
> 3. **Component Modification:** Adapt the selected shoe factory components to fit the specific terminology and workflow of the garment factory.
> 4. **New Component Development:** Write fresh code exclusively for features unique to the garment factory that the shoe factory did not have.
> 5. **Integration and Testing:** Assemble the reused components and the newly developed components into a single system, rigorously testing their integration to ensure seamless data flow.

### 2(c)
What is the purpose of activity diagram? **(02)**
> The purpose of an activity diagram is to visually represent the dynamic workflow or sequential flow of control within a system. It is used to model the step-by-step processes, decision points, and parallel activities of business workflows or operational behaviors in software.

### 2(d)
What is Use Case in UML? **(02)**
> A **Use Case** in UML is a methodology used in system analysis to identify, clarify, and organize system requirements. It describes a specific interaction between an external actor (a user or another system) and the system itself to achieve a distinct, observable goal, outlining *what* the system should do without detailing *how* it does it.
