# Practice Exam

**Course:** CSE 605 : Software Engineering & Design Pattern

---

### Q1
Design a class diagram for a comprehensive library management system. The system includes classes for Books (with attributes like title, author, ISBN), Library Members (attributes like name, ID, borrowed books), Librarians (attributes like name, staff ID, responsibilities), and Transactions (attributes like transaction ID, due date, fines). Show the relationships and interactions between these classes, indicating functionalities such as book borrowing, returning, librarian management, and transaction handling.
> **Class Diagram: Library Management System**
> 
> ```mermaid
> classDiagram
>     class LibraryMember {
>         +String name
>         +String ID
>         +List borrowedBooks
>         +borrowBook(Book b)
>         +returnBook(Book b)
>     }
>     class Librarian {
>         +String name
>         +String staffID
>         +String responsibilities
>         +manageBooks()
>         +manageTransactions()
>     }
>     class Book {
>         +String title
>         +String author
>         +String ISBN
>         +boolean isAvailable
>         +updateStatus()
>     }
>     class Transaction {
>         +String transactionID
>         +Date issueDate
>         +Date dueDate
>         +double fines
>         +calculateFine()
>         +processTransaction()
>     }
>     
>     LibraryMember "1" -- "*" Transaction : initiates
>     Librarian "1" -- "*" Transaction : processes
>     Transaction "1" -- "1..*" Book : involves
>     Librarian "1" -- "*" Book : manages
> ```

### Q2
To determine your eligibility for a scholarship in a foreign university for higher studies, you need to meet three conditions: IELTS score > 6.5, CGPA > 3.50, and secure a TA/RA position prior to application. If any of these conditions are not fulfilled, your eligibility will be denied. Create an activity diagram illustrating the entire scenario, including fork, join, and merge conditions.
> **Activity Diagram: Scholarship Eligibility**
> 
> ```mermaid
> stateDiagram-v2
>     [*] --> SubmitApplication
>     SubmitApplication --> ForkNode
>     
>     state ForkNode <<fork>>
>     ForkNode --> CheckIELTS
>     ForkNode --> CheckCGPA
>     ForkNode --> CheckPosition
>     
>     CheckIELTS --> EvaluateIELTS
>     CheckCGPA --> EvaluateCGPA
>     CheckPosition --> EvaluatePosition
>     
>     state EvaluateIELTS <<choice>>
>     EvaluateIELTS --> JoinNode: [IELTS > 6.5]
>     EvaluateIELTS --> MergeNode: [IELTS <= 6.5]
>     
>     state EvaluateCGPA <<choice>>
>     EvaluateCGPA --> JoinNode: [CGPA > 3.50]
>     EvaluateCGPA --> MergeNode: [CGPA <= 3.50]
>     
>     state EvaluatePosition <<choice>>
>     EvaluatePosition --> JoinNode: [TA/RA Secured]
>     EvaluatePosition --> MergeNode: [No TA/RA]
>     
>     state JoinNode <<join>>
>     JoinNode --> Eligible
>     Eligible --> [*]
>     
>     state MergeNode <<choice>>
>     MergeNode --> Denied
>     Denied --> [*]
> ```

### Q3
Draw a Use Case diagram for an online library management system that has three users: Members, Librarians, and System Administrators. Members can search for books, reserve available books, and check their borrowing history. Librarians can add new books, update book information, and manage member reservations. System Administrators can manage user accounts, generate system reports, and oversee library operations. Use includes and extends relationships where appropriate.
> **Use Case Diagram**
> 
> ```mermaid
> flowchart LR
>     Member((Member))
>     Librarian((Librarian))
>     Admin((Sys Admin))
>     
>     subgraph Library Management System
>         Login(Login)
>         Search(Search Books)
>         Reserve(Reserve Book)
>         History(Check History)
>         
>         AddBook(Add Book)
>         UpdateBook(Update Book Info)
>         ManageRes(Manage Reservations)
>         
>         ManageAcc(Manage User Accounts)
>         Reports(Generate Reports)
>         Oversee(Oversee Operations)
>     end
>     
>     Member --> Search
>     Member --> Reserve
>     Member --> History
>     
>     Librarian --> AddBook
>     Librarian --> UpdateBook
>     Librarian --> ManageRes
>     
>     Admin --> ManageAcc
>     Admin --> Reports
>     Admin --> Oversee
>     
>     Reserve -. "<<extends>>" .-> Search
>     ManageAcc -. "<<includes>>" .-> Login
>     AddBook -. "<<includes>>" .-> Login
>     History -. "<<includes>>" .-> Login
> ```

