(function () {

    var data =[
        {
            name:"Git-Plus",
            description:"Do git things without the terminal",
            author:"akonwi",
            url:"https://atom.io/packages/git-plus?_ga=2.45973988.1346350906.1584834289-1900517372.1580241598",
            downloads:2707115,
            stars:2627,
            price:"FREE",
            selector:"p1"
        },
        {
            name: "autoclose-html-plus",
            description: "Automates closing of HTML/XML type tags in Atom. Forked from autoclose-html",
            author: "binaryfunt",
            url: "https://atom.io/packages/autoclose-html-plus?_ga=2.12897783.1346350906.1584834289-1900517372.1580241598",
            downloads: 15255,
            stars: 2,
            price: "FREE",
            selector: "p2"
        },
        {
            name: "linter",
            description: "A Base Linter with Cow Powers",
            author: "steelbrain",
            url: "https://atom.io/packages/linter?_ga=2.5161587.1346350906.1584834289-1900517372.1580241598",
            downloads: 7348022,
            stars: 4626,
            price: "FREE",
            selector: "p3"
        }
    ];

    function package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = "Author: "+data.author;
        this.url = data.url;
        this.downloads = "Downloads: "+data.downloads;
        this.stars = "Stars: "+data.stars;
        this.price = data.price;
        this.selector = data.selector;

        this.getFormattedDownloads = function(){
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    }

    var getEl = function (id) {
        return document.getElementById(id);
    }

    var packageWriter = function(package) {
        var selector = package.selector,
        nameEl = getEl(selector +'-name'),
        descEl = getEl(selector +'-description'),
        authEl = getEl(selector +'-author'),
        downloadEl = getEl(selector +'-downloads'),
        starsEl = getEl(selector +'-stars');

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    }

    var gitPlus = new package(data[0]);
    packageWriter(gitPlus);

    var autocloseHTMLPlus = new package(data[1]);
    packageWriter(autocloseHTMLPlus);

    var linter = new package(data[2]);
    packageWriter(linter);

    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    dateEl = getEl("date");
    dateEl.textContent = getTodaysDate();


}());