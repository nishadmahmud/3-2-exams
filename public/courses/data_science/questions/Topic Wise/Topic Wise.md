# Topic Wise Questions

Here are all the questions from previous exams and term tests, sorted by topic. Duplicate questions have been merged where appropriate.

## 1. Introduction to Data Science & EDA
a) What is Data Science? How is Data Science different from Big Data and Data Analytics? **(2022 A Final, 2023)**

> **Answer:**
> **Data Science** is an interdisciplinary field that uses scientific methods, algorithms, statistics, and programming to extract meaningful knowledge and insights from structured and unstructured data. It combines elements of mathematics, computer science, and domain expertise to analyze data and make informed decisions and predictions.
> 
> | Aspect | Data Science | Big Data | Data Analytics |
> | :--- | :--- | :--- | :--- |
> | **Focus** | Extracting insights & building models | Managing & storing massive datasets | Analyzing existing data for decisions |
> | **Scope** | End-to-end: collection to prediction | Infrastructure & storage | Reporting & dashboards |
> | **Tools** | Python, R, ML algorithms | Hadoop, Spark, NoSQL | SQL, Excel, Tableau |

b) What is Exploratory Data Analysis (EDA)? Briefly discuss about the foremost Goals of EDA. **(2022 A Final, 2023)**

> **Answer:**
> **Exploratory Data Analysis (EDA)** is the process of summarizing, visualizing, and analyzing data before formal modelling to discover patterns, anomalies, and insights.
> 
> **Key Goals of EDA:**
> 1. **Understand Data Distribution** — Examine the shape, spread, and central tendency of variables using histograms, box plots, and summary statistics.
> 2. **Detect Outliers and Anomalies** — Identify unusual data points that could distort analysis or indicate errors in data collection.
> 3. **Discover Relationships Between Variables** — Use correlation matrices, scatter plots, and heatmaps to find associations between features.
> 4. **Validate Assumptions** — Check whether data satisfies assumptions required for statistical models (e.g., normality, homoscedasticity).
> 5. **Feature Engineering Insights** — Identify which features are most relevant or need transformation before modelling.

c) What is Data Scraping? **(TT-1)**

> **Answer:**
> - **Data Scraping:** Data scraping (or web scraping) is the process of automatically collecting data from websites, documents, APIs, or other digital sources, typically because the data is not available in ready-made datasets.

## 2. Machine Learning Basics & Concepts
**0.** What is Cross Validation? **(2022 B Final)**

> **Answer:**
> **Cross Validation** is a resampling technique used to evaluate machine learning models on a limited data sample. It helps in assessing how the results of a statistical analysis will generalize to an independent dataset.
> 
> **How it works (k-fold cross-validation):**
> 1. The dataset is randomly partitioned into $k$ equal sized sub-samples (folds).
> 2. Of the $k$ sub-samples, a single sub-sample is retained as the validation data for testing the model, and the remaining $k-1$ sub-samples are used as training data.
> 3. The cross-validation process is then repeated $k$ times, with each of the $k$ sub-samples used exactly once as the validation data.
> 4. The $k$ results can then be averaged to produce a single estimation.
> 
> **Purpose:** It prevents overfitting and provides a more accurate measure of model prediction performance compared to a simple train/test split.

a) What do you understand by Over-fitting and Under-fitting? **(2022 A Final, 2022 B Final, TT-1)**

> **Answer:**
> - **Overfitting:** Occurs when a machine learning model learns the training data too well, memorizing the noise and random quirks rather than the underlying pattern. The model performs very well on training data but poorly on unseen test data (Low Bias, High Variance).
> - **Underfitting:** Occurs when a machine learning model is too simple to capture the underlying patterns in the data. The model performs poorly on both the training and test datasets (High Bias, Low Variance).

b) Distinguish between Supervised, Unsupervised and Reinforcement Learning. **(2022 A Final, 2022 B Final, TT-1)**

> **Answer:**
> - **Supervised Learning:** The training data contains labeled input/output pairs. The algorithm learns a mapping function from inputs to outputs (e.g., Classification, Regression).
> - **Unsupervised Learning:** The training data contains no labels. The algorithm must find hidden structures, patterns, or groupings within the data on its own (e.g., Clustering, Association rules).
> - **Reinforcement Learning:** Works on a feedback-based process where an AI agent interacts with an environment sequentially. The agent learns by hit-and-trial, receiving positive rewards for good actions and penalties for bad ones, aiming to maximize cumulative long-term reward.

d) Difference between Reinforcement learning and Supervised learning. **(2022 A Final)**

> **Answer:**
> 
> | Aspect | Supervised Learning | Reinforcement Learning |
> | :--- | :--- | :--- |
> | **Learning Signal** | Labeled training data (input-output pairs) | Rewards and penalties from the environment |
> | **Feedback Type** | Immediate, explicit correct answer | Delayed reward after a sequence of actions |
> | **Goal** | Learn a mapping function f(x)→y | Learn a policy to maximize cumulative reward |
> | **Data Requirement** | Large labeled dataset required | No labeled data; learns through interaction |
> | **Examples** | Image classification, spam detection | Game playing (Chess, Go), robot navigation |
> | **Algorithm Examples** | Decision Trees, SVM, Neural Networks | Q-Learning, Deep Q-Networks (DQN) |

c) What is Feature Engineering? Explain. **(2022 B Final)**

> **Answer:**
> **Feature Engineering** is the process of using domain knowledge to extract new variables (features) from raw data that make machine learning algorithms work. It transforms raw data into formats that better represent the underlying problem to the predictive models, resulting in improved model accuracy on unseen data.
> 
> **Techniques include:**
> - Imputation (handling missing values)
> - Handling Outliers
> - Encoding categorical variables (e.g., One-Hot Encoding)
> - Feature Transformation (Scaling/Normalization)
> - Feature Creation (e.g., combining "Height" and "Weight" to create a new "BMI" feature)

d) Explain Feature Scaling, Normalization and Standardization. **(2022 B Final)**

> **Answer:**
> - **Feature Scaling:** A broad term for methods used to normalize the range of independent variables or features of data. It ensures that no single feature dominates the model due to having a larger magnitude.
> - **Normalization (Min-Max Scaling):** Rescales numerical features to a fixed range, usually [0, 1]. Useful when data does not follow a Gaussian distribution. Formula: $X_{norm} = \frac{X - X_{min}}{X_{max} - X_{min}}$
> - **Standardization (Z-score Scaling):** Rescales data so it has a mean ($\mu$) of 0 and a standard deviation ($\sigma$) of 1. It centers the data around zero and does not bound it to a specific range, making it less sensitive to outliers. Formula: $X_{std} = \frac{X - \mu}{\sigma}$

e) What is a Dummy Variable? Give an example. **(2022 B Final)**

> **Answer:**
> A **Dummy Variable** (or indicator variable) is a numeric variable used in regression analysis to represent categorical data. It takes the value 0 or 1 to indicate the absence or presence of some categorical effect.
> **Example:** If a dataset has a "Gender" column with values "Male" and "Female", we create a dummy variable `is_Male`: `1` if Male, `0` if Female.

f) What is a Confusion Matrix? **(2022 B Final)**

> **Answer:**
> A **Confusion Matrix** is a specific table layout that allows visualization of the performance of a supervised learning classification algorithm. Each row of the matrix represents the instances in an actual class, while each column represents the instances in a predicted class. It contains four key metrics: True Positives (TP), True Negatives (TN), False Positives (FP), and False Negatives (FN).

g) Build a confusion matrix from the following classification: **(2022 B Final)**

<div align="center">
<svg width="600" height="300" xmlns="http://www.w3.org/2000/svg">
<!-- Left Circle: Predicted Horse -->
<circle cx="150" cy="130" r="120" fill="none" stroke="black" stroke-width="2"/>
<text x="150" y="275" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle">Horse</text>
<!-- Horses in Left Circle -->
<text x="150" y="55" font-size="24" text-anchor="middle">🐴</text>
<text x="100" y="85" font-size="24" text-anchor="middle">🐴</text>
<text x="180" y="95" font-size="24" text-anchor="middle">🐴</text>
<text x="60" y="145" font-size="24" text-anchor="middle">🐴</text>
<text x="110" y="155" font-size="24" text-anchor="middle">🐴</text>
<text x="210" y="115" font-size="24" text-anchor="middle">🐴</text>
<text x="235" y="165" font-size="24" text-anchor="middle">🐴</text>
<text x="90" y="215" font-size="24" text-anchor="middle">🐴</text>
<text x="150" y="225" font-size="24" text-anchor="middle">🐴</text>
<text x="200" y="205" font-size="24" text-anchor="middle">🐴</text>
<!-- Dog in Left Circle -->
<text x="160" y="145" font-size="24" text-anchor="middle">🐶</text>
<!-- Right Circle: Predicted Dog -->
<circle cx="450" cy="130" r="120" fill="none" stroke="black" stroke-width="2"/>
<text x="450" y="275" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle">Dog</text>
<!-- Dogs in Right Circle -->
<text x="370" y="85" font-size="24" text-anchor="middle">🐶</text>
<text x="440" y="70" font-size="24" text-anchor="middle">🐶</text>
<text x="470" y="125" font-size="24" text-anchor="middle">🐶</text>
<text x="535" y="145" font-size="24" text-anchor="middle">🐶</text>
<text x="380" y="215" font-size="24" text-anchor="middle">🐶</text>
<text x="445" y="225" font-size="24" text-anchor="middle">🐶</text>
<text x="515" y="210" font-size="24" text-anchor="middle">🐶</text>
<!-- Horses in Right Circle -->
<text x="510" y="85" font-size="24" text-anchor="middle">🐴</text>
<text x="400" y="155" font-size="24" text-anchor="middle">🐴</text>
</svg>
</div>

*Note: The left circle (Horse) contains 10 horses and 1 dog. The right circle (Dog) contains 2 horses and 7 dogs.*

Calculate accuracy, precision, recall and f1 score.

> **Answer:**
> Let **Horse** be the Positive class and **Dog** be the Negative class.
> 
> **From the diagram:**
> - Left Circle (Predicted Horse): 10 Actual Horses (TP), 1 Actual Dog (FP)
> - Right Circle (Predicted Dog): 2 Actual Horses (FN), 7 Actual Dogs (TN)
> 
> **Confusion Matrix:**
> 
> | | Actual Horse | Actual Dog |
> |---|:---:|:---:|
> | **Predicted Horse** | 10 (TP) | 1 (FP) |
> | **Predicted Dog** | 2 (FN) | 7 (TN) |
> 
> **Metrics Calculation:**
> - **Accuracy:** $(10 + 7) / 20 = \mathbf{0.85}$ (**85%**)
> - **Precision:** $10 / 11 \approx \mathbf{0.909}$ (**90.9%**)
> - **Recall:** $10 / 12 \approx \mathbf{0.833}$ (**83.3%**)
> - **F1 Score:** $2 \times \frac{0.909 \times 0.833}{0.909 + 0.833} \approx \mathbf{0.869}$ (**86.9%**)

## 3. Supervised Learning - Classification
**Decision Trees (ID3 & CART):**

