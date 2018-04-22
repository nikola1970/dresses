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
    .get(getCategories)  // done
    .post(addCategory);  // done

router.route("/categories/:category")
    .get(getCategory) // done
    .post(addDress)   // done
    .put(editCategory)
    .delete(deleteCategory);

router.route("/categories/:category/:dress")
    .get(getDress) // done
    .put(editDress)
    .delete(deleteDress);

// user routes:
router.post("/admin/register", register); // done
router.post("/admin/login", login); // done


module.exports = router;