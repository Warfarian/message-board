const { Router } = require("express");

const indexRouter = Router();

const messages = [
    { text: "Hi there!", user: "Amando", added: new Date(),id: 0},
    { text: "Hello World!", user: "Charles", added: new Date(), id: 1 }
];

indexRouter.get('/', (req, res) => {
    res.render("index", { messages :messages });
});

indexRouter.post('/new', (req, res) => {
    const { message, user } = req.body;
    messages.push({ text: message, user, added: new Date() });
    res.redirect('/');
});

indexRouter.get('/messageDetails/:id', (req, res) => {
    const messageId = parseInt(req.params.id, 10);
    const message = messages[messageId]; 

    if (!message) {
        return res.status(404).send("Message not found");
    }

    res.render('messageDetails', { message });
});

module.exports = indexRouter;
