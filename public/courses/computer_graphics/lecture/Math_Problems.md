# Consolidated Mathematical Problems

This file contains all the mathematical and algorithmic step-by-step problems collected from the lecture materials and previous exam papers. They are categorized by topic for easy review.

---

## 1. Color Models & Pixel Calculations

**Problem 1.1: CMY to RGB Conversion** *(Source: TT-1 Exam)*
> **Question:** Given the CMY color model values $C=0.1, M=0.5, Y=0.3$, find the corresponding RGB values and their hexadecimal representation.
> 
> **Answer:**
> 1.  **Convert CMY to RGB (normalized 0 to 1):**
>     $$R = 1 - C = 1 - 0.1 = 0.9$$
>     $$G = 1 - M = 1 - 0.5 = 0.5$$
>     $$B = 1 - Y = 1 - 0.3 = 0.7$$
> 
> 2.  **Scale to 8-bit range (0 to 255):**
>     $$R_{255} = 0.9 \times 255 = 229.5 \approx 230$$
>     $$G_{255} = 0.5 \times 255 = 127.5 \approx 128$$
>     $$B_{255} = 0.7 \times 255 = 178.5 \approx 179$$
> 
> 3.  **Convert to Hexadecimal:**
>     - $230 \rightarrow E6$
>     - $128 \rightarrow 80$
>     - $179 \rightarrow B3$
> 
>     **Final Hex Value:** `#E680B3`

**Problem 1.2: Framebuffer Size Calculation** *(Source: TT-1 Exam)*
> **Question:** A computer graphics system has a resolution of $1280 \times 1024$ and uses 24 bits of color depth. Calculate the size of the framebuffer in Megabytes (MB).
> 
> **Answer:**
> 1.  **Calculate total pixels:**
>     $$1280 \times 1024 = 1,310,720 \text{ pixels}$$
> 
> 2.  **Calculate total bits:**
>     $$\text{Total bits} = 1,310,720 \times 24 = 31,457,280 \text{ bits}$$
> 
> 3.  **Convert to Bytes:**
>     $$\text{Total Bytes} = \frac{31,457,280}{8} = 3,932,160 \text{ Bytes}$$
> 
> 4.  **Convert to Megabytes (MB):**
>     $$\text{Total MB} = \frac{3,932,160}{1024 \times 1024} = \frac{3,932,160}{1,048,576} = 3.75 \text{ MB}$$

---

## 2. Line & Circle Drawing Algorithms

### DDA (Digital Differential Analyzer)

**Problem 2.1: DDA Line Generation** *(Source: Lecture 3)*
> **Question:** Using the DDA algorithm, draw a line from $(1,7)$ to $(11,17)$.
> 
> **Answer:**
> 1. **Calculate Differences:**
>    $\Delta x = 11 - 1 = 10$
>    $\Delta y = 17 - 7 = 10$
> 2. **Determine Steps:**
>    $\text{steps} = \max(|\Delta x|, |\Delta y|) = 10$
> 3. **Calculate Increments (Case 2: $m = 1$):**
>    $x_{p+1} = x_p + 1$
>    $y_{p+1} = y_p + 1$
> 
> | Step | $x$ | $y$ | Plot Points |
> | :--- | :--- | :--- | :--- |
> | Initial | 1 | 7 | (1, 7) |
> | 1 | 2 | 8 | (2, 8) |
> | 2 | 3 | 9 | (3, 9) |
> | ... | ... | ... | ... |
> | 10 | 11 | 17 | (11, 17) |