a) You are given a dataset containing information about customers and their purchasing behavior. Construct a decision tree using the CART algorithm. **(TT-1)**

| Age | Income | Buy |
| :---: | :---: | :---: |
| Young | Low | No |
| Young | High | No |
| Old | Low | Yes |
| Old | High | Yes |

> **Answer:**
> **1. Calculate Root Node Impurity (Gini)**
> The target variable "Buy" has 2 Yes and 2 No out of 4 total samples.
> - $Gini(Root) = 1 - (2/4)^2 - (2/4)^2 = 1 - 0.25 - 0.25 = 0.5$
> 
> **2. Evaluate Split on 'Age'**
> - **Young (2 samples):** 2 No, 0 Yes. $Gini(Young) = 1 - (2/2)^2 - (0/2)^2 = 0$
> - **Old (2 samples):** 0 No, 2 Yes. $Gini(Old) = 1 - (0/2)^2 - (2/2)^2 = 0$
> - **Weighted Gini for Age:** $(2/4) \times 0 + (2/4) \times 0 = 0$
> 
> **3. Evaluate Split on 'Income'**
> - **Low (2 samples):** 1 Yes, 1 No. $Gini(Low) = 1 - (1/2)^2 - (1/2)^2 = 0.5$
> - **High (2 samples):** 1 Yes, 1 No. $Gini(High) = 1 - (1/2)^2 - (1/2)^2 = 0.5$
> - **Weighted Gini for Income:** $(2/4) \times 0.5 + (2/4) \times 0.5 = 0.5$
> 
> **4. Conclusion**
> The best split is on **Age** because it yields the lowest Gini Impurity (0), which is a perfect split.
> 
> **Decision Tree:**
> ```mermaid
> graph TD
>   A[Age] -->|Young| B(Buy: No)
>   A -->|Old| C(Buy: Yes)
> ```

b) The following table contains training examples. Using ID3 algorithm construct a minimal decision tree that predicts whether or not Sakib Al Hasan enjoys cricket on a certain day. **(2022 A Final)**

| No | Sky | Humidity | Play Cricket |
| :---: | :---: | :---: | :---: |
| 1 | Sunny | High | No |
| 2 | Sunny | High | Yes |
| 3 | Overcast | High | No |
| 4 | Rain | Normal | No |
| 5 | Rain | Normal | No |
| 6 | Overcast | Normal | Yes |
| 7 | Overcast | Normal | Yes |

> **Answer:**
> **1. Calculate Root Entropy H(S)**
> Total: 7 samples → 3 Yes (rows 2,6,7), 4 No (rows 1,3,4,5)
> $$H(S) = -\frac{3}{7}\log_2\frac{3}{7} - \frac{4}{7}\log_2\frac{4}{7} = -(0.429 \times -1.222) - (0.571 \times -0.807) \approx \mathbf{0.985}$$
> 
> **2. Information Gain for 'Sky'**
> 
> | Sky | Samples | Yes | No | H(subset) |
> | :---: | :---: | :---: | :---: | :---: |
> | Sunny | 2 (rows 1,2) | 1 | 1 | 1.000 |
> | Overcast | 3 (rows 3,6,7) | 2 | 1 | 0.918 |
> | Rain | 2 (rows 4,5) | 0 | 2 | 0.000 |
> 
> $$H_{weighted}(Sky) = \frac{2}{7}(1.0) + \frac{3}{7}(0.918) + \frac{2}{7}(0) = 0.286 + 0.393 = 0.679$$
> $$IG(Sky) = 0.985 - 0.679 = \mathbf{0.306}$$
> 
> **3. Information Gain for 'Humidity'**
> 
> | Humidity | Samples | Yes | No | H(subset) |
> | :---: | :---: | :---: | :---: | :---: |
> | High | 3 (rows 1,2,3) | 1 | 2 | 0.918 |
> | Normal | 4 (rows 4,5,6,7) | 2 | 2 | 1.000 |
> 
> $$H_{weighted}(Humidity) = \frac{3}{7}(0.918) + \frac{4}{7}(1.0) = 0.393 + 0.571 = 0.964$$
> $$IG(Humidity) = 0.985 - 0.964 = \mathbf{0.021}$$
> 
> **4. Select Root Node**
> IG(Sky) = 0.306 > IG(Humidity) = 0.021 → **Sky is the Root**
> 
> **5. Expand Branches**
> - **Rain branch**: {rows 4,5} → all No → **leaf: No** ✓
> - **Overcast branch**: {rows 3,6,7} → split further on Humidity:
>   - High → row 3 → **No**
>   - Normal → rows 6,7 → both Yes → **Yes**
> - **Sunny branch**: {rows 1,2} → 1Y, 1N, both have Humidity=High → cannot split further → **leaf: No** (majority of original: No > Yes)
> 
> **Decision Tree:**
> ```mermaid
> graph TD
>   A[Sky] -->|Rain| B(Play Cricket: No)
>   A -->|Sunny| C(Play Cricket: No)
>   A -->|Overcast| D[Humidity]
>   D -->|High| E(Play Cricket: No)
>   D -->|Normal| F(Play Cricket: Yes)
> ```

c) The following table contains training examples. Use the ID3 algorithm to construct a decision tree that predicts whether a student will pass an exam based on study habits. Also computing entropy and information gain. **(2023)**

| No | Study Hours | Group Study | Pass |
| :---: | :---: | :---: | :---: |
| 1 | High | Yes | Yes |
| 2 | Medium | No | No |
| 3 | High | No | Yes |
| 4 | Low | Yes | No |
| 5 | Medium | Yes | Yes |
| 6 | Low | No | No |
| 7 | High | Yes | Yes |

> **Answer:**
> **1. Calculate Root Entropy H(S)**
> Total: 7 samples → 4 Yes, 3 No
> $$H(S) = -\frac{4}{7}\log_2\frac{4}{7} - \frac{3}{7}\log_2\frac{3}{7} = -(0.571 \times -0.807) - (0.429 \times -1.222) \approx \mathbf{0.985}$$
> 
> **2. Information Gain for 'Study Hours'**
> 
> | Study Hours | Samples | Yes | No | H(subset) |
> | :---: | :---: | :---: | :---: | :---: |
> | High | 3 (rows 1,3,7) | 3 | 0 | 0.000 |
> | Medium | 2 (rows 2,5) | 1 | 1 | 1.000 |
> | Low | 2 (rows 4,6) | 0 | 2 | 0.000 |
> 
> $$H_{weighted}(Study) = \frac{3}{7}(0) + \frac{2}{7}(1.0) + \frac{2}{7}(0) = 0.286$$
> $$IG(Study\ Hours) = 0.985 - 0.286 = \mathbf{0.699}$$
> 
> **3. Information Gain for 'Group Study'**
> 
> | Group Study | Samples | Yes | No | H(subset) |
> | :---: | :---: | :---: | :---: | :---: |
> | Yes | 4 (rows 1,4,5,7) | 3 | 1 | 0.811 |
> | No | 3 (rows 2,3,6) | 1 | 2 | 0.918 |
> 
> $$H_{weighted}(Group) = \frac{4}{7}(0.811) + \frac{3}{7}(0.918) = 0.464 + 0.393 = 0.858$$
> $$IG(Group\ Study) = 0.985 - 0.858 = \mathbf{0.127}$$
> 
> **4. Select Root Node**
> IG(Study Hours) = 0.699 > IG(Group Study) = 0.127 → **Study Hours is the Root**
> 
> **5. Expand Medium Branch**
> Medium subset: {Row 2 (No→No), Row 5 (Yes→Yes)} → Split perfectly on Group Study.
> High and Low branches are pure → leaf nodes.
> 
> **Decision Tree:**
> ```mermaid
> graph TD
>   A[Study Hours] -->|High| B(Pass: Yes)
>   A -->|Low| C(Pass: No)
>   A -->|Medium| D[Group Study]
>   D -->|Yes| E(Pass: Yes)
>   D -->|No| F(Pass: No)
> ```

d) Draw a decision tree for following dataset. **(2022 TT-1)**

| No | Weather Condition | Engine problem | Accident |
| :---: | :---: | :---: | :---: |
| 1 | Rain | Yes | No |
| 2 | Clear | Yes | No |
| 3 | Rain | Yes | Yes |
| 4 | Rain | No | No |
| 5 | Clear | No | No |
| 6 | Clear | No | Yes |

> **Answer:**
> **1. Calculate Root Node Impurity (Gini)**
> The target variable "Accident" has 2 Yes and 4 No out of 6 total samples.
> - $Gini(Root) = 1 - (2/6)^2 - (4/6)^2 = 1 - 0.111 - 0.444 \approx 0.444$
> 
> **2. Evaluate Split on 'Weather Condition'**
> - **Rain (3 samples):** 1 Yes, 2 No. $Gini(Rain) = 1 - (1/3)^2 - (2/3)^2 \approx 0.444$
> - **Clear (3 samples):** 1 Yes, 2 No. $Gini(Clear) = 1 - (1/3)^2 - (2/3)^2 \approx 0.444$
> - **Weighted Gini for Weather:** $(3/6) \times 0.444 + (3/6) \times 0.444 \approx 0.444$
> 
> **3. Evaluate Split on 'Engine problem'**
> - **Yes (3 samples):** 1 Yes, 2 No. $Gini(Yes) = 1 - (1/3)^2 - (2/3)^2 \approx 0.444$
> - **No (3 samples):** 1 Yes, 2 No. $Gini(No) = 1 - (1/3)^2 - (2/3)^2 \approx 0.444$
> - **Weighted Gini for Engine:** $(3/6) \times 0.444 + (3/6) \times 0.444 \approx 0.444$
> 
> **4. Second Level Splits (Choosing Weather Condition as Root)**
> Since both splits offer $0$ impurity reduction, we arbitrarily choose **Weather Condition** as the root node.
> 
> **Branch: Weather = Rain**
> - Remaining Data: `(Yes->No)`, `(Yes->Yes)`, `(No->No)`. (Total 3 samples)
> - Split on Engine problem:
>   - **Yes (2 samples):** 1 Yes, 1 No. $Gini(Yes) = 1 - (1/2)^2 - (1/2)^2 = 0.5$
>   - **No (1 sample):** 0 Yes, 1 No. $Gini(No) = 1 - (1/1)^2 - 0 = 0$
>   - **Weighted Gini:** $(2/3) \times 0.5 + (1/3) \times 0 \approx 0.333$ (Improvement from 0.444)
> 
> **Branch: Weather = Clear**
> - Remaining Data: `(Yes->No)`, `(No->No)`, `(No->Yes)`. (Total 3 samples)
> - Split on Engine problem:
>   - **Yes (1 sample):** 0 Yes, 1 No. $Gini(Yes) = 1 - 1 = 0$
>   - **No (2 samples):** 1 Yes, 1 No. $Gini(No) = 1 - (1/2)^2 - (1/2)^2 = 0.5$
>   - **Weighted Gini:** $(1/3) \times 0 + (2/3) \times 0.5 \approx 0.333$ (Improvement from 0.444)
> 
> *(Note: The leaf nodes marked as "Tie" contain an equal number of Yes/No samples and cannot be split further with the available features. A final prediction can be assigned randomly or by majority).*
> 
> **Decision Tree:**
> ```mermaid
> graph TD
>   A[Weather Condition] -->|Rain| B[Engine problem]
>   A -->|Clear| C[Engine problem]
>   
>   B -->|Yes| D(Accident: Tie)
>   B -->|No| E(Accident: No)
>   
>   C -->|Yes| F(Accident: No)
>   C -->|No| G(Accident: Tie)
> ```

