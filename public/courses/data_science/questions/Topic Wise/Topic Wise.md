# Topic Wise Questions

Here are all the questions from previous exams and term tests, sorted by topic. Duplicate questions have been merged where appropriate.

## 1. Introduction to Data Science & EDA
a) What is Data Science? How is Data Science different from Big Data and Data Analytics? **(2022 A Final, 2023)**

b) What is Exploratory Data Analysis (EDA)? Briefly discuss about the foremost Goals of EDA. **(2022 A Final, 2023)**

c) What is Data Scraping? **(TT-1)**

## 2. Machine Learning Basics & Concepts
a) What do you understand by Over-fitting and Under-fitting? **(2022 A Final, 2022 B Final, TT-1)**

b) Distinguish between Supervised, Unsupervised and Reinforcement Learning. **(2022 A Final, 2022 B Final, TT-1)**

c) What is Feature Engineering? Explain. **(2022 B Final)**

d) Explain Feature Scaling, Normalization and Standardization. **(2022 B Final)**

e) What is a Dummy Variable? Give an example. **(2022 B Final)**

f) What is a Confusion Matrix? **(2022 B Final)**

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

## 3. Supervised Learning - Classification
**Decision Trees (ID3 & CART):**

a) You are given a dataset containing information about customers and their purchasing behavior. Construct a decision tree using the CART algorithm. **(TT-1)**

| Age | Income | Buy |
| :---: | :---: | :---: |
| Young | Low | No |
| Young | High | No |
| Old | Low | Yes |
| Old | High | Yes |

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

d) Draw a decision tree for following dataset. **(2022 TT-1)**

| No | Weather Condition | Engine problem | Accident |
| :---: | :---: | :---: | :---: |
| 1 | Rain | Yes | No |
| 2 | Clear | Yes | No |
| 3 | Rain | Yes | Yes |
| 4 | Rain | No | No |
| 5 | Clear | No | No |
| 6 | Clear | No | Yes |

**Naive Bayes:**

e) State the Bayes Theorem. **(2022 B Final)**

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

**K-Nearest Neighbors (KNN):**

h) How should the value of "k" be selected in KNN classification algorithm? **(2022 B Final)**

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

j) A company wants to classify a new mobile phone based on its Battery Life and Camera Quality using the K-Nearest Neighbors (KNN) classifier. Determine the class of a new phone with Battery Life = 8 hrs and Camera Quality = 7 MP, using K = 3 and Euclidean Distance. **(2023)**

| No | Battery Life (hrs) | Camera Quality (MP) | Class |
| :---: | :---: | :---: | :---: |
| 1 | 6 | 5 | Budget |
| 2 | 9 | 7 | High-End |
| 3 | 8 | 6 | Budget |
| 4 | 7 | 8 | High-End |
| 5 | 10 | 9 | High-End |
| 6 | 5 | 6 | Budget |

**Logistic Regression & SVM:**

k) Explain the types of logistic regression with example. **(2022 B Final)**

l) The dataset of pass or fail in an exam of 5 students is given in the table. Use logistic regression as classifier to answer: i) Calculate the probability of pass for the student who studied 28 hours. ii) At least how many hours student should study to pass with > 95% probability. Assume the model for odds is: **log(odds) = -64+2*hours**. **(2022 A Final)**

| Hours Study | Pass(1)/Fail(0) |
| :---: | :---: |
| 29 | 0 |
| 15 | 0 |
| 33 | 1 |
| 28 | 1 |
| 39 | 1 |

m) Justify - "Support Vector Machine is a large margin classifier". **(2022 B Final)**

## 4. Supervised Learning - Regression
a) Define Multiple Linear Regression. Explain the equation with proper examples. **(2022 B Final)**

b) State and derive the Normal Equation for solving regression problem. **(2022 B Final)**

c) Write down the Gradient Descent Algorithm for Multivariate Regression problems. **(2022 A Final)**

d) Suppose we have a dataset of six weeks sales data of KFC/ice cream in thousands of dollars. Apply regression technique to predict the $10^{th}$ and $15^{th}$ week (or $8^{th}$ and $12^{th}$ week). **(2022 TT-2, 2023)**

| Week $(x_i)$ | Sales $(y_i)$ |
| :---: | :---: |
| 1 | 2.1 |
| 2 | 2.3 / 2.4 |
| 3 | 3.1 / 2.0 |
| 4 | 3.6 / 3.1 |
| 5 | 5.1 / 3.6 |
| 6 | 6.3 / 4.2 |

e) Build a Salary estimator in terms of Experience... Find $b_0$ and $b_1$ and rewrite the regression equation. **(2022 B Final)**

| Experiences | Salary |
| :---: | :---: |
| 1.1 | 39.21 |
| 1.5 | 43.14 |
| 2.3 | 44.78 |
| 3.1 | 53.32 |
| 3.5 | 62.63 |

