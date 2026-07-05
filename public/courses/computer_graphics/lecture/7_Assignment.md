# Computer Graphics Assignment Topics

## 1. Peripheral CRT (Cathode Ray Tube)

A CRT monitor is one of the oldest forms of display output. It works by shooting a beam of electrons at high speed toward a screen coated with a special glowing material. The screen lights up wherever the beam hits, and by controlling where and how strongly the beam hits, the monitor builds up a visible image.

The word "peripheral" means it is an external device connected to the computer — it receives video signals from the computer and converts them into a visible picture on the screen.

<div align="center">
  <img src="/courses/computer_graphics/images/crt_diagram.svg" alt="Peripheral CRT Diagram" />
</div>

### Parts of a CRT and What They Do

**a) Cathode and Heater**
The cathode is a metal element inside the tube. A heater coil warms it up. When the cathode gets hot enough, it releases a cloud of free electrons — this is the starting point of the entire image-making process.

**b) Control Grid**
After the electrons are released, they pass through the control grid. By changing the electric charge on this grid, the system can let more or fewer electrons through — this is what controls how bright or dim each spot on the screen appears.

**c) Focusing Anode**
A focused beam makes sharp images; a spread-out beam makes blurry ones. The focusing anode uses electric fields to squeeze the wide cloud of electrons into a tight, narrow beam before it reaches the screen.

**d) Deflection Plates**
There are two sets — one for horizontal movement and one for vertical. By changing the voltage across these plates, the beam can be aimed at any point on the screen with precision.

**e) Phosphor Screen**
The inside face of the screen is painted with phosphor — a chemical that gives off light when struck by electrons. Different phosphor compounds emit different colors. The beam sweeps across this screen rapidly to paint the entire image.

**f) Glass Envelope (Vacuum Tube)**
The whole structure is sealed inside a glass tube with all air removed. Without the vacuum, air molecules would collide with the electrons and scatter them before they reach the screen, making imaging impossible.

### Image Formation Process

1. The heater warms the cathode, triggering thermionic emission of electrons
2. The control grid filters the electron flow to set brightness
3. Anodes accelerate the electrons to high speed
4. The focusing system concentrates them into a fine point
5. Deflection plates aim the beam at the target pixel location
6. Electrons strike the phosphor → light is emitted at that point
7. The beam sweeps thousands of locations per second to build the full image

---

## 2. LED (Light Emitting Diode)

An LED is a small electronic component that produces light using electricity — but unlike a light bulb, it has no filament to burn out and generates very little heat. It is built from semiconductor materials joined together to form a structure called a p-n junction.

<div align="center">
  <img src="/courses/computer_graphics/images/led_diagram.svg" alt="LED Diagram" />
</div>

### Structure

An LED is made of two layers of semiconductor material placed in contact with each other:

- **P-type layer** — has an excess of "holes" (missing electrons, treated as positive charges)
- **N-type layer** — has an excess of free electrons (negative charges)

Where these two layers meet is called the **junction**.

### Why an LED Emits Light

When no voltage is applied, the electrons and holes stay on their own sides and nothing happens. When a forward voltage is applied (positive to p-side, negative to n-side), the electrons are pushed from the n-side and holes from the p-side toward the junction.

At the junction, an electron falls into a hole — this is called **recombination**. The electron drops from a high-energy state to a low-energy state. The energy difference cannot just disappear — in semiconductor materials designed for LEDs, this energy is released as a **photon of light**.

The color of the light depends entirely on the size of this energy gap, which is determined by the materials used:

| Material | Emitted Color |
|---|---|
| Gallium Arsenide (GaAs) | Infrared / Red |
| Gallium Phosphide (GaP) | Green / Yellow |
| Indium Gallium Nitride (InGaN) | Blue / White |

### Key Characteristics

