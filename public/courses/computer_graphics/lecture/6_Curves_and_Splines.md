# Curves and Splines

## What is a Curve?
A curve is an infinitely large set of points. Every point on a curve has exactly two neighbors, except for the endpoints which have only one.

**Curve Definitions:**
- Implicit Curve
- Explicit Curve
- Parametric Curve

---

## 1. Bezier Curve
A Bezier curve is a parametric curve defined by a set of control points. The curves are generated under the influence of these control points.

- **Anchor Points:** The first and last control points which the curve exactly passes through.
- **Handles:** The intermediate control points that pull the curve towards them to alter the shape.
- **Convex Hull:** The enclosed boundary formed by connecting all the control points. The Bezier curve is always contained entirely within this convex hull.

<div align="center">
  <img src="/courses/computer_graphics/images/bezier_anatomy.svg" alt="Bezier Curve Anatomy" />
</div>

### Types of Bezier Curves
The degree of the polynomial defining the curve segments is always **one less than** the number of control points.

<div align="center">
  <img src="/courses/computer_graphics/images/bezier_types.svg" alt="Types of Bezier Curves" />
</div>

### Properties of Bezier Curves
1. They always pass exactly through the first and last control points.
2. They are entirely contained within the convex hull of the defining control points.
3. The degree of the polynomial is exactly $n-1$ where $n$ is the number of control points.
4. Moving the control points will alter the overall shape of the curve (global control).

### Mathematical Equation
A Bezier curve $P(t)$ is mathematically defined as:
$$P(t) = \sum_{i=0}^{n} B_i J_{n,i}(t) \quad \text{where } 0 \le t \le 1$$

Where:
- $n = \text{degree of the curve}$
- $B_i = i^{th} \text{ control point}$
- $J_{n,i}(t) = \text{Blending function (Bernstein Polynomial)}$

The Blending function is defined as:
$$J_{n,i}(t) = c(n,i) \cdot t^i \cdot (1-t)^{n-i}$$

Where $c(n,i)$ is the binomial coefficient:
$$c(n,i) = \frac{n!}{i!(n-i)!}$$

### Example Calculation
**Question:** Given the control points $B_0=(0,0), B_1=(3,4), B_2=(5,3),$ and $B_3=(9,0)$, determine the 4 Bezier curve points for $t = 0, t = 0.2, t = 0.7,$ and $t = 1$. Draw the resulting Bezier curve.

**Answer:**
Since there are 4 control points ($n=3$), this is a Cubic Bezier Curve. The polynomial equation is:
$$P(t) = (1-t)^3 B_0 + 3t(1-t)^2 B_1 + 3t^2(1-t) B_2 + t^3 B_3$$

**1) For $t = 0$:**
$P(0) = B_0 = (0,0)$

**2) For $t = 1$:**
$P(1) = B_3 = (9,0)$

**3) For $t = 0.2$:**
- $(1-t) = 0.8$
- $(1-t)^3 = (0.8)^3 = 0.512$
- $3t(1-t)^2 = 3(0.2)(0.8)^2 = 0.6(0.64) = 0.384$
- $3t^2(1-t) = 3(0.2)^2(0.8) = 3(0.04)(0.8) = 0.096$
- $t^3 = (0.2)^3 = 0.008$

$X(0.2) = (0.512 \times 0) + (0.384 \times 3) + (0.096 \times 5) + (0.008 \times 9) = 0 + 1.152 + 0.48 + 0.072 = 1.704$  
$Y(0.2) = (0.512 \times 0) + (0.384 \times 4) + (0.096 \times 3) + (0.008 \times 0) = 0 + 1.536 + 0.288 + 0 = 1.824$  
**Point at $t=0.2$: $(1.704, 1.824)$**

**4) For $t = 0.7$:**
- $(1-t) = 0.3$
- $(1-t)^3 = (0.3)^3 = 0.027$
- $3t(1-t)^2 = 3(0.7)(0.3)^2 = 2.1(0.09) = 0.189$
- $3t^2(1-t) = 3(0.7)^2(0.3) = 3(0.49)(0.3) = 0.441$
- $t^3 = (0.7)^3 = 0.343$

$X(0.7) = (0.027 \times 0) + (0.189 \times 3) + (0.441 \times 5) + (0.343 \times 9) = 0 + 0.567 + 2.205 + 3.087 = 5.859$  
$Y(0.7) = (0.027 \times 0) + (0.189 \times 4) + (0.441 \times 3) + (0.343 \times 0) = 0 + 0.756 + 1.323 + 0 = 2.079$  
**Point at $t=0.7$: $(5.859, 2.079)$**

<div align="center">
  <img src="/courses/computer_graphics/images/bezier_calculation.svg" alt="Bezier Curve Calculation Example" />
</div>

---

## 2. B-Spline Curve
Unlike Bezier curves which have global control (moving one control point changes the entire curve), B-Spline curves provide **local control**. 

A B-spline curve is broken down into smaller segments, where each segment is only influenced by a few specific control points. 

<div align="center">
  <img src="/courses/computer_graphics/images/b_spline.svg" alt="B-Spline Curve" />
</div>

| Segment | Local Control Points |
| :---: | :--- |
| **Segment $Q_1$** | $P_0, P_1, P_2$ |
| **Segment $Q_2$** | $P_1, P_2, P_3$ |
| **Segment $Q_3$** | $P_2, P_3, P_4$ |
| **Segment $Q_4$** | $P_3, P_4, P_5$ |

*(As shown above, moving $P_0$ will only alter segment $Q_1$, leaving $Q_2, Q_3, Q_4$ completely unchanged).*

---

## 3. Other Mentioned Syllabus Topics (Theory)
The following topics are important theoretical concepts in Computer Graphics (often tested for 1 or 2 mark definitions):
1. **Hidden Surface Removal:** Identifying and removing surfaces that are blocked by other opaque surfaces.
2. **Projections:** Mapping 3D objects onto a 2D viewing plane.
   - **Parallel Projection:** Projectors are parallel to each other.
   - **Perspective Projection:** Projectors converge at a single center of projection.
3. **3D Transformations:** Extending 2D translation, scaling, and rotation into the Z-axis.
4. **Painter's Algorithm:** A hidden surface removal algorithm that sorts polygons by depth and draws them from back to front (like a painter painting a canvas).
