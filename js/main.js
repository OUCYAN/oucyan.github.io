var main = main || {
     root: document.querySelector(':root')
};

main.setCssVariable = function (name, value) {
    this.root.style.setProperty(name, value);
}

main.getUsedLanguage = function () {
    return navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "";
}
