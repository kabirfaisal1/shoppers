//DECLARATIONS: router, model object ------------
const router = require('express').Router();
const { User, Search } = require('../../models');

//SEARCH ROUTES: /api/searches ======================================
//get all searches: /api/searches/
router.get('/', (req, res) =>{
    Search.findAll({
        attributes: ['id', 'product_name', 'user_id'],
        order: [['created_at', 'DESC']],
        include: {
            model: User,
            attributes: ['username']
        }
    })
        .then(dbData => res.json(dbData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//get search by id: /api/searches/:id
router.get('/:id', (req, res) => {
    Search.findOne({
        where: { id: req.params.id },
        attributes: ['id', 'product_name', 'user_id'],
        order: [['created_at', 'DESC']],
        include: {
            model: User,
            attributes: ['username']
        }
    })
        .then(dbData => {
            if (!dbData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//create new search: /api/searches/
router.post('/', (req, res) => {
    if (req.session.user_id) {
        console.log(req.session.user_id);
        console.log(req.body.product_name);
        Search.create({
            product_name: req.body.product_name,
            user_id: req.session.user_id
        })
            .then(dbData => res.json(dbData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    } else {
        res.json({ message: 'Log in to save search' });
        return;
    }
});

//delete search by id: /api/searches/:id
router.delete('/:id', (req, res) => {
    Search.destroy({
        where: { id: req.params.id }
    })
    .then(dbData => {
        if (!dbData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//EXPORT ROUTER ----------------
module.exports = router;