**Problem 2.2: DDA Line Generation** *(Source: 2021 Exam)*
> **Question:** Calculate the pixel positions along a straight line between $A(10,12)$ and $B(20,20)$ using DDA algorithm.
> 
> **Answer:**
> 1. **Calculate Differences:**
>    $\Delta x = 20 - 10 = 10$
>    $\Delta y = 20 - 12 = 8$
> 2. **Determine Steps:**
>    $\text{steps} = \max(|\Delta x|, |\Delta y|) = 10$
> 3. **Calculate Increments (Case 1: $m < 1$):**
>    $m = \Delta y / \Delta x = 8 / 10 = 0.8$
>    $x_{p+1} = x_p + 1$
>    $y_{p+1} = y_p + 0.8$
> 
> | Step | $x$ | $y$ | Plot Points |
> | :--- | :--- | :--- | :--- |
> | Initial | 10 | 12 | (10, 12) |
> | 1 | 11 | 12.8 | (11, 13) |
> | 2 | 12 | 13.6 | (12, 14) |
> | 3 | 13 | 14.4 | (13, 14) |
> | 4 | 14 | 15.2 | (14, 15) |
> | 5 | 15 | 16.0 | (15, 16) |
> | 6 | 16 | 16.8 | (16, 17) |
> | 7 | 17 | 17.6 | (17, 18) |
> | 8 | 18 | 18.4 | (18, 18) |
> | 9 | 19 | 19.2 | (19, 19) |
> | 10 | 20 | 20.0 | (20, 20) |

### Bresenham's Line Algorithm

**Problem 2.3: Bresenham's Line Generation** *(Source: TT-1 Exam)*
> **Question:** Apply Bresenham's Line Algorithm to trace the line from $A(-2, -5)$ to $B(1, -1)$.
> 
> **Answer:**
> 1. **Differences:** $\Delta x = 1 - (-2) = 3$, $\Delta y = -1 - (-5) = 4$
> 2. **Initial Decision Parameter:** $P_0 = 2\Delta y - \Delta x = 2(4) - 3 = 8 - 3 = 5$
> 
> *Note: Since $\Delta y > \Delta x$, this line has a slope $m > 1$. In this case, we swap the roles of X and Y in the standard algorithm. Y increments constantly, and X is conditionally incremented based on the parameter.*
> 
> **Swapped Logic (m > 1):**
> - $P_K = 2\Delta x - \Delta y = 2(3) - 4 = 2$
> - If $P_K < 0$: $Y$ increases, $X$ same, $P_{K+1} = P_K + 2\Delta x$
> - If $P_K \ge 0$: $Y$ increases, $X$ increases, $P_{K+1} = P_K + 2\Delta x - 2\Delta y$
> 
> | $k$ | $P_K$ | $P_{K+1}$ Formula | New $P_{K+1}$ | $X$ | $Y$ | Plot Point |
> | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
> | Initial | | | | -2 | -5 | **(-2, -5)** |
> | 0 | $2 \ge 0$ | $P_K + 2(3) - 2(4)$ | $2 + 6 - 8 = 0$ | -1 | -4 | **(-1, -4)** |
> | 1 | $0 \ge 0$ | $P_K + 2(3) - 2(4)$ | $0 + 6 - 8 = -2$ | 0 | -3 | **(0, -3)** |
> | 2 | $-2 < 0$ | $P_K + 2(3)$ | $-2 + 6 = 4$ | 0 | -2 | **(0, -2)** |
> | 3 | $4 \ge 0$ | $P_K + 2(3) - 2(4)$ | $4 + 6 - 8 = 2$ | 1 | -1 | **(1, -1)** |

### Bresenham's Circle Algorithm

