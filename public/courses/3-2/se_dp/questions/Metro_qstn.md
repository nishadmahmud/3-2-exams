# Midterm Examination

**Total Marks:** 40  
**Time:** 2 Hours  
*[Answer all the questions. All parts of each question must be answered sequentially. Figures in the right margin indicate full marks.]*

---

### 1. Answer any FIVE (5 × 2 = 10)

**(a)** Differentiate between White box and Black box testing.  
> **White Box Testing:** Tests the internal logic, code structure, and execution paths of the software. Requires deep knowledge of the programming code.
> 
> **Black Box Testing:** Tests the software purely based on inputs and expected outputs without knowing the internal code implementation.

**(b)** If a project has a 'Hard Deadline' and 'Fixed Budget' but the technology stack is completely new, why might an Iterative model be safer than Classical Waterfall?  
> The Classical Waterfall model leaves testing to the very end. With a new technology stack, unforeseen technical hurdles are highly likely, risking complete failure right before the hard deadline.
> 
> An **Iterative model** tackles the riskiest new technology pieces in the first iterations, allowing the team to validate feasibility early. If things go wrong, they can adjust the scope or approach early rather than failing entirely at the deadline.

**(c)** Differentiate between reactive and proactive risk management strategies by providing suitable examples.  
> **Reactive Risk Management:** Waiting until a problem actually happens and then trying to fix it. *Example:* Waiting for a database to crash and then attempting data recovery.
> 
> **Proactive Risk Management:** Identifying potential risks before they occur and putting mitigation plans in place. *Example:* Setting up automated daily backups in case the database ever crashes.

**(d)** Write two advantages of Incremental Model.  
> 1. Generates working software quickly and early during the software life cycle.
> 2. Customers can respond to each functional increment, allowing requirements to be adjusted for subsequent increments.

**(e)** Define Efficiency and Interoperability in terms of requirement engineering.  
> Both are Non-Functional Requirements:
> **Efficiency:** Specifies how well the software utilizes system resources (like CPU, memory, bandwidth) to perform its functions.
> **Interoperability:** Specifies how seamlessly the software can integrate, communicate, and exchange data with other external systems.

**(f)** Explain the concept of Backlog Grooming (refinement) and analyze its role in preventing failure during Sprint Planning sessions.  
> **Backlog Grooming:** The continuous process of reviewing, prioritizing, and detailing items in the Product Backlog.
> 
> **Role in preventing failure:** It ensures the team enters Sprint Planning with clearly defined, estimated, and understood user stories. Without grooming, Sprint Planning becomes a chaotic, overly long meeting where teams struggle to understand vague requirements, leading to poor estimations and ultimately a failed sprint.

**(g)** List the skills that are required for a software project manager.  
> Leadership, Effective Communication, Problem Solving, Time and Resource Management, Risk Management, and Technical awareness.

**(h)** Define a design pattern and explain its importance in promoting code reusability and maintainability.  
> **Definition:** A general, reusable solution to a commonly occurring problem within a given context in software design.
> 
> **Importance:** It promotes reusability by providing tested, proven development paradigms. It promotes maintainability by offering a shared vocabulary for developers, making large codebases easier to understand and structurally sound.

---

### 2. Answer any FOUR (4 × 3 = 12)

**(a)** Describe the basic rules, notations, and symbols used in a Data Flow Diagram. Explain the purpose of processes, data stores, and external entities.  
> 1. **Process (Circle/Rounded Rectangle):** Transforms data inputs into outputs.
> 2. **Data Store (Open-ended Rectangle):** A repository where data is stored at rest (e.g., a database).
> 3. **External Entity (Square):** External actors (people or systems) that send data to or receive data from the system.
> 4. **Data Flow (Arrow):** The path data takes between entities, processes, and stores.
> 
> *Rule:* Data must always pass through a Process. An External Entity cannot directly write to a Data Store.

