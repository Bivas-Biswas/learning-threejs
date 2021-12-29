### some ui debug libary
- [dat.gui](https://github.com/dataarts/dat.gui)
- [control-panel]()
- [ControlKit]()
- [Guify]()
- [Oui](https://github.com/wearekuva/oui)

### dat.Gui
```js
const parameters = {
	color: 0xff0000,
	spin: ()=>{
		gsap.to(mesh.rotation, {duration: 1, y: mesh.rotation.y + 10})
	}
}
```
- **Range** - for numbers with minimum and maximum value
```js
gui
	.add(mesh.position, 'x')
	.min(-3)
	.max(3)
	.step(0.01)
	.name('elevationX')
```
- **Color** - for colors with various formats
```js
    gui
	.addColor(parameters, 'color')
	.onChange(()=>{
		material.color.set(parameters.color)
	})

```
- **Text** - for simple texts
- **Checkbox** - for booleans
```js
gui
	.add(mesh, 'visible')
gui
	.add(material, 'wireframe')
```
- **Select** - for a choice from a list of values
- **Button** - to trigger functions
```js
gui
	.add(parameters,'spin')
```
- **Folder** - to organize your panel if have too many elements

### Tips
- Press <kbd>H</kbd> to hide the panel
    or use
    ```js
    gui.hide()
    ```
-  we can drag and drop the panel to change its width
    ```js
    const gui = new dat.GUI({width: 400}) 
 
    ```
- add tweaks as progress and not wait until the end of the project

- [API documentation](https://github.com/dataarts/dat.gui/blob/master/API.md)
- [Example](https://jsfiddle.net/ikatyang/182ztwao/)