### Q4
Suppose you are tasked with designing DFDs for a library management system. Create Level 0 and Level 1 DFD detailing the “Borrow Book” process, including data flows and databases.
> **Level 0 DFD (Context Diagram)**
> ```mermaid
> graph LR
>     User((Member)) -- Book Request --> Process[0.0 Library Management System]
>     Process -- Issued Book & Receipt --> User
> ```
> 
> **Level 1 DFD: Borrow Book Process**
> ```mermaid
> graph LR
>     User((Member))
>     
>     subgraph "Level 1: Borrow Book Process"
>         P1((1.0 Verify Member))
>         P2((2.0 Check Book Status))
>         P3((3.0 Issue Book))
>     end
>     
>     DB1[(D1: Members DB)]
>     DB2[(D2: Books DB)]
>     DB3[(D3: Transactions DB)]
>     
>     User -- Member ID & Book ID --> P1
>     P1 -- Query Member --> DB1
>     DB1 -- Valid Status --> P1
>     P1 -- Valid Request --> P2
>     
>     P2 -- Check Stock --> DB2
>     DB2 -- Availability --> P2
>     P2 -- Available Book --> P3
>     
>     P3 -- Update Stock --> DB2
>     P3 -- Record Transaction --> DB3
>     P3 -- Book Details --> User
> ```

### Q5
Describe an example where you will implement a Singleton design pattern. Write appropriate code.
> **Singleton Pattern Example: Database Connection Manager**
> In a web application, opening a new database connection for every single query is extremely resource-heavy and can crash the database. We use the Singleton pattern to ensure that the application only ever creates **one single instance** of the Database Connection, and shares that exact same connection globally across the entire app.
> 
> ```java
> public class DatabaseConnection {
>     // 1. Private static instance
>     private static DatabaseConnection instance;
> 
>     // 2. Private constructor prevents instantiation from other classes
>     private DatabaseConnection() {
>         System.out.println("Database Connected!");
>     }
> 
>     // 3. Public static method to get the single instance
>     public static DatabaseConnection getInstance() {
>         if (instance == null) {
>             instance = new DatabaseConnection();
>         }
>         return instance;
>     }
>     
>     public void executeQuery(String query) {
>         System.out.println("Executing: " + query);
>     }
> }
> ```

### Q6
You are developing a notification system for a web application that supports different types of notifications such as Email, SMS, and Push Notification. To simplify and centralize the object creation process, define a Notification interface and implement concrete classes for each notification type. Then, create a NotificationFactory class that can generate instances of these notifications based on user input. Write appropriate Java code.
> **Factory Pattern: Notification System**
> 
> ```java
> // 1. Interface
> interface Notification {
>     void notifyUser();
> }
> 
> // 2. Concrete Classes
> class EmailNotification implements Notification {
>     public void notifyUser() { System.out.println("Sending an Email notification..."); }
> }
> 
> class SMSNotification implements Notification {
>     public void notifyUser() { System.out.println("Sending an SMS notification..."); }
> }
> 
> class PushNotification implements Notification {
>     public void notifyUser() { System.out.println("Sending a Push notification..."); }
> }
> 
> // 3. Factory Class
> class NotificationFactory {
>     public Notification createNotification(String type) {
>         if (type == null) return null;
>         switch (type.toLowerCase()) {
>             case "email": return new EmailNotification();
>             case "sms": return new SMSNotification();
>             case "push": return new PushNotification();
>             default: throw new IllegalArgumentException("Unknown channel");
>         }
>     }
> }
> ```

