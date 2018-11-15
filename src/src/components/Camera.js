function Camera() {
  // 打开图片库
  navigator.camera.getPicture(onSuccess, onFail, {});

  function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
  }

  function onFail(message) {
    alert('Failed because: ' + message);
  }
}

export default Camera;