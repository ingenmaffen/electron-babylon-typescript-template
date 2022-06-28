import { Engine, Scene, FreeCamera, Vector3, HemisphericLight, Mesh } from "babylonjs";

const canvas: any = document.getElementById("renderCanvas");
const engine = new Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
let cube: Mesh;
let isCubeMovingUp: boolean = true;

const createScene = () => {
    const scene = new Scene(engine);
    const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
    camera.setTarget(new Vector3(0, 1.5, 0));

    const light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);
    cube = Mesh.CreateBox("cube", 2, scene, true, Mesh.FRONTSIDE);
    cube.position.y = 2;

    return scene;
};

const scene = createScene();

engine.runRenderLoop(() => {
    scene.render();

    cube.rotation.y -= Math.PI / 180;

    if (cube.position.y > 3) {
        isCubeMovingUp = false;
    } else if (cube.position.y < 1) {
        isCubeMovingUp = true;
    }

    if (isCubeMovingUp) {
        cube.position.y += 0.025;
    } else {
        cube.position.y -= 0.025;
    }
});

window.addEventListener("resize", () => {
    engine.resize();
});
