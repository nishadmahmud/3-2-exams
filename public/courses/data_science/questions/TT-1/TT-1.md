# Term Test 1

**1.** Suppose we have a dataset of **weather conditions** and corresponding target variable "**Accident**". So using this dataset we need to decide that whether accident occurs or not on a particular day according to the weather conditions. **(5)**

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

**2.** You are given a dataset containing information about customers and their purchasing behavior. The goal is to predict whether a person will **buy a product (Yes/No)** based on the given attributes. Construct a **decision tree using the CART (Classification and Regression Trees) algorithm** for the dataset provided below. **(6)**

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

**3.** What is Data Scraping, Overfitting and Underfitting? Differentiate among supervised, unsupervised and reinforced learning. **(2+2)**

> **Answer:**
> - **Data Scraping:** Data scraping (or web scraping) is the process of automatically collecting data from websites, documents, APIs, or other digital sources, typically because the data is not available in ready-made datasets.
> - **Overfitting:** Occurs when a machine learning model learns the training data too well, memorizing the noise and random quirks rather than the underlying pattern. The model performs very well on training data but poorly on unseen test data (Low Bias, High Variance).
> - **Underfitting:** Occurs when a machine learning model is too simple to capture the underlying patterns in the data. The model performs poorly on both the training and test datasets (High Bias, Low Variance).
> 
> **Differences:**
> - **Supervised Learning:** The training data contains labeled input/output pairs. The algorithm learns a mapping function from inputs to outputs (e.g., Classification, Regression).
> - **Unsupervised Learning:** The training data contains no labels. The algorithm must find hidden structures, patterns, or groupings within the data on its own (e.g., Clustering, Association rules).
> - **Reinforcement Learning:** Works on a feedback-based process where an AI agent interacts with an environment sequentially. The agent learns by hit-and-trial, receiving positive rewards for good actions and penalties for bad ones, aiming to maximize cumulative long-term reward.
