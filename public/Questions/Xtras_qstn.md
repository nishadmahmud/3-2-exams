# Extra Topics Practice Bank

This document contains a comprehensive collection of practice questions covering the supplementary topics: Design Patterns, SOLID Principles, and UML.

---

<details open class="mb-8 border border-[var(--line)] rounded-xl p-6 shadow-sm bg-[var(--bg2)] group">
<summary class="text-2xl font-bold cursor-pointer border-b border-[var(--line)] pb-4 mb-4 hover:text-[var(--accent)] transition-colors list-none flex items-center gap-3">
  <svg class="w-5 h-5 group-open:rotate-90 transition-transform text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
  Topic: Design Patterns
</summary>


### 1. General Concept
**(a)** What is a Design Pattern, and what are its two main usages in software development?
> **Design Pattern:** A design pattern represents a best practice used by experienced object-oriented software developers to solve general, recurring problems faced during software development.
> 
> **Two Main Usages:**
> 1. **Common platform for developers:** Provides standard terminology (e.g., "Singleton") so developers can communicate system architecture easily.
> 2. **Best Practices:** Provides proven, highly evolved solutions to help inexperienced developers learn software design efficiently.
> 
> *Reference: Design Patterns*

**(b)** What are the three primary categories of Design Patterns in Java? Define the core focus of each category.
> 1. **Creational Patterns:** Focus on the process of object creation, making it more flexible and efficient while making the system independent of how objects are created and represented.
> 2. **Structural Patterns:** Focus on the composition of classes or objects to form larger, more complex structures. They manage relationships between objects to achieve greater flexibility and maintainability.
> 3. **Behavioral Patterns:** Focus on communication and interaction between objects and classes. They handle how objects collaborate to accomplish tasks.
> 
> *Reference: Design Patterns*

### 2. Creational Patterns Deep Dive
**(a)** Differentiate between the Factory Method and the Abstract Factory Method.
> **Factory Method:** Provides an interface for creating objects in a superclass, but leaves the responsibility of instantiating the concrete objects to its subclasses.
> 
> **Abstract Factory Method:** Provides an interface for creating entire *families* of related or dependent objects without specifying their concrete classes.
> 
> *Reference: Design Patterns*

**(b)** Explain the concept of Early Instantiation versus Lazy Instantiation in the context of the Singleton pattern.
> **Early Instantiation:** The Singleton instance is created at class load time. This is thread-safe but consumes memory immediately, even if the instance is never used.
> 
> **Lazy Instantiation:** The Singleton instance is created only when it is explicitly requested for the first time. This saves memory but requires thread synchronization mechanisms in multi-threaded environments.
> 
> *Reference: Design Patterns*

**(c)** Write the Java code for a Singleton class named `DatabaseConnection` using Lazy Instantiation. Ensure that only one instance can ever be created.
> ```java
> public class DatabaseConnection {
>     // 1. Private static member to hold the single instance
>     private static DatabaseConnection instance;
> 
>     // 2. Private constructor prevents instantiation from other classes
>     private DatabaseConnection() {
>         System.out.println("Database connection established.");
>     }
> 
>     // 3. Public static factory method to provide global access
>     public static DatabaseConnection getInstance() {
>         if (instance == null) {
>             // Lazy Instantiation: Created only when required
>             instance = new DatabaseConnection();
>         }
>         return instance;
>     }
> }
> ```
> *Reference: Design Patterns*

### 3. Structural Patterns Deep Dive
**(a)** Briefly explain the purpose of the Bridge Method and the Composite Method.
> **Bridge Method:** Designed to separate an object's abstraction from its implementation so that both can vary and evolve independently.
> 
> **Composite Method:** Used to compose objects into tree structures to represent part-whole hierarchies. It allows clients to treat individual objects and compositions of objects uniformly.
> 
> *Reference: Design Patterns*