**Naive Bayes:**

e) State the Bayes Theorem. **(2022 B Final)**

> **Answer:**
> **Bayes' Theorem** is a mathematical formula for determining conditional probability. It calculates the probability of an event based on prior knowledge of conditions that might be related to the event.
> 
> **Formula:**
> $$P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$$
> 
> Where:
> - $P(A|B)$ is the **Posterior probability** (probability of hypothesis $A$ given evidence $B$)
> - $P(B|A)$ is the **Likelihood** (probability of evidence $B$ given that hypothesis $A$ is true)
> - $P(A)$ is the **Prior probability** (initial probability of hypothesis $A$)
> - $P(B)$ is the **Marginal probability** (total probability of evidence $B$)

f) Suppose we have a dataset of weather conditions and corresponding target variable "Accident". Decide whether an accident occurs or not on a particular day according to the weather conditions. Solve using Naive Bayes / appropriate classifier. **(TT-1, 2022 TT-1, 2022 A Final)**

| No | Weather Condition | Accident |
| :---: | :---: | :---: |
| 1 | Rain | Yes |
| 2 | Snow | Yes |
| 3 | Clear | No |
| 4 | Clear | Yes |
| 5 | Snow | No |
| 6 | Rain | No |
| 7 | Rain | No |
| 8 | Snow | Yes |
| 9 | Clear | No |
| 10 | Clear | Yes |

> **Answer:**
> **1. Frequency Table**
> 
> | Weather | Yes | No |
> | :---: | :---: | :---: |
> | Rain | 1 | 2 |
> | Snow | 2 | 1 |
> | Clear | 1 | 3 |
> | **Total** | **4** | **6** |
> 
> **2. Prior Probabilities**
> - P(Yes) = 4/10 = 0.4
> - P(No) = 6/10 = 0.6
> 
> **3. Likelihood Table**
> 
> | Weather | Yes | No |
> | :---: | :---: | :---: |
> | Rain | 1/4 = 0.25 | 2/6 = 0.33 |
> | Snow | 2/4 = 0.50 | 1/6 = 0.17 |
> | Clear | 1/4 = 0.25 | 3/6 = 0.50 |
> 
> **4. Applying Bayes' Theorem**
> For any new weather condition $X$, we calculate the posterior probability for both classes (Yes/No):
> $P(Yes|X) = P(X|Yes) \times P(Yes) / P(X)$
> $P(No|X) = P(X|No) \times P(No) / P(X)$
> 
> **Example Prediction:** If Weather = Rain:
> - $P(Yes|Rain) \propto P(Rain|Yes) \times P(Yes) = 0.25 \times 0.4 = 0.10$
> - $P(No|Rain) \propto P(Rain|No) \times P(No) = 0.33 \times 0.6 = 0.198$
> Since $P(No|Rain) > P(Yes|Rain)$, we predict **No**.

> **Answer (Variant for 2022 A Final dataset: Clear/Snow/Rain order):**
> **1. Frequency Table**
> 
> | Weather | Yes | No | Total |
> | :---: | :---: | :---: | :---: |
> | Clear | 3 | 1 | 4 |
> | Snow | 2 | 1 | 3 |
> | Rain | 0 | 3 | 3 |
> | **Total** | **5** | **5** | **10** |
> 
> **2. Prior Probabilities**
> - $P(Yes) = 5/10 = 0.5$
> - $P(No) = 5/10 = 0.5$
> 
> **3. Likelihood Table**
> 
> | Weather | P(Weather \| Yes) | P(Weather \| No) |
> | :---: | :---: | :---: |
> | Clear | 3/5 = 0.60 | 1/5 = 0.20 |
> | Snow | 2/5 = 0.40 | 1/5 = 0.20 |
> | Rain | 0/5 = 0.00 | 3/5 = 0.60 |
> 
> **4. Predict Each Weather Condition**
> 
> | Weather | P(Yes) × P(W\|Yes) | P(No) × P(W\|No) | Prediction |
> | :---: | :---: | :---: | :---: |
> | Clear | 0.5 × 0.60 = **0.30** | 0.5 × 0.20 = 0.10 | **Yes** |
> | Snow | 0.5 × 0.40 = **0.20** | 0.5 × 0.20 = 0.10 | **Yes** |
> | Rain | 0.5 × 0.00 = 0.00 | 0.5 × 0.60 = **0.30** | **No** |
> 
> **Conclusion:** On a Clear or Snow day → Accident likely occurs (**Yes**). On a Rain day → Accident does **not** occur (**No**).

g) Consider the following table and construct a naive bayes classifier to decide if the weather is overcast, then the Player should play or not? **(2022 B Final)**

| Day | Outlook | Play |
| :---: | :---: | :---: |
| 1 | Rainy | Yes |
| 2 | Sunny | Yes |
| 3 | Overcast | Yes |
| 4 | Overcast | Yes |
| 5 | Sunny | No |
| 6 | Rainy | Yes |
| 7 | Sunny | Yes |
| 8 | Overcast | Yes |
| 9 | Rainy | No |
| 10 | Sunny | No |
| 11 | Sunny | Yes |

> **Answer:**
> **1. Target Frequencies & Prior Probabilities**
> Total instances: 11
> - Play = Yes: 7 → $P(Yes) = 7/11$
> - Play = No: 4 → $P(No) = 4/11$
> 
> **2. Outlook Frequencies (Likelihoods)**
> 
> | Outlook | Play = Yes | Play = No |
> | :---: | :---: | :---: |
> | Rainy | 2 | 1 |
> | Sunny | 2 | 3 |
> | Overcast | 3 | 0 |
> 
> - $P(Overcast | Yes) = 3/7$
> - $P(Overcast | No) = 0/4 = 0$
> 
> **3. Apply Bayes Theorem for Outlook = Overcast**
> - $P(Yes | Overcast) \propto P(Overcast | Yes) \times P(Yes) = (3/7) \times (7/11) = 3/11 \approx \mathbf{0.272}$
> - $P(No | Overcast) \propto P(Overcast | No) \times P(No) = 0 \times (4/11) = \mathbf{0}$
> 
> **Conclusion:**
> Since $P(Yes | Overcast) > P(No | Overcast)$, the player **will play** if the weather is overcast (**Yes**).

**K-Nearest Neighbors (KNN):**

h) How should the value of "k" be selected in KNN classification algorithm? **(2022 B Final)**

> **Answer:**
> - $k$ should generally be an **odd number** to prevent tie votes in binary classification.
> - A very **small $k$** (e.g., k=1) makes the model highly sensitive to noise and outliers (High Variance / Overfitting).
> - A very **large $k$** smooths out decision boundaries but might include points from other classes, missing local patterns (High Bias / Underfitting).
> - The optimal $k$ is usually found through **hyperparameter tuning (e.g., Grid Search)** combined with **Cross-Validation**, picking the $k$ that yields the lowest error on validation sets. Sometimes $k = \sqrt{n}$ (where $n$ is the number of samples) is used as a rule of thumb.

i) Find out the type of M(4.4, 6.2) with k-NN considering K=3. **(2022 B Final)**

| Class | Diameter(X1) | Weight(X2) |
| :---: | :---: | :---: |
| Plum | 1.0 | 1.2 |
| | 1.2 | 2.5 |
| | 3.0 | 4.1 |
| Olive | 5.1 | 7.4 |
| | 3.3 | 5.3 |
| | 4.5 | 5.0 |
| | 3.5 | 4.5 |

> **Answer:**
> New point $M(4.4, 6.2)$. Calculate squared Euclidean distance $d^2 = (X_1 - 4.4)^2 + (X_2 - 6.2)^2$ to each training point.
> 
> | Point | Class | $(X_1, X_2)$ | $d^2$ Calculation | $d^2$ | Distance ($d$) |
> | :--- | :--- | :--- | :--- | :---: | :---: |
> | P1 | Plum | (1.0, 1.2) | $(1.0-4.4)^2 + (1.2-6.2)^2 = (-3.4)^2 + (-5.0)^2$ | 36.56 | 6.046 |
> | P2 | Plum | (1.2, 2.5) | $(1.2-4.4)^2 + (2.5-6.2)^2 = (-3.2)^2 + (-3.7)^2$ | 23.93 | 4.892 |
> | P3 | Plum | (3.0, 4.1) | $(3.0-4.4)^2 + (4.1-6.2)^2 = (-1.4)^2 + (-2.1)^2$ | 6.37 | 2.524 |
> | O1 | Olive | (5.1, 7.4) | $(5.1-4.4)^2 + (7.4-6.2)^2 = (0.7)^2 + (1.2)^2$ | **1.93** | **1.389** |
> | O2 | Olive | (3.3, 5.3) | $(3.3-4.4)^2 + (5.3-6.2)^2 = (-1.1)^2 + (-0.9)^2$ | **2.02** | **1.421** |
> | O3 | Olive | (4.5, 5.0) | $(4.5-4.4)^2 + (5.0-6.2)^2 = (0.1)^2 + (-1.2)^2$ | **1.45** | **1.204** |
> | O4 | Olive | (3.5, 4.5) | $(3.5-4.4)^2 + (4.5-6.2)^2 = (-0.9)^2 + (-1.7)^2$ | 3.70 | 1.924 |
> 
> **Top 3 Nearest Neighbors (K=3):**
> 1. O3 (Distance 1.204) → Class: **Olive**
> 2. O1 (Distance 1.389) → Class: **Olive**
> 3. O2 (Distance 1.421) → Class: **Olive**
> 
> **Conclusion:** Since all 3 nearest neighbors are Olives, the predicted class for $M$ is **Olive**.

j) A company wants to classify a new mobile phone based on its Battery Life and Camera Quality using the K-Nearest Neighbors (KNN) classifier. Determine the class of a new phone with Battery Life = 8 hrs and Camera Quality = 7 MP, using K = 3 and Euclidean Distance. **(2023)**

| No | Battery Life (hrs) | Camera Quality (MP) | Class |
| :---: | :---: | :---: | :---: |
| 1 | 6 | 5 | Budget |
| 2 | 9 | 7 | High-End |
| 3 | 8 | 6 | Budget |
| 4 | 7 | 8 | High-End |
| 5 | 10 | 9 | High-End |
| 6 | 5 | 6 | Budget |

