// Importing THREE from npm
import * as THREE from 'https://cdn.skypack.dev/three@0.132.2'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

// SETUP
setCameraRotationInDegrees(90);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// HELPER
// Parameters: size of the grid, number of divisions, color of grid lines, color of the central lines
const gridHelper = new THREE.GridHelper(10, 10, 0x0000ff, 0x808080);
//scene.add(gridHelper)


function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
function setCameraRotationInDegrees(degrees) {
    const radians = degreesToRadians(degrees);
    camera.rotation.x = radians;
    console.log('degrees:', degrees, 'radians:', radians);
}

function addStar() {
    const star = new THREE.Mesh((new THREE.SphereGeometry(0.25, 24, 24)), (new THREE.MeshBasicMaterial({color: 0xffffff})));
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200)); // how spread they are
    star.position.set(x, y, z);
    scene.add(star);
}
Array(600).fill().forEach(addStar); // you can change the amount of stars



function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    camera.position.y = t * 0.01

    console.log(t);

    const start = -2000;
    const end = -4000;
    
    if ( t <= start && t >= end) {
        console.log('now');
        const step = Math.abs(t) - Math.abs(start);
        const difference = Math.abs(end) - Math.abs(start);
        setCameraRotationInDegrees(90 - step*(90/difference));
    }
    

}

document.body.onscroll = moveCamera;

function animate() {
    requestAnimationFrame( animate );
    
    renderer.render(scene, camera);


    
}

animate();