**(b)** You are developing a system where you need to create a massive number of objects (e.g., thousands of tree objects in a forest rendering engine). Memory consumption is a major concern. Which structural design pattern should you apply and why?
> **Flyweight Method.** 
> The Flyweight pattern is applied to reduce the memory load by sharing as much data as possible among similar objects, preventing the system from crashing due to memory exhaustion when creating a vast number of objects.
> 
> *Reference: Design Patterns*

**(c)** Assume you own a burger shop selling normal burgers for $5. You want to offer an option to add Extra Cheese (+$1) and Extra Bacon (+$2). Using the Decorator Design Pattern, write the Java code to implement this system so customers can dynamically order a normal burger, a cheesy burger, or a cheesy bacon burger without you having to write a separate class for every combination.
> ```java
> // 1. Component Interface
> public interface Burger {
>     String getDescription();
>     double getCost();
> }
> 
> // 2. Concrete Component
> public class NormalBurger implements Burger {
>     public String getDescription() { return "Normal Burger"; }
>     public double getCost() { return 5.0; }
> }
> 
> // 3. Decorator Abstract Class
> public abstract class BurgerDecorator implements Burger {
>     protected Burger tempBurger;
>     public BurgerDecorator(Burger newBurger) {
>         this.tempBurger = newBurger;
>     }
>     public String getDescription() { return tempBurger.getDescription(); }
>     public double getCost() { return tempBurger.getCost(); }
> }
> 
> // 4. Concrete Decorators
> public class ExtraCheese extends BurgerDecorator {
>     public ExtraCheese(Burger newBurger) { super(newBurger); }
>     public String getDescription() { return tempBurger.getDescription() + ", Extra Cheese"; }
>     public double getCost() { return tempBurger.getCost() + 1.0; }
> }
> 
> public class ExtraBacon extends BurgerDecorator {
>     public ExtraBacon(Burger newBurger) { super(newBurger); }
>     public String getDescription() { return tempBurger.getDescription() + ", Extra Bacon"; }
>     public double getCost() { return tempBurger.getCost() + 2.0; }
> }
> ```
> *Reference: Design Patterns*

### 4. Behavioral Patterns Deep Dive
**(a)** What is the Observer pattern, and when is it typically used?
> **Observer Method:** Defines a one-to-many dependency between objects. When one object (the subject) changes its internal state, all its dependents (observers) are notified and updated automatically. It is heavily used in event-driven programming and UI state management.
> 
> *Reference: Design Patterns*

**(b)** Explain the role of the "Context" and the "Strategy Interface" in the Strategy Design Pattern.
> **Context:** A class that holds a reference to a specific strategy object and delegates a task to it. It allows for interchangeable strategies to be used dynamically at runtime.
> 
> **Strategy Interface:** An interface (or abstract class) that defines a common set of methods that all concrete strategies must implement. It acts as a contract that guarantees the Context can interact with any concrete strategy interchangeably.
> 
> *Reference: Design Patterns*

**(c)** Based on the Strategy Design Pattern, draw a UML Class Diagram showing how a `PaymentContext` would interact with a `PaymentStrategy` interface and two concrete implementations (`CardPayment` and `CryptoPayment`).
> ```mermaid
> classDiagram
>     class PaymentContext {
>         -strategy: PaymentStrategy
>         +setStrategy(PaymentStrategy)
>         +executePayment(amount)
>     }
>     
>     class PaymentStrategy {
>         <<interface>>
>         +pay(amount)
>     }
>     
>     class CardPayment {
>         +pay(amount)
>     }
>     
>     class CryptoPayment {
>         +pay(amount)
>     }
>     
>     PaymentContext o-- PaymentStrategy : "delegates to"
>     PaymentStrategy <|.. CardPayment : implements
>     PaymentStrategy <|.. CryptoPayment : implements
> ```
> *Reference: Design Patterns & UML*




</details>
<details open class="mb-8 border border-[var(--line)] rounded-xl p-6 shadow-sm bg-[var(--bg2)] group">
<summary class="text-2xl font-bold cursor-pointer border-b border-[var(--line)] pb-4 mb-4 hover:text-[var(--accent)] transition-colors list-none flex items-center gap-3">
  <svg class="w-5 h-5 group-open:rotate-90 transition-transform text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
  Topic: SOLID Principles
