// function togglePopup(event, popupId, liveURL, codeURL) {
//     event.stopPropagation();
//     var popup = document.getElementById(popupId);
//     popup.dataset.liveURL = liveURL;
//     popup.dataset.codeURL = codeURL;
//     popup.style.display = popup.style.display === "block" ? "none" : "block";
// }

// function redirectTo(event, type, popupId) {
//     event.stopPropagation();
//     var popup = document.getElementById(popupId);
//     var liveDemoURL = popup.dataset.liveURL;
//     var codeRepoURL = popup.dataset.codeURL;
    
//     if (type === 'live') {
//         window.open(liveDemoURL, "_blank");
//     } else if (type === 'code') {
//         window.open(codeRepoURL, "_blank");
//     }
// }

// // Close popup when clicking outside
// document.addEventListener("click", function() {
//     document.querySelectorAll(".gallery-item").forEach(function(popup) {
//         popup.style.display = "none";
//     });
// });