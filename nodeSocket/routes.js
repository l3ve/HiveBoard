var index = require('./controllers/index');

module.exports = function routes(app) {
    app.get('/', index.list);
    app.get('/add', index.add);
    app.get('/insert', index.insert)
    //   app.post('/clear', task.clear);
    //   app.post('/tasks/complete', task.complete);
    //   app.put('/tasks/:id', task.update);
    //   app.del('/tasks/:id', task.destroy);
};