**(b)** Differentiate between Alpha Testing and Beta Testing in terms of purpose, environment, and participants. Which one is more effective for obtaining real-user feedback, and why?  
> **Alpha Testing:** Conducted internally by developers and QA testers in a controlled, simulated environment.
> **Beta Testing:** Conducted externally by actual end-users in a real-world, un-controlled environment.
> 
> **More effective:** Beta Testing is far more effective for real-user feedback because it exposes the software to actual users, unpredictable hardware configurations, and real-world network conditions that internal teams cannot simulate.

**(c)** Your project manager has directed you to prepare a software requirement specification (SRS) for the report. Explain what information should and should not be included in the SRS.  
> **Included:** Purpose, Scope, Functional Requirements (what the system must do), Non-Functional Requirements (performance, security), External Interface Requirements (API/hardware constraints).
> 
> **Excluded:** Internal design specifications, coding implementations/algorithms, and project management schedules/budgets.

**(d)** Identify the type of risks indicated by the following examples:
  * **i.** Releasing software that fails in the market.
  * **ii.** When the project is 70% finished, the client modifies the specifications.
  * **iii.** Skilled team members exiting the organization.  
> **i.** Business Risk
> **ii.** Project Risk / Requirement Risk
> **iii.** Project Risk / Resource Risk

**(e)** If you were to implement the Agile approach in your web project, what do you consider to be the major benefits and drawbacks of adopting this methodology?  
> **Benefits:** Highly adaptable to changing requirements, delivers usable software increments faster, and ensures constant customer collaboration for a better final product.
> 
> **Drawbacks:** Less predictable final timeline and budget, relies heavily on continuous customer availability, and often lacks comprehensive documentation which can make scaling the team difficult.

**(f)** Software evolution is a fundamental software activity. In SDLC, evolution for existing systems is addressed in the maintenance phase. What are the general issues that affect a software and how do we handle it?  
> **General Issues:** "Code rot" (code becoming messy and tightly coupled as updates are bolted on), outdated documentation, and loss of original developers' knowledge.
> 
> **How to handle it:** Enforce strict documentation updates during maintenance, conduct regular code refactoring, and implement robust automated regression testing to ensure old features don't break.

---

### 3. Answer any THREE (3 × 6 = 18)

**(a)** A company plans to develop a Smart Healthcare Management System that allows patients to book appointments, access medical records, and receive online consultations. Doctors can update patient records, and administrators manage scheduling and reports. After initial deployment, patients request mobile access and faster response time, while hospitals require integration with existing systems.
  * **i.** What are the main activities of the requirement engineering process?
  * **ii.** From the given scenario, identify the stakeholders, the functional and non-functional requirements.
> **i. Requirement Engineering Activities:** Inception, Elicitation, Elaboration, Negotiation, Specification, Validation, and Management.
> 
> **ii. Scenario Breakdown:**
> - **Stakeholders:** Patients, Doctors, Administrators, Hospital IT department.
> - **Functional Requirements:** Book appointments, Access medical records, Receive online consultations, Update patient records, Manage scheduling and reports.
> - **Non-Functional Requirements:** Mobile access (Usability/Portability), Faster response time (Performance), Integration with existing systems (Interoperability).

**(b)** Design a Notification System that supports multiple delivery methods: Email-Notification, SMS-Notification, and Push-Notification. Each method sends messages differently. Use the Strategy Design Pattern to enable switching between notification methods at runtime.
  * **Requirements:**
    * **i.** Define an interface NotificationStrategy with a method send(String message).
    * **ii.** Implement three concrete strategies: EmailNotification, SMSNotification, PushNotification.
    * **iii.** Create a NotificationContext class to hold and execute the chosen strategy.
    * **iv.** In the Main class, demonstrate switching between notification strategies.
