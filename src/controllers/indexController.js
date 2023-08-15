module.exports = {
    index: (req, res) => {
        return res.render('index');
    },
    home: (req, res) => {
        return res.render('home')
    }
}