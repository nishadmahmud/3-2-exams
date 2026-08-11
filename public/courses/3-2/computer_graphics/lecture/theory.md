# Computer Graphics Theory

---

## 1. Basics of Computer Graphics

### What is Computer Graphics?
**Computer Graphics** is the creation, manipulation, and storage of geometric objects (modeling) and their images (rendering) using computers. It deals with generating images with the aid of computers.

### Applications of Computer Graphics
1.  **Computer Aided Design (CAD):** Used in the design of buildings, automobiles, and aircraft.
2.  **Presentation Graphics:** Generating charts, bar graphs, and other visual representations of data.
3.  **Computer Art:** Used in fine arts and commercial art fields.
4.  **Entertainment:** Creating motion pictures, music videos, and television shows.
5.  **Education and Training:** Flight simulators, computer-generated models of physical systems.
6.  **Visualization:** Scientific visualization (e.g., fluid dynamics) and business visualization.
7.  **Image Processing:** Enhancing existing images and machine vision.
8.  **Graphical User Interfaces (GUI):** Window managers, icons, menus.

### Types of Computer Graphics
Computer graphics can be broadly classified into two categories based on how images are represented:

1.  **Raster Graphics:** Images are represented as a 2D array of pixels (dots). Commonly used for photographs. Examples: JPEG, PNG, GIF. They lose quality when scaled up.
2.  **Vector Graphics:** Images are represented by mathematical equations involving lines, curves, and shapes. They can be scaled infinitely without losing quality. Examples: SVG, EPS.

---

## 2. Core Display Concepts

### Pixel
A **Pixel** (short for Picture Element) is the smallest addressable unit on a display screen. An image on a screen is made up of thousands of these tiny colored dots arranged in a grid.

### Resolution
**Resolution** refers to the number of distinct pixels in each dimension that can be displayed on a screen. It is typically expressed as `width × height` (e.g., $1920 \times 1080$). Higher resolution means more pixels, which results in sharper, more detailed images.

### Aspect Ratio
**Aspect Ratio** is the proportional relationship between the width and the height of an image or screen. It is usually expressed as two numbers separated by a colon, such as $16:9$ (standard widescreen TV) or $4:3$ (older monitors).

---

## 3. Color Models

A color model is an abstract mathematical model describing the way colors can be represented as tuples of numbers.

### RGB Color Model (Additive)
*   **Primary Colors:** Red, Green, Blue.
*   **Concept:** It is an **additive** color model where light of the primary colors is added together in various proportions to produce a broad spectrum of colors.
*   **Usage:** Used for electronic displays like CRT, LCD monitors, TVs, and mobile screens.
*   **Combination:** Red + Green + Blue = White light. (0,0,0) represents Black.

<div align="center">
  <img src="/courses/computer_graphics/images/color_cube.svg" alt="RGB Color Cube" style="max-width: 400px; width: 100%;" />
</div>

### CMYK Color Model (Subtractive)
*   **Primary Colors:** Cyan, Magenta, Yellow, Key (Black).
*   **Concept:** It is a **subtractive** color model used in color printing. It works by partially or entirely masking colors on a lighter (usually white) background. The ink subtracts (absorbs) light.
*   **Usage:** Used in printers and the printing industry.
*   **Combination:** Cyan + Magenta + Yellow = Black (theoretically, but practically it produces a muddy brown, which is why actual Black ink 'K' is added).

---

## 4. Scan Conversion Methods

### What is Scan Conversion?
**Scan Conversion** (or Rasterization) is the process of converting continuous geometric primitives (like lines, circles, polygons) defined by mathematical equations into a discrete set of pixels that can be drawn on a raster display.

### Types of Scan Conversion Algorithms

**1. Line Drawing Algorithms:**
Used to determine which pixels best approximate a mathematically straight line.
*   **DDA (Digital Differential Analyzer) Algorithm**
*   **Bresenham’s Line Drawing Algorithm**