**Problem 2.4: Bresenham's Circle Generation** *(Source: 2021 Exam, TT-1 Exam)*
> **Question:** Given the center point coordinates $(10, 10)$ and radius as 10, generate all the points to form a circle using Bresenham's Circle drawing algorithm.
> 
> **Answer:**
> We first calculate points for a circle centered at the origin $(0, 0)$ with $r=10$, and then translate all points by adding $(10, 10)$.
> 
> **Step 1:** Initial decision parameter $d = 3 - 2r = 3 - 2(10) = -17$.
> **Step 2:** Start at $(x, y) = (0, 10)$.
> 
> **Iteration Table (First Octant):**
> | $k$ | $d$ condition | $(x_k, y_k)$ | Next $d$ calculation |
> | :---: | :---: | :---: | :--- |
> | 0 | $d = -17 < 0$ | (0, 10) | $d = -17 + 4(0) + 6 = -11$ |
> | 1 | $d = -11 < 0$ | (1, 10) | $d = -11 + 4(1) + 6 = -1$ |
> | 2 | $d = -1 < 0$ | (2, 10) | $d = -1 + 4(2) + 6 = 13$ |
> | 3 | $d = 13 \ge 0$ | (3, 10) | $d = 13 + 4(3 - 10) + 10 = -5$ |
> | 4 | $d = -5 < 0$ | (4, 9) | $d = -5 + 4(4) + 6 = 17$ |
> | 5 | $d = 17 \ge 0$ | (5, 9) | $d = 17 + 4(5 - 9) + 10 = 11$ |
> | 6 | $d = 11 \ge 0$ | (6, 8) | $d = 11 + 4(6 - 8) + 10 = 13$ |
> | 7 | $d = 13 \ge 0$ | (7, 7) | Stop condition met ($x \ge y$) |
> 
> **Final translated points for the first octant (adding +10, +10):**
> (10, 20), (11, 20), (12, 20), (13, 20), (14, 19), (15, 19), (16, 18), (17, 17).

---

## 3. Geometric Transformations

### Basic Transformations

**Problem 3.1: Translation** *(Source: 2021 Exam)*
> **Question:** Translate a Square ABCD with the coordinates $A(0, 0), B(5, 0), C(5, 5), D(0, 5)$ by 2 units in X-direction and 3 units in Y-direction.
> 
> **Answer:**
> Translation factors: $t_x = 2$, $t_y = 3$.
> Using equations: $x' = x + t_x$ and $y' = y + t_y$.
> 
> - **A(0, 0)** $\rightarrow A'(0+2, 0+3) = \mathbf{(2, 3)}$
> - **B(5, 0)** $\rightarrow B'(5+2, 0+3) = \mathbf{(7, 3)}$
> - **C(5, 5)** $\rightarrow C'(5+2, 5+3) = \mathbf{(7, 8)}$
> - **D(0, 5)** $\rightarrow D'(0+2, 5+3) = \mathbf{(2, 8)}$

**Problem 3.2: Scaling** *(Source: Lecture 4)*
> **Question:** Given a rectangle with vertices $A(1,1), B(5,1), C(5,4), D(1,4)$. Apply scaling factors $S_x=3$ and $S_y=3$.
> 
> **Answer:**
> The scaling matrix for $S_x=3$ and $S_y=3$ is:
> $$
> \begin{bmatrix} 3 & 0 \\ 0 & 3 \end{bmatrix}
> $$
> Applying this to point A:
> $$
> A' = \begin{bmatrix} 3 & 0 \\ 0 & 3 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 3 \end{bmatrix}
> $$
> Calculating similarly for B, C, and D:
> - $B' = (15, 3)$
> - $C' = (15, 12)$
> - $D' = (3, 12)$

**Problem 3.3: Reflection** *(Source: Lecture 4)*
> **Question:** Reflect the triangle with coordinates $A(3,4), B(6,4), C(5,6)$ across the X-axis.
> 
> **Answer:**
> Reflection Matrix across X-axis:
> $$
> M_x = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}
> $$
> $$
> A' = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} 3 \\ 4 \end{bmatrix} = \begin{bmatrix} 3 \\ -4 \end{bmatrix}
> $$
> $$
> B' = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} 6 \\ 4 \end{bmatrix} = \begin{bmatrix} 6 \\ -4 \end{bmatrix}
> $$
> $$
> C' = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} 5 \\ 6 \end{bmatrix} = \begin{bmatrix} 5 \\ -6 \end{bmatrix}
> $$

### Composite Transformations

