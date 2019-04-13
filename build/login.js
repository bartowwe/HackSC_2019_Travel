window.snapKitInit = function() {
  var loginButtonIconId = "my-login-button-target";
  // Mount Login Button
  snap.loginkit.mountButton(loginButtonIconId, {
    clientId: "b05d25df-3fea-49f3-b6a2-d1af002ce3dc",
    redirectURI: "http://localhost:3000/voted",
    scopeList: ["user.display_name", "user.bitmoji.avatar"],
    handleResponseCallback: function() {
      snap.loginkit.fetchUserInfo().then(data => {
        localStorage.setItem("userSnap", data.data.me.bitmoji.avatar);
        console.log("User info:", data);
        window.location = "/voted";
      });
      snap.loginkit.fetchUserInfo().then(data => {
        localStorage.setItem("userName", data.data.me.displayName);
        console.log("User info:", data);
        window.location = "/voted";
      });
    }
  });
};

// Load the SDK asynchronously
(function(d, s, id) {
  var js,
    sjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://sdk.snapkit.com/js/v1/login.js";
  sjs.parentNode.insertBefore(js, sjs);
})(document, "script", "loginkit-sdk");
