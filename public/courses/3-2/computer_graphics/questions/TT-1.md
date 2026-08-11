**1. What is the Subtractive Color Model? Explain.** [2]

> **Answer:**
> The Subtractive Color Model works on the principle of subtracting (absorbing) specific wavelengths of light from white light. It is primarily used in printing, painting, and other physical mediums where pigments or dyes are applied to a white surface (like paper).
> 
> When white light hits the pigmented surface, the pigment absorbs certain colors and reflects the rest back to our eyes. The primary colors in this model are **Cyan, Magenta, and Yellow (CMY)**. 
> - Cyan absorbs Red (reflects Green and Blue).
> - Magenta absorbs Green (reflects Red and Blue).
> - Yellow absorbs Blue (reflects Red and Green).
> When all three primary colors are mixed together in equal amounts, they absorb all light, producing **Black** (in practice, it often produces a dark brown/gray, so a dedicated Black key (K) is used in the CMYK model for true black).

---

**2. An image has a resolution of 300 pixels per inch (ppi) and its size is 4 inches × 6 inches.** [3]<br>
i) Calculate the total number of pixels in the image.<br>
ii) Find the aspect ratio of the image.

> **Answer:**
> **i) Total number of pixels:**
> - Width in pixels = Width in inches × Resolution = 4 inches × 300 ppi = **1,200 pixels**
> - Height in pixels = Height in inches × Resolution = 6 inches × 300 ppi = **1,800 pixels**
> - Total Pixels = Width × Height = 1,200 × 1,800 = **2,160,000 pixels**
> 
> **ii) Aspect ratio:**
> - The aspect ratio is the ratio of the width to the height of the image.
> - Ratio = Width : Height = 4 : 6
> - Simplifying the fraction, we get **2:3**.

---

**3. Using the Midpoint Line Drawing Algorithm, determine the points of a line from (2, 3) to (10, 7). Show the calculation of the decision parameter at each step and draw the line.** [5]

> **Answer:**
> Given start point $(x_0, y_0) = (2, 3)$ and end point $(x_n, y_n) = (10, 7)$.
> 
> **Step 1: Calculate Differences**
> - $\Delta x = x_n - x_0 = 10 - 2 = 8$
> - $\Delta y = y_n - y_0 = 7 - 3 = 4$
> 
> **Step 2: Initial Decision Parameter**
> - $D_{initial} = 2\Delta y - \Delta x = 2(4) - 8 = 8 - 8 = \mathbf{0}$
> 
> **Step 3: Calculate Increments**
> - If $D_k < 0$, we add $2\Delta y = 2(4) = \mathbf{8}$
> - If $D_k \ge 0$, we add $2(\Delta y - \Delta x) = 2(4 - 8) = 2(-4) = \mathbf{-8}$
> 
> **Step 4: Step-by-step Calculation Table**
> 
> | $k$ | $D_k$ | $x_{k+1}$ | $y_{k+1}$ | $D_{new}$ calculation |
> |---|---|---|---|---|
> | 0 | 0 | 3 | 4 | $0 + (-8) = -8$ |
> | 1 | -8 | 4 | 4 | $-8 + 8 = 0$ |
> | 2 | 0 | 5 | 5 | $0 + (-8) = -8$ |
> | 3 | -8 | 6 | 5 | $-8 + 8 = 0$ |
> | 4 | 0 | 7 | 6 | $0 + (-8) = -8$ |
> | 5 | -8 | 8 | 6 | $-8 + 8 = 0$ |
> | 6 | 0 | 9 | 7 | $0 + (-8) = -8$ |
> | 7 | -8 | 10 | 7 | $-8 + 8 = 0$ |
> 
> **The plotted points are:** 
> (2, 3), (3, 4), (4, 4), (5, 5), (6, 5), (7, 6), (8, 6), (9, 7), (10, 7)
> 
> **Line Diagram:**
> <div align="center">
>   <img src="/courses/computer_graphics/images/tt1_q3_line.svg" alt="Line Drawing Grid" />
> </div>
