let sounds = [];
let buttons = [];
let currentSound = null;
let fft;

function preload() {
    soundButtons.forEach((btn, i) => {
        sounds[i] = loadSound(btn.file);
    });
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    fft = new p5.FFT();
    
    const buttonWidth = 100;
    const buttonHeight = 60;
    const padding = 10;
    const rightMargin = 20;
    
    const columns = 2;
    const rows = ceil(soundButtons.length / columns);
    
    const startX = width - rightMargin - buttonWidth;
    const startY = padding;
    
    soundButtons.forEach((btn, i) => {
        const col = floor(i / rows);
        const row = i % rows;
        
        const x = startX - col * (buttonWidth + padding);
        const y = startY + row * (buttonHeight + padding);
        
        console.log('Creating button:', {
            text: btn.text,
            background: btn.background
        });
        
        buttons.push(new SoundButton(
            x, y, 
            buttonWidth, buttonHeight, 
            btn.text, 
            sounds[i], 
            btn.colors, 
            btn.vizTypes,
            btn.background
        ));
    });
}

function draw() {
  // Clear the background first
  background("#02040A");
  
  // Find which button is currently playing
  let activeButton = buttons.find(btn => btn.isPlaying);
  
  if (activeButton) {
    console.log('Active button:', {
      text: activeButton.text,
      isPlaying: activeButton.isPlaying,
      background: activeButton.background,
      colors: activeButton.colors
    });
    
    if (activeButton.background) {
      drawGradientBackground(activeButton.background);
    } else {
      console.log('No background data for button:', activeButton.text);
    }
  }
  
  // Draw visualization if sound is playing
  if (currentSound && currentSound.isPlaying()) {
    drawVisualization();
  }
  
  // Draw all buttons
  buttons.forEach(btn => btn.draw());
}

class SoundButton {
  constructor(x, y, width, height, text, sound, colors, vizTypes, background) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.sound = sound;
    this.colors = colors;
    this.vizTypes = vizTypes;
    this.background = background;
    this.isPlaying = false;
    this.isHovered = false;
  }
  
  draw() {
    push();
    if (this.isPlaying) {
      fill(this.colors.primary);
    } else if (this.isHovered) {
      fill("#151B23");
    } else {
      fill("#0E1117");
    }
    noStroke();

    rect(this.x, this.y, this.width, this.height, 5);
    
    fill("#fafafa");
    textAlign(CENTER, CENTER);
    textSize(12);
    
    let innerPadding = 10;
    let centerY = this.y + (this.height / 2);
    text(this.text, this.x + innerPadding, centerY, 
         this.width - (innerPadding * 2));
    pop();
  }
  
  clicked(mx, my) {
    if (mx > this.x && mx < this.x + this.width &&
        my > this.y && my < this.y + this.height) {
      if (this.isPlaying) {
        this.sound.stop();
        this.isPlaying = false;
        currentSound = null;
      } else {
        // Stop any currently playing sound
        if (currentSound) {
          buttons.forEach(btn => {
            if (btn.isPlaying) {
              btn.sound.stop();
              btn.isPlaying = false;
            }
          });
        }
        this.sound.play();
        this.isPlaying = true;
        currentSound = this.sound;
      }
    }
  }
  
  checkHover(mx, my) {
    this.isHovered = (mx > this.x && mx < this.x + this.width &&
                      my > this.y && my < this.y + this.height);
  }
}

function mousePressed() {
  buttons.forEach(btn => btn.clicked(mouseX, mouseY));
}

function mouseMoved() {
  buttons.forEach(btn => btn.checkHover(mouseX, mouseY));
}

function drawVisualization() {
  let spectrum = fft.analyze();
  let waveform = fft.waveform();
  
  let activeButton = buttons.find(btn => btn.isPlaying);
  if (!activeButton) return;

  activeButton.vizTypes.forEach(vizType => {
    switch(vizType) {
      case "waves":
        drawWaves(waveform, activeButton.colors);
        break;
      case "circles":
        drawCircles(spectrum, activeButton.colors);
        break;
      case "symmetry":
        drawSymmetry(spectrum, activeButton.colors);
        break;
      case "bars":
        drawBars(spectrum, activeButton.colors);
        break;
      case "spiral":
        drawSpiral(spectrum, activeButton.colors);
        break;
      case "particles":
        drawParticles(spectrum, activeButton.colors);
        break;
      case "terrain":
        drawTerrain(waveform, activeButton.colors);
        break;
    }
  });
}

function drawWaves(waveform, colors) {
  push();
  noFill();
  strokeWeight(2);
  stroke(colors.primary);
  
  beginShape();
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, height/2 - 100, height/2 + 100);
    vertex(x, y);
  }
  endShape();
  pop();
}

function drawCircles(spectrum, colors) {
  push();
  noFill();
  stroke(colors.primary);
  strokeWeight(2);
  
  for (let i = 0; i < 8; i++) {
    let diameter = map(spectrum[i * 10], 0, 255, 50, height);
    circle(width/2, height/2, diameter);
  }
  pop();
}