> **Answer:**
> **Test Point:** (Battery=8, Camera=7)
> 
> **1. Calculate Euclidean Distance from each phone to the test point**
> 
> | No | Battery | Camera | Class | Distance to (8,7) |
> | :---: | :---: | :---: | :---: | :---: |
> | 1 | 6 | 5 | Budget | $\sqrt{(8-6)^2+(7-5)^2} = \sqrt{8} \approx 2.83$ |
> | 2 | 9 | 7 | High-End | $\sqrt{(8-9)^2+(7-7)^2} = \sqrt{1} = 1.00$ |
> | 3 | 8 | 6 | Budget | $\sqrt{(8-8)^2+(7-6)^2} = \sqrt{1} = 1.00$ |
> | 4 | 7 | 8 | High-End | $\sqrt{(8-7)^2+(7-8)^2} = \sqrt{2} \approx 1.41$ |
> | 5 | 10 | 9 | High-End | $\sqrt{(8-10)^2+(7-9)^2} = \sqrt{8} \approx 2.83$ |
> | 6 | 5 | 6 | Budget | $\sqrt{(8-5)^2+(7-6)^2} = \sqrt{10} \approx 3.16$ |
> 
> **2. Sort by Distance and Select K=3 Nearest Neighbors**
> 
> | Rank | No | Distance | Class |
> | :---: | :---: | :---: | :---: |
> | 1 | P2 | 1.00 | High-End |
> | 2 | P3 | 1.00 | Budget |
> | 3 | P4 | 1.41 | High-End |
> 
> **3. Majority Vote**
> - High-End: **2 votes** ✔
> - Budget: 1 vote
> 
> **Result: The new phone is classified as → High-End**

**Logistic Regression & SVM:**

k) Explain the types of logistic regression with example. **(2022 B Final)**

> **Answer:**
> 1. **Binary Logistic Regression:** The target variable has exactly two possible categorical outcomes.
>    *Example:* Predicting if an email is Spam (1) or Not Spam (0).
> 2. **Multinomial Logistic Regression:** The target variable has three or more nominal categories with no intrinsic ordering.
>    *Example:* Predicting which animal is in an image (Cat, Dog, or Bird).
> 3. **Ordinal Logistic Regression:** The target variable has three or more ordinal categories (categories with a natural ordering).
>    *Example:* Predicting customer satisfaction level (Poor, Fair, Good, Excellent).

l) The dataset of pass or fail in an exam of 5 students is given in the table. Use logistic regression as classifier to answer: i) Calculate the probability of pass for the student who studied 28 hours. ii) At least how many hours student should study to pass with > 95% probability. Assume the model for odds is: **log(odds) = -64+2*hours**. **(2022 A Final)**

| Hours Study | Pass(1)/Fail(0) |
| :---: | :---: |
| 29 | 0 |
| 15 | 0 |
| 33 | 1 |
| 28 | 1 |
| 39 | 1 |

> **Answer:**
> **Given model:** $\log(\text{odds}) = -64 + 2 \times \text{hours}$
> 
> The probability from log-odds uses the **sigmoid function:**
> $$P(\text{pass}) = \frac{e^{\log(\text{odds})}}{1 + e^{\log(\text{odds})}} = \frac{1}{1 + e^{-(-64 + 2h)}} = \frac{1}{1 + e^{64 - 2h}}$$
> 
> **i) Probability of pass for 28 hours:**
> $$\log(\text{odds}) = -64 + 2(28) = -64 + 56 = -8$$
> $$P(\text{pass}) = \frac{1}{1 + e^{8}} = \frac{1}{1 + 2981} = \frac{1}{2982} \approx \mathbf{0.000335} \approx \mathbf{0.03\%}$$
> 
> *(The model assigns a very low probability here — reflecting that 28 hours is below the model's decision boundary given the steep coefficients.)*
> 
> **ii) Minimum hours for P(pass) > 95%:**
> $$P > 0.95 \implies \frac{e^x}{1 + e^x} > 0.95 \quad \text{where } x = -64 + 2h$$
> $$e^x > \frac{0.95}{0.05} = 19$$
> $$x > \ln(19) \approx 2.944$$
> $$-64 + 2h > 2.944 \implies 2h > 66.944 \implies h > 33.47$$
> 
> **Answer: A student must study at least $\mathbf{34}$ hours to pass with >95% probability.**

m) Justify - "Support Vector Machine is a large margin classifier". **(2022 B Final)**

> **Answer:**
> SVM is called a **large margin classifier** because its primary objective is not just to draw a decision boundary (hyperplane) that separates classes, but to find the boundary that has the **maximum margin** between the two classes. 
> 
> The margin is defined as the distance from the decision boundary to the closest training data points of any class (these points are the "Support Vectors"). By maximizing this margin, SVM ensures that the model is as robust as possible to future unseen data, effectively reducing generalization error.

## 4. Supervised Learning - Regression
a) Define Multiple Linear Regression. Explain the equation with proper examples. **(2022 B Final)**

> **Answer:**
> **Multiple Linear Regression** is a statistical technique that uses several explanatory variables (independent variables) to predict the outcome of a continuous response variable (dependent variable). It models the linear relationship between the explanatory variables and response variable.
> 
> **Equation:**
> $$y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \cdots + \beta_n x_n + \epsilon$$
> Where:
> - $y$ = dependent variable (target)
> - $x_1, x_2, \ldots, x_n$ = independent variables (features)
> - $\beta_0$ = y-intercept (constant term)
> - $\beta_1, \ldots, \beta_n$ = slope coefficients for each independent variable
> - $\epsilon$ = error term (residuals)
> 
> **Example:** Predicting a house's price ($y$) based on its features.
> - $x_1$: Area in sq ft
> - $x_2$: Number of bedrooms
> - $x_3$: Age of the house
> Equation: $\text{Price} = \beta_0 + \beta_1(\text{Area}) + \beta_2(\text{Bedrooms}) + \beta_3(\text{Age})$

b) State and derive the Normal Equation for solving regression problem. **(2022 B Final)**

> **Answer:**
> **Normal Equation** is an analytical (closed-form) solution to find the optimal parameters $\theta$ that minimize the cost function for Linear Regression, without requiring an iterative optimization algorithm like Gradient Descent.
> 
> **Statement:** $\theta = (X^T X)^{-1} X^T y$
> 
> **Derivation:**
> 1. **Hypothesis:** $h_\theta(X) = X\theta$, where $X$ is the $(m \times n)$ design matrix, and $\theta$ is the $(n \times 1)$ parameter vector. $y$ is the $(m \times 1)$ target vector.
> 2. **Cost Function (Sum of Squared Errors):**
>    $J(\theta) = \frac{1}{2} (X\theta - y)^T (X\theta - y)$
> 3. **Expand the equation:**
>    $J(\theta) = \frac{1}{2} \left[ (X\theta)^T (X\theta) - (X\theta)^T y - y^T (X\theta) + y^T y \right]$
>    Since $(X\theta)^T y$ is a scalar, it equals its transpose $y^T (X\theta)$:
>    $J(\theta) = \frac{1}{2} \left[ \theta^T X^T X \theta - 2(X\theta)^T y + y^T y \right]$
> 4. **Minimize $J(\theta)$ by setting derivative to zero:**
>    $\frac{\partial J}{\partial \theta} = X^T X \theta - X^T y = 0$
> 5. **Solve for $\theta$:**
>    $X^T X \theta = X^T y$
>    Multiply both sides by the inverse of $(X^T X)$:
>    $\theta = (X^T X)^{-1} X^T y$

c) Write down the Gradient Descent Algorithm for Multivariate Regression problems. **(2022 A Final)**

> **Answer:**
> **Multivariate Linear Regression** models the relationship between a dependent variable $y$ and multiple independent variables $x_1, x_2, \ldots, x_n$.
> 
> **Hypothesis:**
> $$h_\theta(x) = \theta_0 + \theta_1 x_1 + \theta_2 x_2 + \cdots + \theta_n x_n = \theta^T x$$
> 
> **Cost Function (Mean Squared Error):**
> $$J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} \left( h_\theta(x^{(i)}) - y^{(i)} \right)^2$$
> 
> **Gradient Descent Algorithm:**
> 
> > **Initialize:** $\theta_j = 0$ for all $j$, choose learning rate $\alpha$
> > 
> > **Repeat until convergence:**
> > $$\theta_j := \theta_j - \alpha \cdot \frac{\partial}{\partial \theta_j} J(\theta) \quad \text{for all } j = 0, 1, \ldots, n$$
> > 
> > Where the partial derivative expands to:
> > $$\theta_j := \theta_j - \frac{\alpha}{m} \sum_{i=1}^{m} \left( h_\theta(x^{(i)}) - y^{(i)} \right) \cdot x_j^{(i)}$$
> > 
> > **Until:** $|J(\theta_{new}) - J(\theta_{old})| < \epsilon$ (tolerance)
> 
> **Note:** All $\theta_j$ must be updated **simultaneously** in each iteration using the values from the current step.

d) Suppose we have a dataset of six weeks sales data of KFC/ice cream in thousands of dollars. Apply regression technique to predict the $10^{th}$ and $15^{th}$ week (or $8^{th}$ and $12^{th}$ week). **(2022 TT-2, 2023)**

| Week $(x_i)$ | Sales $(y_i)$ |
| :---: | :---: |
| 1 | 2.1 |
| 2 | 2.3 / 2.4 |
| 3 | 3.1 / 2.0 |
| 4 | 3.6 / 3.1 |
| 5 | 5.1 / 3.6 |
| 6 | 6.3 / 4.2 |

> **Answer:**
> *(Solving for KFC data: x = {1,2,3,4,5,6}, y = {2.1,2.3,3.1,3.6,5.1,6.3})*
> **1. Summary Table**
> 
> | $x_i$ | $y_i$ | $x_i^2$ | $x_i y_i$ |
> | :---: | :---: | :---: | :---: |
> | 1 | 2.1 | 1 | 2.1 |
> | 2 | 2.3 | 4 | 4.6 |
> | 3 | 3.1 | 9 | 9.3 |
> | 4 | 3.6 | 16 | 14.4 |
> | 5 | 5.1 | 25 | 25.5 |
> | 6 | 6.3 | 36 | 37.8 |
> | **$\sum x = 21$** | **$\sum y = 22.5$** | **$\sum x^2 = 91$** | **$\sum xy = 93.7$** |
> 
> **2. Calculate Regression Coefficients**
> Using $n = 6$, $\bar{x} = 21/6 = 3.5$, $\bar{y} = 22.5/6 = 3.75$
> 
> $$b_1 = \frac{n\sum x_i y_i - \sum x_i \sum y_i}{n\sum x_i^2 - (\sum x_i)^2} = \frac{6(93.7) - (21)(22.5)}{6(91) - (21)^2} = \frac{562.2 - 472.5}{546 - 441} = \frac{89.7}{105} \approx 0.854$$
> 
> $$b_0 = \bar{y} - b_1 \bar{x} = 3.75 - (0.854 \times 3.5) = 3.75 - 2.989 \approx 0.761$$
> 
> **3. Regression Equation**
> $$\hat{y} = 0.761 + 0.854x$$
> 
> **4. Predictions**
> - **Week 10:** $\hat{y} = 0.761 + 0.854 \times 10 = 0.761 + 8.54 = \mathbf{9.30}$ (thousand dollars)
> - **Week 15:** $\hat{y} = 0.761 + 0.854 \times 15 = 0.761 + 12.81 = \mathbf{13.57}$ (thousand dollars)

