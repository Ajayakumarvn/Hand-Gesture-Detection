document.getElementById("loginBtn").addEventListener("click", showCamera);
document.getElementById("registerBtn").addEventListener("click", showCamera);

function showCamera() {
  document.getElementById("loginBtn").disabled = true;
  document.getElementById("registerBtn").disabled = true;
  document.getElementById("camera").classList.remove("hidden");

  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      document.getElementById("video").srcObject = stream;
      document.getElementById("video").play();
    })
    .catch((error) => {
      console.error("Error accessing camera:", error);
    });
}