**2. Circle Drawing Algorithms:**
Used to approximate the boundary of a circle using pixels.
*   **Bresenham’s Circle Drawing Algorithm**
*   **Mid-Point Circle Algorithm**

---

## 5. Difference Between DDA and Bresenham's Algorithm

| Feature | DDA Algorithm | Bresenham's Algorithm |
| :--- | :--- | :--- |
| **Arithmetic** | Uses floating-point arithmetic (real numbers). | Uses only integer arithmetic. |
| **Speed** | Slower due to floating-point operations. | Faster because it uses integer addition/subtraction. |
| **Accuracy** | Less accurate due to rounding errors. | Highly accurate. |
| **Complexity** | Easy to understand and implement. | Slightly more complex mathematically. |
| **Efficiency** | Less efficient. | More efficient and optimal. |
| **Operations** | Involves division and rounding functions. | Involves simple addition, subtraction, and bit shifting. |

---

## 6. Display Technologies

### CRT (Cathode Ray Tube) Monitor
A CRT uses a vacuum tube containing an electron gun. The gun emits a beam of electrons that are accelerated and deflected by magnetic fields. When the electrons strike the phosphor-coated screen, the phosphors glow, emitting visible light.

<div align="center">
  <img src="/courses/computer_graphics/images/crt_diagram.svg" alt="CRT Monitor" style="max-width: 500px; width: 100%;" />
</div>

### LCD (Liquid Crystal Display) Monitor
An LCD uses the light-modulating properties of liquid crystals combined with polarizers. Liquid crystals do not emit light directly; they use a backlight. Electrical currents manipulate the liquid crystals to allow varying amounts of light to pass through specific color filters (RGB) to form pixels.

<div align="center">
  <img src="/courses/computer_graphics/images/lcd_diagram.svg" alt="LCD Monitor" style="max-width: 500px; width: 100%;" />
</div>

---

## 7. Geometric Transformations (2D)

**Transformation** is the process of altering the coordinate descriptions of objects. It changes the size, position, or orientation of an object.

### Why do we use them?
*   To manipulate and view objects from different angles and positions.
*   To create animations by continuously applying small transformations.
*   To assemble complex objects from simpler primitives (scaling, positioning).

### Basic 2D Transformations

1.  **Translation:**
    *   **Definition:** Moving an object from one position to another in a straight-line path.
    *   **Mechanism:** Adds translation distances $t_x$ and $t_y$ to the original coordinates $(x,y)$ to get the new coordinates $(x', y')$.
2.  **Rotation:**
    *   **Definition:** Repositioning an object along a circular path in the XY plane.
    *   **Mechanism:** Requires a rotation angle $\theta$ and a pivot point. The object is rotated around the pivot point by the specified angle.
3.  **Scaling:**
    *   **Definition:** Altering the size of an object (enlarging or shrinking).
4.  **Reflection:**
    *   **Definition:** Producing a mirror image of an object.
    *   **Mechanism:** The mirror image is generated relative to an axis of reflection (e.g., x-axis, y-axis, or a line $y=x$).

---

## 8. 3D Transformations Theory

3D transformations are extensions of 2D transformations into the third dimension (Z-axis). To represent 3D transformations mathematically, we use $4 \times 4$ Homogeneous Coordinate matrices.

*   **3D Translation:** Moving an object in 3D space requires three translation distances: $t_x, t_y$, and $t_z$.
*   **3D Scaling:** Resizing an object along the X, Y, and Z axes using scaling factors $S_x, S_y, S_z$.
*   **3D Rotation:** More complex than 2D. An object can be rotated about any axis in 3D space:
    *   **Z-axis rotation:** Similar to 2D rotation.
    *   **X-axis rotation:** Y and Z coordinates change.
    *   **Y-axis rotation:** X and Z coordinates change.
    *   **General axis rotation:** Rotating around an arbitrary line in 3D space requires a sequence of translations and coordinate-axis rotations.

