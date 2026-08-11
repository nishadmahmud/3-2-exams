# Term Test 2

**1.** Suppose we have a dataset of Consider the following one-dimensional data points:
**X = {2, 6, 8, 15, 17, 25}**
Each value represents a single data point in 1D space. Apply hierarchical clustering to build the hierarchical clustering dendrogram. **(5)**

> **Answer:**
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


**2.** For the medicine data set, use K-means with the Euclidean distance metric for clustering analysis by setting K=2 and initializing seeds as C1 = A and C2 = C. Answer the questions as follows: 1. What are memberships of two clusters after convergence? 2. What are centroids of two clusters after convergence? **(5)**

| Medicine | Weight | pH-Index |
| :---: | :---: | :---: |
| A | 1 | 1 |
| B | 2 | 2 |
| C | 4 | 3 |
| D | 5 | 4 |

> **Answer:**
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


**3.** Consider following transactional database, use the ECLAT algorithm to mine frequent itemsets from the following transactional database with minimum support count = 3. **(5)**

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