> ```java
> // i. Define interface
> public interface NotificationStrategy {
>     void send(String message);
> }
> 
> // ii. Implement concrete strategies
> public class EmailNotification implements NotificationStrategy {
>     public void send(String message) { System.out.println("Email: " + message); }
> }
> public class SMSNotification implements NotificationStrategy {
>     public void send(String message) { System.out.println("SMS: " + message); }
> }
> public class PushNotification implements NotificationStrategy {
>     public void send(String message) { System.out.println("Push: " + message); }
> }
> 
> // iii. Create Context class
> public class NotificationContext {
>     private NotificationStrategy strategy;
>     
>     public void setStrategy(NotificationStrategy strategy) {
>         this.strategy = strategy;
>     }
>     
>     public void executeStrategy(String message) {
>         strategy.send(message);
>     }
> }
> 
> // iv. Main class demonstration
> public class Main {
>     public static void main(String[] args) {
>         NotificationContext context = new NotificationContext();
>         
>         context.setStrategy(new EmailNotification());
>         context.executeStrategy("Hello via Email");
>         
>         context.setStrategy(new PushNotification());
>         context.executeStrategy("Hello via Push");
>     }
> }
> ```

**(c)** Consider FoodExpress, an online food ordering and delivery system. The system allows users to browse restaurant menus, place orders, make online payments, and track delivery status in real time. Using this scenario, draw:
  * **i.** 0-Level DFD: Identify the system boundary, external entities (e.g., Customer, Restaurant, Payment Gateway), and major data flows.
  * **ii.** 1-Level DFD: Break down the core processes such as Order Management, and Payment Processing, showing interactions with data stores.
> **i. 0-Level DFD (Context Diagram):**
> ```mermaid
> graph TD
>     C1[Customer] -->|Order Details, Payment| F0((0.0 FoodExpress System))
>     F0 -->|Order Confirmation| C1
>     F0 -->|Food Order| R1[Restaurant]
>     R1 -->|Prep Status| F0
>     F0 -->|Payment Info| P1[Payment Gateway]
>     P1 -->|Payment Status| F0
> ```
> 
> **ii. 1-Level DFD:**
> ```mermaid
> graph TD
>     C2[Customer] -->|View Menu| P1_0((1.0 Browse Menu))
>     P1_0 -->|Read Menu| D1[(D1: Menu DB)]
>     
>     C2 -->|Place Order| P2_0((2.0 Process Order))
>     P2_0 -->|Save Order| D2[(D2: Orders DB)]
>     
>     P2_0 -->|Trigger Payment| P3_0((3.0 Process Payment))
>     P3_0 -->|Process| PG2[Payment Gateway]
>     P3_0 -->|Update Status| D2
>     
>     P4_0((4.0 Track Delivery)) -->|Read Status| D2
>     P4_0 -->|Tracking Info| C2
> ```

**(d)** A national space agency is developing the 'Astra-Link' telemetry module for a satellite launch. The hardware shell is being cast in 6 months, and the software must fit the fixed memory and processor constraints defined today. The internal audit board has a 'Safety-Critical Protocol': For every design requirement, the corresponding system-level test case must be signed off by the Quality Assurance (QA) team before a single line of code is written. While the agency expects the complexity of the signal processing to require multiple internal development cycles to hit performance targets, they have prohibited any experimental code from entering the final integration branch without a pre-existing, verified test-plan mapping.
  * **i.** Evaluate the scenario and determine appropriate software engineering models.
  * **ii.** Which models will be best, better, and good for the scenario?
  * **iii.** Will a hybrid approach or traditional approach be better? Justify your answer with proper explanation.
> **i. Evaluation:** The project is highly safety-critical. It has strict, unchangeable hardware constraints, prohibits experimental code, and requires 100% QA sign-off on design before any coding begins. However, the complex signal processing requires multiple cycles to hit targets.
> 
> **ii. Models:**
> - **Best:** V-Model. It perfectly aligns with the safety-critical requirement of verifying and validating every single phase (requirements mapped to system testing) before moving forward.
> - **Better:** Iterative Model. Allows the multiple cycles needed to hit performance targets, though adapting it to strict upfront sign-offs is challenging.
> - **Good:** Classical Waterfall. Handles the heavy upfront documentation requirement well but fails at allowing multiple development cycles.
> 
> **iii. Traditional vs Hybrid:** A **Traditional approach (V-Model)** is significantly better here. While a hybrid/Agile approach allows multiple cycles, the absolute prohibition on experimental code and the strict requirement for pre-verified test-plan mapping before coding fundamentally contradicts Agile's adaptive nature. Safety-critical systems with fixed hardware deadlines demand the rigid, verification-heavy structure of the V-Model.