### Q7
Imagine you are the owner of a digital ice-cream parlor, which allows customers to decorate their own ice-creams. Suppose your ice-parlor offers two flavors - Vanilla and Chocolate. Customers can choose any flavor. You will also allow your customers to decorate their ice-creams with some toppings like chocolate chips, cashew nuts etc with additional cost. At any time a customer can check what he/she is ordering (description of the order) and the current cost. Which design pattern would you follow to maintain the orders in your parlor? Write appropriate code.
> The **Decorator Design Pattern** is perfect here, as it allows us to dynamically attach additional toppings (responsibilities/costs) to a base ice-cream object at runtime without altering its structure.
> 
> ```java
> // Component
> interface IceCream {
>     String getDescription();
>     double getCost();
> }
> 
> // Concrete Components (Base Flavors)
> class VanillaIceCream implements IceCream {
>     public String getDescription() { return "Vanilla Ice Cream"; }
>     public double getCost() { return 5.00; }
> }
> class ChocolateIceCream implements IceCream {
>     public String getDescription() { return "Chocolate Ice Cream"; }
>     public double getCost() { return 6.00; }
> }
> 
> // Base Decorator
> abstract class ToppingDecorator implements IceCream {
>     protected IceCream tempIceCream;
>     public ToppingDecorator(IceCream newIceCream) {
>         this.tempIceCream = newIceCream;
>     }
>     public String getDescription() { return tempIceCream.getDescription(); }
>     public double getCost() { return tempIceCream.getCost(); }
> }
> 
> // Concrete Decorators (Toppings)
> class ChocoChips extends ToppingDecorator {
>     public ChocoChips(IceCream newIceCream) { super(newIceCream); }
>     public String getDescription() { return tempIceCream.getDescription() + ", Choco Chips"; }
>     public double getCost() { return tempIceCream.getCost() + 1.50; }
> }
> class CashewNuts extends ToppingDecorator {
>     public CashewNuts(IceCream newIceCream) { super(newIceCream); }
>     public String getDescription() { return tempIceCream.getDescription() + ", Cashew Nuts"; }
>     public double getCost() { return tempIceCream.getCost() + 2.00; }
> }
> 
> // Usage Example
> // IceCream myOrder = new ChocoChips(new CashewNuts(new VanillaIceCream()));
> // Output: Vanilla Ice Cream, Cashew Nuts, Choco Chips | Cost: $8.50
> ```

### Q8
Implement the Strategy Pattern by creating a PaymentStrategy interface and concrete classes CreditCardPayment, PayPalPayment, and BankTransferPayment. Also, create a PaymentProcessor class. Additionally, implement a simple ProductFactory to dynamically create different types of products.
> **Strategy & Factory Pattern Code**
> 
> ```java
> // STRATEGY PATTERN FOR PAYMENTS
> interface PaymentStrategy {
>     void pay(int amount);
> }
> class CreditCardPayment implements PaymentStrategy {
>     public void pay(int amount) { System.out.println("Paid $" + amount + " via Credit Card."); }
> }
> class PayPalPayment implements PaymentStrategy {
>     public void pay(int amount) { System.out.println("Paid $" + amount + " via PayPal."); }
> }
> class BankTransferPayment implements PaymentStrategy {
>     public void pay(int amount) { System.out.println("Paid $" + amount + " via Bank Transfer."); }
> }
> 
> class PaymentProcessor {
>     private PaymentStrategy strategy;
>     public void setPaymentStrategy(PaymentStrategy strategy) { this.strategy = strategy; }
>     public void processPayment(int amount) { strategy.pay(amount); }
> }
> 
> // FACTORY PATTERN FOR PRODUCTS
> interface Product { void display(); }
> class Laptop implements Product { public void display() { System.out.println("Laptop Created."); } }
> class Phone implements Product { public void display() { System.out.println("Phone Created."); } }
> 
> class ProductFactory {
>     public Product createProduct(String type) {
>         if(type.equalsIgnoreCase("laptop")) return new Laptop();
>         if(type.equalsIgnoreCase("phone")) return new Phone();
>         return null;
>     }
> }
> 
> // MAIN CLASS DEMONSTRATION
> public class Main {
>     public static void main(String[] args) {
>         // 1. Factory Demonstration
>         ProductFactory factory = new ProductFactory();
>         Product p = factory.createProduct("laptop");
>         p.display();
> 
>         // 2. Strategy Demonstration
>         PaymentProcessor processor = new PaymentProcessor();
>         processor.setPaymentStrategy(new PayPalPayment());
>         processor.processPayment(1200); // User chose PayPal
>         
>         processor.setPaymentStrategy(new CreditCardPayment());
>         processor.processPayment(1200); // User switched to Credit Card
>     }
> }
> ```

