class Tips {
    show(tit,txt) {
        let _options = {
            body:txt,
            icon:''
        }
        new Notification(tit,_options);
    }
}

export default new Tips();