</summary>


### 1. Single Responsibility Principle (SRP)
**(a)** What does the Single Responsibility Principle state?
> The SRP states that a class, module, or function should have only one reason to change, meaning it should encapsulate exactly one core responsibility.
> 
> *Reference: SOLID Principles*

**(b)** You have a `TwitterRegistration` class that prints "Fill signup form", saves the user to the database, and sends a welcome notification. Why does this violate SRP, and how would you fix it?
> **Violation:** The class is handling three distinct responsibilities: UI/Input processing, Database interactions, and Notification dispatching.
> 
> **Fix:** We should break it into three distinct classes:
> 1. `TwitterAccountRegister` (handles the input)
> 2. `AccountRepository` (handles database saves)
> 3. `NotificationService` (handles welcome messages)
> A main execution service (`TwitterAccountService`) can then instantiate and coordinate these three single-responsibility classes.
> 
> *Reference: SOLID Principles*

### 2. Open-Closed Principle (OCP)
**(a)** What is the Open-Closed Principle?
> The OCP encourages software to be **open for extension** but **closed for modification**. New functionality should be added by writing new code (e.g., implementing an interface) rather than editing existing, working source code.
> 
> *Reference: SOLID Principles*

**(b)** If you have a `PaymentProcessor` class with a `processCreditCardPayment()` method, and you want to add PayPal support, what is the WRONG way to do it under OCP, and what is the CORRECT way?
> **Wrong Way (Violates OCP):** Opening the existing `PaymentProcessor` class and adding a new `processPayPalPayment()` method directly into it.
> 
> **Correct Way (Follows OCP):** Creating an abstract `PaymentProcessing` interface with a generic `processPayment()` method. Then, create separate `CreditCardPaymentProcessor` and `PayPalPaymentProcessor` classes that implement that interface.
> 
> *Reference: SOLID Principles*

### 3. Liskov Substitution Principle (LSP)
**(a)** Define the Liskov Substitution Principle.
> LSP states that objects of a superclass should be completely replaceable with objects of its subclasses without breaking the program's functionality or correctness.
> 
> *Reference: SOLID Principles*

**(b)** Consider a parent class `TransportationDevice` with the abstract method `startEngine()`. A child class `Bicycle` inherits from it. Why does this violate LSP, and how should you refactor the hierarchy?
> **Violation:** A bicycle does not have an engine, so it cannot logically implement `startEngine()`. If a program substitutes a `Bicycle` where a `TransportationDevice` is expected and calls `startEngine()`, the program will fail or throw an exception.
> 
> **Refactor:** Create two intermediate classes extending `TransportationDevice`: `DeviceWithEngine` (which has `startEngine()`) and `DeviceWithoutEngine`. `Car` should inherit from `DeviceWithEngine`, and `Bicycle` should inherit from `DeviceWithoutEngine`.
> 
> *Reference: SOLID Principles*

### 4. Interface Segregation Principle (ISP)
**(a)** What happens if the Interface Segregation Principle is violated?
> "Clients should not be forced to depend upon interfaces that they don't use." If violated, a class is forced to implement massive, monolithic interfaces containing methods it doesn't need. This results in bloated code filled with empty or exception-throwing methods.
> 
> *Reference: SOLID Principles*

**(b)** A `PaymentMethod` interface forces all its implementing classes to define `processCreditCardPayment()` and `processPayPalPayment()`. Rewrite this code in Java to adhere to ISP.
> ```java
> // Segregated Interfaces
> interface CreditCardPayment {
>     void processCreditCardPayment();
> }
> 
> interface PayPalPayment {
>     void processPayPalPayment();
> }
> 
> // Focused Implementing Class
> class CreditCardPaymentProcessor implements CreditCardPayment {
>     @Override
>     public void processCreditCardPayment() {
>         System.out.println("Processing credit card...");
>     }
> }
> ```
> *Reference: SOLID Principles*