**Problem 3.4: Composite Rotation & Translation** *(Source: TT-2 Exam)*
> **Question:** Find the transformed coordinates of the triangle $A(2,1), B(4,1), C(3,3)$ by applying:
> i. Rotate the triangle by 90° about the origin and then translate it by $(2, 1)$.
> ii. Translate the triangle by $(2, 1)$ and then rotate it by 90° about the origin.
> 
> **Answer:**
> **i. Rotate 90° about origin, then translate by (2,1):**
> *Step 1: Rotate 90° CCW* ($x' = -y$ and $y' = x$)
> - $A(2,1) \rightarrow A'(-1, 2)$
> - $B(4,1) \rightarrow B'(-1, 4)$
> - $C(3,3) \rightarrow C'(-3, 3)$
> 
> *Step 2: Translate by (2,1)* ($x'' = x' + 2$ and $y'' = y' + 1$)
> - $A'(-1, 2) \rightarrow A''(-1+2, 2+1) = \mathbf{(1, 3)}$
> - $B'(-1, 4) \rightarrow B''(-1+2, 4+1) = \mathbf{(1, 5)}$
> - $C'(-3, 3) \rightarrow C''(-3+2, 3+1) = \mathbf{(-1, 4)}$
> 
> **ii. Translate by (2, 1), then rotate 90° about origin:**
> *Step 1: Translate by (2,1)*
> - $A(2,1) \rightarrow A'(2+2, 1+1) = (4, 2)$
> - $B(4,1) \rightarrow B'(4+2, 1+1) = (6, 2)$
> - $C(3,3) \rightarrow C'(3+2, 3+1) = (5, 4)$
> 
> *Step 2: Rotate 90° CCW* ($x'' = -y'$ and $y'' = x'$)
> - $A'(4, 2) \rightarrow A''\mathbf{(-2, 4)}$
> - $B'(6, 2) \rightarrow B''\mathbf{(-2, 6)}$
> - $C'(5, 4) \rightarrow C''\mathbf{(-4, 5)}$

**Problem 3.5: Composite Rotation & Translation** *(Source: 2021 Exam)*
> **Question:** Find a transformation of triangle $A(1,0), B(0,1), C(1,1)$ by:
> i. Rotating 45° about the origin and then translating one unit in x and y direction.
> ii. Translating one unit in x and y direction and then rotating 45° about the origin.
> 
> **Answer:**
> **i. Rotate 45° then Translate (1, 1):**
> *Rotation ($\cos(45^\circ) = \sin(45^\circ) = 0.707$):* $x' = x \cdot 0.707 - y \cdot 0.707$, $y' = x \cdot 0.707 + y \cdot 0.707$
> - $A_{rot} = (0.707, 0.707)$
> - $B_{rot} = (-0.707, 0.707)$
> - $C_{rot} = (0, 1.414)$
> 
> *Translation (+1, +1):*
> - $A_{final} = \mathbf{(1.707, 1.707)}$
> - $B_{final} = \mathbf{(0.293, 1.707)}$
> - $C_{final} = \mathbf{(1.0, 2.414)}$
> 
> **ii. Translate (1, 1) then Rotate 45°:**
> *Translation (+1, +1):*
> - $A_{trans} = (2, 1)$
> - $B_{trans} = (1, 2)$
> - $C_{trans} = (2, 2)$
> 
> *Rotation by 45°:*
> - $A_{final} = (2 \cdot 0.707 - 1 \cdot 0.707, 2 \cdot 0.707 + 1 \cdot 0.707) = \mathbf{(0.707, 2.121)}$
> - $B_{final} = (1 \cdot 0.707 - 2 \cdot 0.707, 1 \cdot 0.707 + 2 \cdot 0.707) = \mathbf{(-0.707, 2.121)}$
> - $C_{final} = (2 \cdot 0.707 - 2 \cdot 0.707, 2 \cdot 0.707 + 2 \cdot 0.707) = \mathbf{(0, 2.828)}$

---

## 4. Clipping Algorithms

### Cohen-Sutherland Line Clipping

