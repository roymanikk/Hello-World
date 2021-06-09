const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    width: "500px",
    height: "500px",
    top: 25,
    right: 25,
    bottom: 25,
    left: 25,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#005000");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    width: "500px",
    height: "500px",
    top: 75,
    right: 25,
    bottom: 0,
    left: 200,

    mount: contactContent,
    onfocus: function () {
      this.setBackground("#005000");
    },

    onblur: function () {
      this.setBackground("#777");
    },
  });
});