### 5. Dependency Inversion Principle (DIP)
**(a)** Explain the core concept of the Dependency Inversion Principle.
> DIP states that high-level modules should not depend on low-level modules; both should depend on abstractions (like interfaces). Furthermore, abstractions should not depend on details; details should depend on abstractions.
> 
> *Reference: SOLID Principles*

**(b)** If a `Switch` class directly instantiates and calls methods on a `LightBulb` class, it tightly couples the two objects. How can DIP be applied so the `Switch` can operate a Fan or a TV in the future?
> Instead of injecting a concrete `LightBulb` into the `Switch`, create an interface called `Switchable` with `turnOn()` and `turnOff()` methods. Have `LightBulb`, `Fan`, and `TV` implement `Switchable`. Finally, inject the `Switchable` interface into the `Switch` constructor.
> 
> *Reference: SOLID Principles*




</details>
<details open class="mb-8 border border-[var(--line)] rounded-xl p-6 shadow-sm bg-[var(--bg2)] group">
<summary class="text-2xl font-bold cursor-pointer border-b border-[var(--line)] pb-4 mb-4 hover:text-[var(--accent)] transition-colors list-none flex items-center gap-3">
  <svg class="w-5 h-5 group-open:rotate-90 transition-transform text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
  Topic: UML (Unified Modeling Language)
</summary>


### 1. UML Basics
**(a)** Is UML a programming language? What is its primary goal?
> **Answer:** No, UML is not a programming language; it is a general-purpose pictorial visual modeling language. Its primary goal is to specify, visualize, construct, and document the components of software and non-software systems, acting as a "software blueprint" for both technical and non-technical stakeholders.
> 
> *Reference: UML*

**(b)** UML diagrams are divided into two broad categories. Name and describe them.
> 1. **Structural Diagrams:** Represent the static aspects of a system. They capture parts of the system that form the main, stable architecture (e.g., classes, objects, physical nodes).
> 2. **Behavioral Diagrams:** Represent the dynamic aspects of a system. They capture the changing, moving parts and the flow of control or data over time (e.g., states, sequences, activities).
> 
> *Reference: UML*

### 2. Behavioral Diagrams
**(a)** What are the four main purposes of a Use Case Diagram?
> 1. To gather the requirements of a system.
> 2. To get an outside view of a system.
> 3. To identify the external and internal factors (Actors) influencing the system.
> 4. To show the interaction among the requirements and the actors.
> 
> *Reference: UML*

**(b)** Differentiate between an Activity Diagram and a Sequence Diagram.
> **Activity Diagram:** Describes the flow of control within a system from one activity to another. It visually maps out sequential, concurrent, and branched flows of functions.
> 
> **Sequence Diagram:** An interaction diagram that focuses specifically on the sequence of *messages* flowing from one object to another over time to perform a specific functionality.
> 
> *Reference: UML*

### 3. Structural Diagrams
**(a)** What does a Class Diagram represent?
> A Class Diagram visually represents the static structure and relationships of classes within an object-oriented system. It outlines the system's classes, their attributes, methods, and the relationships (like inheritance or aggregation) between them.
> 
> *Reference: UML*

**(b)** Draw a simple Deployment Diagram using Mermaid to visualize a web application hosted on a single server connecting to a database. Explain what Deployment Diagrams are used for.
> **Explanation:** Deployment diagrams are used by system engineers to visualize the topology of the physical hardware components (nodes) where software artifacts are deployed and executed.
> 
> **Diagram:**
> ```mermaid
> graph LR
>     subgraph "Web Server (Node)"
>         WebApp[Web Application Component]
>     end
>     
>     subgraph "Database Server (Node)"
>         DB[(MySQL Database Component)]
>     end
>     
>     Client((Client Browser)) -- Internet --> WebApp
>     WebApp -- TCP/IP --> DB
> ```
> 
> *Reference: UML*

</details>
