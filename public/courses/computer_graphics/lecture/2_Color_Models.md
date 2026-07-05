# Color Models

## 1. RGB (Additive Color Model)
The RGB color model is an additive model where Red, Green, and Blue light are added together in various ways to reproduce a broad array of colors.
- **R** $\rightarrow$ 8-bit $\rightarrow$ 0 to 255
- **G** $\rightarrow$ 8-bit $\rightarrow$ 0 to 255
- **B** $\rightarrow$ 8-bit $\rightarrow$ 0 to 255

The total number of possible colors in a standard 24-bit RGB image is:
$$2^{24} = 16,777,216 \text{ colors}$$

## 2. CMY / CMYK (Subtractive Color Model)
The CMY color model is a subtractive model used in color printing, where Cyan, Magenta, and Yellow pigments are used to subtract colors from white light.

### Primary Color Mixtures
- **Yellow** = Red + Green $(1, 1, 0)$
- **Cyan** = Green + Blue $(0, 1, 1)$
- **Magenta** = Red + Blue $(1, 0, 1)$

### Relationship to RGB
Where $W$ represents White (the maximum value):
- $C = W - R$
- $M = W - G$
- $Y = W - B$

### CMY Color Space Cube
In the CMY color space, the origin $(0,0,0)$ represents White, and the maximum value $(1,1,1)$ represents Black.

<div align="center">
  <img src="/courses/computer_graphics/images/color_cube.svg" alt="CMY Color Space Cube" />
</div>

---

## Conversion from RGB to CMY

To convert a color from the RGB color space to the CMY color space (assuming normalized values between 0 and 1), we use the following matrix equation:

$$
\begin{pmatrix} C \\ M \\ Y \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} - \begin{pmatrix} R \\ G \\ B \end{pmatrix}
$$

### Example Problem
**Question:** Find the CMY coordinates of the color $(0.2, 0.1, 0.5)$ in RGB.

**Solution:**
Using the conversion formula:
$$
\begin{pmatrix} C \\ M \\ Y \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} - \begin{pmatrix} 0.2 \\ 0.1 \\ 0.5 \end{pmatrix}
$$

$$
\begin{pmatrix} C \\ M \\ Y \end{pmatrix} = \begin{pmatrix} 0.8 \\ 0.9 \\ 0.5 \end{pmatrix}
$$
The CMY coordinates are $(0.8, 0.9, 0.5)$.
