# Clipping Algorithms

## What is Clipping?
Clipping is the process of cutting out the unnecessary parts of an image. A rectangular boundary called the **clipping window** is defined by its coordinates $(WX_{min}, WY_{min})$ and $(WX_{max}, WY_{max})$.

**Applications of Clipping:**
1. Extracting the desired part of an image.
2. Identifying visible and invisible parts of a 3D object.
3. Useful for drawing operations.
4. Used for deleting, copying, or moving parts of an object.

**Types of Clipping:**
- Point clipping
- Line clipping
- Polygon clipping
- Curve clipping
- Text clipping

---

## 1. Point Clipping
For a point $(X, Y)$ to be visible (i.e., inside the clipping window), it must satisfy all 4 of the following conditions. Otherwise, it is clipped (can't be seen):
1. $X \ge WX_{min}$
2. $X \le WX_{max}$
3. $Y \ge WY_{min}$
4. $Y \le WY_{max}$

---

## 2. Line Clipping
When lines are drawn against a clipping window, they fall into three categories:
1. **Fully visible:** No clipping needed *(Accepted)*.
2. **Not visible:** No clipping needed *(Rejected)*.
3. **Partially visible:** Clipping needed. The unnecessary parts outside the window are cut off.

### Cohen-Sutherland Line Clipping Algorithm
The Cohen-Sutherland algorithm divides the 2D space into **9 regions** and assigns a 4-bit region code to each endpoint of the line. The 4 bits correspond to **TBRL** (Top, Bottom, Right, Left).

**The 9 Region Codes:**

| 1001 (Top-Left) | 1000 (Top) | 1010 (Top-Right) |
| :---: | :---: | :---: |
| **0001 (Left)** | **0000 (Window)** | **0010 (Right)** |
| **0101 (Bottom-Left)** | **0100 (Bottom)** | **0110 (Bottom-Right)** |

#### Algorithm Steps:
**Step 1:** Assign the 4-bit region code for each endpoint of the line.
**Step 2:** If both endpoints have the region code `0000`, the line is completely inside the window and is **accepted**.
**Step 3:** Else, perform a logical `AND` operation between the two region codes:
- **3.1:** If the `AND` result is `NOT 0000` (non-zero), the line is completely outside the window and is **rejected**.
- **3.2:** Else, the line is partially inside and **needs clipping**.
  - **3.2.1:** Choose an endpoint that is outside the window.
  - **3.2.2:** Find the intersection point at the window boundary based on the region code.
  - **3.2.3:** Replace the outside endpoint with the new intersection point and update its region code.
  - **3.2.4:** Repeat Step 2 until the clipped line is fully accepted or rejected.

#### Detailed Example: Cohen-Sutherland Algorithm

<div align="center">
  <img src="/courses/computer_graphics/images/clipping_cohen.svg" alt="Cohen-Sutherland Line Clipping Example" />
</div>

**Mathematical Calculations for the Lines:**

```text
Case-1: P1 & P2
-------------------------
P1    0 0 0 1 (non zero)
P2    0 0 0 1 (non zero)
-------------------------
AND   0 0 0 1 (non zero)
      P1 - P2 (Rejected)

Case-2: P3 & P4
-------------------------
P3    0 0 0 0 (zero)
P4    0 0 0 0 (zero)
-------------------------
AND   0 0 0 0 (zero)
      P3 - P4 (Accepted)

Case-3: P5 & P6
-------------------------
P5    1 0 0 0 (non zero)
P6    0 0 0 0 (zero)
-------------------------
AND   0 0 0 0 (zero)
              (Clipping)
Clip P5 - P5'

P5'   0 0 0 0
P6    0 0 0 0
-------------------------
AND   0 0 0 0
      P5' - P6 (Accepted)

Case-4: P7 & P8
-------------------------
P7    0 0 1 0 (non zero)
P8    0 1 0 0 (non zero)
-------------------------
AND   0 0 0 0 (zero)
              (Clipping)
Clip P7 - P7'

P7'   0 0 0 0 (zero)
P8    0 1 0 0 (non zero)
-------------------------
AND   0 0 0 0 (zero)
              (Clipping)
Clip P8 - P8'

P7'   0 0 0 0
P8'   0 0 0 0
-------------------------
AND   0 0 0 0
      P7' - P8' (Accepted)
```

**Final Accepted Lines:**
- $P_3 - P_4$
- $P_5' - P_6$
- $P_7' - P_8'$

---

## 3. Polygon Clipping

When clipping polygons against a window edge, we evaluate each vertex and edge against the boundary. There are 4 fundamental conditions when moving from vertex $V_1$ to $V_2$:

1. **In $\rightarrow$ In:** Both $V_1$ and $V_2$ are inside. *(Output: $V_2$)*
2. **In $\rightarrow$ Out:** $V_1$ is inside, $V_2$ is outside. *(Output: Intersection point $V_2'$)*
3. **Out $\rightarrow$ In:** $V_1$ is outside, $V_2$ is inside. *(Output: Intersection point $V_1'$ and $V_2$)*
4. **Out $\rightarrow$ Out:** Both $V_1$ and $V_2$ are outside. *(Output: Nothing)*

### Sutherland-Hodgman Polygon Clipping (Step-by-step Example)

Consider a polygon with vertices ABCDE. A polygon is clipped against the 4 boundaries sequentially: **Left $\rightarrow$ Right $\rightarrow$ Top $\rightarrow$ Bottom**.

<div align="center">
  <img src="/courses/computer_graphics/images/2021_q5c.svg" alt="Polygon Clipping Question Diagram" />
</div>

#### 1. Left Clip

<div align="center">
  <img src="/courses/computer_graphics/images/2021_clip_left.svg" alt="Left Clip" />
</div>

| Vertex | Condition | Output |
| :--- | :--- | :--- |
| **AB** | in $\rightarrow$ in | B |
| **BC** | in $\rightarrow$ in | C |
| **CD** | in $\rightarrow$ in | D |
| **DE** | in $\rightarrow$ out | E' |
| **EA** | out $\rightarrow$ in | A', A |

#### 2. Right Clip

<div align="center">
  <img src="/courses/computer_graphics/images/2021_clip_right.svg" alt="Right Clip" />
</div>

| Vertex | Condition | Output |
| :--- | :--- | :--- |
| **A'A** | in $\rightarrow$ in | A |
| **AB** | in $\rightarrow$ in | B |
| **BC** | in $\rightarrow$ out | C' |
| **CD** | out $\rightarrow$ in | D', D |
| **DE'** | in $\rightarrow$ in | E' |
| **E'A'** | in $\rightarrow$ in | A' |

#### 3. Top Clip

<div align="center">
  <img src="/courses/computer_graphics/images/2021_clip_top.svg" alt="Top Clip" />
</div>

| Vertex | Condition | Output |
| :--- | :--- | :--- |
| **A'A** | in $\rightarrow$ out | A'' |
| **AB** | out $\rightarrow$ in | B', B |
| **BC'** | in $\rightarrow$ in | C' |
| **C'D'** | in $\rightarrow$ in | D' |
| **D'D** | in $\rightarrow$ in | D |
| **DE'** | in $\rightarrow$ in | E' |
| **E'A'** | in $\rightarrow$ in | A' |

#### 4. Bottom Clip

<div align="center">
  <img src="/courses/computer_graphics/images/2021_clip_bottom.svg" alt="Bottom Clip" />
</div>

| Vertex | Condition | Output |
| :--- | :--- | :--- |
| **B'B** | in $\rightarrow$ in | B |
| **BC'** | in $\rightarrow$ in | C' |
| **C'D'** | in $\rightarrow$ in | D' |
| **D'D** | in $\rightarrow$ out | D'' |
| **DE'** | out $\rightarrow$ in | E'', E' |
| **E'A'** | in $\rightarrow$ in | A' |
| **A'A''** | in $\rightarrow$ in | A'' |
| **A''B'** | in $\rightarrow$ in | B' |

**Final Clipped Polygon Vertices:** B, C', D', D'', E'', E', A', A'', B'
### Weiler-Atherton Polygon Clipping Algorithm
The Weiler-Atherton algorithm handles concave polygons and polygons with holes by tracing around the boundaries instead of sequential edge clipping.

**Step 1:** First, create a list of intersection points that are in the starting or ending state.<br>
**Step 2:** Create two more lists: one for the object polygon and another for the clip polygon. Fill both lists with intersection points and vertices of the polygon.<br>
**Step 3:** Insert the vertices in both lists in such a way that the intersection point exists between the connected vertices.<br>
**Step 4:** Start from the first vertex of the object polygon. Select the first intersection point as an entering point and follow the same process until we reach the exiting point.<br>
**Step 5:** Move from the clip polygon list to the subject polygon list and search for the finishing intersection point. Repeat the process until we find the entering point.<br>
**Step 6:** Now the polygon is being clipped. Repeat the same process until each point has been visited once.<br>
**Step 7:** Stop.

#### Example: Weiler-Atherton Algorithm

Imagine a triangular **Subject Polygon** ($S_1, S_2, S_3$ in clockwise order) overlapping a rectangular **Clip Polygon** ($C_1, C_2, C_3, C_4$ in clockwise order). They intersect at two points: $I_1$ (where the subject enters the clip region) and $I_2$ (where the subject exits the clip region).

<div align="center">
  <img src="/courses/computer_graphics/images/weiler_atherton_example.svg" alt="Weiler-Atherton Visualization" />
</div>

1. **Generate Lists with Intersections:**
   - **Subject List:** $S_1 \rightarrow S_2 \rightarrow \textbf{I}_1 \text{ (enter)} \rightarrow S_3 \rightarrow \textbf{I}_2 \text{ (exit)} \rightarrow S_1$
   - **Clip List:** $C_1 \rightarrow \textbf{I}_2 \rightarrow C_2 \rightarrow C_3 \rightarrow \textbf{I}_1 \rightarrow C_4 \rightarrow C_1$

2. **Tracing to Find Clipped Area (Intersection):**
   - **Start** at the entering intersection in the Subject List: $I_1$.
   - **Follow Subject List** to the next exiting intersection: $I_1 \rightarrow S_3 \rightarrow I_2$.
   - **Switch to Clip List** at $I_2$ and follow it (in the same direction) until you reach $I_1$ again: $I_2 \rightarrow C_2 \rightarrow C_3 \rightarrow I_1$.
   - **Close Polygon.** The final clipped shape is formed by the vertices: **$I_1, S_3, I_2, C_2, C_3$**.

#### Example 2: Concave Polygon (Multi-Fragment Clipping)

When a concave polygon is clipped, the Weiler-Atherton algorithm elegantly separates it into multiple distinct clipped polygons. 

Consider a concave **Subject Polygon** ($A, B, C, D, E, F, G$) overlapping a rectangular **Clip Polygon** ($C_1, C_2, C_3, C_4$). They intersect at four points: $A'$ (enter), $D'$ (exit), $E'$ (enter), and $F'$ (exit).

<div align="center">
  <img src="/courses/computer_graphics/images/weiler_atherton_example_2.svg" alt="Weiler-Atherton Concave Visualization" />
</div>

1. **Generate Lists with Intersections:**
   - **Subject List:** $A \rightarrow \textbf{A}' \text{ (enter)} \rightarrow B \rightarrow C \rightarrow \textbf{D}' \text{ (exit)} \rightarrow D \rightarrow \textbf{E}' \text{ (enter)} \rightarrow E \rightarrow F \rightarrow \textbf{F}' \text{ (exit)} \rightarrow G \rightarrow A$
   - **Clip List (Clockwise):** $C_1 \rightarrow \textbf{F}' \rightarrow \textbf{E}' \rightarrow \textbf{D}' \rightarrow \textbf{A}' \rightarrow C_2 \rightarrow C_3 \rightarrow C_4 \rightarrow C_1$

2. **Tracing to Find Clipped Area (Intersection):**
   - **Iteration 1:**
     - **Start** at the first entering intersection: $A'$.
     - **Follow Subject List** to next exit: $A' \rightarrow B \rightarrow C \rightarrow D'$.
     - **Switch to Clip List** and follow it clockwise: From $D'$, the next point in the clip list is $A'$. So $D' \rightarrow A'$.
     - **Polygon 1 Complete:** $A', B, C, D'$
   - **Iteration 2:**
     - **Start** at the next unvisited entering intersection: $E'$.
     - **Follow Subject List** to next exit: $E' \rightarrow E \rightarrow F \rightarrow F'$.
     - **Switch to Clip List** and follow it clockwise: From $F'$, the next point in the clip list is $E'$. So $F' \rightarrow E'$.
     - **Polygon 2 Complete:** $E', E, F, F'$

**Final Answer:** The intersection results in two separate polygons: $\{A', B, C, D'\}$ and $\{E', E, F, F'\}$.

---

## 4. Text Clipping
Clipping text depends entirely on the required precision.

1. **All or none string clipping:** If the entire bounding box of the string is inside the window, keep it. Otherwise, drop the entire string.
2. **All or none character clipping:** Evaluate each character individually. If a character's bounding box is fully inside, keep it. Otherwise, drop the character.
3. **Text (Pixel-level) clipping:** The most precise method. Individual pixels of the characters are clipped exactly against the window boundaries, essentially treating the text as an image/bitmap.
