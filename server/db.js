var path = require('path'),
    {app} = require('electron'),
    Datastore = require('nedb');

class DB {
    constructor(props) {
        this.db = new Datastore({ filename: path.join(app.getPath('userData'), 'proxy.db'), autoload: true });
    }
    isBe(obj) {
        return new Promise((resolve) => {
            this.db.count(obj, (err, count) => {
                resolve(count);
            })
        })
    }
    findAll(domain) {
        return new Promise((resolve) => {
            this.db.find({ name: domain }, (err, res) => {
                if (res.length) {
                    resolve(res);
                } else {
                    resolve([]);
                }
            })
        })
    }
    insert(newData) {
        return new Promise((resolve) => {
            this.db.insert(newData, (err, newDoc) => {
                resolve(newDoc);
            });
        })
    }
    remove(_id) {
        return new Promise((resolve) => {
            this.db.remove({
                _id: _id
            }, { multi: true }, (err, num) => {
                resolve(num);
            })
        })
    }
    updateById(_id, newData) {
        return new Promise((resolve) => {
            this.db.update({
                _id: _id
            }, newData, { multi: true, upsert: true }, (err, num) => {
                resolve(num)
            })
        })
    }
}

module.exports = DB;