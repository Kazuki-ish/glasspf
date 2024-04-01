// @ts-nocheck
import p5 from "p5";

const colors = ["#FF91F3", "#86DEFF", "#FFDDA7"];

let sketch = function (p) {
  let dots = [];
  let numOfDots = 16;

  p.setup = function () {    
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.rectMode(p.CENTER);
    p.noStroke();

    p.windowWidth < 768 ? numOfDots = 6 : {};
    for (let i = 0; i < numOfDots; i++) {
      dots.push(new Dot(p.random(p.width), p.random(p.height)));
    }
  };

  p.draw = function () {
    p.clear();

    // Draw and update dots
    for (let dot of dots) {
      dot.update();
      dot.display();
    }
  };
  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  class Dot {
    constructor(x, y) {
      this.pos = p.createVector(x, y);
      this.vel = p.createVector(p.random(-2, 2), p.random(-2, 2));
      this.size = 30;
      this.color = colors[p.floor(p.random(colors.length))];
    }

    update() {
      this.pos.add(this.vel);
      if (this.pos.x > p.width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = p.width;
      if (this.pos.y > p.height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = p.height;
    }

    display() {
      p.fill(this.color);
      for (let i = this.size; i > 0; i -= 2) {
        p.ellipse(this.pos.x, this.pos.y, i, i);
      }
    }
  }
  
};

new p5(sketch, "node__1");

// const numSlices = 30; // スライスする数
// const numSmallSpheres = 30; // 輪郭に並べる小さな球体の数
// const smallSphereRadius = 3; // 小さな球体の半径

// let bigSphereRadius = 250; // 大きな球体の半径
// let rotateSpeed;

// var sphere = function (p) {
//   let chosenColors = [];

//   p.setup = function () {
//     p.createCanvas(980, 980, p.WEBGL);

//     for (let t = 10; t <= 50; t++) {
//       rotateSpeed = 0.001;
//       setTimeout(() => {
//         setSpeed(rotateSpeed + 0.0001);
//       }, t * 100);
//     }

//     // 初回描画時に色を決定
//     for (let i = 0; i <= numSlices; i++) {
//       chosenColors[i] = [];
//       const currentSmallSpheres =
//         i === 0 || i === numSlices
//           ? 3
//           : p.floor(
//               p.map(
//                 bigSphereRadius * p.cos(p.map(i, 0, numSlices, 0, p.PI)),
//                 0,
//                 bigSphereRadius,
//                 numSmallSpheres,
//                 3
//               )
//             );

//       for (let j = 0; j < currentSmallSpheres; j++) {
//         chosenColors[i][j] = colors[p.floor(p.random(colors.length))];
//       }
//     }
//   };

//   p.draw = function () {
//     p.clear();
//     p.noStroke();
//     p.rotateY(p.millis() * rotateSpeed);

//     for (let i = 0; i <= numSlices; i++) {
//       const angle1 = p.map(i, 0, numSlices, 0, p.PI);

//       const y1 = bigSphereRadius * p.cos(angle1);
//       const r1 = bigSphereRadius * p.sin(angle1);
//       const currentSmallSpheres =
//         i === 0 || i === numSlices
//           ? 3
//           : p.floor(p.map(p.abs(y1), 0, bigSphereRadius, numSmallSpheres, 3));

//       for (let j = 0; j < currentSmallSpheres; j++) {
//         const smallSphereAngle = p.map(j, 0, currentSmallSpheres, 0, p.TWO_PI);
//         const x1 = r1 * p.cos(smallSphereAngle);
//         const z1 = r1 * p.sin(smallSphereAngle);

//         p.push();
//         p.translate(x1, y1, z1);
//         p.fill(chosenColors[i][j]);
//         p.sphere(smallSphereRadius);
//         p.pop();
//       }
//     }
//   };
// };

// new p5(sphere, "node__1");

// let step = 0;

// // ページを開いたときのアニメーション
// function setSpeed(speed) {
//   rotateSpeed = speed;
// }

// function easeOutCirc(x) {
//   return Math.sqrt(1 - Math.pow(x - 1, 2));
// }

//花びらてすと

// let torusVertices = [];
// const torusR = 200;
// const tubeR = 50;
// const segments = 24;

// let flower = function (p) {
//   p.setup = function () {
//     p.createCanvas(800, 800, p.WEBGL);
//     calculateTorusVertices();
//   };

//   p.draw = function () {
//     p.background(220);
//     p.rotateX(p.millis() * 0.0005);
//     p.rotateY(p.millis() * 0.0005);

//     drawTorus();
//   };

//   function calculateTorusVertices() {
//     for (let i = 0; i < segments; i++) {
//       let theta = p.map(i, 0, segments, 0, p.TWO_PI);
//       for (let j = 0; j < segments; j++) {
//         let phi = p.map(j, 0, segments, 0, p.TWO_PI);
//         let x = (torusR + tubeR * p.cos(phi)) * p.cos(theta);
//         let y = (torusR + tubeR * p.cos(phi)) * p.sin(theta);
//         let z = tubeR * p.sin(phi);
//         torusVertices.push(p.createVector(x, y, z));
//       }
//     }
//   }

//   function drawTorus() {
//     for (let i = 0; i < torusVertices.length - segments; i++) {
//       let foldAmount =
//         p.sin(p.millis() * 0.001 + torusVertices[i].y * 0.01) * 50;
//       let v1 = torusVertices[i].copy();
//       let v2 = torusVertices[i + segments].copy();

//       v1.z += foldAmount;
//       v2.z += foldAmount;

//       p.beginShape(p.LINES);
//       p.vertex(v1.x, v1.y, v1.z);
//       p.vertex(v2.x, v2.y, v2.z);
//       p.endShape();
//     }
//   }
// };

// new p5(flower, "node__1");
