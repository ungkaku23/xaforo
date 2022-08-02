import React, { useEffect } from "react";
const ChatBox = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/62e943a454f06e12d88c8a35/1g9fj0f88";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
    Tawk_API.onLoad = function () {
      console.log("chat loaded");
      Tawk_API.setAttributes(
        {
          name: "Test Name",
          email: "email@email.com",
          hash: "hash value",
        },
        function (error) {}
      );
    };
  }, []);
  return (
    <>
  
    </>
  );
};
export default ChatBox;