> **Answer (Ice Cream variant: y = {2.1, 2.4, 2.0, 3.1, 3.6, 4.2}):**
> **1. Summary Table**
> 
> | $x_i$ | $y_i$ | $x_i^2$ | $x_i y_i$ |
> | :---: | :---: | :---: | :---: |
> | 1 | 2.1 | 1 | 2.1 |
> | 2 | 2.4 | 4 | 4.8 |
> | 3 | 2.0 | 9 | 6.0 |
> | 4 | 3.1 | 16 | 12.4 |
> | 5 | 3.6 | 25 | 18.0 |
> | 6 | 4.2 | 36 | 25.2 |
> | **$\sum x = 21$** | **$\sum y = 17.4$** | **$\sum x^2 = 91$** | **$\sum xy = 68.5$** |
> 
> **2. Regression Coefficients**
> $$b_1 = \frac{6(68.5) - (21)(17.4)}{6(91) - (21)^2} = \frac{411.0 - 365.4}{105} = \frac{45.6}{105} \approx 0.434$$
> $$b_0 = 2.90 - (0.434 \times 3.5) \approx 1.381$$
> 
> **3. Regression Equation:** $\hat{y} = 1.381 + 0.434x$
> 
> **4. Predictions**
> - **Week 8:** $\hat{y} = 1.381 + 0.434 \times 8 = \mathbf{4.85}$ (thousand dollars)
> - **Week 12:** $\hat{y} = 1.381 + 0.434 \times 12 = \mathbf{6.59}$ (thousand dollars)

e) Build a Salary estimator in terms of Experience... Find $b_0$ and $b_1$ and rewrite the regression equation. **(2022 B Final)**

| Experiences | Salary |
| :---: | :---: |
| 1.1 | 39.21 |
| 1.5 | 43.14 |
| 2.3 | 44.78 |
| 3.1 | 53.32 |
| 3.5 | 62.63 |

> **Answer:**
> Let $x = \text{Experiences}$ and $y = \text{Salary}$. $n = 5$
> 
> **1. Data Table**
> 
> | $x$ | $y$ | $x^2$ | $xy$ |
> | :---: | :---: | :---: | :---: |
> | 1.1 | 39.21 | 1.21 | 43.131 |
> | 1.5 | 43.14 | 2.25 | 64.710 |
> | 2.3 | 44.78 | 5.29 | 102.994 |
> | 3.1 | 53.32 | 9.61 | 165.292 |
> | 3.5 | 62.63 | 12.25 | 219.205 |
> | **$\sum x = 11.5$** | **$\sum y = 243.08$** | **$\sum x^2 = 30.61$** | **$\sum xy = 595.332$** |
> 
> **2. Calculate $b_1$ (Slope)**
> $$b_1 = \frac{n(\sum xy) - (\sum x)(\sum y)}{n(\sum x^2) - (\sum x)^2}$$
> $$b_1 = \frac{5(595.332) - (11.5)(243.08)}{5(30.61) - (11.5)^2}$$
> $$b_1 = \frac{2976.66 - 2795.42}{153.05 - 132.25}$$
> $$b_1 = \frac{181.24}{20.80} \approx \mathbf{8.713}$$
> 
> **3. Calculate $b_0$ (Intercept)**
> $$b_0 = \frac{\sum y - b_1(\sum x)}{n}$$
> $$b_0 = \frac{243.08 - (8.713)(11.5)}{5} = \frac{243.08 - 100.1995}{5} = \frac{142.8805}{5} \approx \mathbf{28.576}$$
> 
> **4. Regression Equation**
> $$\text{Salary} = 28.576 + 8.713 \times \text{Experiences}$$

## 5. Unsupervised Learning - Clustering
**Hierarchical Clustering:**

a) Consider the following one-dimensional data points: **X = {2, 6, 8, 15, 17, 25}** or **X = {4, 9, 13, 1, 16, 7}**. Apply hierarchical clustering (Agglomerative, Single Linkage) to build the dendrogram. **(TT-2, 2023)**

> **Answer:**
> *(Solving for X = {2, 6, 8, 15, 17, 25})*
> **1. Initial Distance Matrix (Step 1):**
> 
> | | 2 | 6 | 8 | 15 | 17 | 25 |
> |---|---|---|---|---|---|---|
> | **2** | 0 | 4 | 6 | 13 | 15 | 23 |
> | **6** | 4 | 0 | 2 | 9 | 11 | 19 |
> | **8** | 6 | 2 | 0 | 7 | 9 | 17 |
> | **15**| 13| 9 | 7 | 0 | 2 | 10 |
> | **17**| 15| 11| 9 | 2 | 0 | 8 |
> | **25**| 23| 19| 17| 10| 8 | 0 |
> 
> **2. Merge & Update (Step 2):**
> Smallest distance is **2** between (6,8) and (15,17). Let's merge (6,8). 
> 
> | | 2 | (6,8) | 15 | 17 | 25 |
> |---|---|---|---|---|---|
> | **2** | 0 | 4 | 13 | 15 | 23 |
> | **(6,8)**| 4 | 0 | 7 | 9 | 17 |
> | **15**| 13| 7 | 0 | 2 | 10 |
> | **17**| 15| 9 | 2 | 0 | 8 |
> | **25**| 23| 17| 10| 8 | 0 |
> 
> **3. Merge & Update (Step 3):**
> Smallest distance is **2** between (15,17). Merge (15,17).
> 
> | | 2 | (6,8) | (15,17) | 25 |
> |---|---|---|---|---|
> | **2** | 0 | 4 | 13 | 23 |
> | **(6,8)**| 4 | 0 | 7 | 17 |
> | **(15,17)**| 13| 7 | 0 | 8 |
> | **25**| 23| 17| 8 | 0 |
> 
> **4. Merge & Update (Step 4):**
> Smallest distance is **4** between 2 and (6,8). Merge them into `(2,(6,8))`.
> 
> | | (2,(6,8)) | (15,17) | 25 |
> |---|---|---|---|
> | **(2,(6,8))**| 0 | 7 | 17 |
> | **(15,17)**| 7 | 0 | 8 |
> | **25**| 17| 8 | 0 |
> 
> **5. Merge & Update (Step 5):**
> Smallest distance is **7** between (2,(6,8)) and (15,17). Merge them into `((2,(6,8)),(15,17))`.
> 
> | | ((2,(6,8)),(15,17)) | 25 |
> |---|---|---|
> | **((2,(6,8)),(15,17))**| 0 | 8 |
> | **25**| 8 | 0 |
> 
> **6. Final Merge:**
> Smallest distance is **8**. All points are clustered.
> 
> **Dendrogram Structure:**
> ```
>        |---------------------------------------| (d=8)
>        |                                       |
>   |----------| (d=7)                           |
>   |          |                                 |
> |--| (d=4)   |--| (d=2)                        |
> |  |--| (d=2)|  |                              |
> 2  6  8     15  17                            25
> ```

> **Answer (for X = {4, 9, 13, 1, 16, 7}):**
> *(Sorted: {1, 4, 7, 9, 13, 16})*
> 
> **Step 1 — Initial Distance Matrix:**
> 
> | | 1 | 4 | 7 | 9 | 13 | 16 |
> |---|---|---|---|---|---|---|
> | **1** | 0 | 3 | 6 | 8 | 12 | 15 |
> | **4** | 3 | 0 | 3 | 5 | 9 | 12 |
> | **7** | 6 | 3 | 0 | 2 | 6 | 9 |
> | **9** | 8 | 5 | 2 | 0 | 4 | 7 |
> | **13** | 12 | 9 | 6 | 4 | 0 | 3 |
> | **16** | 15 | 12 | 9 | 7 | 3 | 0 |
> 
> **Step 2 — Merge (d=2):**
> Smallest distance is **2** between 7 and 9. Merge into `(7,9)`.
> 
> | | 1 | 4 | (7,9) | 13 | 16 |
> |---|---|---|---|---|---|
> | **1** | 0 | 3 | 6 | 12 | 15 |
> | **4** | 3 | 0 | 3 | 9 | 12 |
> | **(7,9)** | 6 | 3 | 0 | 4 | 7 |
> | **13** | 12 | 9 | 4 | 0 | 3 |
> | **16** | 15 | 12 | 7 | 3 | 0 |
> 
> **Step 3 — Merge (d=3):**
> Smallest distance is **3** between 1 and 4. Merge into `(1,4)`.
> 
> | | (1,4) | (7,9) | 13 | 16 |
> |---|---|---|---|---|
> | **(1,4)** | 0 | 3 | 9 | 12 |
> | **(7,9)** | 3 | 0 | 4 | 7 |
> | **13** | 9 | 4 | 0 | 3 |
> | **16** | 12 | 7 | 3 | 0 |
> 
> **Step 4 — Merge (d=3):**
> Smallest distance is **3** between 13 and 16. Merge into `(13,16)`.
> 
> | | (1,4) | (7,9) | (13,16) |
> |---|---|---|---|
> | **(1,4)** | 0 | 3 | 9 |
> | **(7,9)** | 3 | 0 | 4 |
> | **(13,16)** | 9 | 4 | 0 |
> 
> **Step 5 — Merge (d=3):**
> Smallest distance is **3** between (1,4) and (7,9). Merge into `((1,4),(7,9))`.
> 
> | | ((1,4),(7,9)) | (13,16) |
> |---|---|---|
> | **((1,4),(7,9))** | 0 | 4 |
> | **(13,16)** | 4 | 0 |
> 
> **Step 6 — Final Merge (d=4):**
> Merge all into `(((1,4),(7,9)),(13,16))`.
> 
> **Dendrogram:**
> ```
>        |------------------------------------------| (d=4)
>        |                                          |
>   |----------| (d=3)                         |--| (d=3)
>   |          |                               |     |
> |-| (d=3)  |-| (d=2)                        13    16
> |   |      |   |
> 1   4      7   9
> ```

b) Use the distance matrix to construct a Hierarchical Clustering Tree. In addition, show them in cluster. **(2022 A Final)**

| | A | B | C | D | E | F | G |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **B** | | 0 | 6 | 2 | 4 | 10 | 14 |
| **C** | | | 0 | 1 | 9 | 8 | 13 |
| **D** | | | | 0 | 12 | 3 | 9 |
| **E** | | | | | 0 | 2 | 7 |
| **F** | | | | | | 0 | 5 |
| **G** | | | | | | | 0 |