**Problem 4.1: Cohen-Sutherland Algorithm Application** *(Source: TT-2 Exam)*
> **Question:** Classify the line segments and apply Cohen-Sutherland Line Clipping Algorithm to determine accept/reject conditions.
> 
> <div align="center">
>   <img src="/courses/computer_graphics/images/TT-2_q3.svg" alt="Clipping Grid Example" />
> </div>
> 
> **Answer:**
> ```text
> Case-1: A & A1
> -------------------------
> A     1 0 0 1 (non zero)
> A1    1 0 0 0 (non zero)
> -------------------------
> AND   1 0 0 0 (non zero)
>       A - A1 (Rejected)
> 
> Case-2: B & C
> -------------------------
> B     1 0 0 0 (non zero)
> C     0 1 1 0 (non zero)
> -------------------------
> AND   0 0 0 0 (zero)
>               (Clipping)
> Clip B - B'
> 
> B'    0 0 0 0 (zero)
> C     0 1 1 0 (non zero)
> -------------------------
> AND   0 0 0 0 (zero)
>               (Clipping)
> Clip C - C'
> 
> B'    0 0 0 0
> C'    0 0 0 0
> -------------------------
> AND   0 0 0 0
>       B' - C' (Accepted)
> 
> Case-3: D & E
> -------------------------
> D     0 0 0 1 (non zero)
> E     0 1 0 1 (non zero)
> -------------------------
> AND   0 0 0 1 (non zero)
>       D - E (Rejected)
> 
> Case-4: F & F1
> -------------------------
> F     0 0 0 0 (zero)
> F1    0 0 0 0 (zero)
> -------------------------
> AND   0 0 0 0 (zero)
>       F - F1 (Accepted)
> ```

**Problem 4.2: Cohen-Sutherland Algorithm Application** *(Source: 2021 Exam, Lecture 5)*
> **Question:** Apply Cohen Sutherland Line Clipping algorithm to clip the lines in the given figure.
> 
> <div align="center">
>   <img src="/courses/computer_graphics/images/2021_q4c.svg" alt="2021 Clipping Question Diagram" />
> </div>
> 
> **Answer:**
> ```text
> Case-1: P1 & P2
> -------------------------
> P1    0 0 0 1 (non zero)
> P2    0 0 0 1 (non zero)
> -------------------------
> AND   0 0 0 1 (non zero)
>       P1 - P2 (Rejected)
> 
> Case-2: P3 & P4
> -------------------------
> P3    0 0 0 0 (zero)
> P4    0 0 0 0 (zero)
> -------------------------
> AND   0 0 0 0 (zero)
>       P3 - P4 (Accepted)
> 
> Case-3: P5 & P6
> -------------------------
> P5    1 0 0 0 (non zero)
> P6    0 0 0 0 (zero)
> -------------------------
> AND   0 0 0 0 (zero)
>               (Clipping)
> Clip P5 - P5'
> 
> P5'   0 0 0 0
> P6    0 0 0 0
> -------------------------
> AND   0 0 0 0
>       P5' - P6 (Accepted)
> ```

### Sutherland-Hodgeman Polygon Clipping

