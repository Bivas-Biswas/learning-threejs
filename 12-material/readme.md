Normal 
- use for lighting, reflection, refraction, etc.

MatCaps 
- get an illusion that the objects are being illuminated
- Github - [source](https://github.com/nidorx/matcaps), also can create own using photoshop or blender

MeshDeptMaterial
- It will simply color the geometry in while if it's close to the ```near``` and in black if it's close to the far vlaue of ```camera```

MeshLambertMaterial
- It have new properties related to lights.
- It's performant but we can see strange patterns on the geometry

MeshStandardMaterial
- It uses physically based rendering priciples (PBR)
- Like MeshLambertMaterial and MeshPhongMaterial, it supports lights but with more realistic algorithm and better parameters like ```roughness``` and ```metalness```

### Sources
MatCaps 
- https://github.com/nidorx/matcaps

eviromentMap 
- https://polyhaven.com/
- [HDRI-to-CubeMap](https://matheowis.github.io/HDRI-to-CubeMap/)