function drawSymmetry(spectrum, colors) {
  push();
  translate(width/2, height/2);
  stroke(colors.primary);
  noFill();
  
  for (let i = 0; i < 8; i++) {
    rotate(PI/4);
    beginShape();
    for (let j = 0; j < spectrum.length/8; j++) {
      let r = map(spectrum[j], 0, 255, 20, 100);
      let x = r * cos(j * 0.02);
      let y = r * sin(j * 0.02);
      vertex(x, y);
    }
    endShape();
  }
  pop();
}

function drawBars(spectrum, colors) {
  push();
  const barWidth = width / 64;
  const minHeight = 50;
  
  // Create gradient effect between primary and secondary colors
  for (let i = 0; i < 64; i++) {
    const x = map(i, 0, 64, 0, width);
    const h = map(spectrum[i], 0, 255, minHeight, height/2);
    const inter = map(i, 0, 64, 0, 1);
    const c = lerpColor(color(colors.primary), color(colors.secondary), inter);
    
    fill(c);
    noStroke();
    rect(x, height - h, barWidth, h);
    // Mirror effect
    rect(x, 0, barWidth, h);
  }
  pop();
}

function drawSpiral(spectrum, colors) {
  push();
  translate(width/2, height/2);
  stroke(colors.primary);
  noFill();
  
  let bass = fft.getEnergy("bass");
  let treble = fft.getEnergy("treble");
  
  beginShape();
  for (let i = 0; i < 180; i++) {
    let angle = map(i, 0, 180, 0, TWO_PI * 2);
    let r = map(spectrum[i % spectrum.length], 0, 255, 50, 250);
    // Modify radius based on bass and treble
    r *= map(bass, 0, 255, 0.5, 1.5);
    r *= map(treble, 0, 255, 0.8, 1.2);
    
    let x = r * cos(angle);
    let y = r * sin(angle);
    vertex(x, y);
  }
  endShape();
  pop();
}

function drawParticles(spectrum, colors) {
  push();
  const particleCount = 100;
  const centerX = width/2;
  const centerY = height/2;
  
  let energy = fft.getEnergy("mid");
  
  for (let i = 0; i < particleCount; i++) {
    let angle = map(i, 0, particleCount, 0, TWO_PI);
    let radius = map(energy, 0, 255, 50, 200);
    
    // Add some variation based on spectrum
    radius += map(spectrum[i % spectrum.length], 0, 255, -20, 20);
    
    let x = centerX + radius * cos(angle);
    let y = centerY + radius * sin(angle);
    
    // Interpolate between primary and secondary colors
    let inter = map(sin(frameCount * 0.05 + i * 0.1), -1, 1, 0, 1);
    let c = lerpColor(color(colors.primary), color(colors.secondary), inter);
    
    fill(c);
    noStroke();
    circle(x, y, map(spectrum[i % spectrum.length], 0, 255, 2, 8));
  }
  pop();
}

function drawTerrain(waveform, colors) {
  push();
  stroke(colors.primary);
  noFill();
  
  let rows = 10;
  let rowHeight = height / (rows + 1);
  
  for (let j = 0; j < rows; j++) {
    beginShape();
    for (let i = 0; i < waveform.length; i++) {
      if (i % 4 === 0) { // Sample every 4th point for performance
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, -50, 50);
        // Add perspective effect
        y *= map(j, 0, rows, 1, 0.1);
        vertex(x, rowHeight * (j + 1) + y);
      }
    }
    endShape();
  }
  pop();
}

function drawGradientBackground(colors) {
  push();
  background("#02040A"); // Ensure clean background
  noStroke();
  
  // Add console log to verify colors being used
  console.log('Drawing gradient with colors:', colors);
  
  // Reduce the number of steps in the gradient
  const steps = 20; // Instead of drawing every 2 pixels
  const opacity = 0.15;
  //blendMode(ADD);
  
  // Draw multiple radial gradients with different positions and colors
  drawRadialGradient(0.27, 0.37, colors.color1, steps, opacity);
  drawRadialGradient(0.97, 0.21, colors.color2, steps, opacity);
  drawRadialGradient(0.52, 0.99, colors.color3, steps, opacity);
  drawRadialGradient(0.10, 0.29, colors.color4, steps, opacity);
  drawRadialGradient(0.97, 0.96, colors.color5, steps, opacity);
  drawRadialGradient(0.33, 0.50, colors.color6, steps, opacity);
  drawRadialGradient(0.79, 0.53, colors.color7, steps, opacity);
  
  pop();
}

function drawRadialGradient(xPos, yPos, colorStr, steps, opacity) {
  let x = width * xPos;
  let y = height * yPos;
  let maxSize = width * 0.8;
  let stepSize = maxSize / steps;
  
  // Add console log to verify each gradient color
  console.log('Drawing radial gradient with color:', colorStr);
  
  // Draw fewer, larger circles
  for (let r = maxSize; r > 0; r -= stepSize) {
    let inter = map(r, 0, maxSize, 1, 0);
    let c = color(colorStr);
    c.setAlpha(inter * 255 * opacity);
    fill(c);
    circle(x, y, r * 2);
  }
}

function drawNoiseTexture() {
  // Simple noise overlay
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let noiseVal = noise(x * 0.01, y * 0.01, frameCount * 0.001);
      set(x, y, color(255, noiseVal * 15));  // Adjust opacity as needed
    }
  }
  updatePixels();
}