- Only conducts in one direction (forward bias)
- No warm-up time needed — lights instantly
- Very long lifespan compared to traditional bulbs
- Energy efficiency is much higher since minimal heat is wasted
- Brightness increases with forward current, but excessive current destroys the component

---

## 3. LCD (Liquid Crystal Display)

An LCD screen does not produce light on its own — it controls light that comes from a source behind it. The key ingredient is **liquid crystal**: a material that is neither fully solid nor fully liquid, and whose molecules can be reoriented by applying electricity.

<div align="center">
  <img src="/courses/computer_graphics/images/lcd_diagram.svg" alt="LCD Layers Diagram" />
</div>

### The Core Idea

Light has a property called **polarization** — it can vibrate in a specific direction. An LCD uses two polarizing filters set at 90° to each other. Normally, light blocked by one filter cannot pass through the other. Liquid crystals solve this by rotating the light's direction by 90° so it *can* pass through — and an electric field can switch this rotation off.

### Layers of an LCD Panel (back to front)

1. **Backlight unit** — fluorescent or LED light source providing constant illumination
2. **Diffuser** — spreads the backlight evenly across the panel
3. **Rear polarizer** — allows only vertically polarized light to pass
4. **Rear glass + ITO electrode** — supports the liquid crystal layer; ITO applies voltage
5. **Liquid crystal layer** — twists light by 90° when relaxed; untwists when voltage applied
6. **Front glass + ITO electrode** — second voltage terminal
7. **Color filter** — red, green, or blue subpixel filter for color images
8. **Front polarizer** — allows only horizontally polarized light through

### Pixel Behavior

**No voltage → Pixel is bright (light passes)**
Liquid crystals are twisted → vertical light rotates 90° → becomes horizontal → passes through front polarizer → bright pixel

**Voltage applied → Pixel is dark (light blocked)**
Liquid crystals straighten → light stays vertical → cannot pass horizontal front polarizer → dark pixel

Color images are made by combining three subpixels (red, green, blue) per pixel, each controlled independently.

### Advantages over CRT
- Flat and thin — no bulky glass tube needed
- No electron beam or high voltage
- Lower power consumption
- No flicker at normal refresh rates

---

## 4. Random Scan Display

A random scan display is a drawing system — it constructs images by tracing individual lines one by one, similar to how you would draw a diagram with a pen. The electron beam does not scan the full screen; it teleports directly to specific coordinates and draws only where needed.

<div align="center">
  <img src="/courses/computer_graphics/images/random_scan_diagram.svg" alt="Random Scan Diagram" />
</div>

This type of display is best suited for **line drawings, diagrams, schematics, and wireframe models** rather than solid filled images or photographs.

### Drawing Mechanism

Each image is stored not as pixels but as a **display list** — a program containing a set of vector drawing commands such as:

```
MOVE_TO (100, 200)
DRAW_TO (350, 200)
DRAW_TO (350, 450)
DRAW_TO (100, 450)
DRAW_TO (100, 200)
```

The system executes this list repeatedly at high speed (30 to 60 times per second) to keep the image visible and stable on screen.

### Execution Flow

1. **Display processor** reads the next command from the display list
2. The deflection system moves the beam to the start coordinates
3. Beam switches ON and moves to end coordinates, drawing a line
4. Beam switches OFF, jumps to next start point
5. Cycle repeats until the full list is done
6. List restarts immediately to refresh the image

### Strengths and Weaknesses

**Strengths:**
- Very high resolution for line drawings — no pixel staircase effect
- Only draws what exists — efficient for simple diagrams

**Weaknesses:**
- Cannot display filled areas or photographs well
- As more lines are added, the refresh rate drops and flickering increases
- Not suitable for complex real-world imagery

---

## 5. Raster Scan Display

A raster scan display treats the screen as a **fixed grid of pixels** and scans every single pixel in order, from the top-left corner to the bottom-right corner, row by row — regardless of whether each pixel needs to be lit or not. This is the method used by virtually all modern monitors, televisions, and digital screens.

