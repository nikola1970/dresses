const router = require("express").Router();
import {
    addCategory,
    editCategory,
    deleteCategory,
    addDress,
    editDress,
    deleteDress,
    login,
    register
} from "./controllers/admin.controller";

import {
    getCategories,
    getCategory,
    getDress
} from "./controllers/public.controller";


// Categories, dress routes:
router.route("/categories")
    .get(getCategories)
    .post(addCategory);

router.route("/categories/:category")
    .get(getCategory)
    .post(addDress)
    .put(editCategory)
    .delete(deleteCategory);

router.route("/categories/:category/:dress")
    .get(getDress)
    .put(editDress)
    .delete(deleteDress);



// user routes:
router.post("/admin/register", register);
router.post("/admin/login", login);




module.exports = router;