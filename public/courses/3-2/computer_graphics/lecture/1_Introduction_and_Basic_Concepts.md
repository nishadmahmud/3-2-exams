# Introduction to Computer Graphics

## What is Computer Graphics?
It is the use of computers to display and manipulate information in graphical or pictorial form, either on a visual display unit or via a printer or plotter. 

- It is an art of drawing pictures, lines, charts, etc. on a computer screen by using a programming language.
- In computer graphics, objects are presented as a collection of discrete picture elements (**pixel** or **pel**).

### Types of Computer Graphics
1. **Non-interactive or passive**
2. **Interactive or active**

*(Note: These are commonly implemented using environments like OpenGL + GLUT).*

---

## Basic Concepts

### Pixel
**Pixel** is the basic building block of graphics display. We can call it a "picture element". A pixel is the smallest size of object or color spot that can be displayed and addressed on a screen.
> Pixel $\rightarrow$ Picture Element

### Image Resolution
The distance from one pixel to the next pixel is called the image resolution. The unit is often called **ppi** (pixels per inch).
- Example: $600 \times 600$ ppi with a round pixel or dot.

The number of pixels per unit length and width is referred to as resolution.

### Aspect Ratio
The aspect ratio of an image is the ratio of the number of x-pixels to the number of y-pixels.

**Example:**
- Resolution = $1024 \times 768$
- Aspect ratio = $1024 : 768 = 4:3$

---

## Mathematical Examples

**Example 1: Total Pixels**
> **Question:** For a $3 \times 2$ inch image with a resolution of $300$ pixels per inch, count the total pixels.

**Solution:**
$$x\text{-pixels} = 3 \times 300 = 900$$
$$y\text{-pixels} = 2 \times 300 = 600$$
$$\text{Total pixels} = 900 \times 600 = 540,000$$

**Example 2: Image Size**
> **Question:** Compute the physical size of a $640 \times 480$ image with a resolution of $240$ pixels per inch.

**Solution:**
$$\text{Width} = \frac{640}{240} = 2.66 \text{ inches}$$
$$\text{Height} = \frac{480}{240} = 2 \text{ inches}$$
$$\text{Size} = 2.66 \times 2 \text{ inches}$$

**Example 3: Image Resolution**
> **Question:** Compute the resolution (ppi) of a $2 \times 2$ inch image that has $512 \times 512$ pixels.

**Solution:**
$$x\text{-resolution} = \frac{512}{2} = 256 \text{ ppi}$$
$$y\text{-resolution} = \frac{512}{2} = 256 \text{ ppi}$$
$$\text{Resolution} = 256 \times 256 \text{ ppi}$$

**Example 4: Aspect Ratio Calculation**
> **Question:** If an image has a height of $2$ inches and an aspect ratio ($\frac{w}{h}$) of $1.5$, what is its width?

**Solution:**
$$\frac{w}{h} = 1.5$$
$$\frac{w}{2} = 1.5$$
$$w = 3 \text{ inches}$$