> **Answer:** *(Single Linkage — merge the pair with minimum distance at each step)*
> 
> **Pairwise distances extracted:** d(B,C)=6, d(B,D)=2, d(B,E)=4, d(B,F)=10, d(B,G)=14, d(C,D)=1, d(C,E)=9, d(C,F)=8, d(C,G)=13, d(D,E)=12, d(D,F)=3, d(D,G)=9, d(E,F)=2, d(E,G)=7, d(F,G)=5
> 
> **Step 1 — Merge (d=1):** Min = d(C,D) = **1** → Merge C and D into `(C,D)`
> 
> | | B | (C,D) | E | F | G |
> |---|---|---|---|---|---|
> | **B** | 0 | 2 | 4 | 10 | 14 |
> | **(C,D)** | 2 | 0 | 9 | 3 | 9 |
> | **E** | 4 | 9 | 0 | 2 | 7 |
> | **F** | 10 | 3 | 2 | 0 | 5 |
> | **G** | 14 | 9 | 7 | 5 | 0 |
> 
> *d(B,(C,D)) = min(6,2)=2, d(E,(C,D))=min(9,12)=9, d(F,(C,D))=min(8,3)=3, d(G,(C,D))=min(13,9)=9*
> 
> **Step 2 — Merge (d=2):** Tie: d(B,(C,D))=2 and d(E,F)=2. Merge B with (C,D) → `(B,(C,D))`
> 
> | | (B,(C,D)) | E | F | G |
> |---|---|---|---|---|
> | **(B,(C,D))** | 0 | 4 | 3 | 9 |
> | **E** | 4 | 0 | 2 | 7 |
> | **F** | 3 | 2 | 0 | 5 |
> | **G** | 9 | 7 | 5 | 0 |
> 
> **Step 3 — Merge (d=2):** d(E,F) = **2** → Merge E and F into `(E,F)`
> 
> | | (B,(C,D)) | (E,F) | G |
> |---|---|---|---|
> | **(B,(C,D))** | 0 | 3 | 9 |
> | **(E,F)** | 3 | 0 | 5 |
> | **G** | 9 | 5 | 0 |
> 
> *d((B,(C,D)),(E,F)) = min(4,3)=3, d(G,(E,F))=min(7,5)=5*
> 
> **Step 4 — Merge (d=3):** d((B,(C,D)),(E,F)) = **3** → Merge into `((B,(C,D)),(E,F))`
> 
> | | ((B,(C,D)),(E,F)) | G |
> |---|---|---|
> | **((B,(C,D)),(E,F))** | 0 | 5 |
> | **G** | 5 | 0 |
> 
> **Step 5 — Final Merge (d=5):** Merge all into `(((B,(C,D)),(E,F)),G)`
> 
> **Cluster Summary:**
> 
> | Step | Merged | Distance | Resulting Cluster |
> | :---: | :---: | :---: | :--- |
> | 1 | C, D | 1 | (C,D) |
> | 2 | B, (C,D) | 2 | (B,(C,D)) |
> | 3 | E, F | 2 | (E,F) |
> | 4 | (B,(C,D)), (E,F) | 3 | ((B,(C,D)),(E,F)) |
> | 5 | All, G | 5 | (((B,(C,D)),(E,F)),G) |

**K-Means Clustering:**

c) For the medicine data set, use K-means with Euclidean distance (K=2, C1=A, C2=C). Find memberships and centroids after convergence. **(TT-2, 2022 TT-2)**

| Medicine | Weight | pH-Index |
| :---: | :---: | :---: |
| A | 1 | 1 |
| B | 2 | 1 (or 2) |
| D | 5 | 4 |

> **Answer:**
> *(Solving for initial seeds C1=A, C2=C)*
> **1. Initial Setup**
> Seeds: $C_1 = A(1, 1)$, $C_2 = C(4, 3)$
> 
> **2. Iteration 1:**
> Calculate Euclidean distances from each data point to both centroids.
> 
> | Data Points | Distance to $C_1(1,1)$ | Distance to $C_2(4,3)$ | Assigned Cluster |
> | :--- | :--- | :--- | :--- |
> | A (1,1) | 0.00 | 3.61 | Cluster 1 |
> | B (2,2) | 1.41 | 2.24 | Cluster 1 |
> | C (4,3) | 3.61 | 0.00 | Cluster 2 |
> | D (5,4) | 5.00 | 1.41 | Cluster 2 |
> 
> **New Centroids:**
> - $C_1$: Mean of {(1,1), (2,2)} = (1.5, 1.5)
> - $C_2$: Mean of {(4,3), (5,4)} = (4.5, 3.5)
> 
> **3. Iteration 2:**
> 
> | Data Points | Distance to $C_1(1.5,1.5)$ | Distance to $C_2(4.5,3.5)$ | Assigned Cluster |
> | :--- | :--- | :--- | :--- |
> | A (1,1) | 0.71 | 4.30 | Cluster 1 |
> | B (2,2) | 0.71 | 2.92 | Cluster 1 |
> | C (4,3) | 2.92 | 0.71 | Cluster 2 |
> | D (5,4) | 4.30 | 0.71 | Cluster 2 |
> 
> **Result:** The assigned clusters have not changed from Iteration 1. The algorithm has converged.
> 
> **Final Answers:**
> 1. **Memberships:** Cluster 1 = {A, B}, Cluster 2 = {C, D}
> 2. **Centroids:** $C_1 = (1.5, 1.5)$, $C_2 = (4.5, 3.5)$

d) Use k-means Clustering and Euclidean distance to cluster the following 12 examples into 3 clusters: P={3,4,6,12,18,22,23,32,33,35,36,39}. Initial seeds: 4, 15, 22. Find new clusters, new centers, and draw a line with points. **(2022 A Final)**

> **Answer:**
> **Initial Seeds:** $C_1=4$, $C_2=15$, $C_3=22$
> 
> **Iteration 1 — Assign each point to the nearest center:**
> 
> | Point | Dist to $C_1=4$ | Dist to $C_2=15$ | Dist to $C_3=22$ | Assigned |
> | :---: | :---: | :---: | :---: | :---: |
> | 3 | **1** | 12 | 19 | Cluster 1 |
> | 4 | **0** | 11 | 18 | Cluster 1 |
> | 6 | **2** | 9 | 16 | Cluster 1 |
> | 12 | 8 | **3** | 10 | Cluster 2 |
> | 18 | 14 | **3** | 4 | Cluster 2 |
> | 22 | 18 | 7 | **0** | Cluster 3 |
> | 23 | 19 | 8 | **1** | Cluster 3 |
> | 32 | 28 | 17 | **10** | Cluster 3 |
> | 33 | 29 | 18 | **11** | Cluster 3 |
> | 35 | 31 | 20 | **13** | Cluster 3 |
> | 36 | 32 | 21 | **14** | Cluster 3 |
> | 39 | 35 | 24 | **17** | Cluster 3 |
> 
> **i) New Clusters after Iteration 1:**
> - **Cluster 1:** {3, 4, 6}
> - **Cluster 2:** {12, 18}
> - **Cluster 3:** {22, 23, 32, 33, 35, 36, 39}
> 
> **ii) New Centroids:**
> - $C_1 = (3+4+6)/3 = 13/3 \approx \mathbf{4.33}$
> - $C_2 = (12+18)/2 = \mathbf{15}$
> - $C_3 = (22+23+32+33+35+36+39)/7 = 220/7 \approx \mathbf{31.43}$
> 
> **Number Line (after Epoch 1):**
> ```
> ─────┬──┬──┬──────────┬──┬────────────────────┬──┬──────┬──┬──┬──┬──┬─→
>      3  4  6         12 18                   22 23     32 33 35 36 39
>      ╰────╯           ╰──╯                   ╰────────────────────────╯
>     Cluster 1       Cluster 2                       Cluster 3
>        ▲               ▲                                  ▲
>     C1=4.33         C2=15                           C3=31.43
> ```

e) For the following dataset, apply K-Means Clustering using Euclidean distance metric (K=2, C1=P1, C2=P5). Perform step-by-step until convergence. **(2023)**

| Sample No | X | Y |
| :---: | :---: | :---: |
| P1 | 0.10 | 0.30 |
| P2 | 0.20 | 0.25 |
| P3 | 0.12 | 0.45 |
| P4 | 0.50 | 0.40 |
| P5 | 0.60 | 0.25 |
| P6 | 0.55 | 0.15 |

> **Answer:**
> **1. Initial Setup**
> Seeds: $C_1 = P1(0.10, 0.30)$, $C_2 = P5(0.60, 0.25)$
> 
> **2. Iteration 1:**
> 
> | Point | Coords | Dist to $C_1(0.10,0.30)$ | Dist to $C_2(0.60,0.25)$ | Assigned |
> | :---: | :---: | :---: | :---: | :---: |
> | P1 | (0.10, 0.30) | 0.000 | 0.502 | Cluster 1 |
> | P2 | (0.20, 0.25) | 0.112 | 0.400 | Cluster 1 |
> | P3 | (0.12, 0.45) | 0.151 | 0.520 | Cluster 1 |
> | P4 | (0.50, 0.40) | 0.412 | 0.180 | Cluster 2 |
> | P5 | (0.60, 0.25) | 0.502 | 0.000 | Cluster 2 |
> | P6 | (0.55, 0.15) | 0.474 | 0.112 | Cluster 2 |
> 
> **New Centroids:**
> - $C_1$: Mean of {P1, P2, P3} = $(0.14,\ 0.33)$
> - $C_2$: Mean of {P4, P5, P6} = $(0.55,\ 0.27)$
> 
> **3. Iteration 2:**
> 
> | Point | Coords | Dist to $C_1(0.14,0.33)$ | Dist to $C_2(0.55,0.27)$ | Assigned |
> | :---: | :---: | :---: | :---: | :---: |
> | P1 | (0.10, 0.30) | 0.052 | 0.451 | Cluster 1 |
> | P2 | (0.20, 0.25) | 0.102 | 0.350 | Cluster 1 |
> | P3 | (0.12, 0.45) | 0.118 | 0.467 | Cluster 1 |
> | P4 | (0.50, 0.40) | 0.366 | 0.142 | Cluster 2 |
> | P5 | (0.60, 0.25) | 0.467 | 0.053 | Cluster 2 |
> | P6 | (0.55, 0.15) | 0.449 | 0.116 | Cluster 2 |
> 
> **Result:** Assignments unchanged. Algorithm **converged**.
> 
> **Final Answers:**
> - **Cluster 1:** {P1, P2, P3} | **Cluster 2:** {P4, P5, P6}
> - **Centroids:** $C_1 = (0.14,\ 0.33)$, $C_2 = (0.55,\ 0.27)$

## 6. Unsupervised Learning - Association Rules

a) For the given dataset, apply Apriori algorithm to discover strong association rules and assume that min_support of 2 and min_confidence=70%. Generate association rules from the frequent item sets and calculate the confidence of each rule and identify all the strong association rules. **(2022 A Final)**

| TID | Items |
| :---: | :--- |
| T1 | HotDogs, Buns, KetChups |
| T2 | Hotdogs, Buns |
| T3 | HotDogs, Cokes, Chips |
| T4 | Cokes, Chips |
| T5 | Chips, Ketchups |
| T6 | HotDogs, Cokes, Chips |

