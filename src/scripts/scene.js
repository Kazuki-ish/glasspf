// Export Sceneをexportしてダウンロードされたscene.jsonを読み込む
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(0xaaaaaa));
document.getElementById("WebGL-output").appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

const loader = new THREE.ObjectLoader();
console.log(loader);
loader.load('scene.json', (obj: THREE.Object3D) => {
  const scene = obj as THREE.Scene;
  const render = () => {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  };
  render();
});