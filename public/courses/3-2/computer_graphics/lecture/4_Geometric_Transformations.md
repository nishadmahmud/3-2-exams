# Geometric Transformations

**Transformation** is the process of changing an object after it has been created, either in terms of its position, shape, or size.

1. **Change Position / Shape:**
   - Translation
   - Rotation
   - Reflection
2. **Change Size:**
   - Scaling
   - Shearing

---

## 1. Translation
Translation shifts the object from one position to another by adding shift vectors $(T_x, T_y)$ to the original coordinates $(x, y)$.

$$x_{new} = x + T_x$$
$$y_{new} = y + T_y$$

**Matrix Representation:**
$$
\begin{bmatrix} x_{new} \\ y_{new} \end{bmatrix} = \begin{bmatrix} x \\ y \end{bmatrix} + \begin{bmatrix} T_x \\ T_y \end{bmatrix}
$$
Or simply: $P' = P + T$

### Translation Example
**Question:** Translate the triangle with vertices $A(2,2), B(10,12), C(5,5)$ using shift vectors $T_x=5$ and $T_y=6$.

**Solution:**
$$
A' = \begin{bmatrix} 2 \\ 2 \end{bmatrix} + \begin{bmatrix} 5 \\ 6 \end{bmatrix} = \begin{bmatrix} 7 \\ 8 \end{bmatrix}
$$
$$
B' = \begin{bmatrix} 10 \\ 12 \end{bmatrix} + \begin{bmatrix} 5 \\ 6 \end{bmatrix} = \begin{bmatrix} 15 \\ 18 \end{bmatrix}
$$
$$
C' = \begin{bmatrix} 5 \\ 5 \end{bmatrix} + \begin{bmatrix} 5 \\ 6 \end{bmatrix} = \begin{bmatrix} 10 \\ 11 \end{bmatrix}
$$

---

## 2. Rotation
Rotation is a process of changing the angle of the object. Rotation can be clockwise or anti-clockwise. 

Let the coordinate $P$ in polar form be:
$$x = r \cos \phi$$
$$y = r \sin \phi$$

To rotate by an angle $\theta$:
$$x' = r \cos(\phi + \theta) = r \cos\phi \cos\theta - r \sin\phi \sin\theta = x \cos\theta - y \sin\theta$$
$$y' = r \sin(\phi + \theta) = r \sin\phi \cos\theta + r \cos\phi \sin\theta = x \sin\theta + y \cos\theta$$

**Matrix Representation:**
$$
\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}
$$

### Rotation Example
**Question:** Rotate the triangle $A(2,2), B(8,2), C(5,5)$ by $90^\circ$ anti-clockwise.

**Solution:**
For $\theta = 90^\circ$: $\cos(90^\circ) = 0$ and $\sin(90^\circ) = 1$.
The transformation matrix is:
$$
\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}
$$

Applying this to point $A(2,2)$:
$$
A' = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} 2 \\ 2 \end{bmatrix} = \begin{bmatrix} 0(2) + (-1)(2) \\ 1(2) + 0(2) \end{bmatrix} = \begin{bmatrix} -2 \\ 2 \end{bmatrix}
$$

*(Similarly applied to B and C to get the full rotated triangle).*

---

## 3. Reflection
The reflected object is always formed on the other side of a "Mirror" (an axis). The size of the object remains the same.

**Reflection on X-axis:**
$$x_{new} = x_{old}$$
$$y_{new} = -y_{old}$$
$$
\begin{bmatrix} x_{new} \\ y_{new} \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} x_{old} \\ y_{old} \end{bmatrix}
$$

**Reflection on Y-axis:**
$$x_{new} = -x_{old}$$
$$y_{new} = y_{old}$$
$$
\begin{bmatrix} x_{new} \\ y_{new} \end{bmatrix} = \begin{bmatrix} -1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} x_{old} \\ y_{old} \end{bmatrix}
$$

### Reflection Example
**Question:** Given triangle $A(3,4), B(6,4), C(5,6)$. Apply reflection on the X-axis.

**Solution:**
For reflection on the X-axis, the coordinates change as: $x_{new} = x_{old}$ and $y_{new} = -y_{old}$.

$$
A' = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} 3 \\ 4 \end{bmatrix} = \begin{bmatrix} 3 \\ -4 \end{bmatrix}
$$
$$
B' = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} 6 \\ 4 \end{bmatrix} = \begin{bmatrix} 6 \\ -4 \end{bmatrix}
$$
$$
C' = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} 5 \\ 6 \end{bmatrix} = \begin{bmatrix} 5 \\ -6 \end{bmatrix}
$$

<div align="center">
  <img src="/courses/computer_graphics/images/reflection_example.svg" alt="Reflection on X-axis Example" />
</div>

---

## 4. Scaling
Scaling is used to increase or decrease the size of an object. The scaling factors $S_x$ and $S_y$ determine the operation:
- If $S_x, S_y > 1$, the size increases.
- If $S_x, S_y < 1$, the size reduces.

$$x_{new} = x_{old} \times S_x$$
$$y_{new} = y_{old} \times S_y$$

**Matrix Representation:**
$$
\begin{bmatrix} x_{new} \\ y_{new} \end{bmatrix} = \begin{bmatrix} S_x & 0 \\ 0 & S_y \end{bmatrix} \begin{bmatrix} x_{old} \\ y_{old} \end{bmatrix}
$$

### Scaling Example
**Question:** Given a rectangle with vertices $A(1,1), B(5,1), C(5,4), D(1,4)$. Apply scaling factors $S_x=3$ and $S_y=3$.

**Solution:**
The scaling matrix for $S_x=3$ and $S_y=3$ is:
$$
\begin{bmatrix} 3 & 0 \\ 0 & 3 \end{bmatrix}
$$

Applying this to point A:
$$
A' = \begin{bmatrix} 3 & 0 \\ 0 & 3 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 3 \end{bmatrix}
$$

Calculating similarly for B, C, and D:
- $B' = (15, 3)$
- $C' = (15, 12)$
- $D' = (3, 12)$

<div align="center">
  <img src="/courses/computer_graphics/images/scaling_example.svg" alt="Scaling Example" />
</div>

---

## 5. Shearing
Shearing distorts the shape of an object along a specific axis.

**Shearing on X-axis:**
$$x_{new} = x_{old} + (Sh_x \times y_{old})$$
$$y_{new} = y_{old}$$
$$
\begin{bmatrix} x_{new} \\ y_{new} \end{bmatrix} = \begin{bmatrix} 1 & Sh_x \\ 0 & 1 \end{bmatrix} \begin{bmatrix} x_{old} \\ y_{old} \end{bmatrix}
$$

**Shearing on Y-axis:**
$$x_{new} = x_{old}$$
$$y_{new} = y_{old} + (Sh_y \times x_{old})$$
$$
\begin{bmatrix} x_{new} \\ y_{new} \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ Sh_y & 1 \end{bmatrix} \begin{bmatrix} x_{old} \\ y_{old} \end{bmatrix}
$$