> **Answer:**
> min_sup = **2 transactions**, min_confidence = **70%**.
> *(Note: KetChups and Ketchups are treated as the same item.)*
> 
> **1. Frequent 1-Itemsets**
> 
> | Itemset | Transactions | Support | Status |
> | :---: | :--- | :---: | :---: |
> | {HotDogs} | T1, T2, T3, T6 | 4 | **Frequent** |
> | {Buns} | T1, T2 | 2 | **Frequent** |
> | {KetChups} | T1, T5 | 2 | **Frequent** |
> | {Cokes} | T3, T4, T6 | 3 | **Frequent** |
> | {Chips} | T3, T4, T5, T6 | 4 | **Frequent** |
> 
> **2. Frequent 2-Itemsets**
> 
> | Itemset | Transactions | Support | Status |
> | :---: | :--- | :---: | :---: |
> | {HotDogs, Buns} | T1, T2 | 2 | **Frequent** |
> | {HotDogs, Cokes} | T3, T6 | 2 | **Frequent** |
> | {HotDogs, Chips} | T3, T6 | 2 | **Frequent** |
> | {HotDogs, KetChups} | T1 | 1 | Pruned |
> | {Cokes, Chips} | T3, T4, T6 | 3 | **Frequent** |
> | {Buns, KetChups} | T1 | 1 | Pruned |
> | {Buns, Cokes} | — | 0 | Pruned |
> | {KetChups, Chips} | T5 | 1 | Pruned |
> 
> **3. Frequent 3-Itemsets**
> 
> | Itemset | Transactions | Support | Status |
> | :---: | :--- | :---: | :---: |
> | {HotDogs, Cokes, Chips} | T3, T6 | 2 | **Frequent** |
> 
> **4. Association Rules** (confidence ≥ 70%)
> 
> | Rule | Confidence | Status |
> | :--- | :---: | :---: |
> | Buns → HotDogs | 2/2 = **100%** | ✓ Strong |
> | HotDogs → Buns | 2/4 = **50%** | ✗ Weak |
> | HotDogs → Cokes | 2/4 = **50%** | ✗ Weak |
> | Cokes → HotDogs | 2/3 = **67%** | ✗ Weak |
> | HotDogs → Chips | 2/4 = **50%** | ✗ Weak |
> | Chips → HotDogs | 2/4 = **50%** | ✗ Weak |
> | Cokes → Chips | 3/3 = **100%** | ✓ Strong |
> | Chips → Cokes | 3/4 = **75%** | ✓ Strong |
> | HotDogs,Cokes → Chips | 2/2 = **100%** | ✓ Strong |
> | HotDogs,Chips → Cokes | 2/2 = **100%** | ✓ Strong |
> | Cokes,Chips → HotDogs | 2/3 = **67%** | ✗ Weak |
> 
> **Strong Association Rules:**
> 1. **Buns → HotDogs** (100%)
> 2. **Cokes → Chips** (100%)
> 3. **Chips → Cokes** (75%)
> 4. **HotDogs, Cokes → Chips** (100%)
> 5. **HotDogs, Chips → Cokes** (100%)
a) Consider following transactional database, use the ECLAT algorithm to mine frequent itemsets with minimum support count = 3. **(TT-2)**

| TID | Items |
| :---: | :--- |
| A | Tea, Biscuit, Milk |
| B | Tea, Sugar |
| C | Tea, Biscuit, Sugar |
| D | Biscuit, Milk |
| E | Tea, Biscuit, Milk, Sugar |

> **Answer:**
> **1. Vertical Data Format (1-Itemsets):**
> Convert the horizontal transactions into vertical format. Min_sup = 3.
> 
> | Itemset | TID_set | Support |
> | :--- | :--- | :--- |
> | {Tea} | {A, B, C, E} | 4 |
> | {Biscuit} | {A, C, D, E} | 4 |
> | {Milk} | {A, D, E} | 3 |
> | {Sugar} | {B, C, E} | 3 |
> 
> *(All 1-itemsets meet the min_sup = 3 threshold).*
> 
> **2. Generate Frequent 2-Itemsets (by intersecting TIDs):**
> 
> | Itemset | TID_set | Support | Status |
> | :--- | :--- | :--- | :--- |
> | {Tea, Biscuit} | {A, C, E} | 3 | **Frequent** |
> | {Tea, Milk} | {A, E} | 2 | Infrequent |
> | {Tea, Sugar} | {B, C, E} | 3 | **Frequent** |
> | {Biscuit, Milk} | {A, D, E} | 3 | **Frequent** |
> | {Biscuit, Sugar} | {C, E} | 2 | Infrequent |
> | {Milk, Sugar} | {E} | 1 | Infrequent |
> 
> **3. Generate Frequent 3-Itemsets:**
> Intersect the TIDs of frequent 2-itemsets.
> 
> | Itemset | TID_set | Support | Status |
> | :--- | :--- | :--- | :--- |
> | {Tea, Biscuit, Sugar} | {C, E} | 2 | Infrequent |
> | {Tea, Biscuit, Milk} | {A, E} | 2 | Infrequent |
> 
> *(No 3-itemsets meet the min_sup = 3 threshold).*
> 
> **Final Frequent Itemsets:**
> - **1-Itemsets:** {Tea}, {Biscuit}, {Milk}, {Sugar}
> - **2-Itemsets:** {Tea, Biscuit}, {Tea, Sugar}, {Biscuit, Milk}

b) Consider following transactions. Apply the association rules mining to get association rules with min support of 2 and confidence 50%. **(2022 TT-2)**

| TID | Items |
| :---: | :---: |
| A | I1, I2, I3 |
| B | I1, I2 |
| C | I1, I3, I4 |
| D | I2, I3 |
| E | I1, I2, I3, I5 |
| F | I1, I2, I4 |

> **Answer:**
> **1. Frequent 1-Itemsets** (min_sup = 2)
> 
> | Itemset | Transactions | Support | Status |
> | :---: | :--- | :---: | :---: |
> | {I1} | A, B, C, E, F | 5 | **Frequent** |
> | {I2} | A, B, D, E, F | 5 | **Frequent** |
> | {I3} | A, C, D, E | 4 | **Frequent** |
> | {I4} | C, F | 2 | **Frequent** |
> | {I5} | E | 1 | Pruned |
> 
> **2. Frequent 2-Itemsets** (generated from frequent 1-itemsets)
> 
> | Itemset | Transactions | Support | Status |
> | :---: | :--- | :---: | :---: |
> | {I1, I2} | A, B, E, F | 4 | **Frequent** |
> | {I1, I3} | A, C, E | 3 | **Frequent** |
> | {I1, I4} | C, F | 2 | **Frequent** |
> | {I2, I3} | A, D, E | 3 | **Frequent** |
> | {I2, I4} | F | 1 | Pruned |
> | {I3, I4} | C | 1 | Pruned |
> 
> **3. Frequent 3-Itemsets** (generated from frequent 2-itemsets)
> 
> | Itemset | Transactions | Support | Status |
> | :---: | :--- | :---: | :---: |
> | {I1, I2, I3} | A, E | 2 | **Frequent** |
> | {I1, I2, I4} | F | 1 | Pruned |
> | {I1, I3, I4} | C | 1 | Pruned |
> 
> **4. Association Rules** (confidence = support(A∪B) / support(A), threshold ≥ 50%)
> 
> | Rule | Confidence | Status |
> | :--- | :---: | :---: |
> | I1 → I2 | 4/5 = **80%** | ✓ Strong |
> | I2 → I1 | 4/5 = **80%** | ✓ Strong |
> | I1 → I3 | 3/5 = **60%** | ✓ Strong |
> | I3 → I1 | 3/4 = **75%** | ✓ Strong |
> | I4 → I1 | 2/2 = **100%** | ✓ Strong |
> | I1 → I4 | 2/5 = **40%** | ✗ Weak |
> | I2 → I3 | 3/5 = **60%** | ✓ Strong |
> | I3 → I2 | 3/4 = **75%** | ✓ Strong |
> | I1,I2 → I3 | 2/4 = **50%** | ✓ Strong |
> | I1,I3 → I2 | 2/3 = **67%** | ✓ Strong |
> | I2,I3 → I1 | 2/3 = **67%** | ✓ Strong |
> | I1 → I2,I3 | 2/5 = **40%** | ✗ Weak |
> | I2 → I1,I3 | 2/5 = **40%** | ✗ Weak |
> | I3 → I1,I2 | 2/4 = **50%** | ✓ Strong |

c) For the given dataset, apply Apriori algorithm to discover strong association rules. Assume min_support = 2 (or 40%) and min_confidence = 70%. Generate association rules and calculate confidence. **(2022 A Final, 2023)**

| TID | Items |
| :---: | :--- |
| T1 | Burger (HotDogs), Fries (Buns), Coke (KetChups) |
| T2 | Fries (HotDogs), Coke (Buns) |
| T3 | Burger (HotDogs), Nuggets (Cokes, Chips) |
| T4 | Burger (Cokes), Fries (Chips) |
| T5 | Fries (Chips), Nuggets (Ketchups) |
| T6 | Burger (HotDogs), Coke (Cokes), Fries (Chips) |

> **Answer:**
> min_sup = 40% of 6 = 2.4 → threshold = **3 transactions**. min_confidence = **70%**.
> 
> **1. Frequent 1-Itemsets**
> 
> | Itemset | Transactions | Support | Status |
> | :---: | :--- | :---: | :---: |
> | {Burger} | T1, T3, T4, T6 | 4 (67%) | **Frequent** |
> | {Fries} | T1, T2, T4, T5, T6 | 5 (83%) | **Frequent** |
> | {Coke} | T1, T2, T6 | 3 (50%) | **Frequent** |
> | {Nuggets} | T3, T5 | 2 (33%) | Pruned |
> 
> **2. Frequent 2-Itemsets**
> 
> | Itemset | Transactions | Support | Status |
> | :---: | :--- | :---: | :---: |
> | {Burger, Fries} | T1, T4, T6 | 3 (50%) | **Frequent** |
> | {Burger, Coke} | T1, T6 | 2 (33%) | Pruned |
> | {Fries, Coke} | T1, T2, T6 | 3 (50%) | **Frequent** |
> 
> **3. Frequent 3-Itemsets**
> 
> | Itemset | Transactions | Support | Status |
> | :---: | :--- | :---: | :---: |
> | {Burger, Fries, Coke} | T1, T6 | 2 (33%) | Pruned |
> 
> *(No frequent 3-itemsets.)*
> 
> **4. Association Rules** (confidence ≥ 70%)
> 
> | Rule | Confidence | Status |
> | :--- | :---: | :---: |
> | Burger → Fries | 3/4 = **75%** | ✓ Strong |
> | Fries → Burger | 3/5 = **60%** | ✗ Weak |
> | Fries → Coke | 3/5 = **60%** | ✗ Weak |
> | Coke → Fries | 3/3 = **100%** | ✓ Strong |
> 
> **Strong Association Rules:**
> 1. **Burger → Fries** (Confidence: 75%)
> 2. **Coke → Fries** (Confidence: 100%)

## 7. Deep Learning & Artificial Neural Networks
a) Define Artificial Neural Network. Describe the structure of ANN. **(2022 B Final)**

