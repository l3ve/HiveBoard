class Tips {
    show(tit, txt, tag,icon) {
        let _options = {
            body: txt,
            tag: tag || ''
            // icon: icon || './views/css/img/akl.jpg'
        };
        // new Notification(tit, _options);
    }
}

export default new Tips();