<div align="center">
  <img src="/courses/computer_graphics/images/raster_scan_diagram.svg" alt="Raster Scan Diagram" />
</div>

### The Scanning Grid

The screen is divided into horizontal lines called **scan lines**. Each scan line contains a fixed number of pixels. A full screen sweep (all rows top to bottom) is called one **frame**.

```
Pixel (0,0) ─────────────────── Pixel (W,0)
    ↓ scan direction
Pixel (0,1) ─────────────────── Pixel (W,1)
    ↓
   ...
Pixel (0,H) ─────────────────── Pixel (W,H)
```

### Scan Sequence in Detail

**Horizontal Scan:**
The beam moves left to right across a single row. The video controller reads the Frame Buffer and turns the beam on or off at each pixel position to set color and brightness.

**Horizontal Retrace (Flyback):**
At the end of a row, the beam must return to the left edge to start the next line. During this snap-back, the beam is blanked (turned off) so it does not draw unwanted lines.

**Vertical Retrace:**
After scanning the final row at the bottom, the beam blanks and returns all the way back to the top-left corner to begin the next frame.

### Frame Buffer

The Frame Buffer is a block of RAM that holds the color data for every pixel on screen. For a 1920×1080 screen at 24-bit color:

> Memory needed = 1920 × 1080 × 3 bytes = **≈ 6 MB per frame**

The video controller reads this buffer continuously and uses it to modulate the beam as it sweeps across the screen.

### Refresh Rate

The number of complete frames drawn per second is the **refresh rate** (measured in Hz). Higher refresh rates produce smoother motion. Below about 50 Hz, the human eye perceives flicker.

---

## 6. Lookup Table (LUT)

A Lookup Table (LUT) is a memory-saving technique used in raster scan systems. Instead of storing the full color of each pixel in the Frame Buffer, the system stores only a **small code number** (an index). The LUT is a separate table that converts each code number into an actual color.

<div align="center">
  <img src="/courses/computer_graphics/images/lut_diagram.svg" alt="Lookup Table (LUT) Diagram" />
</div>

### The Problem It Solves

Storing true 24-bit RGB color for every pixel demands enormous memory. For many applications (especially early computer graphics), the full 16 million color range is not needed simultaneously. A LUT allows the system to:

- Use a small Frame Buffer (e.g. 8 bits per pixel)
- Still display rich colors by mapping each index to a full-quality color entry

### How the LUT Fits In

```
Frame Buffer → [index value] → LUT → [RGB color] → DAC → Monitor
```

**Step 1:** For each pixel, the video controller reads its index from the Frame Buffer (e.g. index = 47)

**Step 2:** It uses that number to look up row 47 in the LUT

**Step 3:** Row 47 contains three values — R intensity, G intensity, B intensity

**Step 4:** These values go to the Digital-to-Analog Converter (DAC) which produces the actual voltage signals driving the screen

### LUT Size Formula

If the Frame Buffer uses **n bits** per pixel:
- Number of LUT entries = **2ⁿ**
- Each entry stores full RGB data (typically 8 bits per channel = 24 bits per entry)

### Numerical Example

| Parameter | Value |
|---|---|
| Frame Buffer depth | 8 bits per pixel |
| LUT size | 2⁸ = 256 entries |
| Bits per LUT entry | 24 bits (8R + 8G + 8B) |
| Colors on screen at once | 256 |
| Total palette to choose from | 2²⁴ = 16,777,216 |

A designer selects the best 256 colors for a particular image and loads them into the LUT. The Frame Buffer only needs to store an 8-bit index rather than 24 bits of color — reducing video memory requirement to **one third**.

### Practical Use

LUTs were essential in early graphics cards where video RAM was expensive and limited. They are still used today in:
- Color grading and film post-production (applying color corrections via a 3D LUT)
- Medical imaging (mapping intensity values to visible color ranges)
- Palette-based graphics in retro-style games