**Problem 4.3: Sutherland-Hodgeman Application** *(Source: 2021 Exam, Lecture 5)*
> **Question:** Consider a polygon with vertices ABCDE. Apply Sutherland-Hodgeman polygon clipping algorithm to find the clipped polygon.
> 
> <div align="center">
>   <img src="/courses/computer_graphics/images/2021_q5c.svg" alt="Polygon Clipping Question Diagram" />
> </div>
> 
> **Answer:**
> **1. Left Clip**
> | Vertex | Condition | Output |
> | :--- | :--- | :--- |
> | **AB** | in $\rightarrow$ in | B |
> | **BC** | in $\rightarrow$ in | C |
> | **CD** | in $\rightarrow$ in | D |
> | **DE** | in $\rightarrow$ out | E' |
> | **EA** | out $\rightarrow$ in | A', A |
> 
> **2. Right Clip**
> | Vertex | Condition | Output |
> | :--- | :--- | :--- |
> | **A'A** | in $\rightarrow$ in | A |
> | **AB** | in $\rightarrow$ in | B |
> | **BC** | in $\rightarrow$ out | C' |
> | **CD** | out $\rightarrow$ in | D', D |
> | **DE'** | in $\rightarrow$ in | E' |
> | **E'A'** | in $\rightarrow$ in | A' |
> 
> **3. Top Clip**
> | Vertex | Condition | Output |
> | :--- | :--- | :--- |
> | **A'A** | in $\rightarrow$ out | A'' |
> | **AB** | out $\rightarrow$ in | B', B |
> | **BC'** | in $\rightarrow$ in | C' |
> | **C'D'** | in $\rightarrow$ in | D' |
> | **D'D** | in $\rightarrow$ in | D |
> | **DE'** | in $\rightarrow$ in | E' |
> | **E'A'** | in $\rightarrow$ in | A' |
> 
> **4. Bottom Clip**
> | Vertex | Condition | Output |
> | :--- | :--- | :--- |
> | **B'B** | in $\rightarrow$ in | B |
> | **BC'** | in $\rightarrow$ in | C' |
> | **C'D'** | in $\rightarrow$ in | D' |
> | **D'D** | in $\rightarrow$ out | D'' |
> | **DE'** | out $\rightarrow$ in | E'', E' |
> | **E'A'** | in $\rightarrow$ in | A' |
> | **A'A''** | in $\rightarrow$ in | A'' |
> | **A''B'** | in $\rightarrow$ in | B' |
> 
> **Final Clipped Polygon Vertices:** B, C', D', D'', E'', E', A', A'', B'

---

## 5. Curves

**Problem 5.1: Cubic Bezier Curve Calculation** *(Source: Lecture 6)*
> **Question:** Given the control points $B_0=(0,0), B_1=(3,4), B_2=(5,3),$ and $B_3=(9,0)$, determine the 4 Bezier curve points for $t = 0, t = 0.2, t = 0.7,$ and $t = 1$.
> 
> **Answer:**
> The cubic Bezier polynomial equation is:
> $$P(t) = (1-t)^3 B_0 + 3t(1-t)^2 B_1 + 3t^2(1-t) B_2 + t^3 B_3$$
> 
> **1) For $t = 0$:**
> $P(0) = B_0 = \mathbf{(0,0)}$
> 
> **2) For $t = 1$:**
> $P(1) = B_3 = \mathbf{(9,0)}$
> 
> **3) For $t = 0.2$:**
> - $(1-t) = 0.8$
> - $(1-t)^3 = 0.512$
> - $3t(1-t)^2 = 0.384$
> - $3t^2(1-t) = 0.096$
> - $t^3 = 0.008$
> 
> $X(0.2) = (0.512 \times 0) + (0.384 \times 3) + (0.096 \times 5) + (0.008 \times 9) = 1.704$  
> $Y(0.2) = (0.512 \times 0) + (0.384 \times 4) + (0.096 \times 3) + (0.008 \times 0) = 1.824$  
> **Point at $t=0.2$: $\mathbf{(1.704, 1.824)}$**
> 
> **4) For $t = 0.7$:**
> - $(1-t) = 0.3$
> - $(1-t)^3 = 0.027$
> - $3t(1-t)^2 = 0.189$
> - $3t^2(1-t) = 0.441$
> - $t^3 = 0.343$
> 
> $X(0.7) = (0.027 \times 0) + (0.189 \times 3) + (0.441 \times 5) + (0.343 \times 9) = 5.859$  
> $Y(0.7) = (0.027 \times 0) + (0.189 \times 4) + (0.441 \times 3) + (0.343 \times 0) = 2.079$  
> **Point at $t=0.7$: $\mathbf{(5.859, 2.079)}$**
