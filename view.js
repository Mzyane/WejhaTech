var panorama, viewer, container, changeImageBtn, textureLoader, texture1, texture2;

changeImageBtn = document.querySelector( '#change-image-button' );

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg' );
panorama.addEventListener( 'load', function(){
  texture1 = panorama.material.uniforms.tEquirect.value;
});

viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama );

// Texture to be changed
textureLoader = new THREE.TextureLoader();
textureLoader.crossOrigin = '*';

texture2 = textureLoader.load( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/field.jpg');

// Change image button behavior
function updateImage(){
  
  panorama.updateTexture( panorama.material.uniforms.tEquirect.value === texture1 ? texture2 : texture1 );
}

changeImageBtn.addEventListener( 'click', updateImage, false );