## 5. Unsupervised Learning - Clustering
**Hierarchical Clustering:**

a) Consider the following one-dimensional data points: **X = {2, 6, 8, 15, 17, 25}** or **X = {4, 9, 13, 1, 16, 7}**. Apply hierarchical clustering (Agglomerative, Single Linkage) to build the dendrogram. **(TT-2, 2023)**

b) Use the distance matrix to construct a Hierarchical Clustering Tree. In addition, show them in cluster. **(2022 A Final)**

| | A | B | C | D | E | F | G |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **B** | | 0 | 6 | 2 | 4 | 10 | 14 |
| **C** | | | 0 | 1 | 9 | 8 | 13 |
| **D** | | | | 0 | 12 | 3 | 9 |
| **E** | | | | | 0 | 2 | 7 |
| **F** | | | | | | 0 | 5 |
| **G** | | | | | | | 0 |

**K-Means Clustering:**

c) For the medicine data set, use K-means with Euclidean distance (K=2, C1=A, C2=C). Find memberships and centroids after convergence. **(TT-2, 2022 TT-2)**

| Medicine | Weight | pH-Index |
| :---: | :---: | :---: |
| A | 1 | 1 |
| B | 2 | 1 (or 2) |
| C | 4 | 3 |
| D | 5 | 4 |

d) Use k-means Clustering and Euclidean distance to cluster the following 12 examples into 3 clusters: P={3,4,6,12,18,22,23,32,33,35,36,39}. Initial seeds: 4, 15, 22. Find new clusters, new centers, and draw a line with points. **(2022 A Final)**

e) For the following dataset, apply K-Means Clustering using Euclidean distance metric (K=2, C1=P1, C2=P5). Perform step-by-step until convergence. **(2023)**

| Sample No | X | Y |
| :---: | :---: | :---: |
| P1 | 0.10 | 0.30 |
| P2 | 0.20 | 0.25 |
| P3 | 0.12 | 0.45 |
| P4 | 0.50 | 0.40 |
| P5 | 0.60 | 0.25 |
| P6 | 0.55 | 0.15 |

## 6. Unsupervised Learning - Association Rules
a) Consider following transactional database, use the ECLAT algorithm to mine frequent itemsets with minimum support count = 3. **(TT-2)**

| TID | Items |
| :---: | :--- |
| A | Tea, Biscuit, Milk |
| B | Tea, Sugar |
| C | Tea, Biscuit, Sugar |
| D | Biscuit, Milk |
| E | Tea, Biscuit, Milk, Sugar |

b) Consider following transactions. Apply the association rules mining to get association rules with min support of 2 and confidence 50%. **(2022 TT-2)**

| TID | Items |
| :---: | :---: |
| A | I1, I2, I3 |
| B | I1, I2 |
| C | I1, I3, I4 |
| D | I2, I3 |
| E | I1, I2, I3, I5 |
| F | I1, I2, I4 |

c) For the given dataset, apply Apriori algorithm to discover strong association rules. Assume min_support = 2 (or 40%) and min_confidence = 70%. Generate association rules and calculate confidence. **(2022 A Final, 2023)**

| TID | Items |
| :---: | :--- |
| T1 | Burger (HotDogs), Fries (Buns), Coke (KetChups) |
| T2 | Fries (HotDogs), Coke (Buns) |
| T3 | Burger (HotDogs), Nuggets (Cokes, Chips) |
| T4 | Burger (Cokes), Fries (Chips) |
| T5 | Fries (Chips), Nuggets (Ketchups) |
| T6 | Burger (HotDogs), Coke (Cokes), Fries (Chips) |

## 7. Deep Learning & Artificial Neural Networks
a) Define Artificial Neural Network. Describe the structure of ANN. **(2022 B Final)**

b) Describe Forward Propagation Process with Figure. **(2022 A Final)**

c) Explain the back propagation algorithm in Neural Network. **(2022 B Final)**

d) Why Deep Learning is used instead of Machine Learning? **(2022 B Final)**

e) What is Time-Series Analysis? Briefly discuss about following deep learning Algorithms: Convolutional Neural Network (CNN), Recurrent Neural Networks (RNNs). **(2022 A Final)**

## 8. Reinforcement Learning
a) Briefly discuss about Q-Learning algorithm of Reinforcement Learning. **(2022 A Final, 2023)**

## 9. Natural Language Processing (NLP)
a) Why is NLP difficult? / What are the key challenges in Natural Language Processing? **(2022 A Final, 2023)**

b) Explain the steps to build an NLP pipeline. **(2023)**

## 10. Recommender Systems
a) Explain how collaborative filtering works. Illustrate with a sample user-item matrix. **(2023)**