---

## 9. Clipping Algorithms

### What is Clipping?
Clipping is a procedure that identifies the portions of a picture that are either inside or outside of a specified region of space. The region against which an object is to be clipped is called the **clip window**.

### Types of Clipping
1.  **Point Clipping:** Determining whether a point lies inside a clip window.
2.  **Line Clipping:** Cutting off the portions of a line that are outside the clip window (e.g., Cohen-Sutherland Algorithm).
3.  **Polygon Clipping:** Clipping the edges of a polygon and creating a new set of vertices that describe the clipped polygon (e.g., Sutherland-Hodgman, Weiler-Atherton).
4.  **Curve Clipping:** Trimming non-linear curves.
5.  **Text Clipping:** Dealing with characters and strings that partially cross the boundary of a clip window.

### Applications of Clipping
*   Viewing specific parts of a large scene (zooming in).
*   Extracting part of a drawing for editing.
*   Protecting parts of the screen (e.g., menus) from being overwritten.
*   Hidden surface removal in 3D graphics.

---

## 10. Text Clipping Definition & Types

**Text Clipping** is the process of handling text strings that intersect the boundary of a clipping window. Depending on the level of precision required, there are three types of text clipping:

1.  **All-or-none String Clipping:**
    *   **Method:** Evaluate the bounding box of the entire text string.
    *   **Action:** If the entire bounding box is inside the window, keep the string. If any part is outside, drop the entire string. Fast but imprecise.
2.  **All-or-none Character Clipping:**
    *   **Method:** Evaluate the bounding box of each individual character in the string.
    *   **Action:** If a character is fully inside the window, keep it. If it intersects the boundary or is outside, drop that specific character.
3.  **Text (Pixel-level) Clipping:**
    *   **Method:** Evaluate individual pixels of the characters.
    *   **Action:** Treat the text exactly like lines or polygons. Only the specific pixels (parts of a character) that are inside the window are drawn. Parts outside are mathematically sliced off. This is the most precise but computationally expensive method.

---

## 11. 3D Graphics: Projections & Hidden Surfaces

### Projections
Projection is the process of transforming a 3D object onto a 2D viewing plane (like a computer screen).

1.  **Parallel Projection:**
    *   Coordinate positions are transformed to the view plane along parallel lines.
    *   The relative proportions of objects are preserved, regardless of their distance from the camera.
    *   Used in engineering and architectural drawings.
2.  **Perspective Projection:**
    *   Object positions are transformed to the view plane along lines that converge to a single point (the Center of Projection).
    *   Objects further away appear smaller. This mimics how the human eye sees the world.
    *   Used in games and realistic rendering.

### Hidden Surface Removal
When viewing a 3D scene, objects in the front obscure objects in the back. **Hidden Surface Removal** (or Visible Surface Determination) is the process of identifying which surfaces and parts of surfaces are visible from a certain viewing angle.

### Z-Buffer (Depth Buffer) Algorithm
The Z-buffer algorithm is a simple and widely used image-space algorithm for hidden surface removal.

**How it works:**
1.  Two buffers are used:
    *   **Frame Buffer:** Stores the color values for each pixel $(x, y)$.
    *   **Z-Buffer (Depth Buffer):** Stores the depth (Z-value) for each pixel. It is initialized to the maximum depth (farthest away).
2.  As polygons are rasterized (scan-converted), the algorithm calculates the depth (Z) of the polygon at that specific $(x, y)$ pixel.
3.  **The Test:** It compares the newly calculated Z-value with the current Z-value stored in the depth buffer for that pixel.
    *   If the new Z-value is *closer* to the viewer than the stored Z-value, it means this polygon is in front.
    *   The algorithm then updates the Z-buffer with the new depth and updates the Frame Buffer with the color of the new polygon.
    *   If it is further away, the pixel is ignored (it's hidden).
