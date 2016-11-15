class Tips {
    show(tit, txt, icon) {
        let _options = {
            body: txt,
            icon: './views/css/img/akl.jpg'
        };
        new Notification(tit, _options);
    }
}

export default new Tips();