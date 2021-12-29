## Topic :
- window resizing
``` js
window.addEventListener('resize', ()=>{
    // update the sizes
    sizes.width = window.innerWidth,
    sizes.height = window.innerHeight

    /** 
     * update camera
     * the the aspect ration also changes on viewport resizing
     * */ 
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // update renderer
    renderer.setSize(sizes.width, sizes.height);
    /**
     * pixelRatio
     * why here, for dual screen users maybe have different
     * pixelratio monitor
    */
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
```

- pixel ratio 
``` js
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
```
* more pixelRatio more render less performance.
good use minimum 2

- Handle FullScreen
``` js
window.addEventListener('dblclick', ()=>{

    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
    
    if(fullscreenElement){
        if(canvas.requestFullscreen){
            canvas.requestFullscreen(canvas)
        }
        else if(canvas.webkitRequestFullscreen){
            canvas.webkitRequestFullscreen()
        }
    }else{
        if(document.exitFullscreen){
            document.exitFullscreen()
        }
        else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen()
        }
    }
})
```
