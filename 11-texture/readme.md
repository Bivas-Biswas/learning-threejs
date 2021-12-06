## Textures

- Color(or Albedo)
    - Most Simple one
    - Applied on the geometry
- Alpha
    - Grayscale image
    - White visible
    - black not
- Height (or Displacement)
    - Grayscale image
    - Move the Vertices to create some relief
    - need enough subdivision
- Normal
    - add details
    - doesn't need subdivision
    - the vertices won't move
    - lusre the light about the face orientation
    - better performancess than adding a height texture with a lot of subdivision
- Ambient Occlusion
    - Grayscale image
    - Add fake shadows in crevices
    - not physically  accurate
    - helps to create contrast and see details
- Metalness
    - grayscale image
    - white is metallic
    - black is non-metallic
    - mostly for reflection
- Roughness
    - grayscale image
    - In duo with the metalness
    - White is rough
    - Black is smooth
    - mostly for light dissipation

### PBR principles
Those textures (especially the metalness and the roughness) follow the PBR princples
- Physically Based Rendering
- Many technics that tend to follow real-life directions to get realistic results
- becoming the standard for realistic renders
- many software, engines, and libraries are using it

Article 
- [Basic Theory of Physically-Based Rendering](https://marmoset.co/posts/basic-theory-of-physically-based-rendering/)
- [Physically-Based Rendering, And You Can Too!](https://marmoset.co/posts/physically-based-rendering-and-you-can-too/)


### Topic
- [TextureLoader](https://threejs.org/docs/index.html?q=text#api/en/loaders/TextureLoader)
- [LoadingManager](https://threejs.org/docs/index.html?q=LoadingMa#api/en/loaders/managers/LoadingManager)
    - to mutualize the events. it's usefull if we want to know the global loading progress or be informed when everything is loaded.
- UV coordinates
