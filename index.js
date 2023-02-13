function startSlideShow(imagePaths, imageIndex, durationMs, imgElement) {
    imgElement.src = imagePaths[imageIndex]
    setTimeout(startSlideShow, durationMs, imagePaths, imageIndex, durationMs, (imgElement + 1) % imagePaths.length)
}