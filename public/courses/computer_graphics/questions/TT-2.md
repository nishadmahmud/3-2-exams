**1. Explain the four-way symmetry of a circle.** [2]

> **Answer:**
> Four-way symmetry of a circle means that if a point $(x, y)$ lies on the boundary of a circle centered at the origin, we can easily find three other symmetrical points by reflecting it across the X and Y axes. 
> 
> The four symmetrical points in the four quadrants are:
> - $(x, y)$
> - $(-x, y)$
> - $(-x, -y)$
> - $(x, -y)$
> 
> Because of this symmetrical property, circle drawing algorithms do not need to calculate the entire $360^\circ$ perimeter. Instead, they can compute the points for just one quadrant (from $0^\circ$ to $90^\circ$) and simply mirror those coordinates to fill in the rest of the circle, significantly reducing processing time.

---

**2. Find the transformed coordinates of the triangle A(2,1), B(4,1), C(3,3) by applying the following transformations:** [2+2]<br>
i. Rotate the triangle by 90° about the origin and then translate it by (2, 1).<br>
ii. Translate the triangle by (2, 1) and then rotate it by 90° about the origin.

> **Answer:**
> **i. Rotate 90° about origin, then translate by (2,1):**
> 
> *Step 1: Rotate 90° CCW*
> The rotation matrix formula gives: $x' = -y$ and $y' = x$.
> - $A(2,1) \rightarrow A'(-1, 2)$
> - $B(4,1) \rightarrow B'(-1, 4)$
> - $C(3,3) \rightarrow C'(-3, 3)$
> 
> *Step 2: Translate by (2,1)*
> The translation formula gives: $x'' = x' + 2$ and $y'' = y' + 1$.
> - $A'(-1, 2) \rightarrow A''(-1+2, 2+1) = \mathbf{(1, 3)}$
> - $B'(-1, 4) \rightarrow B''(-1+2, 4+1) = \mathbf{(1, 5)}$
> - $C'(-3, 3) \rightarrow C''(-3+2, 3+1) = \mathbf{(-1, 4)}$
> 
> **ii. Translate by (2, 1), then rotate 90° about origin:**
> 
> *Step 1: Translate by (2,1)*
> - $A(2,1) \rightarrow A'(2+2, 1+1) = (4, 2)$
> - $B(4,1) \rightarrow B'(4+2, 1+1) = (6, 2)$
> - $C(3,3) \rightarrow C'(3+2, 3+1) = (5, 4)$
> 
> *Step 2: Rotate 90° CCW*
> Apply formula: $x'' = -y'$ and $y'' = x'$.
> - $A'(4, 2) \rightarrow A''\mathbf{(-2, 4)}$
> - $B'(6, 2) \rightarrow B''\mathbf{(-2, 6)}$
> - $C'(5, 4) \rightarrow C''\mathbf{(-4, 5)}$

---

**3. using the given figure, classify the line segments ($A-A_1$, $B-C$, $D-E$, $F-F_1$, $G-H$, $I-J$) and apply the Cohen-Sutherland Line Clipping Algorithm.** [4]

<div align="center">
  <img src="/courses/computer_graphics/images/TT-2_q3.svg" alt="Clipping Grid Example" />
</div>

> **Answer:**
> Based on the clipping window, we assign 4-bit region codes (TBRL) to each point:
> 
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
> 
> Case-5: G & H
> -------------------------
> G     0 0 0 0 (zero)
> H     0 0 0 0 (zero)
> -------------------------
> AND   0 0 0 0 (zero)
>       G - H (Accepted)
> 
> Case-6: I & J
> -------------------------
> I     0 1 0 0 (non zero)
> J     0 0 0 0 (zero)
> -------------------------
> AND   0 0 0 0 (zero)
>               (Clipping)
> Clip I - I'
> 
> I'    0 0 0 0
> J     0 0 0 0
> -------------------------
> AND   0 0 0 0
>       I' - J (Accepted)
> ```
> 
> **Final Accepted Lines:**
> - $B' - C'$
> - $F - F_1$
> - $G - H$
> - $I' - J$