> **Answer:**
> **Artificial Neural Network (ANN)** is a computational model inspired by the structure and functioning of the human biological brain. It consists of interconnected processing units (artificial neurons) that learn to perform tasks by considering examples, without being programmed with task-specific rules.
> 
> **Structure of ANN:**
> 1. **Input Layer:** The first layer that receives the raw data features. It does not perform any computation; it just passes information to the next layer. Number of nodes = number of input features.
> 2. **Hidden Layer(s):** Layers between input and output. Neurons here apply weights, biases, and non-linear activation functions to extract patterns and transform the inputs. Deep learning networks have multiple hidden layers.
> 3. **Output Layer:** The final layer that produces the prediction or result (e.g., a single node for regression/binary classification, or multiple nodes with Softmax for multi-class classification).
> 
> *All neurons across consecutive layers are typically fully connected via weights.*

b) Describe Forward Propagation Process with Figure. **(2022 A Final)**

> **Answer:**
> **Forward Propagation** is the process by which input data is passed through the neural network layer by layer to compute the final output (prediction).
> 
> **Network Structure:**
> ```mermaid
> graph LR
>   I1((x₁)) --> H1((h₁))
>   I1 --> H2((h₂))
>   I2((x₂)) --> H1
>   I2 --> H2
>   H1 --> O((ŷ))
>   H2 --> O
>   subgraph Input Layer
>     I1
>     I2
>   end
>   subgraph Hidden Layer
>     H1
>     H2
>   end
>   subgraph Output Layer
>     O
>   end
> ```
> 
> **Step-by-Step Process:**
> 
> **Step 1 — Input Layer:** Feed the input features $x_1, x_2, \ldots, x_n$ into the network.
> 
> **Step 2 — Weighted Sum at Hidden Layer:**
> For each hidden neuron $j$:
> $$z_j = \sum_{i} w_{ij} x_i + b_j$$
> Where $w_{ij}$ = weight connecting input $i$ to hidden neuron $j$, $b_j$ = bias.
> 
> **Step 3 — Activation Function:**
> Apply a non-linear activation function (e.g., ReLU, Sigmoid, Tanh):
> $$a_j = \sigma(z_j)$$
> This introduces non-linearity and allows the network to learn complex patterns.
> 
> **Step 4 — Output Layer:**
> Repeat Steps 2-3 for the output layer using the hidden layer activations as inputs:
> $$z_{out} = \sum_{j} w_j a_j + b_{out}$$
> $$\hat{y} = \sigma_{out}(z_{out})$$
> 
> **Step 5 — Loss Computation:**
> Compare the prediction $\hat{y}$ with the true label $y$ using a loss function:
> $$L = \frac{1}{2}(\hat{y} - y)^2 \quad \text{(MSE)}$$
> The loss is then used in **Backpropagation** to update the weights.

c) Explain the back propagation algorithm in Neural Network. **(2022 B Final)**

> **Answer:**
> **Backpropagation** (backward propagation of errors) is the core algorithm used to train neural networks. It calculates the gradient of the loss function with respect to the weights, allowing the network to update its weights to minimize the error.
> 
> **How it works:**
> 1. **Forward Pass:** Input data is passed through the network layer by layer to generate a prediction ($\hat{y}$).
> 2. **Loss Calculation:** The prediction is compared against the actual target ($y$) using a Loss Function (e.g., Mean Squared Error) to compute the total error.
> 3. **Backward Pass:** The error is propagated backward from the output layer to the input layer. Using the **Chain Rule of Calculus**, the algorithm computes the partial derivative (gradient) of the loss function with respect to every weight and bias in the network.
> 4. **Weight Update:** The weights are updated in the opposite direction of the gradient using an optimization algorithm (like Gradient Descent): $w = w - \alpha \cdot \frac{\partial Loss}{\partial w}$.
> 5. **Iteration:** This process is repeated for many epochs until the loss is minimized and the network converges.

d) Why Deep Learning is used instead of Machine Learning? **(2022 B Final)**

> **Answer:**
> Deep Learning (DL) is preferred over traditional Machine Learning (ML) in specific scenarios because:
> 1. **Performance with Large Data:** Traditional ML algorithms plateau in performance as data size increases. DL algorithms continue to improve as they are fed more data.
> 2. **Automatic Feature Extraction:** ML requires manual feature engineering by domain experts. DL automatically learns high-level features directly from raw data (e.g., pixels, raw text).
> 3. **Complex Unstructured Data:** DL excels at processing unstructured data like images, audio, and natural language, which are extremely difficult to handle with traditional ML.
> 4. **End-to-End Problem Solving:** DL models solve problems end-to-end (raw input to final output) rather than breaking them down into separate sub-problems.

e) What is Time-Series Analysis? Briefly discuss about following deep learning Algorithms: Convolutional Neural Network (CNN), Recurrent Neural Networks (RNNs). **(2022 A Final)**

> **Answer:**
> **Time-Series Analysis** is the study of data points collected or recorded at successive points in time (e.g., stock prices, weather data, sensor readings) to identify patterns, trends, and make future predictions.
> 
> ---
> **Convolutional Neural Network (CNN):**
> CNN is a deep learning algorithm primarily designed for image/spatial data but also effective for sequential data.
> - **Architecture:** Input Layer → Convolutional Layers (feature extraction using filters/kernels) → Pooling Layers (dimensionality reduction) → Fully Connected Layers → Output
> - **Key Operation:** Convolution — a filter slides over the input to detect local patterns (edges, textures in images; patterns in sequences)
> - **Strengths:** Translation invariance, automatic feature extraction, efficient with shared weights
> - **Applications:** Image classification, object detection, speech recognition, 1D CNNs for time-series
> 
> ---
> **Recurrent Neural Networks (RNNs):**
> RNN is designed for sequential/time-series data where current output depends on previous inputs.
> - **Architecture:** Hidden state $h_t$ is passed from one time step to the next, creating a "memory" of past inputs
> - **Update Rule:** $h_t = \tanh(W_h h_{t-1} + W_x x_t + b)$
> - **Variants:** LSTM (Long Short-Term Memory) and GRU (Gated Recurrent Unit) solve the vanishing gradient problem of vanilla RNNs
> - **Strengths:** Handles variable-length sequences, captures temporal dependencies
> - **Applications:** Language modelling, machine translation, stock price prediction, speech recognition

## 8. Reinforcement Learning
a) Briefly discuss about Q-Learning algorithm of Reinforcement Learning. **(2022 A Final, 2023)**

> **Answer:**
> **Q-Learning** is a model-free Reinforcement Learning algorithm that teaches an agent to find the optimal action-selection policy by learning a Q-table (action-value function).
> 
> **Key Concepts:**
> - **Agent:** The learner/decision maker
> - **State (S):** Current situation of the agent
> - **Action (A):** Choices available at each state
> - **Reward (R):** Feedback received after taking an action
> - **Q-Table:** Stores Q-values for every (State, Action) pair
> 
> **Q-Value Update Rule (Bellman Equation):**
> $$Q(S, A) \leftarrow Q(S, A) + \alpha \left[ R + \gamma \max_{a'} Q(S', a') - Q(S, A) \right]$$
> Where: $\alpha$ = learning rate, $\gamma$ = discount factor, $S'$ = next state
> 
> **Algorithm Steps:**
> 1. Initialize Q-table with zeros for all (S, A) pairs
> 2. Observe current state $S$
> 3. Choose action $A$ (using ε-greedy: explore randomly or exploit best Q)
> 4. Execute $A$, receive reward $R$, observe next state $S'$
> 5. Update Q-table using Bellman equation
> 6. Set $S \leftarrow S'$ and repeat until convergence

## 9. Natural Language Processing (NLP)
a) Why is NLP difficult? / What are the key challenges in Natural Language Processing? **(2022 A Final, 2023)**

> **Answer:**
> **Key Challenges in NLP:**
> 1. **Ambiguity** — Words and sentences can have multiple meanings depending on context. *e.g., "Bank" (river bank vs. financial bank).*
> 2. **Context Understanding** — Machines struggle to understand full context, sarcasm, idioms, and metaphors in long text.
> 3. **Sarcasm and Irony** — Detecting opposite-of-literal meanings is extremely difficult. *e.g., "Oh great, another Monday!"*
> 4. **Multilingualism** — NLP systems must handle thousands of languages, dialects, and scripts with varying grammar rules.
> 5. **Data Sparsity** — Many languages and domains lack sufficient labeled training data for effective model learning.

b) Explain the steps to build an NLP pipeline. **(2023)**

> **Answer:**
> An **NLP Pipeline** is a sequence of processing steps that transforms raw text into structured, machine-understandable data.
> 
> **Steps:**
> 1. **Text Collection / Input** — Gather raw text data from sources (documents, web, speech).
> 2. **Tokenization** — Split text into individual tokens (words, punctuation). *e.g., "I love data" → ["I", "love", "data"]*
> 3. **Stop Word Removal** — Remove common, low-information words (e.g., "the", "is", "and").
> 4. **Stemming / Lemmatization** — Reduce words to their root form. *e.g., "running" → "run"*
> 5. **Part-of-Speech (POS) Tagging** — Label each token with its grammatical role (noun, verb, etc.).
> 6. **Named Entity Recognition (NER)** — Identify and classify named entities (persons, places, dates).
> 7. **Feature Extraction** — Convert text to numerical form (e.g., TF-IDF, Word2Vec, embeddings).
> 8. **Model Training / Classification** — Feed features into an ML/DL model for the target NLP task.

## 10. Recommender Systems
a) Explain how collaborative filtering works. Illustrate with a sample user-item matrix. **(2023)**

> **Answer:**
> **Collaborative Filtering (CF)** is a recommendation technique that makes predictions about a user's preferences based on the preferences of many other users. The core idea: *"Users who agreed in the past tend to agree in the future."*
> 
> **Types:**
> - **User-Based CF:** Find users similar to the target user, recommend what those users liked.
> - **Item-Based CF:** Find items similar to what the target user rated highly, recommend those items.
> 
> **Sample User-Item Matrix (Ratings 1–5, '?' = unknown):**
> 
> | User | Movie A | Movie B | Movie C | Movie D |
> | :---: | :---: | :---: | :---: | :---: |
> | User 1 | 5 | 3 | ? | 1 |
> | User 2 | 4 | ? | 4 | 1 |
> | User 3 | 1 | 1 | ? | 5 |
> | User 4 | ? | 4 | 5 | ? |
> 
> **How it works (User-Based Example):**
> 1. **Compute Similarity** between users using Cosine Similarity or Pearson Correlation:
>    $$\text{similarity}(U_1, U_2) = \frac{\sum r_{1i} \cdot r_{2i}}{\sqrt{\sum r_{1i}^2} \cdot \sqrt{\sum r_{2i}^2}}$$
> 2. **Find K most similar users** to the target user.
> 3. **Predict the missing rating** using weighted average of similar users' ratings:
>    $$\hat{r}_{uC} = \frac{\sum_{v \in N} \text{sim}(u,v) \cdot r_{vC}}{\sum_{v \in N} |\text{sim}(u,v)|}$$
> 4. **Recommend** the highest predicted-rating items the user hasn't seen yet.
> 
> **Advantages:** Simple, no content features needed. **Disadvantages:** Cold-start problem for new users/items.
