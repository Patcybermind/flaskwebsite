// Importing THREE from npm
import * as THREE from 'https://cdn.skypack.dev/three@0.132.2'
import * as d from 'https://cdnjs.cloudflare.com/ajax/libs/decimal.js/10.4.0/decimal.js' // decimal.js

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

// SETUP
const startRotationInDegrees = 90;

camera.position.z = 0;
camera.rotation.x = degreesToRadians(startRotationInDegrees);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// HELPER
// Parameters: size of the grid, number of divisions, color of grid lines, color of the central lines
const gridHelper = new THREE.GridHelper(10, 10, 0x0000ff, 0x808080);
scene.add(gridHelper)


function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}


function addStar() {
    const star = new THREE.Mesh((new THREE.SphereGeometry(0.25, 24, 24)), (new THREE.MeshBasicMaterial({color: 0xffffff})));
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100)); // how spread they are
    star.position.set(x, y, z);
    scene.add(star);
}
Array(200).fill().forEach(addStar); // you can change the amount of stars



function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    camera.position.y = t * 0.01

    console.log(t);

    const start = -2500;
    const end = -4000;
    if ( t >= start ) {
        // go from camera.rotation.x = Math.PI / 2; to 0
        let rateOfRotationInDegrees = startRotationInDegrees / 1500; //end - start
        console.log('rate of rotation:', rateOfRotationInDegrees)
        let step = t - start;
        console.log('step:', step)

        camera.rotation.x = degreesToRadians(rateOfRotationInDegrees * step);

        const rotationXDegrees = radiansToDegrees(camera.rotation.x);

        console.log("Camera rotation in degrees - X:", rotationXDegrees);

    }
    

}

document.body.onscroll = moveCamera;

function animate() {
    requestAnimationFrame( animate );
    
    renderer.render(scene, camera);


    
}

animate();