### Q9
Implement the GameSettings class using Singleton Pattern in three different ways: (a) Early Initialization, (b) Lazy Initialization, and (c) Double-Check Locking. Explain preferences.
> **(a) Early Initialization:** Instance is created at class loading.
> ```java
> public class GameSettingsEarly {
>     private static final GameSettingsEarly instance = new GameSettingsEarly();
>     private GameSettingsEarly() {}
>     public static GameSettingsEarly getInstance() { return instance; }
> }
> ```
> *Preference:* Preferred when the object is lightweight and is guaranteed to be used. It is inherently thread-safe without synchronization overhead.
> 
> **(b) Lazy Initialization:** Instance is created only when first requested.
> ```java
> public class GameSettingsLazy {
>     private static GameSettingsLazy instance;
>     private GameSettingsLazy() {}
>     public static GameSettingsLazy getInstance() {
>         if (instance == null) { instance = new GameSettingsLazy(); }
>         return instance;
>     }
> }
> ```
> *Preference:* Preferred in single-threaded environments when creating the object is resource-intensive and might not be needed immediately. Not safe for multi-threading.
> 
> **(c) Double-Check Locking (Thread Safe):** Safe lazy initialization.
> ```java
> public class GameSettingsDCL {
>     private static volatile GameSettingsDCL instance;
>     private GameSettingsDCL() {}
>     public static GameSettingsDCL getInstance() {
>         if (instance == null) { // First check
>             synchronized (GameSettingsDCL.class) {
>                 if (instance == null) { // Second check
>                     instance = new GameSettingsDCL();
>                 }
>             }
>         }
>         return instance;
>     }
> }
> ```
> *Preference:* Highly preferred in multi-threaded environments where performance is critical. It avoids the heavy overhead of synchronizing the entire method every time it's called.

### Q10
Implement a Command Pattern where each device has its own command classes. Create an Invoker class that can execute and undo commands.
> **Command Pattern Code**
> 
> ```java
> // 1. Command Interface
> interface Command {
>     void execute();
>     void undo();
> }
> 
> // 2. Receiver Classes (Devices)
> class Light {
>     public void turnOn() { System.out.println("Light is ON"); }
>     public void turnOff() { System.out.println("Light is OFF"); }
> }
> class AirConditioner {
>     public void start() { System.out.println("AC Started"); }
>     public void stop() { System.out.println("AC Stopped"); }
> }
> 
> // 3. Concrete Commands
> class LightOnCommand implements Command {
>     private Light light;
>     public LightOnCommand(Light light) { this.light = light; }
>     public void execute() { light.turnOn(); }
>     public void undo() { light.turnOff(); }
> }
> class ACStartCommand implements Command {
>     private AirConditioner ac;
>     public ACStartCommand(AirConditioner ac) { this.ac = ac; }
>     public void execute() { ac.start(); }
>     public void undo() { ac.stop(); }
> }
> 
> // 4. Invoker (Remote Control)
> class RemoteControl {
>     private Command lastCommand;
>     
>     public void pressButton(Command command) {
>         command.execute();
>         lastCommand = command; // Save for undo
>     }
>     public void pressUndo() {
>         if(lastCommand != null) lastCommand.undo();
>     }
> }
> 
> // 5. Demonstration
> public class SmartHome {
>     public static void main(String[] args) {
>         RemoteControl remote = new RemoteControl();
>         
>         Light livingRoomLight = new Light();
>         Command turnOnLight = new LightOnCommand(livingRoomLight);
>         
>         remote.pressButton(turnOnLight); // Output: Light is ON
>         remote.pressUndo();              // Output: Light is OFF
>     }
> }
> ```
